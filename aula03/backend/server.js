import http from 'http';

const server = http.createServer((req, res) => {
    // const total = 100 + 2 + 5+ 3 /25 * 2;
    // res.end(`O total foi: ${total}`);
    let n1=10;
    let n2=5;
    let result = n1+n2;
    if(result % 2 == 0)
    {
        res.end(`Numero ${result} eh par.`);
    }
    else
    {
        res.end(`Numero ${result} eh impar.`);
    }

});

server.listen(3000, 'localhost');