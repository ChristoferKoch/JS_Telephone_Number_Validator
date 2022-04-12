/*Telephone number validator for freeCodeCamp JavaScript Algorithms and Data Structures certification.

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555*/

function telephoneCheck(str) {
    let regTest = /^1?\s?[(]?\d{3}[)]?\s?-?\d{3}\s?-?\d{4}\b/; //I used a regular expression to search for all the 
                                                               //optional and required elements for a US phone number
    for(let i = 0; i < str.length; i++){
      if(str[i] === '(' && str[i+4] !== ')'){ 
        return false;
      } else if(str[i] === ')' && str[i-4] !== '(') {
        return false;
      }//The regex only checks if there is an optional open or closed parenthesis
       //so this checks that if there is an open or closed parenthesis it has its pair in the correct place
    }  
    return regTest.test(str);
  }
  
telephoneCheck();