$(document).ready(function() {

  const sentence = prompt("type in a sentence: ");
  
  const firstChar = sentence.charAt(0);
  const lastChar = sentence.charAt(sentence.length -1);
  
 function firstLastCap( first, last ) {
    return (first+" "+last).toUpperCase();
  }

 function sentenceAddOn(sentence2, str1) {
   return (sentence2 + str1);
 }

function lastFirstCap( last, first )  {
    const last_first = last + " " + first;
    const capLetters = last_first.toUpperCase();
    return capLetters;
  }

/*
  the variable tempNum stores the number that when inserted into sentence.charAt(), will always give us the middle character of the sentence. tempNum needs to work for both even and odd sentence.length, rounding down when the sentence length is even. Example: when the sentence string is 4 letters, such as "1234", our algorithm should round down and select the character '2' as the middle character. 

  The solution here is very weird because the charAt() method starts at 0 instead of 1, ANDDDD it also rounds down any decimal number. Example: sentence.charAt(2.8) returns the same value as charAt(2). We get decimal numbers when we divide sentence.length by 2, which we need to do in order to get to the "halfway" point of the sentence. Example: for sentence.length = 15,   15/2 = 7.5,  which is the halfway point before rounding. 

  (sentence.length + 1) / 2  <-----
  ^^^ by adding 1 to sentence length, odd numbers that become decimals when divided by 2, will now become whole numbers and won't get rounded by charAt(). Sentence length 15 would normally become 7.5, then charAt() would normally round it down to 7. By adding +1, 15 becomes 16, which become 8 when divided. 8 won't get rounded down like 7.5 did. We are effectively rounding up now, instead of 7 the final result
  is now 8 because we added the +1 in the calculation. 

  For even numbers, adding + 1 makes them odd, and they get rounded down by .charAt() and there is no channge in the final result. Example: 14 / 2 = 7, and 15 / 2 = 7.5. .charAt() method treats 7 and 7.5 exactly the same, rounding down the 7.5 down to 7.  

  Finally, the - 1 at the end of "((sentence.length + 1) / 2) - 1" just corrects for charAt() starting it's counting at 0 instead of 1. 


  /////    TLDR;    /////
  In tempNum, adding +1 before dividing by 2 makes .charAt() mathod round up instead of round down when finding the middle character of the sentence.

  subtracting 1 at the end of "( ( sentence.length +1) /2) - 1" corrects for .charAt() starting it's counting at 0 instead of 1. 
 */
function midIndex(sentence) {

  const tempNum = ( ( sentence.length +1) /2) - 1;
  const midChar = sentence.charAt( tempNum );
  return midChar;
}

//this prints the middle character of the sentence concatenated to the sentence, which is concatenated to a string of the last and first letter of the sentence
console.log( midIndex(sentence) + sentence + lastFirstCap(lastChar, firstChar))



function reverseString( stringA )
{
  //console.log(stringA);
  let currentCharNum = stringA.length - 1;
  let rev = [currentCharNum];

  
  for(let i = 0; i < stringA.length; i++, currentCharNum--)
  {
    rev[i] = stringA.charAt(currentCharNum);
    //console.log( "currentCharNum[" +currentCharNum +"]: " + rev[i].toString() + "\n")
  }

  return rev.toString();
}
  //console.log(lastFirstCap(lastChar, firstChar) );
  //console.log(firstLastCap(firstChar, lastChar));
  //console.log(sentenceAddOn(sentence, firstLastCap(firstChar, lastChar)))
  //console.log( midIndex(sentence, firstChar, lastChar) );
  //console.log( reverseString( midIndex(sentence)));
  midIndex(sentence);

});

