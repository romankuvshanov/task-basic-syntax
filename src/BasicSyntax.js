export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = 0; i < str.length; i += 2) {
        // Split into bigrams
        let bigram = str.substring(str.length - 2 - i, str.length - i);
        //console.log(bigram);
        if (bigram.length === 2) {
            //The basic rule is when the larger number is in front, then add, when the smaller number is in front, then minus.
            let frontNum = romanLetterToInt(bigram[0]);
            let backNum = romanLetterToInt(bigram[1]);
            if (frontNum < backNum) result += backNum - frontNum;
            else result += backNum + frontNum;
        }
        // If unigram just convert to arabic number then add
        else if (bigram.length === 1) result += romanLetterToInt(bigram);
    }
    return result;
}

function romanLetterToInt(str) {
    // Converting single roman digit to arabic num
    switch (str) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}
