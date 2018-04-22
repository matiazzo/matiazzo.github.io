<?php
 
require_once('phpmailer/class.phpmailer.php'); /* classe PHPMailer */
 
/* Recebe os dados do cliente ajax via POST */
$nome = $_POST['nome'];
$email = $_POST['email'];
$msg = $_POST['msg'];
 
try {
$mail = new PHPMailer(true); //New instance, with exceptions enabled
 
/* CORPO DO E-MAIL */
$body .= "<h2>Enviando e-mails com AJAX e PHP via SMTP</h2>";
$body .= "Nome: $nome <br>";
$body .= "E-mail: $email <br>";
$body .= "Mensagem:<br>";
$body .= $msg;
$body .= "<br>";
$body .= "----------------------------";
$body .= "<br>";
$body .= "Enviado em <strong>".date("h:m:i d/m/Y")." por ".$_SERVER['REMOTE_ADDR']."</strong>"; //mostra a data e o IP
$body .= "<br>";
$body .= "----------------------------";
 
$mail->IsSMTP(); //tell the class to use SMTP
$mail->SMTPAuth = true; // enable SMTP authentication
$mail->SMTPSecure = 'tls';
$mail->Port = 465; //SMTP porta (as mais utilizadas são '25' e '587'
$mail->Host = "cp-22.webhostbox.net"; // SMTP servidor
$mail->Username = "andre@mtzz.co";  // SMTP  usuário
$mail->Password = "Paolo090187$";  // SMTP senha
 
$mail->IsSendmail(); 
 
$mail->AddReplyTo($email, $nome); //Responder para..
$mail->From = $email; //e-mail fornecido pelo cliente
$mail->FromName   = $nome; //nome fornecido pelo cliente
 
$to = "andre@mtzz.co"; //Enviar para
$mail->AddAddress($to);
$mail->Subject  = "Marcas Design Estratágico"; //Assunto
$mail->WordWrap   = 80; // set word wrap
 
$mail->MsgHTML($body);
 
$mail->IsHTML(true); // send as HTML
 
$mail->Send();
echo 'Mensagem enviada com sucesso.'; //retorno devolvido para o ajax caso sucesso
} catch (phpmailerException $e) {
echo $e->errorMessage(); //retorno devolvido para o ajax caso erro
}
- See more at: http://vinteum.com/enviando-email-com-ajax-php-smtp/#sthash.PYJkMbtE.dpuf
?>