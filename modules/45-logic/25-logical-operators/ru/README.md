
Логические выражения могут объединяться друг с другом, создавая все более хитрые проверки. Хороший пример: проверка пароля. Как вы знаете, некоторые сайты при регистрации хотят пароль от 8 до 20 символов в длину. Честно говоря, это странное ограничение, но что поделать. В математике мы бы написали `8 < x < 20` (где `x` это длина конкретного пароля), но в JavaScript такой трюк не пройдет.  Нам придётся сделать два отдельных логических выражения и соединить их специальным оператором «И»:

```
Пароль длиннее 8 символов **И** пароль короче 20 символов.
```

Вот функция, которая принимает пароль и говорит, соответствует ли он условиям, или не соответствует:

```javascript
const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};

isStrongPassword('qwerty'); // false
isStrongPassword('qwerty1234'); // true
isStrongPassword('zxcvbnmasdfghjkqwertyui'); // false
```

`&&` - означает «И» (в математической логике это называют конъюнкцией). Всё выражение считается истинным только в том случае, когда истинен каждый операнд — каждое из составных выражений. Иными словами, `&&` означает «и то, и другое».

Приоритет этого оператора ниже, чем приоритет операторов сравнения, поэтому выражение отрабатывает правильно без скобок.

Кроме `&&`, часто используется оператор `||` — «ИЛИ» (дизъюнкция). Он означает «или то, или другое, или оба». Операторы можно комбинировать в любом количестве и любой последовательности, но когда одновременно встречаются `&&` и `||`, то приоритет лучше задавать скобками. Ниже пример расширенной функции определения корректности пароля:

```javascript
const hasSpecialChars = (str) => /* проверяет содержание специальных символов в строке */;

const hasCapitalChars = (str) => /* проверяет содержание заглавных букв в строке */

const isStrongPassword = (password) => {
  const length = password.length;
  // Скобки задают приоритет. Понятно что к чему относится.
  return length > 8 && (hasSpecialChars(password) || hasCapitalChars(password));
};
```

Другой пример. Мы хотим купить квартиру, которая удовлетворяет условиям: площадь от 100 кв. метров и больше на любой улице **ИЛИ** площадь от 80 кв. метров и больше, но на центральной улице `Main Street`.

Напишем функцию, проверяющую квартиру. Она принимает два аргумента: площадь (число) и название улицы (строку):

```javascript
const isGoodApartment = (area, street) => {
  // Через переменную, чтобы функция была не слишком длинной
  const result = area >= 100 || (area >= 80 && street === 'Main Street');
  return result;
};

isGoodApartment(91, 'Queens Street'); // false
isGoodApartment(78, 'Queens Street'); // false
isGoodApartment(70, 'Main Street');   // false

isGoodApartment(120, 'Queens Street'); // true
isGoodApartment(120, 'Main Street');   // true
isGoodApartment(80, 'Main Street');    // true
```

Область математики, в которой изучаются логические операторы, называется булевой алгеброй. Ниже показаны «таблицы истинности» — по ним можно определить, каким будет результат применения оператора:

## И `&&`

| A     | B     | A && B   |
|-------| ------|----------|
| TRUE  | TRUE  | **TRUE** |
| TRUE  | FALSE | FALSE    |
| FALSE | TRUE  | FALSE    |
| FALSE | FALSE | FALSE    |

Пара примеров:

```javascript
// true && true;
3 > 2 && 'wow'.startsWith('w'); // true

// true && false;
'start' === 'start' && 8 < 3; // false
```

## ИЛИ `||`

| A     | B     | A &vert;&vert; B |
|-------|-------|----------|
| TRUE  | TRUE  | **TRUE** |
| TRUE  | FALSE | **TRUE** |
| FALSE | TRUE  | **TRUE** |
| FALSE | FALSE | FALSE    |

Пара примеров:

```javascript
// true || true;
3 > 2 || 'wow'.startsWith('w'); // true

// false || false;
'start' === 'Start' || 3 < 3; // false
```
