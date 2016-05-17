<?php
/* How to use the ternary operator http://www.abeautifulsite.net/how-to-use-the-php-ternary-operator/ */
if( $valid ) {
    $x = 'yes';
} else {
    $x = 'no';
}
// becomes
$x = $valid ? 'yes' : 'no'; //If x is valid set it to yes; otherwise set it to no.

/* Run php in iTerm with interactive shell:
docker run -it php:alpine php -a
ctr-d to escape back to zsh
https://hub.docker.com/_/php/
Next: download php locally and run in Atom. http://php.net/manual/en/install.macosx.php */

// Using after_setup_theme
// This goes in child theme functions.php - replace a shortcode with a new one that has an amended function.
// https://wordpress.org/support/topic/override-themes-shortcodesphp
// Add bio to team section if needed :

add_action( 'after_setup_theme', 'adv_child_theme_setup' );

function adv_child_theme_setup() {
   remove_shortcode( 'krown_team' );
   add_shortcode( 'krown_team', 'adv_krown_team_function' );
}

function adv_krown_team_function( $atts, $content ) {

    extract( shortcode_atts( array(
        'el_class'  => '',
        'image' 	=> '',
        'title'  => '',
        'subtitle'  => '',
        'bio'  => '' // bio added for this project - see $bio below as well.
    ), $atts ) );

    $html = '<div class="krown-team' . ( $el_class != '' ? ' ' . $el_class : '' ) . ' clearfix">
      <img src="' . aq_resize( $image, '400' ) . '" alt="' . $title . '" />
      <h4>' . $title . '</h4>
      <h5>' . $subtitle . '</h5>
      <p>' . $bio . '</p>
      <div class="content">' . do_shortcode( $content ) . '</div>
    </div>';

   return $html;

}
