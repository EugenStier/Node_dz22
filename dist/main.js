"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = require("./stringUtils");
const finance_1 = require("./finance");
const userManagement_1 = require("./userManagement");
const sequenceUtils_1 = require("./sequenceUtils");
// Задание 1
console.log((0, stringUtils_1.capitalize)("hello")); // Hello
console.log((0, stringUtils_1.reverseString)("world")); // dlrow
// Задание 2
const monthlyPayment = finance_1.Finance.LoanCalculator.calculateMonthlyPayment(10000, 5, 10);
console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
const tax = finance_1.Finance.TaxCalculator.calculateTax(50000, 20);
console.log(`Tax: ${tax.toFixed(2)}`);
// Задание 3
const adminUser = new userManagement_1.UserManagement.Admin.AdminUser("John Doe", "john@example.com", true);
console.log(`Admin User: ${adminUser.name}, Super Admin: ${adminUser.isSuperAdmin}`);
adminUser.changePermissions(false);
console.log(`Updated Super Admin: ${adminUser.isSuperAdmin}`);
// Задание 4
console.log(`Fibonacci up to 100: ${(0, sequenceUtils_1.generateFibonacci)(100)}`);
console.log(`Prime numbers up to 100: ${(0, sequenceUtils_1.generatePrimeNumbers)(100)}`);
