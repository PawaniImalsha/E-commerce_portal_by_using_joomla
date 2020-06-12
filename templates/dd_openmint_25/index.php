<?php
defined('_JEXEC') or die;

/**
 *-------------------------------------------
 * Szablon został wypalony w  Diablodesign.
 * www.diablodesign.eu
 * biuro@diablodesign.eu
 * tel.503527652
 *-------------------------------------------
 */
require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'functions.php';
$document = $this;
$templateUrl = $document->baseurl . '/templates/' . $document->template;
Artx::load("Artx_Page");
$view = $this->artx = new ArtxPage($this);
$view->componentWrapper();

JHtml::_('behavior.framework', true);
$app = JFactory::getApplication();
$tplparams	= $app->getTemplate(true)->params;
$iconf = htmlspecialchars($tplparams->get('iconf'));
$icont = htmlspecialchars($tplparams->get('icont'));
$icond = htmlspecialchars($tplparams->get('icond'));
$iconfl = htmlspecialchars($tplparams->get('iconfl'));
$icony = htmlspecialchars($tplparams->get('icony'));
$icons = htmlspecialchars($tplparams->get('icons'));
$allicon = htmlspecialchars($tplparams->get('allicon'));


?>
<!DOCTYPE html>
<html dir="ltr" lang="<?php echo $document->language; ?>">
<head>
    <jdoc:include type="head" />
        <!--scroling head-->
<script src="<?php echo $templateUrl; ?>/js/scroling.js"></script>
<script type="text/javascript">
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});
</script>
<!--end scroling-->
  <!--animacja-->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $templateUrl; ?>/js/s3Slider.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('#slider1').s3Slider({
            timeOut: <?php echo $this->params->get('time'); ?> 
        });
    });
</script>
   </script> <!--end animacja-->
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/system/css/system.css" />
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/system/css/general.css" />

    
    
    <meta name="viewport" content="initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no, width = device-width">

    <!--[if lt IE 9]><script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <link rel="stylesheet" href="<?php echo $templateUrl; ?>/css/template.css" media="screen">
    <!--[if lte IE 7]><link rel="stylesheet" href="<?php echo $templateUrl; ?>/css/template.ie7.css" media="screen" /><![endif]-->
    <link rel="stylesheet" href="<?php echo $templateUrl; ?>/css/template.responsive.css" media="all">

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <script>if ('undefined' != typeof jQuery) document._artxJQueryBackup = jQuery;</script>
    <script src="<?php echo $templateUrl; ?>/jquery.js"></script>
    <script>jQuery.noConflict();</script>

    <script src="<?php echo $templateUrl; ?>/script.js"></script>
    <?php $view->includeInlineScripts() ?>
    <script>if (document._artxJQueryBackup) jQuery = document._artxJQueryBackup;</script>
    <script src="<?php echo $templateUrl; ?>/script.responsive.js"></script>
</head>
<body>
<!--scroling-->
<div id="toTop">^<?php echo $this->params->get('scroll'); ?></div>
<!--koniec scroling-->
<div id="dd-main">
<header class="dd-header"><?php echo $view->position('position-30', 'dd-nostyle'); ?>


    <div class="dd-shapes">
<div class="dd-object611588441" data-left="100%"></div>
<div class="dd-logo" data-left="0%"><a href="index.php"><img src="<?php echo $this->params->get('logo'); ?>" alt="logo" width="377" height="120"></a>
</div>
<div class="dd-object160883011" data-left="0%"> <div id="slider1">
        <ul id="slider1Content">
            <li class="slider1Image">
                <a href=""><img src="<?php echo $this->params->get('foto1'); ?>" alt="1" /></a>
                <span class="right"><strong><?php echo $this->params->get('naglowek1'); ?></strong><br /><?php echo $this->params->get('text1'); ?></span></li>
            <li class="slider1Image">
                <a href=""><img src="<?php echo $this->params->get('foto2'); ?>" alt="2" /></a>
                <span class="right"><strong><?php echo $this->params->get('naglowek2'); ?></strong><br /><?php echo $this->params->get('text2'); ?></span></li>
            <li class="slider1Image">
                <img src="<?php echo $this->params->get('foto3'); ?>" alt="3" />
                <span class="right"><strong><?php echo $this->params->get('naglowek3'); ?></strong><br /><?php echo $this->params->get('text3'); ?></span></li>
            <li class="slider1Image">
                <img src="<?php echo $this->params->get('foto4'); ?>" alt="4" />
                <span class="right"><strong><?php echo $this->params->get('naglowek4'); ?></strong><br /><?php echo $this->params->get('text4'); ?></span></li>
            <li class="slider1Image">
                <img src="<?php echo $this->params->get('foto5'); ?>" alt="5" />
                <span class="right"><strong><?php echo $this->params->get('naglowek5'); ?></strong><br /><?php echo $this->params->get('text5'); ?></span></li>
            <div class="clear slider1Image"></div>
        </ul>
    </div></div>
<!--koniec animacja grafika-->
<div class="dd-banner" data-left="100%"><a href="<?php echo $this->params->get('lbaner'); ?>"><img src="<?php echo $this->params->get('baner'); ?>" alt="baner" width="600" height="77"></a></div>
<div class="dd-board" data-left="98.01%"></div>
<div class="dd-pin1" data-left="68.51%"></div>
<div class="dd-pin" data-left="99.33%"></div>
<div class="dd-textblock dd-object529477201" data-left="98.32%">
        <div class="dd-object529477201-text-container">
        <div class="dd-object529477201-text"></div>
    </div>
    
</div>
    </div>



<div class="dd-textblock dd-object567422185" data-left="99.04%">
    <form class="dd-search" name="Search" action="<?php echo $document->baseurl; ?>/index.php" method="post">
    <input type="text" value="" name="searchword">
        <input type="hidden" name="task" value="search">
<input type="hidden" name="option" value="com_search">
<input type="submit" value="" name="search" class="dd-search-button">
        </form>
</div>
<?php if ($view->containsModules('position-1', 'position-28', 'position-29')) : ?>
<nav class="dd-nav">
    
<?php if ($view->containsModules('position-28')) : ?>
<div class="dd-hmenu-extra1"><?php echo $view->position('position-28'); ?></div>
<?php endif; ?>
<?php if ($view->containsModules('position-29')) : ?>
<div class="dd-hmenu-extra2"><?php echo $view->position('position-29'); ?></div>
<?php endif; ?>
<?php echo $view->position('position-1'); ?>
 
    </nav>
<?php endif; ?>

                    
</header>
<div class="dd-sheet clearfix">
            <?php echo $view->position('position-15', 'dd-nostyle'); ?>
<?php echo $view->positions(array('position-16' => 33, 'position-17' => 33, 'position-18' => 34), 'dd-block'); ?>
<div class="dd-layout-wrapper">
                <div class="dd-content-layout">
                    <div class="dd-content-layout-row">
                        <?php if ($view->containsModules('position-7', 'position-4', 'position-5')) : ?>
<div class="dd-layout-cell dd-sidebar1">
<?php echo $view->position('position-7', 'dd-block'); ?>
<?php echo $view->position('position-4', 'dd-block'); ?>
<?php echo $view->position('position-5', 'dd-block'); ?>




                        </div>
<?php endif; ?>

                        <div class="dd-layout-cell dd-content">
<?php
  echo $view->position('position-19', 'dd-nostyle');
  if ($view->containsModules('position-2'))
    echo artxPost($view->position('position-2'));
  echo $view->positions(array('position-20' => 50, 'position-21' => 50), 'dd-article');
  echo $view->position('position-12', 'dd-nostyle');
  echo artxPost(array('content' => '<jdoc:include type="message" />', 'classes' => ' dd-messages'));
  echo '<jdoc:include type="component" />';
  echo $view->position('position-22', 'dd-nostyle');
  echo $view->positions(array('position-23' => 50, 'position-24' => 50), 'dd-article');
  echo $view->position('position-25', 'dd-nostyle');
?>



                        </div>
                        <?php if ($view->containsModules('position-6', 'position-8', 'position-3')) : ?>
<div class="dd-layout-cell dd-sidebar2">
<?php echo $view->position('position-6', 'dd-block'); ?>
<?php echo $view->position('position-8', 'dd-block'); ?>
<?php echo $view->position('position-3', 'dd-block'); ?>


                        </div>
<?php endif; ?>
                    </div>
                </div>
            </div>
<?php echo $view->positions(array('position-9' => 33, 'position-10' => 33, 'position-11' => 34), 'dd-block'); ?>
<?php echo $view->position('position-26', 'dd-nostyle'); ?>

<footer class="dd-footer">
<?php if ($view->containsModules('position-27')) : ?>
    <?php echo $view->position('position-27', 'dd-nostyle'); ?>
<?php else: ?>
<div class="dd-content-layout-br layout-item-0">
</div><div class="dd-content-layout-wrapper layout-item-1">
<div class="dd-content-layout">
    <div class="dd-content-layout-row">
    <div class="dd-layout-cell layout-item-2" style="width: 33%">
        <div style="position:relative;padding-left:0px;padding-right:0px"><span style="color: #E2341D;">Copyright © 2013.</span> <span style="font-weight: bold;"><?php echo $this->params->get('stopka'); ?></span> <span style="color: #E2341D;">Rights Reserved.</span></div>
    </div><div class="dd-layout-cell layout-item-3" style="width: 34%">
        <p><br></p>
    </div><div class="dd-layout-cell layout-item-4" style="width: 33%">
        <p style="text-align: right;">
         <?php if ($allicon == 1) { ?><?php if ($iconf == 1) { ?><a href="<?php echo $this->params->get('facebook'); ?>" target="_blank"><img width="31" height="31" alt="Facebook" src="<?php echo $document->baseurl ?>/templates/<?php echo $document->template; ?>/images/facebook_icon.png" class=""></a><?php } ?>
        
        <?php if ($icont == 1) { ?><a href="<?php echo $this->params->get('twitter'); ?>" target="_blank"><img width="31" height="31" alt="twitter" src="<?php echo $document->baseurl ?>/templates/<?php echo $document->template; ?>/images/twitter_icon.png" class=""></a><?php } ?>
        
        <?php if ($iconfl == 1) { ?><a href="<?php echo $this->params->get('flickr'); ?>" target="_blank"><img width="31" height="31" alt="flicker" src="<?php echo $document->baseurl ?>/templates/<?php echo $document->template; ?>/images/flickr_icon.png" class=""></a><?php } ?>
        
       <?php if ($icons == 1) { ?><a href="<?php echo $this->params->get('skype'); ?>" target="_blank"><img width="31" height="31" alt="skype" src="<?php echo $document->baseurl ?>/templates/<?php echo $document->template; ?>/images/skype_icon.png" class=""></a><?php } ?>
        
        <?php if ($icony == 1) { ?><a href="<?php echo $this->params->get('youtube'); ?>"><img width="31" height="31" alt="youtube" src="<?php echo $document->baseurl ?>/templates/<?php echo $document->template; ?>/images/youtube_icon.png" class=""></a><?php } ?>
        
       <?php if ($icond == 1) { ?> <a href="<?php echo $this->params->get('digg'); ?>" target="_blank"><img width="31" height="31" alt="digg" src="<?php echo $document->baseurl ?>/templates/<?php echo $document->template; ?>/images/digg_icon.png" class=""></a><br></p><?php } ?><?php } ?>
    </div>
    </div>
</div>
</div>

<?php endif; ?>
</footer>

    </div>
    <p class="dd-page-footer">
        <span id="dd-footnote-links">Designed by <a href="http://www.diablodesign.eu" target="_blank">www.diablodesign.eu</a>.</span>
    </p>
</div>



<?php echo $view->position('debug'); ?>
</body>
</html>