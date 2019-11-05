let rowRusLowerCase1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    rowRusLowerCase2 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
    rowRusLowerCase3 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    rowRusLowerCase4 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', ''],

    rowRusUpperCase1 = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'],
    rowRusUpperCase2 = ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
    rowRusUpperCase3 = ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
    rowRusUpperCase4 = ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','],

    rowEngLowerCase1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    rowEngLowerCase2 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    rowEngLowerCase3 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    rowEngLowerCase4 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],

    rowEngUpperCase1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    rowEngUpperCase2 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    rowEngUpperCase3 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"'],
    rowEngUpperCase4 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];

let classesRow1 = ['tilda', 'one', 'two', 'three',
        'four', 'five', 'six', 'seven',
        'eight', 'nine', 'zero', 'minus', 'plus'
    ],
    classesRow2 = ['sumbQ', 'sumbW', 'sumbE', 'sumbR',
        'sumbT', 'sumbY', 'sumbU', 'sumbI',
        'sumbO', 'sumbP', 'leftSqBr', 'rightsqBr',
        'sleshKey',
    ],
    classesRow3 = ['sumbA', 'sumbS', 'sumbD', 'sumbF',
        'sumbG', 'sumbH', 'sumbJ', 'sumbK',
        'sumbL', 'semicolon', 'singquot',
    ],
    classesRow4 = ['sumbZ', 'sumbX', 'sumbC', 'sumbV',
        'sumbB', 'sumbN', 'sumbM', 'point', 'decPoint', 'backSlechKey',
    ];


let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let textarea = document.createElement('textarea');
textarea.id = 'result';
wrapper.append(textarea);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
textarea.after(keyboard);

let row, key, span;
for (let i = 0; i < 5; i++) {
    row = document.createElement('div');
    row.className = 'row';
    keyboard.prepend(row);
}

function addElement(childNode, classes, arrRusLower, arrRusUpper, arrEngLower, arrEngUpper, count) {
    for (let i = 0; i < count; i++) {
        let key = document.createElement('div');
        key.className = 'key';
        keyboard.childNodes[childNode].append(key);

        let spanEng = document.createElement('span');
        spanEng.className = `${classes[i]} Eng`;
        key.append(spanEng);

        let spanLowerEng = document.createElement('span');
        spanLowerEng.className = 'lower';
        spanEng.append(spanLowerEng);
        spanLowerEng.innerHTML = `${arrEngLower[i]}`;

        let spanUpperEng = document.createElement('span');
        spanUpperEng.className = 'upper';
        spanEng.prepend(spanUpperEng);
        spanUpperEng.innerHTML = `${arrEngUpper[i]}`;

        let spanRus = document.createElement('span');
        spanRus.className = `${classes[i]} Rus`;
        key.prepend(spanRus);

        let spanLowerRus = document.createElement('span');
        spanLowerRus.className = 'lower';
        spanRus.append(spanLowerRus);
        spanLowerRus.innerHTML = `${arrRusLower[i]}`;

        let spanUpperRus = document.createElement('span');
        spanUpperRus.className = 'upper';
        spanRus.prepend(spanUpperRus);
        spanUpperRus.innerHTML = `${arrRusUpper[i]}`;

    }
}

addElement(0, classesRow1, rowRusLowerCase1, rowRusUpperCase1, rowEngLowerCase1, rowEngUpperCase1, 13);

let backspace = document.createElement('div');
backspace.className = 'key backspace';
keyboard.childNodes[0].append(backspace);
backspace.innerHTML = "Backspace";

let tab = document.createElement('div');
tab.className = 'key tab';
keyboard.childNodes[1].prepend(tab);
tab.innerHTML = "Tab";

addElement(1, classesRow2, rowRusLowerCase2, rowRusUpperCase2, rowEngLowerCase2, rowEngUpperCase2, 13);

let del = document.createElement('div');
del.className = 'key del';
keyboard.childNodes[1].append(del);
del.innerHTML = 'Del';

let capslock = document.createElement('div');
capslock.className = 'key capslock';
keyboard.childNodes[2].prepend(capslock);
capslock.innerHTML = 'Capslock';

addElement(2, classesRow3, rowRusLowerCase3, rowRusUpperCase3, rowEngLowerCase3, rowEngUpperCase3, 11);

let enter = document.createElement('div');
enter.className = 'key enter';
keyboard.childNodes[2].append(enter);
enter.innerHTML = 'Enter';

let shiftLeft = document.createElement('div');
shiftLeft.className = 'key shift';
keyboard.childNodes[3].prepend(shiftLeft);
shiftLeft.innerHTML = "Shift";

addElement(3, classesRow4, rowRusLowerCase4, rowRusUpperCase4, rowEngLowerCase4, rowEngUpperCase4, 10);

let arrowUp = document.createElement('div');
arrowUp.className = "key arrow";
keyboard.childNodes[3].append(arrowUp);
/*image*/

let shiftRight = document.createElement('div');
shiftRight.className = 'key shift-right';
keyboard.childNodes[3].append(shiftRight);
shiftRight.innerHTML = 'Shift';