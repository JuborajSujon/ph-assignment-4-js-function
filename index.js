/**
 * @Problem 1: Help The Zoo Manager
 * Requirement analysis
 * ✔️ function should be calculateMoney( )
 * ✔️ @param input - data type validation Number , should be postive intger (0<=input)
 * ✔️ @returns - data type Number
 */

const input = [-123];

function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number") {
    return "Please provide a valid number";
  } else if (0 <= ticketSale) {
    const ticketPrice = 120;
    const securityCost = 500;
    const stuffLunchCost = 50;
    const noOfStuff = 8;

    const totalTicketSaleAmount = ticketSale * ticketPrice;
    const totalStuffLunchCostAmount = stuffLunchCost * noOfStuff;
    const totalDailyExpense = securityCost + totalStuffLunchCostAmount;

    const dailyBalance = totalTicketSaleAmount - totalDailyExpense;
    return dailyBalance;
  } else {
    return "Invalid Number";
  }
}

const result = calculateMoney(input);
console.log(result);

/**
 * @Problem 2: Good Name, Bad Name
 * Requirement analysis
 * ✔️ function should be checkName()
 * ✔️ Name (string) last element should containe a,y,i,e,o,u,w
 * ✔️ @param input - data type validation only string otherwise return "invalid"
 * ✔️ @returns {string} {"Good Name" or "Bad Name"}
 *
 */

const babyName = "";

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    const babyName = name.toLowerCase();
    const lastWord = babyName[babyName.length - 1];
    if (
      lastWord === "a" ||
      lastWord === "y" ||
      lastWord === "i" ||
      lastWord === "e" ||
      lastWord === "o" ||
      lastWord === "u" ||
      lastWord === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

const result2 = checkName(babyName);
console.log(result2);

/**
 * @Problem 3: Virus in my Array
 * Requirement analysis
 * ✔️ function should be deleteInvalids()
 * ✔️ @param input - data type validation only array otherwise return "Invalid Array"
 * ✔️ Find number inside array and make with new Array
 * ✔️ @returns {Array}
 */

const arr = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  } else {
    const newArray = [];
    for (const element of array) {
      if (typeof element === "number" && !Number.isNaN(element)) {
        newArray.push(element);
      }
    }
    return newArray;
  }
}

const newArray = deleteInvalids(arr);
console.log(newArray);

/**
 * @Problem 4: Make a great pasword
 * Requirement analysis
 * ✔️ Function Name Must be pasword()
 * ✔️ @param {object} - Object property should be 3 item and can't change key name
 * ✔️ siteName - first letter capitalize
 * ✔️ Use # after siteName then
 * ✔️ Use user name then
 * ✔️ use @ then
 * ✔️ use birthday
 * ✔️ @returns {String} - Google#kolimuddin@1999
 * ✔️ extra validation - if property missing or birthYear value should 4 digit not return the string value 'invalid'
 *
 */

const myObject = { name: "rahat", birthYear: 2002, siteName: "Facebook" };

function password(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj === "string" ||
    typeof obj === "number" ||
    typeof obj === "function" ||
    obj === null ||
    Array.isArray(obj)
  ) {
    return "input should be an object";
  } else if (
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  } else {
    const firstLetter = obj.siteName[0].toUpperCase();
    const balanceLetter = obj.siteName.slice(1);
    const capitalizeName = firstLetter + balanceLetter;
    return `${capitalizeName}#${obj.name}@${obj.birthYear}`;
  }
}

const result3 = password(myObject);
console.log(result3);

/**
 * @Problem 5: Monthly Savings of a Freelancer
 * Requirement analysis
 * Function Name Must be monthlySavings()
 * ✔️ @param {Array,Number} - Array - monthly income and Number -Living cost
 * ✔️ if Array element >=3000 deduct 20% for bank tax
 * ✔️ after deduction return monthly income is array element sum
 * ✔️ and his monthly savings = monthly income - living cost
 * ✔️ @returns {String} - monthly savings if saving amount <=0 return "earn more"
 * ✔️ extra validation - if input is not array or number return "invalid input"
 *
 */

const monthlyIncome = 100;
const Cost = [900, 2700, 3400];

function monthlySavings(arr, livingcost) {
  if (
    !Array.isArray(arr) ||
    typeof livingcost !== "number" ||
    Number.isNaN(livingcost)
  ) {
    return "invalid input";
  } else {
    let totalIncome = 0;
    bankTax = 20 / 100;
    for (const element of arr) {
      if (element >= 3000) {
        totalIncome += element * (1 - bankTax);
      } else {
        totalIncome += element;
      }
    }
    const totalSavings = totalIncome - livingcost;
    if (totalSavings >= 0) {
      return totalSavings;
    } else {
      return "earn more";
    }
  }
}

const result4 = monthlySavings(monthlyIncome, Cost);
console.log(result4);
