
Агрегация применяется не только к числам, но и к строкам. Это такие задачи, в которых строка формируется динамически, то есть заранее неизвестно, какого она размера и что будет содержать.

Представьте себе функцию, которая умеет «умножать» строку, то есть она повторяет её указанное количество раз:

```javascript
repeat('hexlet', 3); // hexlethexlethexlet
```

Принцип работы этой функции довольно простой: в цикле происходит «наращивание» строки указанное количество раз:

```javascript
const repeat = (text, times) => {
  // Нейтральный элемент для строк – пустая строка
  let result = '';
  let i = 1;

  while (i <= times) {
    // Каждый раз добавляем строку к результату
    result = `${result}${text}`;
    i = i + 1;
  }

  return result;
};
```

https://replit.com/@hexlet/js-basics-aggreagation

Распишем выполнение этого кода по шагам:

```javascript
// Для вызова repeat('hexlet', 3);
let result = '';
result = `${result}hexlet`; // hexlet
result = `${result}hexlet`; // hexlethexlet
result = `${result}hexlet`; // hexlethexlethexlet
```
