console.log("4) Qüvvətə yüksəlt:");
function power(base, exponent) {
  console.log(`${base} ^ ${exponent} =`, base ** exponent);
}
let base = parseInt(prompt("Ədəd (base):"));
let exponent = parseInt(prompt("Qüvvət (exponent):"));
power(base, exponent);

console.log("\n5) Swap case:");
function convert(str) {
  let result = "";
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(convert("saLamNecesen"));

console.log("\nARRAY METHODS");

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');
shoppingCart = shoppingCart.filter(item => item !== 'Honey');
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) shoppingCart[teaIndex] = 'Green Tea';
console.log("Shopping Cart:", shoppingCart);

let countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
console.log("Reversed Countries:", countries.reverse());
countries.splice(countries.indexOf('Canada'), 1);
countries.splice(countries.indexOf('Denmark'), 1);
countries.push('Azerbaijan');
console.log("Updated Countries:", countries);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log("Full Stack:", fullStack);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log("First 3:", itCompanies.slice(0, 3));
console.log("Last 3:", itCompanies.slice(-3));
let mid = Math.floor(itCompanies.length / 2);
console.log("Middle:", itCompanies.length % 2 === 0 ? itCompanies.slice(mid-1, mid+1) : itCompanies.slice(mid, mid+1));
console.log("Sorted:", [...itCompanies].sort());
itCompanies.forEach(c => console.log(c.toUpperCase()));
console.log("Check Google:", itCompanies.includes('Google') ? 'Google' : 'Company not found');

console.log("Companies with more than one 'o':");
for (let c of itCompanies) {
  let count = c.toLowerCase().split('').filter(l => l === 'o').length;
  if (count > 1) console.log(c);
}

console.log("\nSadə ədədlər (0-100):");
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) console.log(i);
}

console.log("\nPalindrome check:");
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}
console.log("racecar:", isPalindrome("racecar") ? "polidromdur" : "polidrom deyil");
console.log("hello:", isPalindrome("hello") ? "polidromdur" : "polidrom deyil");

const products = [
  { id: 1, title: "Smartphone", price: 799.99 },
  { id: 2, title: "Laptop", price: 1299.99 },
  { id: 3, title: "Coffee Maker", price: 99.99 },
  { id: 4, title: "Headphones", price: 199.99 },
  { id: 5, title: "Smart TV", price: 699.99 },
];

const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
const avgPrice = totalPrice / products.length;
console.log("\nProduct total price:", totalPrice.toFixed(2));
console.log("Product average price:", avgPrice.toFixed(2));
console.log("1) Verilmiş ədədin bütün bölənləri:");
function printDivisors(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}
printDivisors(12);

console.log("\n2) Bölənlərinin sayı:");
function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  console.log(num + " ədədinin " + count + " dənə tam böləni var.");
}
countDivisors(12);

console.log("\n3) Stringi böyük hərflərə çevir:");
function UpperStr(str) {
  return str.toUpperCase();
}
console.log(UpperStr("salam dunya"));