const fs = require('fs');

function importar(marca) {
    const filePath = `./datos/figuras${marca}.json`;

    try {
    const data = fs.readFileSync(filePath, 'utf-8');

    const figuras = JSON.parse(data);

    return figuras; 
    }
    catch (error) {
    console.error(`Error al importar las figuras de la marca ${marca}: ${error}`);
    return [];
  }
}
module.exports = {
  importar,
};
