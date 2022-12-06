// button even handeler add 
document.getElementById('Deposite-button').addEventListener('click',function(){
    const depositInput=document.getElementById('deposite-balance');
    const depositAmount=parseFloat(depositInput.value);
    // console.log(depositAmount);
     const depositTotal=document.getElementById('deposite-total');
     const depositText=parseFloat(depositTotal.innerText);
     depositTotal.innerText=depositText+depositAmount;

     console.log(depositText);
// update balance 
     const balanceTotal=document.getElementById('balance-total');
     const balanceText=balanceTotal.innerText;
     const previousBalance= parseFloat(balanceText);
     balanceTotal.innerText=previousBalance+depositAmount;
     console.log(balanceText);
     depositInput.value='';

});
// evenhandeler add withdraw button 
document.getElementById('withdrow-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdrow-balance');
    const withdrowAmount=parseFloat(withdrawInput.value);
    // console.log(withdrowAmount);
    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawText=parseFloat(withdrawTotal.innerText);
    const previousWithdraw= parseFloat(withdrawText)
    withdrawTotal.innerText=withdrawText+withdrowAmount;

    console.log(withdrawText);


    // update balance after withdraw 
const balanceTotal=document.getElementById('balance-total');
const balanceText=balanceTotal.innerText;
const previousBalance=parseFloat(balanceText);
balanceTotal.innerText=previousBalance-withdrowAmount;

    withdrawInput.value='';
})