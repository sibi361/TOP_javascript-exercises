const caesar = function (text, shift) {
  let textNew = "";

  text.split("").forEach((char) => {
    if (isLetter(char)) {
      let currentCode = char.charCodeAt();
      let newCode, offset;

      shift = shift % 26;
      if (char == char.toUpperCase()) {
        offset = currentCode + shift - 65;
        offset = offsetClean(offset, shift);
        newCode = 65 + offset;
      } else {
        offset = currentCode + shift - 97;
        console.log(offset);
        offset = offsetClean(offset, shift);
        newCode = 97 + offset;
      }
      textNew += String.fromCharCode(newCode);
    } else textNew += char;
  });
  return textNew;
};

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function offsetClean(o, s) {
  let offset = o;
  if (o < 0) offset = s < 0 ? 26 + o : o;
  else if (offset >= 26) offset = o % 26;
  return offset;
}

// Do not edit below this line
module.exports = caesar;
