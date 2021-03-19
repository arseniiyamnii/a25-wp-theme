<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


function ajax_form(){
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

    //Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    echo getenv('SMTP_URL');
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = $_ENV['SMTP_URL'];                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = $_ENV['SMTP_USER'];                     //SMTP username
    $mail->Password   = $_ENV['SMTP_PASS'];                     //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = $_ENV['SMTP_PORT'];                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('a.y.corporated@gmail.com', 'Arsenii Yamnii');
    $mail->addAddress('yamnii@ya.ru', 'Joe User');     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML


    $name = $_REQUEST['name'];
    $tel = $_REQUEST['tel'];
    $useremail = $_REQUEST['useremail'];
    $response = '';
    $thm  = 'Заказ звонка';
    $thm  = "=?utf-8?b?". base64_encode($thm) ."?=";
    $msg = "Имя: ".$name."<br/> Телефон: ".$tel ."<br/> почта ".$useremail."<br/>";
    $mail_to = 'yamnii@ya.ru';
    $headers = "Content-Type: text/html; charset=utf-8\n";
    $headers .= 'From: a.y.corporated@gmail.com' . "\r\n";
    $mail->Subject = $thm;
    $mail->Body    = $msg;
    $mail->AltBody = $msg;

    if( $mail->send() ){
        $response = 'Сообщение отправлено';
    }else
        $response = 'Ошибка при отправке';

    // Сообщение о результате отправки почты

    if ( defined( 'DOING_AJAX' ) && DOING_AJAX ){
        echo $response;
        wp_die();
    }
}

add_action('wp_ajax_nopriv_ajax_order', 'ajax_form' );
add_action('wp_ajax_ajax_order', 'ajax_form' );

add_action( 'wp_mail_failed', 'onMailError', 10, 1 );

