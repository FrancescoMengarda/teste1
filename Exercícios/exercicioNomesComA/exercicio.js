const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

// fs.readFile(path.resolve(__dirname, "exercicioNomes.txt"), (err, data) => {
//     if (err) {
//         return console.log(err.message);
//     }

//     // data é um Buffer: https://nodejs.org/docs/latest-v14.x/api/buffer.html#buffer_class_buffer
//     // Portanto precisamos converter para utf-8 para conseguirmos visualizar o conteúdo do arquivo.
//     console.log(data.toString("utf-8"));
// });

(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const startsWithA = data.toString("utf-8").split(EOL);
        console.log(startsWithA.filter((startsWithA) => startsWithA.startsWith("A")).toString("utf-8"));
    } catch (err) {
        console.log(err.message);
    }
})();

// const startsWithA = data.filter((data) => d.startsWith("N"));

// console.log(startsWithA);