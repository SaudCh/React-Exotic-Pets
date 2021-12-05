<?php
include '../connect.php'; 


$cities = array();
 $sql = "SELECT * FROM cities";
 $results = mysqli_query($conn, $sql);
 $rescheck = mysqli_num_rows($results);
 
 while ($row = mysqli_fetch_assoc($results)) {
     $cities[$row["queue_id"]] = array(
        'queue_id' => $row["queue_id"],
        'user_id' => $row['user_id'],
        'user_email' => $row["user_email"],
        'MLSNumber' => $row["MLSNumber"],
        'DefaultPic' => $row["DefaultPic"],
        'BathsTotal' => $row["BathsTotal"],
        'BedsTotal' => $row["BedsTotal"],
        'SubCondoName' => $row["SubCondoName"],
        'CurrentPrice' => $row["CurrentPrice"],
        'GarageSpaces' => $row["GarageSpaces"],
        'PropertyAddress' => $row["PropertyAddress"],
        'PropertyInformation' => $row["PropertyInformation"],
        'TotalArea' => $row["TotalArea"],
        'ListOfficeName' => $row["ListOfficeName"],
        'EmailNotification' => $row["EmailNotification"],
        'AppNotification' => $row["AppNotification"],
        'date' => $row["date"],
    );
 }
$returnData = json_encode($cities);
  
header('Content-Type: application/json');
echo $returnData;
