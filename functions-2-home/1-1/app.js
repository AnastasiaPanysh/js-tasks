// 1. *Напишите функцию, рассчитывающую ряд Фибоначчи используя рекурсию.
// Числа Фибоначчи – ряд натуральных (целых и положительных) чисел, каждое из
// которых является суммой двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233


function doFibonacci(n) {
     if (n === 1) return 1
     return n <= 2 ? n : doFibonacci(n - 1) + doFibonacci(n - 2)
}
console.log(doFibonacci(5));

