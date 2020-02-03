<!-- Skapat av Mimmi Nordquist /mino1801 -->

<?php $page_title = "Logga in"; ?>
<?php include("includes/php/config2.php"); ?>


<?php
//Anslutning

$db = new mysqli(DBhost, DBadmin, DBpassword, DBdatabase);


if($db->connect_errno > 0){
    die('Fel vid anslutningEN [' . $db->connect_error . ']');
}
?>


<?php
global $loginUser;
$loginUser = new Users();

?>

<?php include("includes/php/config.php"); ?>
<?php include("includes/php/head.php"); ?>

<body>
    <div id="container">
        <div id="topBorder"></div>
        <header>
            <div class="emptyHeaderHight"></div>
        </header>
        <main>

        <div class="wrapper">
            <section>
                <div class="smallerWidth">
                    <h1>Logga in</h1>
                    <form name="loginForm" id="loginForm" action="login.php" method="POST"> 
                        <div class="smallSeparator"></div>
                        <p>Namn:</p>
                        <input type="text" name="username" id="username">
                        <div class="smallSeparator"></div>
                        <p>Lösenord:</p>
                        <input type="password" name="password" id="password">
                        <a href="404.php" title="Bara för syns skull, inte implementerad :)">Jag har glömt mitt lösenord eller användarnamn</a>
                        <div class="smallSeparator"></div>
                        <input type="submit" name="login" value="Logga in">  
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <input type="button" name="createNewAccount" id="createNewAccount" title="Bara för syns skull, inte implementerad :)" value="Skapa nytt konto">
                    </form>
                </div>
            </section> 
        </div>
<?php


//Hämtar och skickar vidare inloggningsuppgifterna för kontroll
if(isset($_POST["login"])){     

    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    
    if($loginUser->login($username, $password)) {
        
        unset($_POST["login"]);
        header("Location: index.php");
        exit();
         
    } else {
        echo "<div class=\"errorMessage\">Felaktigt användarnamn eller lösenord</div>";
    }
}


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