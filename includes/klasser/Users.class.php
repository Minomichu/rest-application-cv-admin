<!-- Skapat av Mimmi Nordquist /mino1801 -->

<?php

class Users { 

	public function __construct(){
		//Anslutning
		$this->db = new mysqli(DBhost, DBadmin, DBpassword, DBdatabase);

		if($this->db->connect_errno > 0){
    	die('Fel vid Construct Users [' . $this->db->connect_error . ']');
        }
	}


    public function login($username, $password) {
        //Annars kan det gå att logga in med tomma fält
        if(!$this->checkUsername($username)) { return false; }
        if(!$this->checkPassword($password)) { return false; }

        $sql = "SELECT USERNAME, PASSWORDS FROM PERSONAL WHERE username='$username'";
        $result = $this->db->query($sql) or die('Fel vid inloggning');


        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $storedPassword = $row['PASSWORDS'];
            
            if($storedPassword == $password) {
               
                $_SESSION['username'] = $username;

                return true;
            } else {
                return false;
            }
        }
    }

    public function checkUsername($username) {
		if($username != "") {
			$this->username = $this->db->real_escape_string($username);
			return true;
		} else {
			return false;
		}
    }

    public function checkPassword($password) {
		if($password != "") {
			$this->password = $this->db->real_escape_string($password);
			return true;
		} else {
			return false;
		}
    }
    
}
?>