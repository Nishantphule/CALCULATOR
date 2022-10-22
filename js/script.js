// creating a div element with class container
let calculator = document.createElement('div')
calculator.id = 'calculator'
calculator.className = 'container-fluid'
document.body.appendChild(calculator)

// creating a header in div element
let head = document.createElement('H1')
head.id = 'title'
head.innerText = 'CALCULATOR'
document.getElementById('calculator').appendChild(head)

// p tag for description
let P = document.createElement('p')
P.id = 'description'
P.innerText = 'THE TASK IS TO CREATE A CALCULATOR USING DOM MANIPULATION TO PERFORM SOME BASIC MATHEMATICAL OPERATIONS'
document.getElementById('calculator').appendChild(P)

// creating a table for all buttons
let cal = document.createElement('div')
cal.id = 'cal'
cal.className = 'calculator'
document.getElementById('calculator').appendChild(cal)

// creating a display for calculator
let screen = document.createElement('input')
screen.id = 'result'
screen.name = "display";
screen.type = "text";
document.getElementById('cal').appendChild(screen)


// creating table element
let table = document.createElement('table')
table.id = 'cal-table'
document.getElementById('cal').appendChild(table)


// creating rows for buttons
var trNum = ["tr0", "tr1", "tr2", "tr3", "tr4", "tr5"]
trNum.forEach((row) => {
    let eachRow = document.createElement('tr')
    eachRow.id = row
    document.getElementById('cal-table').append(eachRow)
})


// here creating rows in the table to add all the buttons

// 1. creating second row for - allclear,brackets and percent buttons 

let clear = document.createElement('td')
clear.id = 'clearbtn'
document.getElementById('tr0').appendChild(clear)

let rowOneArr = ["brac1", "brac2", "percent"];
rowOneArr.forEach((e) => {
    let rowOnetd = document.createElement("td")
    rowOnetd.id = e
    tr0.append(rowOnetd)
})

let clrbtn = document.createElement('button')
clrbtn.id = 'clear'
clrbtn.innerText = 'AC'
document.getElementById('clearbtn').appendChild(clrbtn)

let brac1btn = document.createElement('button')
brac1btn.innerText = '('
document.getElementById('brac1').appendChild(brac1btn)

let brac2btn = document.createElement('button')
brac2btn.innerText = ')'
document.getElementById('brac2').appendChild(brac2btn)

let percentbtn = document.createElement('button')
percentbtn.innerText = '%'
document.getElementById('percent').appendChild(percentbtn)



// 2.  creating third row for - 7,8,9,divide button 

let rowTwoArr = ["td1", "td2", "td3", "divide"];
rowTwoArr.forEach((e) => {
    let rowTwotd = document.createElement("td")
    rowTwotd.id = e
    tr1.append(rowTwotd)
})

let button1 = document.createElement('button')
button1.innerText = '7'
document.getElementById('td1').appendChild(button1)

let button2 = document.createElement('button')
button2.innerText = '8'
document.getElementById('td2').appendChild(button2)

let button3 = document.createElement('button')
button3.innerText = '9'
document.getElementById('td3').appendChild(button3)

let dividebtn = document.createElement('button')
dividebtn.innerText = '/'
document.getElementById('divide').appendChild(dividebtn)



// 3.creating fourth row for - 4,5,6,multiply button 

let rowThreeArr = ["td4", "td5", "td6", "multiply"];
rowThreeArr.forEach((e) => {
    let rowThreetd = document.createElement("td")
    rowThreetd.id = e
    tr2.append(rowThreetd)
})

let button4 = document.createElement('button')
button4.innerText = '4'
document.getElementById('td4').appendChild(button4)

let button5 = document.createElement('button')
button5.innerText = '5'
document.getElementById('td5').appendChild(button5)

let button6 = document.createElement('button')
button6.innerText = '6'
document.getElementById('td6').appendChild(button6)

let multiplybtn = document.createElement('button')
multiplybtn.innerText = 'X'
document.getElementById('multiply').appendChild(multiplybtn)


// 4.creating fifth row for - 1,2,3,subtract button 

let rowFourArr = ["td7", "td8", "td9", "minus"];
rowFourArr.forEach((e) => {
    let rowFourtd = document.createElement("td")
    rowFourtd.id = e
    tr3.append(rowFourtd)
})

let button7 = document.createElement('button')
button7.id = '1'
button7.innerText = '1'
document.getElementById('td7').appendChild(button7)

let button8 = document.createElement('button')
button8.id = '2'
button8.innerText = '2'
document.getElementById('td8').appendChild(button8)

let button9 = document.createElement('button')
button9.id = '3'
button9.innerText = '3'
document.getElementById('td9').appendChild(button9)

let minusbtn = document.createElement('button')
minusbtn.id = 'subtract'
minusbtn.innerText = '-'
document.getElementById('minus').appendChild(minusbtn)


// 5. creating sixth row for - 0.decimal,equalsto.addition button 

let rowFiveArr = ["td10", "decimal", "equals", "plus"];
rowFiveArr.forEach((e) => {
    let rowFivetd = document.createElement("td")
    rowFivetd.id = e
    tr4.append(rowFivetd)
})

let button10 = document.createElement('button')
button10.innerText = '0'
document.getElementById('td10').appendChild(button10)

let decimalbtn = document.createElement('button')
decimalbtn.innerText = '.'
document.getElementById('decimal').appendChild(decimalbtn)

let equalsbtn = document.createElement('button')
equalsbtn.id = 'equal'
equalsbtn.innerText = '='
document.getElementById('equals').appendChild(equalsbtn)

let plusbtn = document.createElement('button')
plusbtn.id = 'add'
plusbtn.innerText = '+'
document.getElementById('plus').appendChild(plusbtn)


// 6.creating first row of buttons - 00,000,pi,delete

let rowSixArr = ["zero2", "zero3", "pi", "del"];
rowSixArr.forEach((e) => {
    let rowSixtd = document.createElement("td")
    rowSixtd.id = e
    tr5.append(rowSixtd)
})

let zero2btn = document.createElement('button')
zero2btn.innerText = '00'
document.getElementById('zero2').appendChild(zero2btn)

let zero3btn = document.createElement('button')
zero3btn.innerText = '000'
document.getElementById('zero3').appendChild(zero3btn)

let pibtn = document.createElement('button')
pibtn.id = 'pibtn'
document.getElementById('pi').appendChild(pibtn)

let img1 = document.createElement('img')
img1.id = "img1"
img1.src = "/img/pi.png"
document.getElementById('pibtn').appendChild(img1)

let delbtn = document.createElement('button')
delbtn.id = 'delbtn'
delbtn.innerText = 'DEL'
document.getElementById('del').appendChild(delbtn)



// creating a function for buttons when we click

// AC - will clear the all the data on screen
// "="- will evaluate the data present on screen for that we will use eval()
// "DEL"- will be used as a delete button 
// "X" will be set for multiplication
// pi button with innertext as "" will give 3.14 as output on screen when pressed 
// and remaining button will give their innertext as a output on screen when we click on it

let display = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let displayout = ''
for (item of buttons) {
    item.addEventListener('click', (btn) => {
        buttonText = btn.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            displayout += buttonText;
            display.value = displayout;
        }
        else if (buttonText == 'AC') {
            displayout = '';
            display.value = displayout;
        }
        else if (buttonText == '=') {
            try {
                displayout = eval(displayout)
                display.value = displayout;
            } catch (error) {
                displayout = 'ERROR'
                display.value = displayout;
            }
        }
        else if (buttonText == 'DEL') {
            if (display.value.includes('ERROR') || display.value == '3.14' || display.value.includes('undefined')) {
                displayout = display.value.slice(0, 0);
                display.value = displayout;
            }
            else {
                displayout = display.value.slice(0, -1);
                display.value = displayout;
            }
        }
        else if (buttonText == '') {
            buttonText = '3.14';
            displayout += buttonText;
            display.value = displayout;
        }
        else {
            displayout += buttonText;
            display.value = displayout;
        }
    })
}

let foot = document.createElement('footer')
foot.innerText = 'CREATED BY NISHANT PHULE'
document.body.appendChild(foot)