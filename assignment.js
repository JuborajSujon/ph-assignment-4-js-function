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
