// 3. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

(function getNumObj(newObj) {
    let res = newObj.filter(el => {
        return !isNaN(el) ? true : false
    })
})
([{
    id: 1,
    name: 'Nastya',
    age: 21
}])

//тоже разобрать