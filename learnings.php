<?php
/* How to use the ternary operator http://www.abeautifulsite.net/how-to-use-the-php-ternary-operator/ */
if( $valid ) {
    $x = 'yes';
} else {
    $x = 'no';
}
// becomes
$x = $valid ? 'yes' : 'no'; //If x is valid set it to yes; otherwise set it to no.
