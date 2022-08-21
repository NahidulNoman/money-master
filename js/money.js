// step one 

function getFood(){
    let food = document.getElementById('food');
    let foodString = food.value;
    let getFood = parseFloat(foodString);
    return getFood;
}
function getCloth(){
    let clothes = document.getElementById('clothes');
    let clothesString = clothes.value;
    let getClothes = parseFloat(clothesString);
    return getClothes;
}
function getIncome(){
    let income = document.getElementById('income');
    let incomeString = income.value;
    let getIncome = parseFloat(incomeString);
    return getIncome;
}

document.getElementById('calculate-button').addEventListener('click',function(){
    let food = document.getElementById('food').value;
    let clothes = document.getElementById('clothes').value;
    let income = document.getElementById('income').value;
    // (food == '' || clothes == '' || income == '')
    // (food !== 'number' || clothes !== 'number' || income !== 'number')
    if(food <= 0 || clothes <= 0 || income <= 0){
        alert('not a valid number');
    }
    else{
        // get income 
    let income = getIncome();
    // get foods
    let food = getFood();
    // get clothes
    let clothe = getCloth();
    // get total expensive
    let expenses = food + clothe;
    // get total income after all expensive
    let totalIncome = income - expenses;
    // get final balance 
    let balance = document.getElementById('balance');
    balance.innerText = totalIncome;

    let totalExpensive = document.getElementById('total-expenses');
    totalExpensive.innerText = expenses;
    }
    
})

// step two

document.getElementById('savings-button').addEventListener('click',function(){
    let savings = document.getElementById('savings');
    let savingsString = savings.value;
    if(savingsString >= 100){
        alert('100% er vitorei rakho!!')
    }
    else{
        
    let lastSavings = parseFloat(savingsString);
    
    let income = getIncome();

    let percentage = income * (lastSavings / 100);

    let food = getFood();
    let clothe = getCloth();

    let expenses = food + clothe;

    let totalIncome = income - expenses;

    let balance = document.getElementById('balance');
    balance.innerText = totalIncome;
    
    let savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = percentage;
    let save = percentage.toFixed(2);

    let remaining = totalIncome - save;
    
    let totalBalance = document.getElementById('remaining-balance');
    totalBalance.innerText = remaining;
    }
    
})