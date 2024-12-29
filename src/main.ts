import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

// Задание 1
console.log(capitalize("hello")); // Hello
console.log(reverseString("world")); // dlrow

// Задание 2
const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(
  10000,
  5,
  10
);
console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);

const tax = Finance.TaxCalculator.calculateTax(50000, 20);
console.log(`Tax: ${tax.toFixed(2)}`);

// Задание 3
const adminUser = new UserManagement.Admin.AdminUser(
  "John Doe",
  "john@example.com",
  true
);
console.log(
  `Admin User: ${adminUser.name}, Super Admin: ${adminUser.isSuperAdmin}`
);
adminUser.changePermissions(false);
console.log(`Updated Super Admin: ${adminUser.isSuperAdmin}`);

// Задание 4
console.log(`Fibonacci up to 100: ${generateFibonacci(100)}`);
console.log(`Prime numbers up to 100: ${generatePrimeNumbers(100)}`);
