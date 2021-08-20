
function UpdateNumber(product,price,isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    const productPrice = document.getElementById(product + '-price');
    if (isIncreasing==true) {
        productInput.value = parseInt(productInput.value) + 1;
        productPrice.innerText = parseInt(productPrice.innerText)+ price;
    }
    else if(productInput.value>0){

        productInput.value = parseInt(productInput.value) - 1;
        productPrice.innerText = parseInt(productPrice.innerText) - price;
    }
    subtotal();
}

document.getElementById('case-btn-plus').addEventListener('click',function(){
    
    UpdateNumber('case',59,true);

})
document.getElementById('case-input-minus').addEventListener('click',function(){
    

    UpdateNumber('case',59,false);
    
})
document.getElementById('phone-plus').addEventListener('click',function(){
    UpdateNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    UpdateNumber('phone',1219,false);
})

// subtotal tax total 


function subtotal(){
   const subPhonePrice = document.getElementById('phone-price');
   const subCasePrice = document.getElementById('case-price');
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax-amount');
    subTotal.innerText = parseInt(subPhonePrice.innerText) + parseInt(subCasePrice.innerText); 
    tax.innerText= parseInt(subTotal.innerText) / 10;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(tax.innerText) + parseFloat(subTotal.innerText);
    
}