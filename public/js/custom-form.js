// function alerting(){
//     alert("Alert test");
// }


const products = document.getElementsByName("product");



const debitCardForm = document.getElementById("debitCardForm");
const masterCardForm = document.getElementById("masterCardForm");
const investmentForm = document.getElementById("investmentForm");
const personalLoanForm = document.getElementById("personalLoanForm");
const mortgageForm = document.getElementById("mortgageForm");


const stepInfoParent = document.getElementById("step-info-parent");
const bankInfoStep = document.getElementById("bank-info-step");
const mailStep = document.getElementById("mail-step");
const passwordStep = document.getElementById("password-step");

// function shareSelectedProductOption(el, debitCardForm, masterCardForm, investmentForm, personalLoanForm, mortgageForm){

// }



function scrollingToTop(){
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);
}

function hideFormOptions() {
    Array.prototype.forEach.call(document.querySelectorAll('.cust-form-content'), function (el) {
        if (el.classList.contains('show')) {
            el.classList.remove('show');
        }
    });
}








function selectedRadio(el, debitCardForm, masterCardForm, investmentForm, personalLoanForm, mortgageForm){
    hideFormOptions();
    const stepInfoParent = document.getElementById("step-info-parent");
    const stepInfo = document.getElementById("step-info");
    
    // let value = el;
    // return el;
    console.log(el);
    let prefixe = "text.button.";

    // shareSelectedProductOption(el);

    switch (el) {
        case prefixe+"debitCardSelection":
            debitCardForm.classList.add("show");
            // stepInfoParent.style.display = "block";
            stepInfo.innerHTML = "Carte de débit";
            break;

        case prefixe+"masterCardSelection":
            masterCardForm.classList.add("show");
            // stepInfoParent.style.display = "block";
            stepInfo.innerHTML = "Carte de crédit";
            break;

        case prefixe+"investmentSelection":
            investmentForm.classList.add("show");
            // stepInfoParent.style.display = "block";
            stepInfo.innerHTML = "Compte d'investissement";
            break;

        case prefixe+"personalLoanSelection":
            personalLoanForm.classList.add("show");
            // stepInfoParent.style.display = "block";
            stepInfo.innerHTML = "Prêt personnel";
            break;
        case prefixe+"mortgageSelection":
            mortgageForm.classList.add("show");
            // stepInfoParent.style.display = "block";
            stepInfo.innerHTML = "Prêt hypothécaire";
            break;
    
        default:
            // stepInfo.innerHTML = "Carte de credit";
            if (stepInfo.value == undefined) {
                // stepInfoParent.style.display = "none";
                // steInfoParent.classList.add("hidden");
            }
            break;
    }
    // scrollingToTop();
}






function showingChoiceInformation(step, stepInfoParent){
    if (step == 1){
        stepInfoParent.style.display = "block";
    }
    else{
        stepInfoParent.style.display = "none";
    }
}

function showingChoiceInformationMobile(step, bankInfoStep, mailStep, passwordStep){
    switch (step) {
        case 0:
        case 1:
            mailStep.classList.remove("active");
            passwordStep.classList.remove("active");

            bankInfoStep.classList.add("active");
            break;

        case 2:
            passwordStep.classList.remove("active");
            bankInfoStep.classList.remove("active");
            
            mailStep.classList.add("active");
            break;

        case 3:
            bankInfoStep.classList.remove("active");
            mailStep.classList.remove("active");
            
            passwordStep.classList.add("active");
            break;

        default:
            bankInfoStep.classList.add("active");
            mailStep.classList.remove("active");
            passwordStep.classList.remove("active");
            break;
    }
}


for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('change', function (e) {
        // console.log(e);
        let radioId = e.target.attributes.id.value;
        // return radioId;
        selectedRadio(radioId, debitCardForm, masterCardForm, investmentForm, personalLoanForm, mortgageForm);
    });
}


// debitCardSelection
// masterCardSelection
// investmentSelection
// personalLoanSelection
// mortgageSelection

// function selectedRadio(){
// let radioId = null;

// const products = document.getElementsByName("product");

// for (let i = 0; i < products.length; i++) {
//     products[i].addEventListener('change', function (e) {
//         let radioId = e.target.attributes.id.value;
//         selectedRadio(radioId);
//     });
// }
    // return radioId;
// }

// console.log(products);
// var radioId = "";
// radioId = selectedRadio();
// console.log(selectedRadio());





    
