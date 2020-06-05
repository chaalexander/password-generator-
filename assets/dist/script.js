var lowerValue,
  upperValue,
  numberValue,
  specialValue,
  pwdLengthValue,
  generateBtn = document.querySelector("#generate");
function writePassword() {
  var a = generatePassword(),
    b = document.querySelector("#password");
  b.value = a;
}
function generatePassword() {
  var a = prompt(
      " Choose a length of at least 8 Characters and no more than 128. "
    ),
    b = [];
  if (8 <= a && 128 >= a) {
    pwdLengthValue = parseInt(a);
    var c = confirm("Do you want lowercase letters?"),
      d = confirm("Do you want uppercase letters?"),
      e = confirm("Do you want numbers?"),
      f = confirm("Do you want special characters?");
  } else alert("Please try again!");
  if (!0 === c)
    for (
      lowerValue = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
        h = 0;
      h < lowerValue.length;
      h++
    )
      b.push(lowerValue[h]);
  if (!0 === d)
    for (
      upperValue = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
        h = 0;
      h < upperValue.length;
      h++
    )
      b.push(upperValue[h]);
  if (!0 === e)
    for (
      numberValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], h = 0;
      h < numberValue.length;
      h++
    )
      b.push(numberValue[h]);
  if (!0 === f)
    for (
      specialValue = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "{",
        "[",
        "}",
        "]",
        ":",
        ";",
        "'",
        "<",
        ">",
        "?",
        "/",
        "`",
        "~",
      ],
        h = 0;
      h < specialValue.length;
      h++
    )
      b.push(specialValue[h]);
  for (var g = "", h = 0; h < pwdLengthValue; h++)
    g += b[Math.floor(Math.random() * b.length)];
  return g;
}
generateBtn.addEventListener("click", () => {});
