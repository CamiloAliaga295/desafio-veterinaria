/* const fs = require('fs')



const registrar = () => (nombre, edad, tipo, color, enfermedad)=>{
    const data = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    }
    fs.writeFileSync("citas.json", JSON.stringify(data));
    console.log("data creada satisfactoriamente");
}

const leer = () => {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log(data) 
}

module.exports = {
    registrar,
    leer,
}; */


const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad)=>{

const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    data.push({nombre, edad, tipo, color, enfermedad});
    fs.writeFileSync('citas.json', JSON.stringify(data));
    console.log("data creada satisfactoriamente");
}

const leer = () => {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log(data) 
}

module.exports = {
    registrar,
    leer,
};

