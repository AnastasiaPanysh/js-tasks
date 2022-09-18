// 16. *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n.
// Необходимо разбить данный одномерный массив на маленькие массивы в
// зависимости от того, какого число ввел пользователь. Добавить проверки на ввод
// числа (значение n не должно быть больше длины массива, 0, пустая строка,
// строковый тип данных). Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]

const arr = [1, 2, 3, 4, 5, 6];
let n = 3
let result = []
if (!isNaN(n) && n < arr.length) {
    for (let i = 0; i < Math.ceil(arr.length / n); i++) {
        result.push(arr.splice(i, i + n))
    }
}
console.log(result);

