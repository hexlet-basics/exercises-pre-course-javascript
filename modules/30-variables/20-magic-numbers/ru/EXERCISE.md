
Вы столкнулись с таким кодом, который выводит на экран общее количество комнат во владении нынешнего короля:

```javascript
let king = 'King Balon the 6th';
console.log(king + ' has ' + (6 * 17) + ' rooms.');
```

Как видите, это магические числа: непонятно, что такое 6 и что такое 17. Можно догадаться, если знать историю королевской семьи: каждый новый король получает в наследство все замки от предков и строит новый замок — точную копию родительского.

Эта странная династия просто плодит одинаковые замки…

Избавьтесь от магических чисел, создав новые переменные, и выведите текст на экран.

Получится так:

<pre class='hexlet-basics-output'>
King Balon the 6th has 102 rooms.
</pre>

Названия переменных должны передавать смысл чисел, но должны при этом оставаться достаточно короткими и ёмкими для комфортного чтения.

Помните: код будет работать с любыми названиями, а наша система всегда проверяет только результат на экране, поэтому выполнение этого задания — под вашу ответственность.
