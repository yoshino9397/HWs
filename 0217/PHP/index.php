<?php
//Challenge 1: Create Variables
?>
<?php
echo $intNumber = 1000;
echo '<br>';
echo $charName = 'N';
echo '<br>';
echo $boolVal = true;
echo '<br>';
echo $floatNum = 10.292;
echo '<br>'; ?>

<?php
//Challenge 2: Arithmetic Operators
echo '<br>';
?>
<?php
$a = 12;
$b = 7;
echo "$a + $b = " . ($a + $b);
echo '<br>';
echo "$a - $b = " . ($a - $b);
echo '<br>';
echo "$a * $b = " . ($a * $b);
echo '<br>';
echo "$a / $b = " . ($a / $b);
echo '<br>';
echo "$a % $b = " . ($a % $b);
echo '<br>';
?>

<?php
//Challenge 3: Arithmetic-Assignment Operators
echo '<br>';
?>
<?php
$a = 8;
$b = 2;
$c = 4;
$d = 5;
$e = 3;
$string1 = 'Value is now ';
$string2 = 'Add ';
$string3 = 'Subtract ';
$string4 = 'Multiply by ';
$string5 = 'Divide by ';
$string6 = 'Increment value by one.  ';
$string7 = 'Decrement value by one.  ';
$period = '. ';

echo $string1 . $a . $period . '<br>';
echo $string2 .  $b . $period . $string1 . ($a += 2) . $period . '<br>';
echo $string3 .  $c . $period . $string1 . ($a -= 4) . $period . '<br>';
echo $string4 .  $d . $period . $string1 . ($a *= 5) . $period . '<br>';
echo $string5 .  $e . $period . $string1 . ($a /= 3) . $period . '<br>';
echo $string6 .  $string1 . ($a += 1) . $period . '<br>';
echo $string7 .  $string1 . ($a -= 1) . $period . '<br>';
?>

<?php
///Challenge 4: If-Else Statement
echo '<br>'
?>
<?php
date_default_timezone_set('America/Vancouver');
if (date('m') == 12) {
  echo "It's December, cold, gonna stay home, be a potato couch.";
  echo '<br>';
} else {
  echo "Today is " . '' . date('Y:m:d') . '<br>';
  echo "Not December, but still nope! Stay home and be a NEETo!";
  echo '<br>';
}
?>

<?php
//Challenge 5: Associative Array
echo '<br>'
?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
  <meta http-equiv="content-type" content="text/html;charset=iso-8859-1" />
  <title>Associative Array - Cities</title>
</head>

<body>
  <form>
    <p>Please choose a city:</p>
    <select name="city">

      <?php
      $countries = ["Japan" => "Tokyo", "Mexico" => "Mexico City", "USA" => "New York City", "India" => "Mumbai", "Shanghai" => "Seoul"];
      foreach ($countries as $country => $city) {
        echo "<option>$city</option>";
      }
      ?>

    </select>
  </form>

</body>
</html>
