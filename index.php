

I've not used PHP much (or at all) before, and I have the following code:
 
<?php session_start();
  
print_r($_SESSION);
$val = $_GET['ID']??null;
echo "<iframe src='http://localhost:3000/?id:{$val}' width='100%' scrolling='vertical'></iframe>";
?>