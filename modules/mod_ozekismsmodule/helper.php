<?php
/**
 * @copyright	Copyright (c) 2016 Ozeki. All rights reserved.
 * @license		http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */

// no direct access
defined('_JEXEC') or die;

/**
 * Ozeki - Ozeki SMS Module Helper Class.
 *
 * @package		Joomla.Site
 * @subpakage	Ozeki.OzekiSMSModule
 */
 
class modOzekiSMSModuleHelper {
	var $params;
	
	function __construct($params) {
		$this->params = $params;
	}
	
	function ozekiSmsForm(){
		echo '
		<form method="post" action="">
			<div>Recipient:</div>
			<div><input type="text" name="oz_recipient" style="width:166px;"></div>
			<div>Message:</div>
			<div><textarea name="oz_message" style="width:166px;height:40px;"></textarea></div>
			<div style="text-align:right;"><input type="submit" name="oz_sendmessage" value="Send"></div>
		</form>';
	}
	
	function ozekiSendMessage($oz_recipient, $oz_message) {
		$oz_ip = $this->params->get('oz_ip');
		$oz_port = $this->params->get('oz_port');
		$oz_username = $this->params->get('oz_username');
		$oz_password = $this->params->get('oz_password');
		
		$oz_url = 'http://' . $oz_ip . ':' . $oz_port . '/api?action=sendmessage&username=' . $oz_username .'&password=' . $oz_password .'&recipient=' . $oz_recipient .'&messagetype=SMS:TEXT&messagedata=' . $oz_message;
		$result = @file_get_contents($oz_url);
		
		if (strpos($result, 'Message accepted for delivery') !== false) {
			echo '<div style="font-weight:normal;color:green;text-align:center;">Message has been accepted for delivery</div>';
		}
		else {
			echo '<div style="font-weight:normal;color:red;text-align:center;">Error! Verify your settings!</div>';
		}
	}
}

$ozeki = new modOzekiSMSModuleHelper($params);
$ozeki->ozekiSmsForm();

if(isset($_REQUEST['oz_sendmessage'])) {
	$oz_recipient = urlencode($_REQUEST['oz_recipient']);
	$oz_message = urlencode($_REQUEST['oz_message']);
	
	$ozeki->ozekiSendMessage($oz_recipient, $oz_message);
}
