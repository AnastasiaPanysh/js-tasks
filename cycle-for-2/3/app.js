/*3. На вход подается число. Необходимо вывести все числа от 1 до введенного числа
кратные 3.*/

const a = 33;
for (let i = 0; i < a; i++) {
    if (i % 3 == 0) {
        console.log(`${i} кратно`)
    }
}