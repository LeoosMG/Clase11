const fs = require('fs');
const collectiblesModule = require('./collectibles.js');

const { importar } = collectiblesModule;

const hotToysFigures = importar('1');
const bandaiFigures = importar('2');
const starWarsFigures = importar('3'); 


const unifiedCollectibles = [...hotToysFigures, ...bandaiFigures, ...starWarsFigures];

const collectibles = {
    figuras: unifiedCollectibles,

    listFigures: function () {
        this.figuras.forEach(figura => {
            console.log('Marca:', figura.marca);
            console.log('Nombre:', figura.nombre);
            console.log('Precio:', figura.precio);
            console.log('Stock:', figura.stock);
            console.log('---');
        });
    },

    figuresByBrand: function (marca) {
        return this.figuras.filter(figura => figura.marca === marca);
    }
};

console.log('== Lista de todas las figuras coleccionables ==');
collectibles.listFigures();
console.log('== Figuras coleccionables de Star Wars ==');
console.log(collectibles.figuresByBrand('Star Wars'));
console.log('== Figuras coleccionables de Bandai ==');
console.log(collectibles.figuresByBrand('Bandai'));
console.log('== Figuras coleccionables de Hot Toys ==');
console.log(collectibles.figuresByBrand('Hot Toys'));


