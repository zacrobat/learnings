<?php
// wordpress.org current method for importing the style sheet
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

/* Functions for use in functions.php file in WordPress child themes
 http://ronangelo.com/change-or-translate-text-on-a-wordpress-theme/ */

 // To change or translate a single string, add this code on your functions.php.
function ra_change_translate_text( $translated_text ) {
	if ( $translated_text == 'Old Text' ) {
		$translated_text = 'New Translation';
	}
	return $translated_text;
}
add_filter( 'gettext', 'ra_change_translate_text', 20 );

/* Using arrays can be an efficient way to change multiple text.
This one isn’t case-sensitive. To change or translate multiple strings, add this code on your functions.php.
 If needed, follow the code pattern to add more. */
 function ra_change_translate_text_multiple( $translated ) {
 	$text = array(
 		'Old Text 1' => 'New Translation 1',
 		'Old Text 2' => 'New Translation 2',
 		'Old Text 3' => 'New Translation 3',
 	);
 	$translated = str_ireplace(  array_keys($text),  $text,  $translated );
 	return $translated;
 }
 add_filter( 'gettext', 'ra_change_translate_text_multiple', 20 );

 // in practice:
 function ra_change_translate_text_multiple( $translated ) {
	$text = array(
		'Pledged' => 'Invested',
    'Pledgers' => 'Investors',
    'Support' => 'Invest',
    'UPDATES' => 'COMPANY DETAILS',
    'FAQ' => 'ADD+VENTURE ANALYSIS AND TERMS',
    'Crowdfunding ends' => 'This deal closes',
	);
	$translated = str_ireplace(  array_keys($text),  $text,  $translated );
	return $translated;
}
add_filter( 'gettext', 'ra_change_translate_text_multiple', 20 );
?>
