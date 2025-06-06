
Условные конструкции позволяют изменить поведение программы в зависимости от проверяемых условий. Благодаря им у нас появляется возможность писать сложные программы, ведущие себя по-разному, в зависимости от ситуации.

Напишем, для примера, функцию, которая определяет тип переданного предложения. Для начала она будет отличать обычные предложения от вопросительных.

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  if (lastChar === '?') {
    return 'question';
  }

  return 'general';
};

getTypeOfSentence('Hodor');  // general
getTypeOfSentence('Hodor?'); // question
```

`if` - конструкция языка, управляющая порядком выполнения инструкций. В скобках ей передается выражение-предикат, а затем описывается блок кода в фигурных скобках. Этот блок кода будет выполнен, только если предикат — истина.

Если предикат — ложь, то блок кода в фигурных скобках пропускается, и функция продолжает свое выполнение дальше. В нашем случае следующая строчка кода — `return 'general';` — заставит функцию вернуть строку и завершиться.

Как видите, `return` может находиться где угодно в функции. В том числе внутри блока кода с условием.

Если в фигурных скобках после `if` содержится только одна строчка кода, то фигурные скобки можно не писать и сделать так:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  if (lastChar === '?')
    return 'question';

  return 'general';
};

console.log(getTypeOfSentence('Hodor'));  // => general
console.log(getTypeOfSentence('Hodor?')); // => question
```

Советуем не делать так и **всегда писать фигурные скобки**. В таком случае явно видно, где начинается и заканчивается тело условия. Код становится более чётким и понятным.
