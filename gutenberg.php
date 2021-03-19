<?php
// register custom category
function a25_block_category($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array(
                //register custom category
                'slug' => 'a25-blocks',
                'title' => __('A25 Gutenberg Blocks', 'a25-blocks'),
            ),
        )
    );
}
add_filter('block_categories', 'a25_block_category', 10, 2);


function yamnish_gutenberg_blocks()
{
    //register blocks
    wp_register_script('a25-blocks-js', get_template_directory_uri() . '/js/a25-first-gut-block.js', array( 'wp-blocks', 'wp-editor', 'wp-components' ));
    register_block_type('yamnish/a25-block-first', array(
        'editor_script' => 'a25-blocks-js',
    ));
    wp_register_script('a25-blocks-js2', get_template_directory_uri() . '/js/a25-first-gut-block.js', array( 'wp-blocks', 'wp-editor', 'wp-components' ));
    register_block_type('yamnish2/a25-block-second', array(
        'editor_script' => 'a25-blocks-js2',
    ));
    wp_register_script('a25-blocks-js3', get_template_directory_uri() . '/js/a25-first-gut-block.js', array( 'wp-blocks', 'wp-editor', 'wp-components' ));
    register_block_type('yamnish2/a25-block-third', array(
        'editor_script' => 'a25-blocks-js3',
    ));

}
add_action('init', 'yamnish_gutenberg_blocks');

