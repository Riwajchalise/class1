<?php
$cookie_name = "user";
$cookie_value = "Bibek";
$cookie_password= "password";
$cookie_value1 = "passw123";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
setcookie($cookie_password, $cookie_value1, time() + (86400 * 30), "/"); // 86400 = 1 day

?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
  echo "Cookie '" . $cookie_name . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_name];
  echo "Cookie '" . $cookie_password . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_value1];
}
?>

</body>
</html>