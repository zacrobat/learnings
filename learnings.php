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
