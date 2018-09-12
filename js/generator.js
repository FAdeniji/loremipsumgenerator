const wordDictionary = ["lorem", "ipsum", "dhantu", "hiues", "assd", "forie", "nushhs", "asre", "byei", "nwyea", "asdf", "loik", "wqwe", "mkis", "bnfea", "oiudk", "kawes", "qwwer", "lssaw", "dsddd"];

const generateWords = (number, wordType, startWithLorem) => {
  let wordsContainer = "";

  if(number === 0 || !number) {
    number = 5;
  }

  switch (wordType) {
    case "word": default:
      wordsContainer = buildWords(number);
      break;
    case "paragraphs":
      wordsContainer = buildParagraph(number);
      break;
    case "list":
      wordsContainer = buildList(number);
      break;
    case "bytes":
      wordsContainer = buildByte(number);
      break;
  }

  if(startWithLorem) {
    wordsContainer = "Lorem ipsum " + wordsContainer;
  }

  return wordsContainer;

}

const buildParagraph = (number) => {

  let paragraphs = "";

  for(let i = 0; i < number; i++) {

    paragraphs += "<p>" + buildWords(50) + "</p>";

  }

  return paragraphs;

}

const buildWords = (number) => {

  let words = "";

  for(let i = 0; i < number; i++) {

    words += wordDictionary[randomNumber(1,20)] + " ";

  }

  return words;

}

const buildList = (number) => {

  let list = "<ul>";

  for(let i = 0; i < number; i++) {

    list += "<li>" + buildWords(50) + "</li>";

  }

  list += "</ul>";

  return list;

}

const buildByte = (number) => {

  let byte = "";

  for(let i = 0; i < number; i++) {

    byte += buildWords(1);

    if(byte.length >= number) {
      byte = byte.substring(1,101);
      break;
    }

  }

  return byte;

}

const randomNumber = (min, max) => {

  return Math.floor((Math.random() * (max - min))) + min;

}

module.exports = {
  generateWords: generateWords
}
