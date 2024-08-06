const yargs  = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv

console.log(argv);

const tasks = [
    {
        id: 1,
        title: "Cortar Grama"
    },
    {
        id: 2,
        title: "Cortar Cabelo"
    }
];

const listar = () => {
    tasks.forEach(item => {
        console.log(item);
    });  
}

if(argv.operation === 'list')
{
    listar();
}
else{
    console.log("Operação não encotrada");
}
