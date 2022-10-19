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

let P = document.createElement('p')
P.id = 'description'
P.innerText = 'THE TASK IS TO CREATE A CALCULATOR USING DOM MANIPULATION TO PERFORM SOME BASIC MATHEMATICAL OPERATIONS'
document.getElementById('calculator').appendChild(P)

// creating a class calculator for table
let cal = document.createElement('div')
cal.id = 'cal'
cal.className = 'calculator'
document.getElementById('calculator').appendChild(cal)

// creating a display for calculator
let screen = document.createElement('input')
screen.id = 'result'
document.getElementById('cal').appendChild(screen)
document.getElementById("result").name = "display";
document.getElementById("result").type = "text";

// creating buttons of calculator using table element
let table = document.createElement('table')
table.id = 'row'
document.getElementById('cal').appendChild(table)


// here creating rows in the table to add all the buttons

// 1.creating first row of buttons - 00,000,pi,delete
let tr5 = document.createElement('tr')
tr5.id = 'tr5'
document.getElementById('row').appendChild(tr5)

let zero2 = document.createElement('td')
zero2.id = 'zero2'
document.getElementById('tr5').appendChild(zero2)

let zero3 = document.createElement('td')
zero3.id = 'zero3'
document.getElementById('tr5').appendChild(zero3)

let pi = document.createElement('td')
pi.id = 'pi'
document.getElementById('tr5').appendChild(pi)

let del = document.createElement('td')
del.id = 'del'
document.getElementById('tr5').appendChild(del)

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



// 2. creating second row for - allclear,brackets and percent buttons 
let tr0 = document.createElement('tr')
tr0.id = 'tr0'
document.getElementById('row').appendChild(tr0)

let clear = document.createElement('td')
clear.id = 'clearbtn'
document.getElementById('tr0').appendChild(clear)

let brac1 = document.createElement('td')
brac1.id = 'brac1'
document.getElementById('tr0').appendChild(brac1)

let brac2 = document.createElement('td')
brac2.id = 'brac2'
document.getElementById('tr0').appendChild(brac2)

let percent = document.createElement('td')
percent.id = 'percent'
document.getElementById('tr0').appendChild(percent)

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



// 3.  creating third row for - 7,8,9,divide button 
let tr1 = document.createElement('tr')
tr1.id = 'tr1'
document.getElementById('row').appendChild(tr1)

let td1 = document.createElement('td')
td1.id = 'td1'
document.getElementById('tr1').appendChild(td1)

let td2 = document.createElement('td')
td2.id = 'td2'
document.getElementById('tr1').appendChild(td2)

let td3 = document.createElement('td')
td3.id = 'td3'
document.getElementById('tr1').appendChild(td3)

let divide = document.createElement('td')
divide.id = 'divide'
document.getElementById('tr1').appendChild(divide)

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



// 4.creating fourth row for - 4,5,6,multiply button 
let tr2 = document.createElement('tr')
tr2.id = 'tr2'
document.getElementById('row').appendChild(tr2)

let td4 = document.createElement('td')
td4.id = 'td4'
document.getElementById('tr2').appendChild(td4)

let td5 = document.createElement('td')
td5.id = 'td5'
document.getElementById('tr2').appendChild(td5)

let td6 = document.createElement('td')
td6.id = 'td6'
document.getElementById('tr2').appendChild(td6)

let multiply = document.createElement('td')
multiply.id = 'multiply'
document.getElementById('tr2').appendChild(multiply)

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



// 5.creating fifth row for - 1,2,3,subtract button 
let tr3 = document.createElement('tr')
tr3.id = 'tr3'
document.getElementById('row').appendChild(tr3)

let td7 = document.createElement('td')
td7.id = 'td7'
document.getElementById('tr3').appendChild(td7)

let td8 = document.createElement('td')
td8.id = 'td8'
document.getElementById('tr3').appendChild(td8)

let td9 = document.createElement('td')
td9.id = 'td9'
document.getElementById('tr3').appendChild(td9)

let minus = document.createElement('td')
minus.id = 'minus'
document.getElementById('tr3').appendChild(minus)

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



// 6. creating sixth row for - 0.decimal,equalsto.addition button 
let tr4 = document.createElement('tr')
tr4.id = 'tr4'
document.getElementById('row').appendChild(tr4)

let td10 = document.createElement('td')
td10.id = 'td10'
document.getElementById('tr4').appendChild(td10)

let decimal = document.createElement('td')
decimal.id = 'decimal'
document.getElementById('tr4').appendChild(decimal)

let equals = document.createElement('td')
equals.id = 'equals'
document.getElementById('tr4').appendChild(equals)

let plus = document.createElement('td')
plus.id = 'plus'
document.getElementById('tr4').appendChild(plus)

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



// creating a function for buttons 

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
            if (display.value == 'ERROR' || display.value == '3.14' || display.value == 'undefined') {
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