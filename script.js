let realtorCommissions = .06;
let closingCosts = .04;
let holdingCosts = .03;
let rOI = .12;
let repairContingency = .15
let risk = .03
let cashOffer = 0;
let listAsIs = 0;
let arv = 0;
let repairs = 0;
let margin = Math.max(arv*rOI, 20000);

function setArv() {
    arv = document.getElementById('arvInput').value;
    displayOffers();
}
function setRepairValue() {
    repairs = document.getElementById('repairsInput').value;
    displayOffers();
}
function displayOffers() {
    cashOffer = getCashOffer();
    listAsIs = getListAsIsOffer();
    displayExpenses();
    document.getElementById("cashOffer").innerHTML = 'Cash Offer: $' + cashOffer;
    document.getElementById('listAsIsOffer').innerHTML = 'List As-Is Price: $' + listAsIs;
}
function getCashOffer() {
    return arv - repairs - (arv*realtorCommissions)-(arv*closingCosts) - (arv*holdingCosts) - (arv*repairContingency) - (arv*risk) - margin;
}
function getListAsIsOffer() {
    return arv - (repairs*1.5);
}
function displayExpenses() {
    document.getElementById("realtorCommissions").innerHTML = 'Realtor Commissions: $' + arv * realtorCommissions;
    document.getElementById("closingCosts").innerHTML = 'Closing Costs: $' + arv * closingCosts;
    document.getElementById("holdingCosts").innerHTML = 'Holding Costs: $' + arv * holdingCosts;
    document.getElementById("roi").innerHTML = 'Return on Investment: $' + margin;
    document.getElementById("repairContingency").innerHTML = 'Repair Contingency: $' + arv * repairContingency;
    document.getElementById("risk").innerHTML = 'Risk Margin: $' + arv * risk;
}
function getWehabOffer() {
    
}