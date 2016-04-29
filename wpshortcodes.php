<?php
function foobar_func( $atts ){
	return "foo and bar";
}
add_shortcode( 'foobar', 'foobar_func' );

// wptuts+ example shortcode
function wptuts_first_shortcode($atts, $content=null){

  $post_url = get_permalink($post->ID);
  $post_title = get_the_title($post->ID);
  $tweet = '<a href="http://twitter.com/home/?status=Read ' . $post_title . ' at ' . $post_url . '">Share on Twitter</a>';

  return $tweet;
}
add_shortcode('twitter', 'wptuts_first_shortcode');


// [bartag foo="foo-value"]
function bartag_func( $atts ) {
    $a = shortcode_atts( array(
        'foo' => 'something',
        'bar' => 'something else',
    ), $atts );

    return "foo = {$a['foo']}";
}
add_shortcode( 'bartag', 'bartag_func' );

function portable_download_link($atts, $content = null) {
   extract(shortcode_atts(array('link' => '#'), $atts));
   return '<a class="branded-link" href="'.$link.'"><span>' . do_shortcode($content) . '</span></a>';
}
add_shortcode('portable_download_link', 'portable_download_link');

function portable_download_case_study($atts, $content) {
   $link = shortcode_atts( array(
      'link' => 'this_link'
   ), $atts );
   extract(shortcode_atts(array('link' => '#'), $atts));
   return '<a class="branded-link" href="'.$link.'"><span>' . do_shortcode($content) . '</span></a>';
}
add_shortcode('portable_download_case_study', 'portable_download_case_study');
