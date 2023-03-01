const decisao=process.argv[2].toLowerCase(); 
const usuario=Number(process.argv[3]);

function geradorNumerico(min,max){
return Math.floor(Math.random() * (max - min + 1)) + min
}
const computador =(geradorNumerico(0,10))
const resultado = usuario+ computador

if(decisao ==="par" && resultado % 2 ===0 ){
    console.log(`Você escolheu par com numero ${ usuario} e o computador impar com o numero ${computador}, resultado final ${resultado}, você venceu`)
}
else if(decisao==="par" && resultado %2 !==0){
    console.log(`Você escolheu par com numero ${ usuario} e o computador impar com o numero ${computador} resultado final ${resultado}, computador venceu`)
}else if(decisao ==="impar" && resultado %2 == 0){
    console.log(`Você escolheu impar com numero ${ usuario} e o computador par com o numero ${computador} resultado final ${resultado}, computador venceu`)
}else if (decisao ==="impar" && resultado %2 !== 0){console.log(`Você escolheu impar com numero ${ usuario} e o computador impar com o numero ${computador}  resultado final ${resultado}, você venceu`)}