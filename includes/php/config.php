<!-- Skapat av Mimmi Nordquist /mino1801 -->

<?php
    /*
    $site_title = "CV";
    $divider = " | ";

    //Hämtar alla klassfiler som används
    spl_autoload_register(function ($class) {
    include 'includes/klasser/' . $class . '.class.php';
    });

    //Databasanslutning live
    define("DBhost", "localhost");
    define("DBadmin", "mimmimi_cv");
    define("DBpassword", "bp1234%&/(");
    define("DBdatabase", "mimmimi_blogportal");*/

    //Sessionsstart
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
    ?>