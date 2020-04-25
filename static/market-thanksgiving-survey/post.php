<?php

$_POST['form_id'] = 25;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://wildwoodhealth.org/wp-json/frm/v2/entries');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_USERPWD, "YG00-G508-IIYT-FGHI:");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($_POST));

$response = json_decode(curl_exec($ch), true);

if (isset($response['id']) && $response['id']) {
    echo true;
} else {
    echo $response["message"];
}

exit();
