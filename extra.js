const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [numero0, , numero2, , numero4, ...restoNumeros] = numerosArray;
const nuevoArray = [...restoNumeros];

const mascota = {
    nombre: 'Bony',
    tipo: 'Perro',
    color: 'Dorado',
    raza: 'Golden retriever'
};

const { nombre, tipo, color, raza } = mascota;

console.log(`Hola les presento a mi mascota, su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);
console.log('Número en posición 0:', numero0);
console.log('Número en posición 2:', numero2);
console.log('Número en posición 4:', numero4);
console.log('Nuevo array de números:', nuevoArray);
