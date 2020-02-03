<!-- Skapat av Mimmi Nordquist /mino1801 -->

<?php $page_title = "Logga ut"; ?>
<?php include("includes/php/config2.php"); ?>

<?php

//Anslutning
$db = new mysqli(DBhost, DBadmin, DBpassword, DBdatabase);

if($db->connect_errno > 0){
    die('Fel vid anslutning [' . $db->connect_error . ']');
}
?>

<?php include("includes/php/config.php"); ?>
<?php include("includes/php/head.php"); ?>

<body>
<?php 
//Avslutar alla sessions
session_unset();
session_destroy();
header('Refresh: 2; login.php');

?>

<div id="container">
    <div id="topBorder"></div>
    <header>
        <div class="emptyHeaderHight"></div>
    </header>
    <main>
        <div class="wrapper">
            <section>
                <div class="smallerWidth">
                    <h1>Du loggas nu ut</h1>
                    <div class="separator"></div>
                    <form name="loggingOutForm" id="loggingOutForm" action="login.php" method="POST"> 
                        <input type="submit" name="loggingOut" value="Tillbaka till inloggning">
                    </form>
                </div>
            </section>

<?php
$db->close();
?>


</div>  <!-- end wrapper -->
<?php include("includes/php/footer.php"); ?>
<script src="js/main.js"></script>
<script src="js/personal.js"></script>
<script src="js/language.js"></script>
<script src="js/work.js"></script>
<script src="js/courses.js"></script>
<script src="js/webpage.js"></script> 