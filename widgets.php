<?php
register_sidebar( array(
'name' => 'Footer left',
'id' => 'footer-sidebar-1',
'description' => 'Appears in the footer area',
'before_widget' => '<div>',
'after_widget' => '</div>',
'before_title' => '<h2 class="widget-title">',
'after_title' => '</h2>',
) );
register_sidebar( array(
'name' => 'Footer right',
'id' => 'footer-sidebar-2',
'description' => 'Appears in the footer area',
'before_widget' => '<div>',
'after_widget' => '</div>',
'before_title' => '<h2>',
'after_title' => '</h2>',
) );

