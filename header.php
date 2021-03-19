<!DOCTYPE html>
<html <?php language_attributes(); ?>>

    <head>
        <link rel="shortcut icon" href=<?php echo get_site_icon_url(); ?> type="image/x-icon">
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <title><?php bloginfo( 'name' ); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head(); ?>
    </head>
    <body>

        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-default">
                <!--logo here-->
                <a class="navbar-brand" href="#">
                    <?php
                                        $logo = get_theme_mod( 'custom_logo' );
                                        $image = wp_get_attachment_image_src( $logo , 'full' );
                                        $image_url = $image[0]; ?>
                                        <img id="logo-image" src="<?php echo $image_url; ?>" alt="logo" width="100">

                </a>
                <!-- toggle button -->
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <?php
                          wp_nav_menu( array(
                          'theme_location'  => 'my-custom-menu',
                          'depth'           => 2, // 1 = no dropdowns, 2 = with dropdowns.
                          'container'       => 'div',
                          'container_class' => 'collapse navbar-collapse',
                          'container_id'    => 'navbarSupportedContent',
                          'menu_class'      => 'navbar-nav ml-auto',
                          'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
                          'walker'          => new WP_Bootstrap_Navwalker(),
                          ) );
                          ?>




            </nav>
        </header>

