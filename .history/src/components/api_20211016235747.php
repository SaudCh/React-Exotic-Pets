<?php
include '../connect.php';

$cities = array();
$sql = "SELECT * FROM alert_queue";
$results = mysqli_query($conn, $sql);
$rescheck = mysqli_num_rows($results);

while ($row = mysqli_fetch_assoc($results)) {
    $cities[$row["community_id"]] = array(
        'community_id' => $row["community_id"],
        'name' => $row["name"],
        'slug' => $row["slug"],
        'page_title' => $row["page_title"],
        'meta_description' => $row["meta_description"],
        'content' => $row["content"],
        'header_img' => $row["header_img"],
        'header_thumb' => $row["header_thumb"],
        'active_listings' => $row["active_listings"],
        'min_price' => $row["min_price"],
        'max_price' => $row["max_price"],
        'last_updated' => $row["last_updated"],
    );
}
$returnData = json_encode($cities);

header('Content-Type: application/json');
echo $returnData;
