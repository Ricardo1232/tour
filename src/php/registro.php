<?php

function registro($conexion, $nombre, $correo) {
    // Validar longitud del nombre (máximo 50 caracteres)
    if (strlen($nombre) > 50) {
        return false; // Error: El nombre supera los 50 caracteres
    }

    // Validar longitud del correo (máximo 50 caracteres)
    if (strlen($correo) > 50) {
        return false; // Error: El correo supera los 50 caracteres
    }

    // Escapar caracteres especiales para evitar inyección SQL
    $nombre = $conexion->real_escape_string($nombre);
    $correo = $conexion->real_escape_string($correo);

    // Preparar consulta INSERT
    $query = "INSERT INTO tour_usuarios (nombre, correo) VALUES ('$nombre', '$correo')";

    // Ejecutar consulta y verificar resultado
    if ($conexion->query($query) === TRUE) {
        return true; // Registro exitoso
    } else {
        return false; // Error al insertar registro
    }
}

// Procesar formulario si el método es POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["nombre"]) && isset($_POST["correo"])) {
        require_once 'conexion.php';

        $nombre = $_POST["nombre"];
        $correo = $_POST["correo"];

        // Validar longitud de nombre y correo
        if (registro($conexion, $nombre, $correo)) {
            $conexion->close();
            header('Location: http://localhost:4321/');
            echo "Usuario agregado correctamente";
            exit();
        } else {
            echo "Error: El nombre o correo superan los 50 caracteres.";
        }
    } else {
        echo "Error: No se recibieron todos los datos del formulario.";
    }
} else {
    echo "Error: La solicitud debe ser de tipo POST.";
}

?>