// 2) Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
// não exista a função deve retornar undefined.

// Se o usuário existir mostrar as informações do usuário no seguinte formato:
// Usuário encontrado: 
// nome: [nome do usuário]
// idade: [idade do usuário]
// email: [email do usuário]

// Caso o usuário não existir mostrar a mensagem: "Usuário não foi encontrado."

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

async function getUserByName(name) {
        try {
            const data = (await fs.readFile(path.resolve("users.json"))).toString("utf-8");
            const users = JSON.parse(data);
            console.log(users);
            console.log(data);

        } catch (err) {
            console.log(err.message);
        }
};