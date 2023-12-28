
```javascript
'Hello'
'Goodbye'
'G'
' '
''
```

Какие из этих пяти вариантов — строки?

С первыми двумя все понятно, это точно строки, мы уже работали с подобными конструкциями и говорили, что строки - это наборы символов.

Любой одиночный символ в кавычках — это строка. Пустая строка `''` — это тоже строка. То есть строкой мы считаем всё, что находится внутри кавычек, даже если это пробел, один символ или вообще отсутствие символов.

Ранее в уроках мы записывали строки в одинарных кавычках, но это не единственный способ. Можно использовать и двойные:

```javascript
// Стандарт кодирования airbnb, рекомендует
// использовать, по возможности, одинарные
console.log("Dracarys!");
```

Представьте, что вы хотите напечатать строчку _Dragon's mother_. Апостроф перед буквой **s** — это такой же символ, как одинарная кавычка. Попробуем:

```javascript
console.log('Dragon's mother');
// Uncaught SyntaxError: missing ) after argument list
```

Такая программа не будет работать. С точки зрения JavaScript, строка началась с одинарной кавычки, а потом закончилась после буквы **n**. Дальше были символы `s mother` без кавычек — значит, это не строка. А потом была одна открывающая строку кавычка, которая так и не закрылась: `');`. Этот код синтаксически некорректен (это видно даже по тому, как подсвечен код).

Здесь нам помогут двойные кавычки. Такой вариант программы отработает корректно:

```javascript
console.log("Dragon's mother");
```

Теперь интерпретатор знает, что строка началась с двойной кавычки — значит, и закончиться должна на двойной кавычке. А одинарная кавычка внутри стала частью строки.

Верно и обратное. Если внутри строки мы хотим использовать двойные кавычки, то саму строку надо делать в одинарных. Причем количество кавычек внутри самой строки не важно.

А что, если мы хотим создать такую строку:

```
Dragon's mother said "No"
```

В ней есть и одинарные и двойные кавычки. Как быть в этой ситуации? Нужно каким-то образом сказать интерпретатору считать каждую кавычку частью строки, а не началом или концом строки.

Для этого **экранируют** специальные символы. В нашем случае тот символ, который является признаком конца и начала строки, это либо одинарная кавычка, либо двойная, в зависимости от ситуации. Для экранирования используется обратный слеш `\`.

```javascript
// Экранируется только ", так как в этой ситуации
// двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No"
```

Посмотрите внимательно: нам нужно было добавить `\` для двойных кавычек, но не для одинарной (апостроф), потому что сама строка создана с двойными кавычками. Если бы строка создавалась с одинарными кавычками, то символ экранирования нужен был бы перед апострофом, но не перед двойными кавычками.

```javascript
// \ не выводится, если после него идет обычный,
// а не специальный символ
console.log("Death is \so terribly final");
// => Death is so terribly final
```

А что, если нужно вывести сам обратный слеш? Точно так же, как и любой другой специальный символ, его надо экранировать самим собой.

```javascript
console.log("\\");
// => \
```

Вопрос на самопроверку, что выведет этот код?

```javascript
console.log("\\ \\ \\\\ \\\ \'\"");
```

<details>
<summary>Ответ</summary>

Этот код выведет такую строку: `\ \ \\ \ '"`.

</details>