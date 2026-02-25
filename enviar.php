<?php
// Pega os dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $assunto = htmlspecialchars($_POST['subject']);
    $mensagem = htmlspecialchars($_POST['message']);


    $to = "gfas.gustavo@gmail.com"; 
    $subject = "Assunto do Email: " . $assunto;

    
    $body = "Nome: $nome\n";
    $body .= "E-mail: $email\n\n";
    $body .= "Mensagem:\n$mensagem\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";


    // Envia
    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>Mensagem enviada com sucesso!</h2>";
    } else {
        echo "<h2>Erro ao enviar a mensagem. Tente novamente.</h2>";
    }
} else {
    echo "<h2>Acesso inválido.</h2>";
}
?>
