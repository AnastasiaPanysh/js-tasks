// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

const a = 2;
const b = 3;
const c = 7;

function checkTriangle(a, b, c) {
    try {
        if (a + b < c || b + c < a || c + a < b) throw new Error('треугольника с такими сторонами не существует')
        return a, b, c
    } catch (error) {
        return error.message
    }
}
console.log(checkTriangle(a, b, c));