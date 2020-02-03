<!-- Skapat av Mimmi Nordquist /mino1801 -->

<?php $page_title = "CV-sidan"; ?>
<?php include("includes/php/header.php");?>

<?php if(isset($_SESSION['username'])) { ?>

    <aside>
        <div class="wrapperAside">

            <div id="listedPersonal"> 
                <div class="surroundPersonal">
                    <div id="imagePersonal"></div>

                    <!-- Byt profilbild -->
                    <div id="editProfilePicture">
                        <form method="POST" enctype="multipart/form-data"> 
                            <input type="hidden" name="MAX_FILE_SIZE" value="500000">
                            <input type="file" name="profilePicture" id="profilePicture">
                            <input type="submit" name="changeProfilePicture" id="changeProfilePicture" value="Ladda upp" >
                            <input type="button" name="cancelChangeProfilePicture" id="cancelChangeProfilePicture" value="Avbryt" >
                        </form>
                    </div>

                    <?php 
                        //Tar emot profilbild, kontrollerar den samt lägger i rätt mapp
                        if (isset($_FILES['profilePicture'])) {

                            if((($_FILES['profilePicture']['type'] == "image/jpeg") || 
                            ($_FILES['profilePicture']['type'] == "image/pjpeg") || 
                            ($_FILES['profilePicture']['type'] == "image/png")) && 
                            ($_FILES['profilePicture']['size'] < 500000)) {
                                if ($_FILES['profilePicture']['error'] > 0) {

                                    //###Det här felmeddelandet skrivs inte ut
                                    echo "<div class=\"errorMessageProfilePicture\">Bilden är för stor eller av fel format.</div>";
                                } else {

                                    if (file_exists("userImages/" . $_FILES['profilePicture']['name'])) {
                                        echo "<div class=\"errorMessageProfilePicture\">Namnet finns redan, döp din bild till något annat.</div>";
                                    } else { 
                                        move_uploaded_file($_FILES['profilePicture']['tmp_name'], "userImages/" . $_FILES['profilePicture']['name']);
                                        $storedfile = $_FILES['profilePicture']['name'];
                                    }
                                }
                            } 
                        }
                    ?>

                    <div id="editPersonal2"></div>
                </div> <!-- end surroundPersonal -->
                <div class="surroundPersonal">
                    <div id="contactTitle"></div>
                    <div id="phonePersonal"></div>
                    <div id="emailPersonal"></div>
                    <div id="editPersonal3"></div>
                    <div id="errorMessagePersonal3"></div>
                    <div id="editPersonal3save"></div>
                    <div id="editPersonal3cancel"></div>
                </div>
                <div class="surroundPersonal">
                    <div id="cityTitle"></div>
                    <div id="cityPersonal"></div>
                    <div id="editPersonal4"></div>
                    <div id="errorMessagePersonal4"></div>
                    <div id="editPersonal4save"></div>
                    <div id="editPersonal4cancel"></div>
                </div>
                <div class="surroundPersonal">
                    <div id="languageTitle"></div>
                    <div id="speakLanguage"></div>
                    <div id="editLanguage"></div>
                    <div id="editLanguageInfoText"></div>
                    <div id="editLanguageSave"></div>
                    <div id="editLanguageCancel"></div>
                </div>
            </div>
        </div><!-- end wrapper -->
    </aside>
    
    <div id="tagForWorkmenu"></div>
    <div class="wrapper">
        <section>
            <div class="alignWithAside">
                <div class="mainTitle">Arbeten</div>
                <div id="addWorkButton">Lägg till</div>

                <div id="listedWork">
                    <div class="firstBlock">
                        <div class="surroundCourses">
                            <div id="workTitle1"></div>
                            <div id="addWorkplace"></div>
                            <div id="work1"></div>
                        </div>
                        <div class="surroundCourses">
                            <div id="workTitle2"></div>
                            <div id="addWorktitle"></div>
                            <div id="work2"></div>
                        </div>
                        <div class="surroundCourses">
                            <div id="workTitle3"></div>
                            <div id="addWorkStartdate"></div>
                            <div id="work3"></div>
                        </div>
                    </div>
                    <div class="secondBlock">
                        <div class="surroundCourses">
                            <div id="workTitle4"></div>
                            <div id="addWorkEnddate"></div>
                            <div id="work4"></div>
                        </div>
                        <div class="surroundCourses">
                            <div id="workTitle5"></div>
                            <div id="saveAddedWork"></div>
                            <div id="work5"></div>
                        </div>
                        <div class="surroundCourses">
                            <div id="workTitle6"></div>
                            <div id="cancelAddWork"></div>
                            <div id="work6"></div>
                        </div>
                    </div><!-- end secondBlock -->
                    <div id="errorMessageWork"></div>
                </div>
            </div> <!-- end alignWithAside -->
        </section>

        <section>
            <div class="alignWithAside">
                <div id="backgroundColorLine"></div>
                <div id="backgroundColor">
                    <div class="alignRightEdit">
                        <div class="mainTitle">Studier</div>
                        <div id="addCourseButton">Lägg till</div>
                    </div>

                    <div id="listedCourses">
                        <div class="firstBlock">
                            <div class="surroundCourses">
                                <div id="courseTitle1"></div>
                                <div id="addSchool"></div>
                                <div id="course1"></div>
                            </div>
                            <div class="surroundCourses">
                                <div id="courseTitle2"></div>
                                <div id="addCoursename"></div>
                                <div id="course2"></div>
                            </div>
                            <div class="surroundCourses">
                                <div id="courseTitle3"></div>
                                <div id="addCourseStartdate"></div>
                                <div id="course3"></div>
                            </div>
                        </div>
                        <div class="secondBlock">
                            <div class="surroundCourses">
                                <div id="courseTitle4"></div>
                                <div id="addCourseEnddate"></div>
                                <div id="course4"></div>
                            </div>
                            <div class="surroundCourses">
                                <div id="courseTitle5"></div>
                                <div id="saveAddedCourse"></div>
                                <div id="course5"></div>
                            </div>
                            <div class="surroundCourses">
                                <div id="courseTitle6"></div>
                                <div id="cancelAddCourse"></div>
                                <div id="course6"></div>
                            </div>
                        </div>
                        <div id="errorMessageCourse"></div>
                    </div> <!-- end listedCourses ###om något ser fel ut kolla här -->
                </div><!-- end backgroundColor -->
            </div>
            <div id="tagForWebmenu"></div>
        </section>

        <section>
            <div class="alignWithAside">
                <div class="separator"></div>
                <div class="mainTitle">Webbplatser</div>
                <div id="addWebButton">Lägg till</div>
                <div id="listedWeb">
                    <div id="hideWhenNotActive">
                        <div class="surroundAddWeb">
                            <div id="addWebImage"></div>
                        </div> 
                        <div class="surroundAddWeb">
                            <div id="addWebName"></div>
                            <div id="addWebUrl"></div>
                            <div id="addWebDescription"></div>
                            <div id="saveAddedWeb"></div>
                            <div id="cancelAddWeb"></div>
                            <div id="errorMessageAddWeb"></div>
                        </div>
                    </div>
             
                <div id="webBlock"></div>

                <!-- Gör att man kan ange i MB istället för bytes -->
                <?php define('MB', 1048576); ?>

                <!-- Byt webbild -->
                <div id="editWebImage">
                        <form method="POST" enctype="multipart/form-data"> 
                            <input type="hidden" name="MAX_FILE_SIZE" value="<?php echo 1*MB ?>">
                            <input type="hidden" name="rememberWebNumber" id="rememberWebNumber" value="">
                            <input type="file" name="webImageFile" id="webImageFile">
                            <input type="submit" name="changeWebImage" id="changeWebImage" value="Ladda upp" >
                            <input type="button" name="cancelChangeWebimage" id="cancelChangeWebimage" value="Avbryt" >
                        </form>
                    </div>
                <!-- <div id="errorMessageWeb"></div> -->

                <?php 
                    //Tar emot webbplatsbild, kontrollerar den samt lägger i rätt mapp
                    if (isset($_FILES['webImageFile'])) { 

                        //Hämtar vidare ID:t
                        $rememberWebNumber = $_POST["rememberWebNumber"];

                        if((($_FILES['webImageFile']['type'] == "image/jpeg") || 
                        ($_FILES['webImageFile']['type'] == "image/pjpeg") || 
                        ($_FILES['webImageFile']['type'] == "image/png")) && 
                        ($_FILES['webImageFile']['size'] < 1*MB)) {

                            if ($_FILES['webImageFile']['error'] > 0) {
                                //###Den här texten syns inte alls
                                echo "<div class=\"errorMessage\">Bilden är för stor eller av fel format.</div>";
                            } else {
                                if (file_exists("webpageImages/" . $_FILES['webImageFile']['name'])) {
                                    //###Sidan laddas om (vet inte varför) så man hamnar högst upp och inte ser texten längst ned :(
                                    echo "<div class=\"errorMessage\">Namnet används redan, döp din bild till något annat</div>";
                                } else { 
                                    move_uploaded_file($_FILES['webImageFile']['tmp_name'], "webpageImages/" . $_FILES['webImageFile']['name']);
                                    $storedWebImage = $_FILES['webImageFile']['name'];
                                }
                            }
                        } 
                    }
                ?>

                </div>
            </div><!-- end alignWithAside -->
        </section>

        <? } else {
            header("Location: login.php");
        } ?>

</div>  <!-- end wrapper -->
<?php include("includes/php/footer.php"); ?>
<script src="js/main.js"></script>
<script src="js/personal.js"></script>
<script src="js/language.js"></script>
<script src="js/work.js"></script>
<script src="js/courses.js"></script>
<script src="js/webpage.js"></script>


<!-- Skickar vidare profilbildens namn för uppdatering i databasen -->

<script type="text/javascript">
    var profilePicture = <?php echo json_encode($storedfile); ?>;
    updateProfilePicture(profilePicture);
</script>

<!-- Skickar vidare profilbildens namn och ID för uppdatering i databasen -->
<script type="text/javascript">
    var webImageFile = <?php echo json_encode($storedWebImage); ?>;
    let rememberedWebNumber = <?php echo json_encode($rememberWebNumber); ?>;
    updateWebImage(webImageFile, rememberedWebNumber);
</script>

<?php include("includes/php/script.php"); ?>