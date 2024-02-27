/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str=str.replaceAll(" ","");
  let n=str.length;
  let i=0, j=n-1;
  while(i<j)
  {
    if(!(str[i]>='a'  && str[i]<='z'))
    {
    i++;
    continue;
    }
    if(!(str[j]>='a'  && str[j]<='z'))
    {
    j--;
    continue;
    }
    if(str[i]!=str[j])
    return false;
  i++, j--;
  }
  return true;

}

module.exports = isPalindrome;
