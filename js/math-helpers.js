
function getGCD(a, b) {
	let t;
    while(b != 0){
        t = a;
        a = b;
        b = t%b;
    }
    return a; 	
}

function getGCDRecur(a, b) {
	if(b === 0) return a;
	return getGCDRecur(b, a%b);
}

console.log(getGCDRecur(10,15));

function getAllNumbersLessThan(modulus) {
	let numbers = [];
	for(let i = 1; i < modulus; i++ ) {
		numbers.push(i);
	}
	return numbers;
}

export function getCoPrimes(modulus) {
	let numbers = getAllNumbersLessThan(modulus);
	let coPrimes = numbers.filter(number => {
		return getGCDRecur(number, modulus) !== 1;
	});
	return coPrimes;
}

export function getModularInverse(encryptKey, modulus) {
	/* To return inverse of encryptKey, modulo the modulus */
	for(let i = 0; i < modulus; i++) {
		if( (encryptKey*i)%modulus === 1 ) return i;		
	}
	return null;
}