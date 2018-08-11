export const add = (a, b) => {
	var a = a.split("").join("");
	var b = b.split("").join("");
	var lenA = a.length;
	var lenB = b.length;
	var len = Math.max(lenA, lenB);
	var j = 0;
	var total = [];
	var sum, arrA, arrB;

	//長度不足的文字補0
	if(lenA>lenB){
		for(var i=0; i<lenA-lenB; i++){
			b = "0"+b
		}
	}else{
		for(i=0; i<lenB-lenA; i++){
			a = "0"+a
		}
	}
	//文字反轉，並轉陣列
	var ar = a.split("").reverse();
	var br = b.split("").reverse();

	//console.log(ar)
	//console.log(br)

	//加總
	for(i=0; i<len; i++){
		arrA = parseInt(ar[i], 10);
		arrB = parseInt(br[i], 10);
		sum = arrA+arrB+j;
		//console.log(arrB)
		if(sum>9){
			total.push(sum - 10);
			j = 1;
		}else{
			total.push(sum);
			j = 0;
		}
	}

	//將加總後的陣列反轉，並轉為文字
	//console.log(total);
	var ans = total.reverse().join("")
	return ans;
}
