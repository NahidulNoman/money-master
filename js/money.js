document.getElementById('calculate-button').addEventListener('click',function(){
    // get income 
    let income = document.getElementById('income');
    let incomeString = income.value;
    let getIncome = parseFloat(incomeString);
    // get foods
    let food = document.getElementById('food');
    let foodString = food.value;
    let getFood = parseFloat(foodString);
    // get clothes
    let clothes = document.getElementById('clothes');
    let clothesString = clothes.value;
    let getClothes = parseFloat(clothesString);
    // get total expensive
    let expenses = getFood + getClothes;
    // get total income after all expensive
    let totalIncome = getIncome - expenses;
    // get final balance 
    let balance = document.getElementById('balance');
    balance.innerText = totalIncome;

    let totalExpensive = document.getElementById('total-expenses');
    totalExpensive.innerText = expenses;
})

document.getElementById('savings-button').addEventListener('click',function(){
    let savings = document.getElementById('savings');
    let savingsString = savings.value;
    let lastSavings = parseFloat(savingsString);
    
    let income = document.getElementById('income');
    let incomeString = income.value;
    let getIncome = parseFloat(incomeString);
   
    let percentage = getIncome * (lastSavings / 100);
    
    let savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText =percentage;

    let balance = document.getElementById('balance');
    balance.innerText = totalIncome;

    let remainingBalance = balance - savingAmount;

    let totalBalance = document.getElementById('remaining-balance');
    totalBalance.innerText = remainingBalance;
})