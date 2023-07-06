let a = 10;

console.log(a + 5);
console.log(a - 5);
console.log(a / 5);
console.log(a * 5);

console.log(a % 4); //reszta z dzielenia

console.log(a ** 2); // potegowanie

if (a == 10) {
	console.log('JD');
}

if (a % 2 == 0) {
	console.log('a jest parzyste');
}

console.log(`zmienna a wynosi ${a}`);

a += 10;
console.log(a);

a++; //doda 1
a--; //odejmie jeden

a = 100;
if (a >= 100) {
	console.log('a jest duze');
}

if (a != 100) {
	// musi byc rozne od 100
	console.log('dupa');
}

//  obiekty

// zmienna prymitywna
a = 'asdasd';
let b = 123;
let c = false;

let obiekt = {
	a: 50,
	b: 'krowa',
	c: false,
};

obiekt.a = 100;
console.log(obiekt.a);

obiekt.d = 'DUPA';
obiekt['e'] = 'EEEEE';

console.log(obiekt.d);
console.log(obiekt.e);
