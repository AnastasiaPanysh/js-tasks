/*10. На вход подается число произвольной длины. Необходимо обратиться к каждому
значению числа и выявить четность/нечетность
1234 -> 1 неч 2 чет 3 неч 4 чет
7 -> 7 – неч
444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет*/

const str = '1234'.trim();
if (!isNaN(str)) {
    for (let i = 0; i < str.length; i++) {
        if (+str[i] % 2 === 0) console.log(`${str[i]} чет`);
        else console.log(`${str[i]} неч`);
    }
}