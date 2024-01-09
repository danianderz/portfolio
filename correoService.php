<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $tema = $_POST['tema'];
    $mensaje = $_POST['mensaje'];

    // Construir el cuerpo del correo
    $cuerpoCorreo = "Nombre: $nombre\nTeléfono: $telefono\nEmail: $email\nTema: $tema\nMensaje: $mensaje";

    // Crear una instancia de CorreoService
    $correoService = new CorreoService();

    // Enviar el correo
    $resultado = $correoService->enviarCorreo($email, "Nuevo mensaje de contacto", $cuerpoCorreo);

    if ($resultado) {
        echo "Correo enviado correctamente";
    } else {
        echo "Error al enviar el correo";
    }
} else {
    echo "Acceso denegado";
}
class CorreoService {
    private $brevoApiKey = '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';
    private $brevoApiUrl = 'https://api.brevo.com/v3/smtp/email';

    public function enviarCorreo($correo, $asunto, $cuerpo) {
        $mensaje = [
            'sender' => [
                
                'email' => $correo,
            ],
            'to' => [
                [
                    'email' => "andsanchez017@gmail.com",
                    'name' => "Daniel",
                ],
            ],
            'subject' => $asunto,
            'htmlContent' => $cuerpo,
        ];

        $headers = [
            'http' => [
                'header' => "Content-type: application/json\r\n" .
                            "accept: application/json\r\n" .
                            "api-key: " . $this->brevoApiKey,
                'method' => 'POST',
                'content' => json_encode($mensaje),
            ],
        ]; 

        $context = stream_context_create($headers);

        try {
            $resultado = file_get_contents($this->brevoApiUrl, false, $context);
            return $resultado;
        } catch (Exception $e) {
            // Muestra información sobre el error
            echo 'Excepción capturada: ',  $e->getMessage(), "\n";
            return false;
        }
    }
}
?>