
Представим себе, что программа из прошлого урока выглядит так:

```javascript
let x = 'Father!';
console.log(x);
console.log(x);
```

Она по прежнему работает, но в ней изменилось имя переменной на `x`. Компьютеру без разницы, как мы называем переменные, это бездушная машина, но вот программистам — нет. Мы гораздо чаще читаем код, чем пишем. Причём не свой, а написанный другими людьми. От качества и понятности имён переменных зависит половина успеха в анализе кода.

Лучше посидеть и придумать название, которое описывает суть, смысл переменной, чем назвать её как попало, а в будущем переделывать. Постарайтесь давать им такие имена, чтобы они были максимально понятны без контекста, без изучения окружающего кода.

Существует общепринятое правило: не используйте транслит для имён, только английский язык. Если вы испытываете сложности с английским, то пользуйтесь переводчиком. Со временем, копаясь в чужом коде, вы сформируете правильные понятия для именования.

Среди разработчиков есть шутка: «самое сложное в программировании — названия переменных и инвалидация кеша». Придумывать названия и правда сложно. Как бы вы назвали переменную, в которой хранится *количество неоплаченных заказов от клиентов, имеющих задолженность в предыдущем квартале?*

<details>
<summary>Ответ</summary>

Правильного и однозначного ответа на этот вопрос нет. Например, можно использовать название `unpaidOrdersFromDebtorsInPreviousQuarterCount`.

Это имя хорошо описывает содержание переменной и позволяет легко идентифицировать ее смысл в коде. При этом оно слишком длинное и сложное, поэтому лучше использовать более краткое имя — например, `unpaidOrdersFromDebtorsCount` или `debtorsUnpaidOrdersCount`. В общем, выбор имени для переменной зависит от контекста использования.
</details>

В JavaScript в именах констант и переменных каждое слово пишется с заглавной буквы, кроме первого. Например:

```javascript
const firstName = 'John';
console.log(firstName); // => John

const playerNumber = 24;
console.log(playerNumber); // => 24
```

Самопроверка. Придумайте название для переменной, в которой будет храниться *«количество братьев и сестёр короля»*. Запишите его в блокноте или отправьте себе на почту. Не указывайте там ничего, кроме названия переменной. А через несколько уроков мы вернёмся к этой теме ;-)