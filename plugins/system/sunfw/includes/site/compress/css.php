<?php
/**
 * @version    $Id$
 * @package    SUN Framework
 * @author     JoomlaShine Team <support@joomlashine.com>
 * @copyright  Copyright (C) 2012 JoomlaShine.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */

// No direct access to this file.
defined('_JEXEC') or die('Restricted access');

// Import necessary Joomla libraries
jimport('joomla.filesystem.folder');
jimport('joomla.filesystem.file');

/**
 * CSS compression class.
 *
 * @package     SUN Framework
 * @since       1.0.0
 */
abstract class SunFwSiteCompressCss
{

	/**
	 * Method to compress the specified stylesheet files.
	 *
	 * @param   array  $styleSheets  Array of stylesheets to compress.
	 *
	 * @return  array  Array of compressed files.
	 */
	public static function compress($styleSheets)
	{
		static $compressedFiles;

		// Get object for working with URI
		$uri = JUri::getInstance();

		// Generate link prefix if current scheme is HTTPS
		$prefix = '';

		if ($uri->getScheme() == 'https')
		{
			$prefix = $uri->toString(array(
				'scheme',
				'host',
				'port'
			));
		}

		// Initialize variables
		$groupIndex = 0;
		$groupType = 'screen';
		$groupFiles = array();
		$compress = array();

		// Sometime, stylesheet file need to be stored in the original location and file name
		$systemData = SunFwSite::getInstance()->system_data;

		$leaveAlone = preg_split('/[\r\n]+/', $systemData['compressionExclude']);

		// We already know that the file galleria.classic.css must be excluded
		$leaveAlone[] = 'galleria.classic.css';

		// Parse link tags
		foreach ($styleSheets as $key => $line)
		{
			// Set default media attribute
			$attributes['media'] = empty($line['media']) ? '' : strtolower($line['media']);
			$attributes['href'] = $key;

			// Add to result list if this is external file
			if (!( $isInternal = SunFwSiteCompressHelper::isInternal($attributes['href']) ) or strpos($attributes['href'], '//') === 0)
			{
				$compress[] = array(
					'href' => $attributes['href'],
					'media' => $attributes['media']
				);

				continue;
			}

			// Add to result list if this is dynamic generation content
			$questionPos = false;

			if (( $questionPos = strpos($attributes['href'], '?') ) !== false)
			{
				$isDynamic = ( substr($attributes['href'], $questionPos - 4, 4) == '.php' );
				$path = SunFwSiteCompressHelper::getFilePath(substr($attributes['href'], 0, $questionPos));

				// Check if this is a dynamic generation content
				if (!$isDynamic and $isInternal)
				{
					$isDynamic = !is_file($path);
				}

				if ($isDynamic)
				{
					$compress[] = array(
						'href' => $attributes['href'],
						'media' => $attributes['media']
					);

					continue;
				}
			}

			// Check if reserving stylesheet file name is required
			$stylesheetName = basename($questionPos !== false ? $path : $attributes['href']);

			if (in_array($stylesheetName, $leaveAlone))
			{
				$attributes['media'] .= '|reserve|' . $stylesheetName;
			}

			// Create new compression group when media attribute different with group type
			if ($attributes['media'] != $groupType)
			{
				// Add collected files to compress list
				if (isset($groupFiles[$groupIndex]) and !empty($groupFiles[$groupIndex]))
				{
					$compress[] = array(
						'files' => $groupFiles[$groupIndex],
						'media' => $groupType
					);
				}

				// Increase index number of the group
				$groupIndex++;
				$groupType = $attributes['media'];
			}

			// Initial group
			if (!isset($groupFiles[$groupIndex]))
			{
				$groupFiles[$groupIndex] = array();
			}

			$href = $attributes['href'];
			$queryStringIndex = strpos($href, '?');

			if ($queryStringIndex !== false)
			{
				$href = substr($href, 0, $queryStringIndex);
			}

			// Add file to the group
			$groupFiles[$groupIndex][] = preg_match('/^([^\|]*)\|reserve\|.+$/', $groupType) ? $attributes['href'] : $href;
		}

		// Add collected files to result list
		if (isset($groupFiles[$groupIndex]) and !empty($groupFiles[$groupIndex]))
		{
			$compress[] = array(
				'files' => $groupFiles[$groupIndex],
				'media' => $groupType
			);
		}

		// Initial compress result
		$compressResult = array();
		$fileCompressed = array();

		// Get template details
		$templateName = JFactory::getApplication()->getTemplate();

		// Generate path to cache directory
		$compressPath = SunFwSiteHelper::getCacheDirectory() . '/' . $templateName . '/';

		// Create directory if not exists
		if (!is_dir($compressPath))
		{
			JFolder::create($compressPath);
		}

		// Loop to each compress element to compress file
		$modifiedFlag = false;

		foreach ($compress as $group)
		{
			// Ignore compress when group is a external file
			if (isset($group['href']))
			{
				$ignoreCompressMedia = '';
				$link = '<link rel="stylesheet" href="' . $group['href'] . '" ';

				if (isset($group['media']) and !empty($group['media']))
				{
					$link .= 'media="' . $group['media'] . '" ';
					$ignoreCompressMedia = $group['media'];
				}

				$link .= '/>';

				$compressResult[] = $link;
				$fileCompressed[] = array(
					'media' => $ignoreCompressMedia,
					'file' => $group['href']
				);
				continue;
			}

			// Check if reserving stylesheet file name is required
			if (isset($group['media']) and preg_match('/^([^\|]*)\|reserve\|.+$/', $group['media'], $m))
			{
				$reservingStylesshetMedia = '';

				$link = '<link rel="stylesheet" href="' . $group['files'][0] . '" ';

				if (isset($m[1]) and !empty($m[1]))
				{
					$link .= 'media="' . $m[1] . '" ';
					$reservingStylesshetMedia = $m[1];
				}

				$link .= '/>';

				$compressResult[] = $link;
				$fileCompressed[] = array(
					'media' => $reservingStylesshetMedia,
					'file' => $group['files'][0]
				);
				continue;
			}

			// Generate compress file name
			$compressFile = md5(implode('', $group['files'])) . '.css';
			$lastModified = 0;

			// Check last modified time for each file in the group
			foreach ($group['files'] as $file)
			{
				$path = SunFwSiteCompressHelper::getFilePath($file);

				$lastModified = ( is_file($path) && @filemtime($path) > $lastModified ) ? @filemtime($path) : $lastModified;
			}

			if (@filemtime($compressPath . $compressFile) < $lastModified)
			{
				$modifiedFlag = true;
			}

			// Compress group when expired
			if (!is_file($compressPath . $compressFile) || $modifiedFlag)
			{
				// Preset compression buffer
				$buffer = '';

				// Preset remote file array
				$remoteFiles = array();

				// Preset some variables to hold compression status
				$processedFiles = array();
				$maxFileSize = 1024 * (int) $systemData['maxCompressionSize'];
				$currentSize = 0;

				// Read content of each file and write it to the cache file
				foreach ($group['files'] as $file)
				{
					$filePath = SunFwSiteCompressHelper::getFilePath($file);

					// Skip when cannot access to file
					if (!is_file($filePath) or !is_readable($filePath))
					{
						continue;
					}

					// Do compression
					$result = trim(self::combineFile($buffer, $filePath, $maxFileSize, $currentSize, $remoteFiles));

					if (empty($result))
					{
						// Store processed file
						$processedFiles[] = $filePath;
					}
					else
					{
						// Fix file size = 0 with $buffer ='' ;
						if ($buffer != '')
						{
							// Write buffer to cache file
							JFile::write($compressPath . $compressFile, $buffer);

							// Rename created cache file
							$newFileName = md5(implode('', $processedFiles)) . '.css';
							JFile::move($compressPath . $compressFile, $compressPath . $newFileName);

							// Save every compressed file associated with this page for maintenance later
							$compressedFiles[] = str_replace('\\', '/', $compressPath) . $newFileName;

							// Add compressed file to the remote file import list
							$remoteFiles[] = str_replace(str_replace('\\', '/', JPATH_ROOT), JUri::root(true),
								str_replace('\\', '/', $compressPath)) . $newFileName;
						}

						// Reset compression buffer
						$buffer = $result;

						// Reset compression status variables
						$currentSize = strlen($result);
						$processedFiles = array(
							$filePath
						);
					}
				}

				// Write buffer to cache file
				JFile::write($compressPath . $compressFile, $buffer);

				// Save every compressed file associated with this page for maintenance later
				$compressedFiles[] = str_replace('\\', '/', $compressPath) . $compressFile;

				if (!empty($remoteFiles))
				{
					for ($n = count($remoteFiles), $i = $n - 1; $i >= 0; $i--)
					{
						SunFwSiteCompressHelper::prependIntoFile("@import url({$remoteFiles[$i]});" . ( $i + 1 < $n ? "\n" : "\n\n" ),
							$compressPath . $compressFile);
					}
				}
			}

			// Add compressed file to the compress result list
			$compressUrl = str_replace(str_replace('\\', '/', JPATH_ROOT), JUri::root(true), str_replace('\\', '/', $compressPath)) .
				 $compressFile;

			$link = '<link rel="stylesheet" href="' . $prefix . $compressUrl . '" ';

			$mediaCompressedFile = '';
			if (isset($group['media']) and !empty($group['media']))
			{
				$link .= 'media="' . preg_replace('/\|reserve\|(.+)$/', '', $group['media']) . '" ';
				$mediaCompressedFile = preg_replace('/\|reserve\|(.+)$/', '', $group['media']);
			}

			$link .= '/>';

			$compressResult[] = $link;
			$fileCompressed[] = array(
				'media' => $mediaCompressedFile,
				'file' => $compressUrl
			);
		}

		// Verify if stylesheets associated with this page has been changed
		if (isset($compressedFiles))
		{

			$trackFile = $compressPath . 'tracking.php';
			$pageLink = JUri::current();
			$cleanUp = array();

			if (file_exists($trackFile))
			{

				if (!file_exists("{$trackFile}.lock"))
				{

					// Get tracking data
					include $trackFile;

					if (isset($tracking) && isset($tracking[$pageLink]) && isset($tracking[$pageLink]['css']))
					{
						foreach ($tracking[$pageLink]['css'] as $file)
						{
							if (!in_array($file, $compressedFiles))
							{
								// Store obsolete file to be removed
								$cleanUp[] = $file;
							}
						}

						// Remove obsolete file only if not used in another page
						foreach ($cleanUp as $file)
						{
							$removable = true;

							foreach ($tracking as $link => $assets)
							{
								if ($pageLink == $link)
								{
									continue;
								}

								if (@in_array($file, $assets['css']))
								{
									$removable = false;

									break;
								}
							}

							if ($removable && !$modifiedFlag)
							{
								JFile::delete($file);
							}
						}
					}
				}
			}
			else
			{
				// Clean all unmaintained compressed files
				if ($files = glob($compressPath . '*.css'))
				{
					foreach ($files as $file)
					{
						$file = str_replace('\\', '/', $file);

						if (!in_array($file, $compressedFiles))
						{
							JFile::delete($file);
						}
					}
				}
			}

			// Update tracking file if not locked
			if (!file_exists("{$trackFile}.lock"))
			{
				// Create lock file
				$content = 'Updating';

				JFile::write("{$trackFile}.lock", $content);

				// Preset tracking array
				if (!isset($tracking))
				{
					$tracking = array(
						$pageLink => array()
					);
				}

				$tracking[$pageLink]['css'] = $compressedFiles;

				// Update tracking data
				$content = "<?php\n\$tracking = json_decode('" . json_encode($tracking) . "', true);\n?>";

				// Update tracking file
				JFile::write($trackFile, $content);

				// Remove lock file
				JFile::delete("{$trackFile}.lock");
			}
		}

		return $fileCompressed;
	}

	/**
	 * Load content from a file and append into existing opened file
	 *
	 * @param   string   &$buffer             Compression buffer.
	 * @param   string   $sourcePath          Path to source file.
	 * @param   integer  $maxFileSize         Maximum allowed file size.
	 * @param   integer  &$currentFileSize    Current file size.
	 * @param   array    &$remoteFilesImport  Array of remotely imported file.
	 *
	 * @return  mixed  Compressed content if max file size is reached.
	 */
	protected static function combineFile(&$buffer, $sourcePath, $maxFileSize, &$currentFileSize, &$remoteFilesImport)
	{
		// Read source file
		$source = @file_get_contents($sourcePath);

		// Rewrite all relative URLs
		if (preg_match_all('/(@import\s+|[^:,;\}\r\n]*)([^,;\}\r\n]*)url\s*\(([^\)]+)\)([^,;\}\r\n]*[,;\}])/i', $source, $matches,
			PREG_SET_ORDER))
		{
			foreach ($matches as $match)
			{
				$match[3] = trim($match[3], '"\'');
				$fileUrl = SunFwSiteCompressHelper::getRelativeFilePath(dirname($sourcePath), $match[3]);

				if (trim($match[1]) != '@import')
				{
					$fileUrl = ltrim(str_replace('\\', '/', $fileUrl), '/');

					if (strpos($match[3], '://') === false && strpos($match[3], '//') !== 0 && $fileUrl != '')
					{
						$source = str_replace($match[0], $match[1] . $match[2] . 'url(/' . $fileUrl . ')' . $match[4], $source);
					}
				}
				elseif (!preg_match('#^https?://#', $match[3]))
				{
					// Get file path
					$filePath = getenv('DOCUMENT_ROOT') . $fileUrl;

					// Compress file being imported
					$imports[] = self::combineFile($buffer, $filePath, $maxFileSize, $currentFileSize, $remoteFilesImport);

					// Remove @import file inclusion for local file
					$source = str_replace($match[0], '', $source);
				}
				else
				{
					// Store @import file inclusion for remote file
					$remoteFilesImport[] = $match[3];
				}
			}
		}

		// Strip all while-space, tab, return and new-line characters
		$source = preg_replace('/[ \t\r\n]+/', ' ', $source);

		// Prepend path to source file
		$filePath = str_replace(str_replace('\\', '/', JPATH_ROOT), '', str_replace('\\', '/', $sourcePath));
		$source = "/* FILE: {$filePath} */\n" . trim($source);

		// Get length of processed content
		$length = strlen($source);

		// Update current file size
		$currentFileSize += $length;

		// Check if max file size is reached
		if ($length > $maxFileSize or $currentFileSize > $maxFileSize)
		{
			return ( isset($imports) ? implode($imports) : '' ) . $source;
		}

		// Append processed content to buffer
		$buffer .= ( empty($buffer) ? '' : "\n" ) . $source . "\n";

		return '';
	}
}
