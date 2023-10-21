
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const date = new Date();
let todayDay = date.getDate();
let todayMonth = date.getMonth();
let todayYear = date.getFullYear();
let month, day,year;
function ajouter(){
    let myDay = document.getElementById('day').value;
    let myMonth = document.getElementById('month').value;
    let myYear = document.getElementById('year').value;
    let x = myMonth - 1;
    let inputs = document.getElementsByClassName("inputy");
        Array.from(inputs).forEach(input =>{
            input.style.borderColor = "#716f6f6f";
        })
        let labels = document.getElementsByTagName("label");
        Array.from(labels).forEach(label => {
            label.style.color = "#716F6F";
        })
        let errors = document.getElementsByClassName("error")
        Array.from(errors) .forEach(error => {
           error.innerText = "";
        });
    if((myDay === "")||(myMonth === "") || (myYear == "") || (myDay > months[x]) ||(myDay <=0) || (myMonth > 12) || (myMonth< 1) || (myYear > todayYear) || (myYear <= 0)){
        document.getElementsByClassName("inputy")[0].style.borderColor = "red";
        document.getElementsByClassName("inputy")[1].style.borderColor = "red";
        document.getElementsByClassName("inputy")[2].style.borderColor = "red";
        document.getElementsByTagName("label")[0].style.color = "red";
        document.getElementsByTagName("label")[1].style.color = "red";
        document.getElementsByTagName("label")[2].style.color = "red";
        if (myDay === ""){
            document.getElementById("error-day").innerText = "This field is required";
        }
        console
        if (myMonth === ""){
            document.getElementById("error-month").innerText = "This field is required";
        }
        if (myYear === ""){
            document.getElementById("error-year").innerText = "This field is required";
        }
        if ((myDay > 31) || (myDay < 0)||(myDay === 0)){
            document.getElementById("error-day").innerText = "Must be a valid date";
        }
        if ((myMonth > 12) || (myMonth < 0) ||(myMonth === 0)){
            document.getElementById("error-month").innerText = "Must be a valid date";
        }
        else{
            if (myDay > months[x]){
                document.getElementById("error-day").innerText = "Must be a valid date";
            }
        }
        if ((myYear > todayYear)||(myYear < 1)){
            document.getElementById("error-year").innerText = "Must be a valid date";
        }
        let outYear = document.getElementById("out-year");
        let outMonth = document.getElementById("out-month");
        let outDay = document.getElementById("out-day");
        outYear.innerHTML = "- -";
        outMonth.innerHTML = "- -";
        outDay.innerText = "- -";
        
    }
    else{
        let year = todayYear - myYear;
        if (todayMonth < myMonth){
            year --;  
            let somme = 365 - months[todayMonth] + todayDay;
            let i = todayMonth + 1;
            while( i != (myMonth-1)){
                somme -= months[i]
                i ++;
            }
            somme -= myDay;
            month = somme / 30.5;
            month = parseInt(month);
            if (todayDay < myDay){
                    day = months[myMonth-1] - (myDay-todayDay);
            }
            else{
                day = todayDay - myDay;
            }
        }
        else{
            month = todayMonth +1 - myMonth;
            if (todayDay < myDay){
                month --;
                day = months[myMonth-1] - (myDay-todayDay);
            }
            else{
                day = todayDay - myDay;
            }
        }
        let outYear = document.getElementById("out-year");
        let outMonth = document.getElementById("out-month");
        let outDay = document.getElementById("out-day");
        outYear.innerHTML = year;
        outMonth.innerHTML = month;
        outDay.innerText = day;
    }
}