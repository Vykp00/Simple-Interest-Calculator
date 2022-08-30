function compute()
{
    var principal = document.getElementById("principal").value; //Assign input amount
    if (parseInt(principal) <= 0 || principal == null || principal == ""){ //Check if the number is positive or blank
        alert("Enter a positive number"); //Call the alert and add focus on the box
        document.getElementById("principal").focus();
        return false
    }
    else {console.log(principal);}
    var rate = document.getElementById("rate").value; //Assign input of interest rate
    var years = document.getElementById("years").value; //Assign the input of years
    var year = new Date().getFullYear()+parseInt(years);  //Convert "No of Years" into the actual year in the future
    var interest = principal * years * rate /100;
    var amount = parseInt(interest);
    document.getElementById("result").innerHTML="<br> If you deposit <mark>"+ principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}
function updateRate()
{//Update the current slider value (each time you drag the slider handle
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}    