// Clase Usuario
class Usuario {
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }

    login() {
        console.log(this.nombre + " ha iniciado sesión");
    }

    logout() {
        console.log(this.nombre + " ha cerrado sesión");
    }
}

// Clase Pantalla
class Pantalla {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrar() {
        console.log("Mostrando pantalla: " + this.nombre);
    }

    ocultar() {
        console.log("Ocultando pantalla: " + this.nombre);
    }
}

// Clase Sistema
class Sistema {
    constructor() {
        this.usuarios = [];
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    validarLogin(nombre) {
        return this.usuarios.find(u => u.nombre === nombre);
    }

    navegar(pantalla) {
        pantalla.mostrar();
    }
}

// 🔥 INSTANCIAS Y EJECUCIÓN

const sistema = new Sistema();

const usuario1 = new Usuario("Maria", "1234");
const pantallaInicio = new Pantalla("Inicio");
const pantallaLogin = new Pantalla("Login");
const pantallaDashboard = new Pantalla("Dashboard");

sistema.agregarUsuario(usuario1);

// Simulación de uso
pantallaInicio.mostrar();

let usuarioEncontrado = sistema.validarLogin("Maria");

if (usuarioEncontrado) {
    usuarioEncontrado.login();
    sistema.navegar(pantallaDashboard);
} else {
    console.log("Usuario no encontrado");
}