/*6. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так -
выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и
само значение деления*/

let a = +prompt('Введите значение');
let b =+prompt('Введите значение');

if(a%b === 0){
    console.log(`делится ;${a/b}`);
}else{
    console.log(`делится c остатком ;${a%b}`);
}