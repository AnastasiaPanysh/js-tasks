/*19. Пользователь вводит число, явдяющееся количеством элементов будущего
 массива. Напишите код заполнения массива методом prompt. Проверить каждый
prompt на число (ввод строки, проверка на isNaN)*/

const value = +prompt('введиет кол-во элементов в массиве');
const arr = []
let a = prompt('введите значение элемента массива')

for (let i = 0; i <= value; i++) {
    if (!isNaN(a)) {
        continue
    }
    arr.push(a)
}
console.log(arr);

//намудрила