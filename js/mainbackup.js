var firstNam = 'Óscar'; // HOISTING

// string = "texto" = `texto` = 'texto'
// não usar var = variaveis globais

const firstName= "Óscar"; // string
const lastName = "Mansura"; // nunca se pode trocar a variavel

console.log(firstNam); // em modo cascata

let age = 37; // number
age = "Óscar";
console.log(age); // type // typescript

const isMale = true; // boolean  // 0 | 1 false | true

const birthDate = new Date(1984, 11, 4); // index 0 começa a contar do 0  11 = dezembro
const now = new Date(); 

console.log(birthDate); // quando nasci dia terça
console.log(now); // hora actual 

// Arrays "Armario como arrumar gaveta meias, gaveta cuecas"

const students = ["Miguel", "Maria", "João", "Paulo", "Ana"]; // primitives vs references
console.log(students);

students.push('Catarina', 'Joaquim'); // adiciona 2 nomes no fim
console.log(students);

students.unshift('Gabriela', 'Rafaela'); // adiciona nomes no inicio
console.log(students);

students.pop(); // remove o ultimo 
console.log(students);

students.shift(); // remove o primeiro 
console.log(students);

students.splice(2, 1, "Mariana"); // substitui // adicionar (, "José", "David")
console.log(students);

console.log(students[0]);

// Objects

const student = {
    name: "Óscar",
    surname: "Mansura",
    age: 37,
    isMale: true,
}
console.log(student.name);

// Arrays with Objects

const flag = [
    {
        name: 'Maria',
        age: 22,
        hobbies: ['bodyboard', 'surf']
    },
    {
        name: 'Manuel',
        age: 37,
    },
    {
        nome: 'João',
        age: 25,
    }

];

const carlItems = [
    {
        label: 'T-shirt',
        price: 3.5,
        quantity: 2,
    },
    {
        label: 'TV',
        price: 500,
        related: [2, 7],
    }
];

const toDos = [
    {
        label: 'Aprender Javascript',
        isCompleted: false,
        related: [5, 70]
    },
    {
        label: 'Aprender HTML',
        isCompleted: true
    }
]

// Functions

function sayHello() { // aparece sempre seja em cima ou em baixo

}
const sayHello = function(){ // invoca se sempre depois, hoje em dia é melhor

}
const sayHello = () => { // arrow function - (this) = Eu

}

function login() {

}

function logout() {

}

function register() {

}

// Condicionals

if (age >= 17) { 
    // execute
} else if (age < 3) {
    //bot
} else {

}
const theme = 'dark';
switch (key) {
    case 'dark':
        // change the background color
        break; // quando assume o objectivo salta fora, para o final
    case 'light':

        break;
        case 'christmas':

        break;
    default:

        break;
}

// Operators

3 != 4 // diferente
3 == 4 // igual
3 === "3" // false numerico === stringe

// Loops

for     // comum
for of  // recente
for in  
for each
map     // muito usado em react

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (const banana of toDos) {
    
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

array.forEach(element => {
    
});

while (condition) {
    
}

// Events

element.addEventListener('click', toggleFavourite)
element.addEventListener('focus', toggleFavourite)
element.addEventListener('keyup', toggleFavourite) // tecla para baixo tipo acelarar

// DOM Manipulation

document.querySelector('body').style.backgroundColor = 'dark'; // vai buscar o que se pede

// muda o icon de '+' para '-' e fecha as janelas
const faqs = document.querySelectorAll('.faqs__header');
const faqsContainer = document.querySelectorAll('.faqs__element');

faqs.forEach((element) => {
    element.addEventListener('click', toggleFaqs);
})

function toggleFaqs (e) {
    const parent = e.target.closest('.faqs__element');
    parent.classList.contains('faqs__element--open') ?  null : closeFaq() ;
    parent.classList.toggle('faqs__element--open');
    changeIcon(parent)
}

function closeFaq () {
    faqsContainer.forEach( container => {
        if(container.classList.contains('faqs__element--open')) {
            container.classList.toggle('faqs__element--open');
            changeIcon(container.children[0])
        }
    })
}
// muda o icon de '+' para '-'  
function changeIcon(parent) {
    if (parent.classList.contains('faqs__element--open')) {
        parent.querySelector('.faqs__icon').textContent = 'remove'
    }   else {
        parent.querySelector('.faqs__icon').textContent = 'add'
    }
}