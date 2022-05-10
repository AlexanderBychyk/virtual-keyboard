const keysData = [
  {
    en: "`",
    enShift: "~",
    ru: "ё",
    ruShift: "Ё",
    options: ["key"],
    keyEvent: "Backquote"
  },
  {
    en: "1",
    enShift: "!",
    ru: "1",
    ruShift: "!",
    options: ["key"],
    keyEvent: "Digit1"
  },
  {
    en: "2",
    enShift: "@",
    ru: "2",
    ruShift: "\"",
    options: ["key"],
    keyEvent: "Digit2"
  },
  {
    en: "3",
    enShift: "#",
    ru: "3",
    ruShift: "№",
    options: ["key"],
    keyEvent: "Digit3"
  },
  {
    en: "4",
    enShift: "$",
    ru: "4",
    ruShift: ";",
    options: ["key"],
    keyEvent: "Digit4"
  },
  {
    en: "5",
    enShift: "%",
    ru: "5",
    ruShift: "%",
    options: ["key"],
    keyEvent: "Digit5"
  },
  {
    en: "6",
    enShift: "^",
    ru: "6",
    ruShift: ":",
    options: ["key"],
    keyEvent: "Digit6"
  },
  {
    en: "7",
    enShift: "&",
    ru: "7",
    ruShift: "?",
    options: ["key"],
    keyEvent: "Digit7"
  },
  {
    en: "8",
    enShift: "*",
    ru: "8",
    ruShift: "*",
    options: ["key"],
    keyEvent: "Digit8"
  },
  {
    en: "9",
    enShift: "(",
    ru: "9",
    ruShift: "(",
    options: ["key"],
    keyEvent: "Digit9"
  },
  {
    en: "0",
    enShift: ")",
    ru: "0",
    ruShift: ")",
    options: ["key"],
    keyEvent: "Digit0"
  },
  {
    en: "-",
    enShift: "_",
    ru: "-",
    ruShift: "_",
    options: ["key"],
    keyEvent: "Minus"
  },
  {
    en: "=",
    enShift: "+",
    ru: "=",
    ruShift: "+",
    options: ["key"],
    keyEvent: "Equal"
  },
  {
    en: "Backspace",
    enShift: "Backspace",
    ru: "Backspace",
    ruShift: "Backspace",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "Backspace"
  },

  {
    en: "Tab",
    enShift: "Tab",
    ru: "Tab",
    ruShift: "Tab",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "Tab"
  },
  {
    en: "q",
    enShift: "Q",
    ru: "й",
    ruShift: "Й",
    options: ["key"],
    keyEvent: "KeyQ"
  },
  {
    en: "w",
    enShift: "W",
    ru: "ц",
    ruShift: "Ц",
    options: ["key"],
    keyEvent: "KeyW"
  },
  {
    en: "e",
    enShift: "E",
    ru: "у",
    ruShift: "У",
    options: ["key"],
    keyEvent: "KeyE"
  },
  {
    en: "r",
    enShift: "R",
    ru: "к",
    ruShift: "К",
    options: ["key"],
    keyEvent: "KeyR"
  },
  {
    en: "t",
    enShift: "T",
    ru: "е",
    ruShift: "Е",
    options: ["key"],
    keyEvent: "KeyT"
  },
  {
    en: "y",
    enShift: "Y",
    ru: "н",
    ruShift: "Н",
    options: ["key"],
    keyEvent: "KeyY"
  },
  {
    en: "u",
    enShift: "U",
    ru: "г",
    ruShift: "Г",
    options: ["key"],
    keyEvent: "KeyU"
  },
  {
    en: "i",
    enShift: "I",
    ru: "ш",
    ruShift: "Ш",
    options: ["key"],
    keyEvent: "KeyI"
  },
  {
    en: "o",
    enShift: "O",
    ru: "щ",
    ruShift: "Щ",
    options: ["key"],
    keyEvent: "KeyO"
  },
  {
    en: "p",
    enShift: "P",
    ru: "з",
    ruShift: "З",
    options: ["key"],
    keyEvent: "KeyP"
  },
  {
    en: "[",
    enShift: "{",
    ru: "х",
    ruShift: "Х",
    options: ["key"],
    keyEvent: "BracketLeft"
  },
  {
    en: "]",
    enShift: "}",
    ru: "ъ",
    ruShift: "Ъ",
    options: ["key"],
    keyEvent: "BracketRight"
  },
  {
    en: "Delete",
    enShift: "Delete",
    ru: "Delete",
    ruShift: "Delete",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "Delete"
  },

  {
    en: "CapsLock",
    enShift: "CapsLock",
    ru: "CapsLock",
    ruShift: "CapsLock",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "CapsLock"
  },
  {
    en: "a",
    enShift: "A",
    ru: "ф",
    ruShift: "Ф",
    options: ["key"],
    keyEvent: "KeyA"
  },
  {
    en: "s",
    enShift: "S",
    ru: "ы",
    ruShift: "Ы",
    options: ["key"],
    keyEvent: "KeyS"
  },
  {
    en: "d",
    enShift: "D",
    ru: "в",
    ruShift: "В",
    options: ["key"],
    keyEvent: "KeyD"
  },
  {
    en: "f",
    enShift: "F",
    ru: "а",
    ruShift: "А",
    options: ["key"],
    keyEvent: "KeyF"
  },
  {
    en: "g",
    enShift: "G",
    ru: "п",
    ruShift: "П",
    options: ["key"],
    keyEvent: "KeyG"
  },
  {
    en: "h",
    enShift: "H",
    ru: "р",
    ruShift: "Р",
    options: ["key"],
    keyEvent: "KeyH"
  },
  {
    en: "j",
    enShift: "J",
    ru: "о",
    ruShift: "О",
    options: ["key"],
    keyEvent: "KeyJ"
  },
  {
    en: "k",
    enShift: "K",
    ru: "л",
    ruShift: "Л",
    options: ["key"],
    keyEvent: "KeyK"
  },
  {
    en: "l",
    enShift: "L",
    ru: "д",
    ruShift: "Д",
    options: ["key"],
    keyEvent: "KeyL"
  },
  {
    en: ";",
    enShift: ":",
    ru: "ж",
    ruShift: "Ж",
    options: ["key"],
    keyEvent: "Semicolon"
  },
  {
    en: "'",
    enShift: "\"",
    ru: "э",
    ruShift: "Э",
    options: ["key"],
    keyEvent: "Quote"
  },
  {
    en: "\\",
    enShift: "|",
    ru: "\\",
    ruShift: "/",
    options: ["key"],
    keyEvent: "Backslash"
  },
  {
    en: "Enter",
    enShift: "Enter",
    ru: "Enter",
    ruShift: "Enter",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "Enter"
  },

  {
    en: "Shift",
    enShift: "Shift",
    ru: "Shift",
    ruShift: "Shift",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "ShiftLeft"
  },
  {
    en: "z",
    enShift: "Z",
    ru: "я",
    ruShift: "Я",
    options: ["key"],
    keyEvent: "KeyZ"
  },
  {
    en: "x",
    enShift: "X",
    ru: "ч",
    ruShift: "Ч",
    options: ["key"],
    keyEvent: "KeyX"
  },
  {
    en: "c",
    enShift: "C",
    ru: "с",
    ruShift: "С",
    options: ["key"],
    keyEvent: "KeyC"
  },
  {
    en: "v",
    enShift: "V",
    ru: "м",
    ruShift: "М",
    options: ["key"],
    keyEvent: "KeyV"
  },
  {
    en: "b",
    enShift: "B",
    ru: "и",
    ruShift: "И",
    options: ["key"],
    keyEvent: "KeyB"
  },
  {
    en: "n",
    enShift: "N",
    ru: "т",
    ruShift: "Т",
    options: ["key"],
    keyEvent: "KeyN"
  },
  {
    en: "m",
    enShift: "M",
    ru: "ь",
    ruShift: "Ь",
    options: ["key"],
    keyEvent: "KeyM"
  },
  {
    en: ",",
    enShift: "<",
    ru: "б",
    ruShift: "Б",
    options: ["key"],
    keyEvent: "Comma"
  },
  {
    en: ".",
    enShift: ">",
    ru: "ю",
    ruShift: "Ю",
    options: ["key"],
    keyEvent: "Period"
  },
  {
    en: "/",
    enShift: "?",
    ru: ".",
    ruShift: ",",
    options: ["key"],
    keyEvent: "Slash"
  },
  {
    en: "",
    enShift: "",
    ru: "",
    ruShift: "",
    options: ["key", "--special", "--arrow-up"],
    keyEvent: "ArrowUp"
  },
  {
    en: "Shift",
    enShift: "Shift",
    ru: "Shift",
    ruShift: "Shift",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "ShiftRight"
  },

  {
    en: "Ctrl",
    enShift: "Ctrl",
    ru: "Ctrl",
    ruShift: "Ctrl",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "ControlLeft"
  },
  {
    en: "",
    enShift: "",
    ru: "",
    ruShift: "",
    options: ["key", "--special", "--win"],
    keyEvent: "MetaLeft"
  },
  {
    en: "Alt",
    enShift: "Alt",
    ru: "Alt",
    ruShift: "Alt",
    options: ["key", "--special"],
    keyEvent: "AltLeft"
  },
  {
    en: "Space",
    enShift: "Space",
    ru: "Space",
    ruShift: "Space",
    options: ["key", "--special", "--space"],
    keyEvent: "Space"
  },
  {
    en: "Alt",
    enShift: "Alt",
    ru: "Alt",
    ruShift: "Alt",
    options: ["key", "--special"],
    keyEvent: "AltRight"
  },
  {
    en: "",
    enShift: "",
    ru: "",
    ruShift: "",
    options: ["key", "--special", "--arrow-left"],
    keyEvent: "ArrowLeft"
  },
  {
    en: "",
    enShift: "",
    ru: "",
    ruShift: "",
    options: ["key", "--special", "--arrow-down"],
    keyEvent: "ArrowDown"
  },
  {
    en: "",
    enShift: "",
    ru: "",
    ruShift: "",
    options: ["key", "--special", "--arrow-right"],
    keyEvent: "ArrowRight"
  },
  {
    en: "Ctrl",
    enShift: "Ctrl",
    ru: "Ctrl",
    ruShift: "Ctrl",
    options: ["key", "--special", "--let-grow"],
    keyEvent: "ControlRight"
  }
];
export default keysData;
