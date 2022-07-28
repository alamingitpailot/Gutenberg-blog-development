<?php
/**
 * Plugin Name:       Test Block
 * Description:       Self hosted test wordpress plugin.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            bPlugins
 * Author URI : https://bplugins.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */



function create_block_test_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_test_block_block_init' );


// categories add block 
function custom_categories($cat,$post) {

	if('page' !== get_post_type($post)){
		return $cat;
	}

	return array_merge($cat,array(
		array(
			'slug' => 'MyBlock',
			'title' => 'Custom MyBlock'
		)));
}
add_filter('block_categories','custom_categories',10,2);
