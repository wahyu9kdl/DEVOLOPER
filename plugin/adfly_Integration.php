
<?php
	/*
	 * Plugin Name: AdFly Integration
	 * Plugin URI: http://adf.ly/publisher/tools#tools-plugins
	 * Description: This plugin allows you to configure Full Page Script, Website Entry Script and Pop-Ads tools.
	 * Version: 1.0.3
	 * Author: AdFly
	 * Author URI: http://adf.ly
	 * License: GPL2
	 */
	function adfly_plugins_get_options() {
		return array(
			'enabled' => get_option('adfly_plugins_option_enabled'),
			'id' => trim(get_option('adfly_plugins_option_id')) ?: '-1',
			'popads_enabled' => get_option('adfly_plugins_option_popads_enabled'),
			'type' => trim(get_option('adfly_plugins_option_type')) ?: 'int',
			'domain' => trim(get_option('adfly_plugins_option_domain')) ?: 'adf.ly',
			'custom_domain' => trim(get_option('adfly_plugins_option_custom_domain')) ?: '',
			'nofollow' => get_option('adfly_plugins_option_nofollow'),
			'website_entry_enabled' => get_option('adfly_plugins_option_website_entry_enabled'),
			'protocol' => trim(get_option('adfly_plugins_option_protocol')) ?: 'http',
			'include_exclude_domains_choose' => get_option('adfly_plugins_option_include_exclude_domains_choose') ?: 'exclude',
			'include_exclude_domains_value' => trim(get_option('adfly_plugins_option_include_exclude_domains_value')),
			'exclude_roles' => get_option('adfly_plugins_option_exclude_roles')
		);
	}
	function adfly_plugins_gen_script() {
		if (get_option('adfly_plugins_option_enabled')) {
			$options = adfly_plugins_get_options();
			global $current_user;
			
			if ($options['exclude_roles']) {
				foreach ($options['exclude_roles'] as $excludeRole) {
					if (in_array($excludeRole, $current_user->roles)) {
						return false;
					}
				}
			}
			
			echo '
				<script type="text/javascript">
					var adfly_id = ' . json_encode($options['id']) . ';
					var adfly_advert = ' . json_encode($options['type']) . ';
					var adfly_domain = ' . json_encode($options['custom_domain'] ?: $options['domain']) . ';
					' . ($options['nofollow'] ? 'var adfly_nofollow = true;' : '') . '
					var adfly_protocol = ' . json_encode($options['protocol']) . ';
					' . adfly_plugins_gen_include_exclude_domains_script($options) . ' 
					
					' . ($options['website_entry_enabled'] ? 'var frequency_cap = 5;' : '') . ' 
				    ' . ($options['website_entry_enabled'] ? 'var frequency_delay = 5;' : '') . ' 
				    ' . ($options['website_entry_enabled'] ? 'var init_delay = 3;' : '') . ' 
					
    				' . ($options['popads_enabled'] ? 'var popunder = true;' : '') . ' 
				</script>
				<script src="http://cdn.adf.ly/js/link-converter.js"></script>
				' . ($options['website_entry_enabled'] ? '<script src="http://cdn.adf.ly/js/entry.js"></script>' : '') . ' 
			';
		} else {
			return false;
		}
	}
	function adfly_plugins_gen_include_exclude_domains_script($options) {
		$script = 'var ';
		if ($options['include_exclude_domains_choose'] == 'include') {
			$script .= 'domains = [';
		} else if ($options['include_exclude_domains_choose'] == 'exclude') {
			$script .= 'exclude_domains = [';
		}
		if (trim($options['include_exclude_domains_value'])) {
			$script .= implode(', ', array_map(function($x) {
				return json_encode(trim($x));
			}, explode(',', trim($options['include_exclude_domains_value']))));
		}
		
		$script .= '];';
		return $script;
	}
	function adfly_plugins_create_admin_menu() {
		add_options_page('AdFly Integration Settings', 'AdFly Integration Settings', 'administrator', __FILE__, 'adfly_plugins_admin_settings_page', plugins_url('/images/icon.png', __FILE__ ));
		add_action('admin_init', 'adfly_plugins_register_options');
	}
	function adfly_plugins_option_id_validate($value) {
		if (!preg_match("/^([0-9])+$/", str_replace(" ", "", trim($value)))) {
			add_settings_error('adfly_plugins_option_id', 'adfly_plugins_option_id', 'User ID is required and must be a number.', 'error');
			return false;
		} else {
			return $value;
		}
	}
	function adfly_plugins_domain_name_validate($value) {
		return preg_match('/^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/', $value);
	}
	function adfly_plugins_option_include_exclude_domains_value_validate($value) {
		$arr = array_filter(array_map(function($x) { return trim($x); }, explode(',', trim($value))), function($x) { return $x ? true : false; });
		if (count($arr)) {
			array_map(function($x) {
				if (!adfly_plugins_domain_name_validate($x)) {
					add_settings_error('adfly_plugins_option_id', 'adfly_plugins_option_include_exclude_domains_value', $x . ' is not valid domain name.', 'error');
				}
			}, $arr);
		} else {
			add_settings_error('adfly_plugins_option_id', 'adfly_plugins_option_include_exclude_domains_value', 'You must specify at least one domain name to include/exclude.', 'error');
		}
		
		return implode(',', $arr);
	}
	function adfly_plugins_option_custom_domain_validate($value) {
		if (($value = trim($value)) && !adfly_plugins_domain_name_validate($value)) {
			add_settings_error('adfly_plugins_option_id', 'adfly_plugins_option_custom_domain', $value . ' is not valid domain name.', 'error');
			return false;
		}
		
		return $value;
	}
	function adfly_plugins_register_options() {
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_enabled');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_id', 'adfly_plugins_option_id_validate');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_popads_enabled');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_type');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_domain');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_custom_domain', 'adfly_plugins_option_custom_domain_validate');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_nofollow');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_website_entry_enabled');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_protocol');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_include_exclude_domains_choose');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_include_exclude_domains_value', 'adfly_plugins_option_include_exclude_domains_value_validate');
		register_setting('np-adfly-settings-group', 'adfly_plugins_option_exclude_roles');
	}
	function adfly_plugins_admin_settings_page() {?>
		<div class="wrap">
			<h2>AdFly Integration</h2>
			
			<form method="post" action="options.php">
		    	<?php settings_fields('np-adfly-settings-group');?>
		    	<table class="form-table">
		    		<tbody>
						<tr valign="top">
							<td scope="row">Integration Enabled</td>
							<td><input type="checkbox" <?php echo get_option('adfly_plugins_option_enabled') ? 'checked="checked"' : '' ?> value="1" name="adfly_plugins_option_enabled" /></td>
						</tr>
						<tr valign="top">
							<td scope="row">AdFly User ID</td>
							<td>
								<input type="text" name="adfly_plugins_option_id" value="<?php echo htmlspecialchars(get_option('adfly_plugins_option_id'), ENT_QUOTES) ?>" />
								<p class="description">
									Simply visit <a href="http://adf.ly/account/referrals" target="_blank">http://adf.ly/account/referrals</a> page.
									There will be URL http://adf.ly/?id=XXX where XXX is your AdFly User ID.
								</p>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">Ad Type</td>
							<td>
								<select name="adfly_plugins_option_type">
									<option value="int" <?php echo get_option('adfly_plugins_option_type') == 'int' ? 'selected="selected"' : '' ?>>Interstitial</option>
									<option value="banner" <?php echo get_option('adfly_plugins_option_type') == 'banner' ? 'selected="selected"' : '' ?>>Banner</option>
								</select>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">AdFly Domain</td>
							<td>
								<select name="adfly_plugins_option_domain">
									<option value="adf.ly" <?php echo get_option('adfly_plugins_option_domain') == 'adf.ly' ? 'selected="selected"' : '' ?>>adf.ly</option>
									<option value="j.gs" <?php echo get_option('adfly_plugins_option_domain') == 'j.gs' ? 'selected="selected"' : '' ?>>j.gs</option>
									<option value="q.gs" <?php echo get_option('adfly_plugins_option_domain') == 'q.gs' ? 'selected="selected"' : '' ?>>q.gs</option>
								</select>
								&nbsp;or specify custom domain&nbsp;
								<input type="text" name="adfly_plugins_option_custom_domain" value="<?php echo htmlspecialchars(get_option('adfly_plugins_option_custom_domain'), ENT_QUOTES) ?>" />
								<p class="description">Custom domain can be used only with HTTP protocol.</p>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">Include/Exclude Domains</td>
							<td>
								<div>
									<label>
										<input type="radio" name="adfly_plugins_option_include_exclude_domains_choose" value="include" <?php echo get_option('adfly_plugins_option_include_exclude_domains_choose') == 'include' ? 'checked="checked"' : '' ?> />
										Include
									</label>
									<label>
										<input type="radio" name="adfly_plugins_option_include_exclude_domains_choose" value="exclude" <?php echo !get_option('adfly_plugins_option_include_exclude_domains_choose') || get_option('adfly_plugins_option_include_exclude_domains_choose') == 'exclude' ? 'checked="checked"' : '' ?> />
										Exclude
									</label>
								</div>
								<div>
									<textarea rows="4" style="width: 64%;" name="adfly_plugins_option_include_exclude_domains_value"><?php echo htmlspecialchars(trim(get_option('adfly_plugins_option_include_exclude_domains_value')), ENT_QUOTES) ?></textarea>
									<p class="description">Comma-separated list of domains.</p>
								</div>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">No Follow</td>
							<td>
								<input type="checkbox" <?php echo get_option('adfly_plugins_option_nofollow') ? 'checked="checked"' : '' ?> value="1" name="adfly_plugins_option_nofollow" />
								<p class="description">Check this option if you wish links to stop outbound page equity.</p>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">Protocol</td>
							<td>
								<select name="adfly_plugins_option_protocol">
									<option value="http" <?php echo get_option('adfly_plugins_option_protocol') == 'http' ? 'selected="selected"' : '' ?>>http</option>
									<option value="https" <?php echo get_option('adfly_plugins_option_protocol') == 'https' ? 'selected="selected"' : '' ?>>https</option>
								</select>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">Pop Ads Enabled</td>
							<td>
								<input type="checkbox" <?php echo get_option('adfly_plugins_option_popads_enabled') ? 'checked="checked"' : '' ?> value="1" name="adfly_plugins_option_popads_enabled" />
								<p class="description"><a href="http://support.adf.ly/hc/en-us/articles/207705263-What-are-Pop-Ads-on-AdFly-How-can-I-use-them-" target="_blank">What is this?</a></p>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">Website Entry Script Enabled</td>
							<td>
								<input type="checkbox" <?php echo get_option('adfly_plugins_option_website_entry_enabled') ? 'checked="checked"' : '' ?> value="1" name="adfly_plugins_option_website_entry_enabled" />
								<p class="description">Check this option if you wish to earn money when a visitor simply enters your site.</p>
							</td>
						</tr>
						<tr valign="top">
							<td scope="row">Exclude following user roles from displaying ads</td>
							<td>
								<select name="adfly_plugins_option_exclude_roles[]" multiple="multiple">
									<option <?php echo get_option('adfly_plugins_option_exclude_roles') && in_array('subscriber', get_option('adfly_plugins_option_exclude_roles')) ? ' selected="selected" ' : '' ?> value="subscriber">Subscriber</option>
									<option <?php echo get_option('adfly_plugins_option_exclude_roles') && in_array('contributor', get_option('adfly_plugins_option_exclude_roles')) ? ' selected="selected" ' : '' ?> value="contributor">Contributor</option>
									<option <?php echo get_option('adfly_plugins_option_exclude_roles') && in_array('author', get_option('adfly_plugins_option_exclude_roles')) ? ' selected="selected" ' : '' ?> value="author">Author</option>
									<option <?php echo get_option('adfly_plugins_option_exclude_roles') && in_array('editor', get_option('adfly_plugins_option_exclude_roles')) ? ' selected="selected" ' : '' ?> value="editor">Editor</option>
									<option <?php echo get_option('adfly_plugins_option_exclude_roles') && in_array('administrator', get_option('adfly_plugins_option_exclude_roles')) ? ' selected="selected" ' : '' ?> value="administrator">Administrator</option
								</select>
							</td>
						</tr>
					</tbody>
				</table>
		
				<p class="submit">
					<input type="submit" class="button-primary" value="<?php _e('Update Settings') ?>" />
				</p>
				
				<p>Please contact our <a href="http://support.adf.ly/" target="_blank">Support Portal</a> if you have any questions and/or suggestions.</p>		
			</form>
		</div>
<?php }?>
<?php
	add_action('wp_head', 'adfly_plugins_gen_script');
	add_action('admin_menu', 'adfly_plugins_create_admin_menu');
?>
