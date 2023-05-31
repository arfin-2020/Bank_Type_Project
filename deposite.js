// Here We are Doing functional Programming.

const inputValueById = (inputId) =>{
  const inputField = document.getElementById(inputId);
  const Amount = parseFloat(inputField.value);
  return Amount;
}

// Balance calculation by id

const balanceCalculationById = (id)=>{
  const capturingElement = document.getElementById(id);
  const previousAmount = inputValueById("deposite-field");
  const totalBalance = parseFloat(capturingElement.innerText);
  const totalSum = parseFloat(totalBalance + previousAmount);
  return totalSum;
}

const depositeField = document.getElementById('deposite-field');

// Here Implemented deposit Actions
    if(depositeField.value  != 'null'){
     
      document.getElementById('btn-deposite').addEventListener('click', function(){
      const depositeField = document.getElementById('deposite-field');
      const totalSumOfDeposit = balanceCalculationById("depositTotal");
      const totalDepositElement = document.getElementById('depositTotal');
      totalDepositElement.innerText = totalSumOfDeposit.toFixed(2);   
      //Here Implementing adding balance
      
      const totalBalance = balanceCalculationById('totalBalance');
      const balanceElement = document.getElementById('totalBalance');
      balanceElement.innerText = totalBalance.toFixed(2);
      depositeField.value = '';
    })
    }else{
      alert('Please Enter value in input field!')
      
    } 
      
// Here Implemented withdraw Actions
document.getElementById("btn-withdraw").addEventListener("click", function(){
    const withdrawField  = document.getElementById('withdraw-field');
    const withdrawAmmount = inputValueById("withdraw-field");
    const balanceElement = document.getElementById('totalBalance');
    const previousBalanceAmount = parseFloat(balanceElement.innerText);

   if(withdrawAmmount < previousBalanceAmount){
    //Here implemented withdraw sumation

    const withdrawElement = document.getElementById("withdrawTotal");
    const previousWithdrawAmount = parseFloat(withdrawElement.innerText);
    const totalWithdrawAmount = parseFloat(withdrawAmmount + previousWithdrawAmount);
    withdrawElement.innerText = totalWithdrawAmount.toFixed(2);
    withdrawField.value = ''; 
    
    // Here Implemented Reduce withdraw amount from balance
    
    const totalBalance = (previousBalanceAmount - withdrawAmmount);
    balanceElement.innerText = totalBalance.toFixed(2);
   }else{
    alert('Insuffecince Balance.');
   }
})

