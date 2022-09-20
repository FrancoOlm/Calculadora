let num1
let num2
let operacion
//Variables de los botones
const siete = document.getElementById('7')
const ocho =document.getElementById('8')
const nueve =document.getElementById('9')
const cuatro =document.getElementById('4')
const cinco =document.getElementById('5')
const seis =document.getElementById('6')
const uno =document.getElementById('1')
const dos =document.getElementById('2')
const tres =document.getElementById('3')
const division =document.getElementById('/')
const multiplicacion =document.getElementById('X')
const resta =document.getElementById('-')
const suma =document.getElementById('+')
const cero =document.getElementById('0')
const resultado =document.getElementById('=')
const reiniciar = document.getElementById('reiniciar')
const pantallita = document.getElementById('pantalla')

//funciones para renderizar botones
uno.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '1'}
dos.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '2'}
tres.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '3'}
cuatro.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '4'}
cinco.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '5'}
seis.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '6'}
siete.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '7'}
ocho.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '8'}
nueve.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '9'}
cero.onclick= ()=>{ pantallita.textContent= pantallita.textContent + '0'}

function limpiar (){
    pantallita.textContent= ''
}
suma.onclick= ()=>{ 
    num1 = pantallita.textContent;
    operacion = "+";
    limpiar()
}
division.onclick= ()=>{ 
    num1 = pantallita.textContent;
    operacion = "/";
    limpiar()
}
resta.onclick= ()=>{
    num1 = pantallita.textContent;
    operacion = "-";
    limpiar()
}
multiplicacion.onclick= ()=>{
    num1 = pantallita.textContent;
    operacion = "*";
    limpiar()
}
resultado.onclick= ()=>{
    num2 = pantallita.textContent
    limpiar()
    resolver()
}
reiniciar.addEventListener("click", clickeado)
function clickeado(){
    limpiar()
    resetear()
}

function resetear (){
    pantallita.textContent =''
    num1 = 0
    num2 = 0
    operacion =''
    limpiar()
}
function resolver (){
    let res = 0
    switch (operacion) {
        case '+':
            res = parseFloat(num1) + parseFloat(num2)
            break;
        case '-':
            res = parseFloat(num1) - parseFloat(num2)
            break;
        case '*':
            res = parseFloat (num1) * parseFloat(num2)
            break
        case '/':
            res = parseFloat(num1) / parseFloat(num2)
            break;
        default:
            break;
    }
    resetear()
    pantallita.textContent = res
}
