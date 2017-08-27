<?php

  require_once 'PHPMailerAutoload.php';

    if (isset($_POST['email'])) {
  
$m = new PHPMailer;

$m->isSMTP();
$m->SMTPAuth = true;
$m->SMTPDebug = true;
$m->do_debug = 2;
$m->Host = 'az-serwer1786047.online.pro';
$m->Username = 'formularz@debeto.pl';
$m->setFrom('formularz@debeto.pl', 'Debeto');
$m->Password = 'Debeto01456!';
$m->SMTPSecure = 'ssl';
$m->Port = 465;

$m->Subject = 'Contact Form submitted';
$m->Body = 'Nowy subskrybent: ' . $_POST['email'];
$m->FromName = 'Debeto Landing Page';





    $m->AddAddress('kontakt@debeto.pl', 'formularz');
	
     if ($m->send()) {
        echo 'Thank You '.$_POST["email"].' We Will Contact You Soon franchise form';
       die();
    } else {
        echo 'try again later';
    }


 }