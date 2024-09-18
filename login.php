<?php
$users = [
    'Maitane' => '150904',
    'Jon' => '260703'
];

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (array_key_exists($username, $users) && $password === $users[$username]) {
    header('Location: index.html');
    exit;
} else {
    // Redirige de vuelta a la página de inicio de sesión con un parámetro de error
    header('Location: index.html?error=true');
    exit;
}
?>
