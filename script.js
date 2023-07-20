let text = prompt("Введіть текст, який Ви хочете проаналізувати").replace(/[^\w\s]/gi, "");

let nonRepeatCharacters = "";//Змінна, яка буде приймати значення першик неповторюваних символів з кожного слова
let firstNonRepeatCharacter;//Змінна, яка прийматиме значення першого неповторюваного символу зі змінної nonRepeatCharacters

//Створюємо масив зі слів введеною строки
const wordsArray = text.split(" ");

//Цикл для перевірки повторюіваності символів
for (i = 0; i < wordsArray.length; i++) {
    let char = wordsArray[i][0];
    for (j = 0; j < wordsArray[i].length; j++) {
        if (wordsArray[i].match(char) > 1) {
            continue;
        } else {
            char = wordsArray[i][j];
            break;
        }        
    }
    nonRepeatCharacters += char;    
}

// Знаходимо перший неповторюваний символ з символів, які були відібрані, як неповторювані в кожному зі слів введеною строки.
firstNonRepeatCharacter = nonRepeatCharacters[0];
for (i = 0; i < nonRepeatCharacters.length; i++) {
    if (nonRepeatCharacters.match(firstNonRepeatCharacter) >1) {
        continue;
    } else {
        firstNonRepeatCharacter = nonRepeatCharacters[i];
    }
}


console.log(nonRepeatCharacters);
console.log(firstNonRepeatCharacter);