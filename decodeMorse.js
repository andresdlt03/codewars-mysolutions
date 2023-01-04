decodeMorse = function(morseCode){
    let result = "";
    for(word of morseCode.split('   ')) {
        for(char of word.split(' ')) {
            result += MORSE_CODE(char); // MORSE_CODE es un diccionario ofrecido por la solución
        }
        result += ' ';
    }
    return result.substring(0, result.length - 1);
};

decodeMorse('.... . -.--   .--- ..- -.. .');