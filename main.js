/*HTML*/

const rowRusLowerCase1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
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

const classesRow1 = ['Backquote', 'Digit1', 'Digit2',
        'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
        'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal '
    ],
    classesRow2 = ['KeyQ', 'KeyW', 'KeyE', 'KeyR',
        'KeyT', 'KeyY', 'KeyU', 'KeyI',
        'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
        'Backslash',
    ],
    classesRow3 = ['KeyA', 'KeyS', 'KeyD', 'KeyF',
        'KeyG', 'KeyH', 'KeyJ', 'KeyK',
        'KeyL', 'Semicolon', 'Quote',
    ],
    classesRow4 = ['KeyZ', 'KeyX', 'KeyC', 'KeyV',
        'KeyB', 'KeyN', 'KeyM', 'point', 'Period', 'Slash',
    ];

function addElement(childNode, classes, arrRusLower, arrRusUpper, arrEngLower, arrEngUpper, count) {
    for (let i = 0; i < count; i++) {
        const key = document.createElement('div');
        key.className = 'key';
        keyboard.childNodes[childNode].append(key);

        const spanEng = document.createElement('span');
        spanEng.className = `${classes[i]} Eng`;
        key.append(spanEng);

        const spanLowerEng = document.createElement('span');
        spanLowerEng.className = 'lower';
        spanEng.append(spanLowerEng);
        spanLowerEng.innerHTML = `${arrEngLower[i]}`;

        const spanUpperEng = document.createElement('span');
        spanUpperEng.className = 'upper';
        spanEng.prepend(spanUpperEng);
        spanUpperEng.innerHTML = `${arrEngUpper[i]}`;

        const spanRus = document.createElement('span');
        spanRus.className = `${classes[i]} Rus`;
        key.prepend(spanRus);

        const spanLowerRus = document.createElement('span');
        spanLowerRus.className = 'lower';
        spanRus.append(spanLowerRus);
        spanLowerRus.innerHTML = `${arrRusLower[i]}`;

        const spanUpperRus = document.createElement('span');
        spanUpperRus.className = 'upper';
        spanRus.prepend(spanUpperRus);
        spanUpperRus.innerHTML = `${arrRusUpper[i]}`;

    }
}

function addElementEvent(row, eventKey, code, txt) {
    const node = document.createElement('div');
    node.className = `key ${eventKey}`;
    keyboard.childNodes[row].append(node);

    const key = document.createElement('span');
    key.className = `${code} Eng`;
    node.append(key);
    key.innerHTML = `${txt}`;
}

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const textarea = document.createElement('textarea');
textarea.id = 'area';
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
textarea.after(keyboard);

for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    keyboard.prepend(row);
}

addElement(0, classesRow1, rowRusLowerCase1, rowRusUpperCase1, rowEngLowerCase1, rowEngUpperCase1, 13);

addElementEvent(0, 'backspace', 'Backspace', 'Backspace');

addElementEvent(1, 'tab', 'Tab', 'Tab');

addElement(1, classesRow2, rowRusLowerCase2, rowRusUpperCase2, rowEngLowerCase2, rowEngUpperCase2, 13);

addElementEvent(1, 'del', 'Delete', 'Del');

addElementEvent(2, 'capslock', 'CapsLock', 'Capslock');

addElement(2, classesRow3, rowRusLowerCase3, rowRusUpperCase3, rowEngLowerCase3, rowEngUpperCase3, 11);

addElementEvent(2, 'enter', 'Enter', 'Enter');

addElementEvent(3, 'shift', 'ShiftLeft', 'Shift');

addElement(3, classesRow4, rowRusLowerCase4, rowRusUpperCase4, rowEngLowerCase4, rowEngUpperCase4, 10);

addElementEvent(3, 'arrow', 'ArrowUp', '↑');

addElementEvent(3, 'shift-right', 'ShiftRight', 'Shift');

addElementEvent(4, 'ctrl', 'ControlLeft', 'Ctrl');

addElementEvent(4, 'win', 'MetaLeft', 'Win');

addElementEvent(4, 'alt', 'AltLeft', 'Alt');

addElementEvent(4, 'space', 'Space', '');

addElementEvent(4, 'alt', 'AltRight', 'Alt');

addElementEvent(4, 'arrow', 'ArrowLeft', '←');

addElementEvent(4, 'arrow', 'ArrowDown', '↓');

addElementEvent(4, 'arrow', 'ArrowRight', '→');

addElementEvent(4, 'ctrl', 'ControlRight', 'Ctrl');

/*EVENTS*/

document.addEventListener('keydown', () => {
    const textarea = document.getElementById('area').focus();
    console.log(event.code);

});

document.addEventListener('click', () => {
    const textarea = document.getElementById('area').focus();
    event.preventDefault();
    console.log(event.code);

});