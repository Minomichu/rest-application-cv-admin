<!-- Skapat av Mimmi Nordquist /mino1801 -->

<?php include("includes/php/config.php"); ?>
<?php include("includes/php/head.php"); ?>

<?php $username = $_SESSION['username']; ?>


<body>
    <div id="container">
        <div id="topBorder"></div>
        <header>
            <div id="nameInHeader"><div id="firstname"></div><div id="lastname"></div></div>
            <div id="roleInHeader"><div id="myWorktitle"></div></div>

            <div id="editPersonal1"></div>
            <div id="logOutButton"></div>
            <div id="editButtonsToMiddle">
                <div class="smallSeparator"></div>
                <div id="errorMessagePersonal1"></div>
                <div id="editPersonal1save"></div>
                <div id="editPersonal1cancel"></div>
            </div>

            <nav id="desktopNav"> 
                <div class="border2"></div>
                <div class="menu"><a href="#tagForWorkmenu" title="Arbetslivserfarenhet">Arbete</a></div>
                <div class="border"></div>
                <div class="menu"><a href="#backgroundColor" title="Studier">Studier</a></div>
                <div class="border"></div>
                <div class="menu"><a href="#tagForWebmenu" title="Webbplatser">Webbplatser</a></div>
                <div class="border2"></div>
            </nav>
        </header>

        <nav class="toggleNavigation fullToggle">
            <ul>
                <li><a href="#tagForWorkmenu" title="Arbetslivserfarenhet">Arbete</a></li>
                <li><a href="#backgroundColor" title="Studier">Studier</a></li>
                <li><a href="#tagForWebmenu" title="Webbplatser">Webbplatser</a></li>
            </ul>
        </nav>
    <main>