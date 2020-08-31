//ejs 1-13

//
//EJ1 Imprimir por consola un mensaje guardado en una variable usando la función console.log()
console.log("\n ejercicio 1:");

var x = "hola mundo";
console.log(x);

//
//EJ2  Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()
console.log("\n ejercicio 2:");

var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","sepriembre","octubre","noviembre","diciembre"]

for (var m of meses){
    console.log(m);
}

//
//EJ3 Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

console.log("\n ejercicio 3:");

function isPar (numero){
    if(numero % 2 === 0){
        return "par";
    }
    return "impar";
}

var numeros = [3,6,8,21];

for(var i of numeros){
    console.log(isPar(i));
}

//
//EJ4 Define una función que dado un array de números nos dice si alguno es par.
console.log("\n ejercicio 4:");
var algunoEsPar = numero => numero % 2 === 0 ;

console.log(numeros.some(algunoEsPar)); // uso array del ejercicio 3

//
//EJ5 Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4
console.log("\n ejercicio 5:");
var notas = [4,6,8,2,5]
var isAprobado = nota => nota >= 4;
console.log(notas.every(isAprobado));

var notas = [4,6,8,6,5]
var isAprobado = nota => nota >= 4;
console.log(notas.every(isAprobado));
//
//EJ6  Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.
console.log("\n ejercicio 6:");

var curso = [[6,8,4,6],[7,3,6,9],[2,7,4,5],[6,8,5,4],[7,7,7,7]];

function quienesAprobaron(curso, criterio){
var aprobados = []
    for(i of curso){
        if(i.every(criterio)){
            aprobados.push(i);
        }
    }
    return aprobados;
}
var aprobados = quienesAprobaron(curso,isAprobado);
aprobados.forEach(aprobado => console.log(aprobado));


//
//EJ7  Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
console.log("\n ejercicio 7:");

var numeracos = [3,5,76,6,1,3,-80];
function hayAlgunNegativo(numeros){
        console.log(numeros.some(x => Math.sign(x) === -1));    
}
hayAlgunNegativo(numeracos);

//
//EJ8 Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen
console.log("\n ejercicio 8:");

function cuantosCumplen(lista,condicion){
var cont = 0;
    for(var i of lista){
        if(condicion(i)){
            cont++
        }
    }
    return cont;
}
console.log(cuantosCumplen(numeros,num => num >= 5));

//
//EJ9 Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen
console.log("\n ejercicio 9:");
function rechazar(lista,condicion){
var rechazados = [];
for (i of lista){
    if(!condicion(i)){
        rechazados.push(i);
    }
}
return rechazados;
}
var rechazados = rechazar(numeros,(elemento) => elemento >=10); //numeros = [3,6,8,21] (ej3)
rechazados.forEach(elemento => console.log(elemento));
//
//EJ10 Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento
console.log("\n ejercicio 10:");

function contiene(lista,elemento){
return lista.some(algo => algo === elemento);
}
console.log(contiene(numeros,21)); //numeros = [3,6,8,21] (ej3)

//
//EJ11 Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.
console.log("\n ejercicio 11:");

class Persona {
    edad;
    nombre;
    constructor(nombre,edad){
this.edad = edad;
this.nombre = nombre;
this.presentarse = saluda => console.log("hola, soy "+this.nombre+" y tengo "+this.edad+" años");
}

}
var juan = new Persona ("juan perez",18);
juan.presentarse();
//
//EJ12Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.
console.log("\n ejercicio 12:");

class Estudiante extends Persona{
    profesor;

    constructor(nombre,edad,profesor = "nadie"){
        super(nombre,edad);
        this.profesor = profesor;
    }
    estudiando() {
        console.log("estudiando con "+this.profesor);
    }
    setProfesor(nombre){
        this.profesor = nombre;
    }
}
var pedro = new Estudiante("pedro casero",20);
pedro.setProfesor("Federico Ranchero");
pedro.estudiando();
//
//EJ13 Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante. Además debe tener dos métodos, enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante 
console.log("\n ejercicio 13:");

class Profesor extends Persona{
    estudiantes = [];
    constructor(nombre,edad,){
        super(nombre,edad);
    }
    enseñando(){
        this.estudiantes.forEach(estudiante => console.log(estudiante.nombre+" está en su clase"));
    }
    addEstudiante(estudiante){
        this.estudiantes.push(estudiante);
        estudiante.setProfesor(this.nombre); 
    }
}

var prof1 = new Profesor("federico ranchero",35);
prof1.presentarse();
prof1.addEstudiante(new Estudiante("pedro salazar",30));
prof1.addEstudiante(new Estudiante("marco tumultuo",20));
prof1.addEstudiante(new Estudiante("diego cloracepan",18));
prof1.addEstudiante(new Estudiante("sandra paracetamol",15));
prof1.enseñando();

prof1.estudiantes[0].estudiando();