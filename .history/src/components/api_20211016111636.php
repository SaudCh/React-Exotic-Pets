<?php
include 'connect.php'; 


$cities = array();
 $sql = "SELECT * FROM cities";
 $results = mysqli_query($conn, $sql);
 $rescheck = mysqli_num_rows($results);
 
 while ($row = mysqli_fetch_assoc($results)) {
     $cities[$row["city_id"]] = array(
        'city_id' => $row["city_id"],
        'name' => $row['name'],
        'slug' => $row["slug"],
        'page_title' => $row["page_title"],
        'meta_description' => $row["meta_description"],
        'content' => $row["content"],
        'communities' => $row["communities"],
        'Longitude' => $row["Longitude"],
        'Latitude' => $row["Latitude"],
        'SWLng' => $row["SWLng"],
        'SWLat' => $row["SWLat"],
        'NELng' => $row["NELng"],
        'NELat' => $row["NELat"],
        'header_img' => $row["header_img"],
        'header_thumb' => $row["header_thumb"],
        'active_listings' => $row["active_listings"],
        'min_price' => $row["min_price"],
        'max_price' => $row["max_price"],
        'homes_for_sale' => $row["homes_for_sale"],
        'condos_for_sale' => $row["condos_for_sale"],
        'sold_last_month' => $row["sold_last_month"],
        'last_updated' => $row["last_updated"],
        'last_city_updates' => $row["last_city_updates"],
    );
 }
$returnData = json_encode($cities);
  
header('Content-Type: application/json');
echo $returnData;
