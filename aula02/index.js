const data = new Date();
const dia = data.getDate();
const mes = data.getMonth()+1;
const ano = data.getFullYear();
console.log(`Hoje é dia: ${dia}/${mes}/${ano}`);