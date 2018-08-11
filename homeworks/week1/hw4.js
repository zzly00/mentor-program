/*
export const isPalindromes = (str) => {
  var n = str.length;
  for(var i=0; i<n; i++){
  	str.charAt(i)!==str.charAt(n-1) ? false : n--;
  } 
  return true;
}
*/




export const isPalindromes = (str) => {
  var n = str.length;
  for(var i=0; i<n; i++){
  	if(str.charAt(i)!==str.charAt(n-1)){
  		return false;
  	}else{
  		n--;
  	}
  }
  return true;
}
