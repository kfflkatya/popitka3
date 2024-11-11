var paragraph = document.getElementsByTagName('.per')[0],
  text = paragraph.innerHTML,
    chars = text.length,
    newText = '',
    char,
    i;

for (i = 0; i < chars; i += 1) {
    newText += '<i>' + text.charAt(i) + '</i>';
}

paragraph.innerHTML = newText;

var wrappedChars = document.getElementsByTagName('i'),
    wrappedCharsLen = wrappedChars.length,
    j = 0;

function addFloat () {
    setTimeout(function () {
        wrappedChars[j].className = 'floaty';
        j += 1;
        if (j < wrappedCharsLen) {
            addFloat();
        }
    }, 100)
}

addFloat();