import http from 'http';

const PORTA = 3000;
const SERVER = 'localhost';

const server = http.createServer((req, res) => {

    if(req.url === "/cadastro" && req.method === "POST")
    {
        res.end("Rota de cadastro");
        return;
    };

    res.end("Acessou: " + Date.now("dd/MM/YYYY"));
});

server.listen(PORTA, SERVER, () => {
    console.log(`On Air in ${PORTA} server ${SERVER}`); 
});