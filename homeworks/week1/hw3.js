export const isPrime = (n) => {
	if(n==0 || n==1 || n==""){
		return false;
	}else{
		for(var i=2; i<n; i++){
			if(n%i == 0){
				return false;
			}
		}
		return true;
	}
}