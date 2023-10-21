
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(months)
const date = new Date();
let todayDay = date.getDate();
let todayMonth = date.getMonth();
let todayYear = date.getFullYear();
console.log(todayYear);
let month, day,year;
function ajouter(){
    let myDay = document.getElementById('day').value;
    let myMonth = document.getElementById('month').value;
    let myYear = document.getElementById('year').value;
    console.log(myDay)
    console.log(myMonth);
    console.log(myYear);
    let year = todayYear - myYear;
    console.log(year);

    if (todayMonth < myMonth){
        year --;  
        let somme = 365 - months[todayMonth] + todayDay;
        let i = todayMonth + 1;
        while( i != (myMonth-1)){
            somme -= months[i]
            i ++;
        }
        somme -= myDay;
        console.log(somme);
        month = somme / 30.5;
        console.log(month);
        month = parseInt(month);
        console.log(month);
        if (todayDay < myDay){
                day = months[myMonth-1] - (myDay-todayDay);
        }
        else{
            day = todayDay - myDay;
        }
        console.log(day)
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
