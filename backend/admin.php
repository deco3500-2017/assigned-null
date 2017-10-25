<?php
/**

Special mention to Jack Kerr for his brilliant tutoring and indepth knowledge.
Most code and/or its ideas are sourced from  (Github: jack775544)

*/
header("Access-Control-Allow-Origin: *");

/**
 * Makes a database connection
 * @return PDO The connection to the database
 */
function connect_database()
{
	//login to access mysql db
    $servername = "localhost";
    $username = "toor";
    $password = "toorroot";

    try {
        $db = new PDO("mysql:host=$servername;dbname=Studymates", $username, $password);
        // set the PDO error mode to exception
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    catch(PDOException $e)
        {
        $e->getMessage();
        }
    return $db;
}
