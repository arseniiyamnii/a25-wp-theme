<?php
//update_option( 'siteurl', 'http://94.190.26.105:8026/yourblog' );
//update_option( 'home', 'http://94.190.26.105:8026/yourblog' );
function main_scripts()
{
    // all styles
    wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/css/bootstrap.min.css', array(), 20141119);
    //wp_enqueue_style('navbar', get_stylesheet_directory_uri() . '/css/navbar.css', array(), 20141119);
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/style.css', array(), 20141119);

    // all scripts
    //wp_enqueue_script('live-reload', get_template_directory_uri() . '/js/live.js', array('jquery'), '20120206', false);
    //wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/jquery-3.5.1.js', array('jquery'), '20120206', false );
    wp_enqueue_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '20120206', false);
    wp_enqueue_script('theme-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '20120206', false);
    //  wp_enqueue_script( 'navbar', get_template_directory_uri() . '/js/navbar.js', array('jquery'), '20120206', true );
}

add_action('wp_enqueue_scripts', 'main_scripts');

// регистрируем меню
function wpb_custom_new_menu()
{
    register_nav_menus(
        array(
            //register new menu
            'my-custom-menu' => __('My Custom Menu'),
            //     'extra-menu' => __('Extra Menu')
        )
    );
}
add_action('init', 'wpb_custom_new_menu');

/**
 * Register Custom Navigation Walker
 */
function register_navwalker()
{
    require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
}
add_action('after_setup_theme', 'register_navwalker');

/* добавляем поддержку разных фич*/
function config_custom_logo()
{
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'config_custom_logo');

require get_template_directory() . '/gutenberg.php';
require get_template_directory() . '/ajax-forms.php';

require get_template_directory() . '/widgets.php';

