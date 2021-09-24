function sanitize(str){
    let regex = /[\W_]/g;
  
    return str.replace(regex, "");
  }
  
  function reverse(str){
    let revStr = "";
  
    for (let i = str.length - 1; i >= 0; i--){
      revStr = revStr + str[i];
    }
  
    return revStr;
  }
  
  function palindrome(str) {
    str = str.toLowerCase()
    str = sanitize(str);
    
    if (str == reverse(str)) {
      return true;
    } else {
      return false;
    }  
  }
  
  
  
  palindrome("eye")