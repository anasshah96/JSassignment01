// -------- Chapter # 01: ALERTS--------

// Task # 01 --------
// alert("Hello world!")


// Task # 02 --------
// alert("Error! please enter a valid password")


// Task # 03 --------
// alert("Welcome to JS Land...\nHappy coding!")


// Task # 04 --------
// alert("Welcome to JS Land...")
// alert("Happy coding!")


// Task # 05 --------
// alert("Hello... I can run JS through my browser's console")


// Task # 06 --------
// ✔ Already done 


// Task # 07 --------
// Practice placement of <script></script> element in
// following sections of your project in exercise 6:

// a. Head                              -- ✔ Done 

// b. Body (before your page’s HTML)    -- ✔ Done 

// c. Body (inside your page’s HTML)    -- ✔ Done 

// d. Body (after your page’s HTML)     -- ✔ Done 

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------





// -------- Chapter # 02: VARIABLES FOR STRINGS --------

// Task # 01 --------
// var  username = ""


// Task # 02 --------
// var myName = "Jhone Doe"


// Task # 03 --------
//--a
// var message;

//--b
// message= "Hello World"

//--c
// alert(message)


// Task # 04 --------
// var student_name = "Jhone Doe"
// var age = "15 years old"
// var course = "Certified Mobile Dovelopment"
// alert(student_name)
// alert(age)
// alert(course)


// Task # 06 --------
// First method
// var a = "PIZZA \nPIZZ \nPIZ \nPI \nP"
// alert(a)

// Second Method 
// var a = "PIZZA"
// var b = "PIZZ"
// var c = "PIZ"
// var d = "PI"
// var e = "P"
// alert(a + "\n" + b + "\n" + c + "\n" + d + "\n" + e)


// Task # 06 --------
// var email;
// email =  "example@example.com"
// alert("My email address is " + email)


// Task # 07 --------
// var book;
// book = "A smarter way to learn JavaScript"
// alert("I'm trying to learn from the Book " + book)


// Task # 08 --------
// document.write("<h1>Yah! I can wirte HTML content through JavaScript</h1>");


// Task # 09 --------
// var a;
// a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(a)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------





// -------- Chapter # 03: VARIABLES FOR NUMBERS --------

// Task # 01 --------
// var age;
// age = 15 
// alert("I'm " + age + " years old" )



// Task # 02 --------
// var a = "You've visited this site N times";
// alert(a);


// Task # 03 --------
// var  birthYear;
// birthYear = 1990
// document.write( "<h2>My birthday year is " +  birthYear +   "<br> Data type of my declear variable is number </h2>")


// Task # 04 --------
//--a
// var visitor_name = "John Doe"
//--b
// var product_title = "T-shirt"
//--c
// var quantity = 5
// document.write( "<p> <strong>"  + visitor_name + " </strong> ordered <strong>" + quantity + " " + product_title + " </strong>(s) on XYZ Clothing store<p>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------





// -------- Chapter # 04: VARIABLE NAMES: LEGAL & ILLEGAL  --------

// Task # 01 --------
// var firstName = 'John', lastName = "Doe", age = 42;

// Task # 02 --------
//--5 legal variables
// $1name,  name1, firstName, _numone, my1stVariable

//--5 illegal variables
// 1name, break, 123, .variable, true or false

// Task # 03 --------
//--a
// document.write("<h1> Rules for naming JS variables <br>  </h1>")
//--b
// document.write( "<p>variable names can only contains, <strong>Uppercase letter, Lowercase letter, $ (dollar sign)</strong> and <strong> _ (underScore).</strong> <br>For Example: <strong>$my_1stVariable</strong></p>")

//--c
// document.write( "<p>Variable names must begin with a <strong>$ (dollar sign), _ (underScore) </strong> or <strong>Alphabet (letters).</strong><br> For example: <strong>$name, _name or name</strong></p>")

//--d
// document.write( "<p> Variable names are case sensitive </p>")

//--e 
// document.write( "<p> Variable names should not be JS keywords</p>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------





// -------- Chapter # 05: MATH EXPRESSIONS --------

// Task # 01 --------
// var a;
// a = +prompt("Enter first value", "0")
// b = +prompt("Enter second value", "0")
// c = a + b
// document.write("Sum of " + a + " and " + b + " is " + c + "<br>")

// Task # 02 --------
// d = a - b
// document.write("Subtraction of " + a + " and " + b + " is " + d + "<br>")

// e = a * b
// document.write("Multiplication of " + a + " and " + b + " is " + e + "<br>")

// f = a / b
// document.write("Division of " + a + " and " + b + " is " + f + "<br>")

// g = a % b
// document.write("Modulus of " + a + " and " + b + " is " + g + "<br>")


// Task # 03 --------
//--a
// var x;

//--b
// document.write("Value after variable declaration is " + x + "<br>")

//--c
// x = 5;

// --d
// document.write("Initial value: " + x + "<br>")

//--e
// x = ++x

//--f
// document.write("Value after increment is: " + x + "<br>")

//--g
// x = x + 7

//--h
// document.write("Value after addition is: " + x + "<br>")

//--i
// x = --x

//--j
// document.write("Value after decrement is: " + x + "<br>")

//--k
// x = x % 3

//--l
// document.write("The remainder is: " + x + "<br>")


// Task # 04 --------
// ticketPrice = 600
// quantity = 5
// toalcost = ticketPrice * quantity
// document.write("Total cost of " + quantity + " ticket(s) to a movie is " + toalcost + " PKR")


// Task # 05 --------

// document.write("Table of 4 <br>");
// for(var i = 1; i <= 10; i++){
// 	document.write("4" + "x" + i + "=" + 4*i + "<br>")}


// Task # 06 --------
// --a
// var celsius = 24

// --b
// var fahrenheit = (celsius * 9/5)+32

// --c 
// var Fahrenheit = 70

// --d 
// var Celsius = (Fahrenheit - 32)*5/9

// document.write("<h2>The Temperature Converter:</h2>")
// document.write( celsius + "°C is " + fahrenheit + "°F <br>" )
// document.write( Fahrenheit + "°F is " + Celsius + "°C" )


// Task # 07
// --a 
// var item1 = 650;

// --b
// var item2 = 100;

// --c
// var qty1 = 3
// Item 1 toal cost 
// var item1total = item1 * qty1

// --d
// var qty2 = 7
// Item 2 toal cost 
// var item2total = item2 * qty2

// --e
// var shipping = (100); 

// var totalcost = (item1total + item2total + shipping);
// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is 650" + "<br>");
// document.write("Quantity of item 1 is 3" + "<br>");
// document.write("Price of item 2 is 100" + "<br>");
// document.write("Quantity of item 2 is 7" + "<br>");
// document.write("Shipping charges 100" + "<br><br>");

// document.write("Total price of your order is" + " " + totalcost);


// Task # 08
// document.write("<h1>Marksheet</h1>")
// var total = (980);
// var obtained = (804);
// var percentage = (obtained / total * 100)
// document.write("Total marks: 980" + "<br>");
// document.write("Marks obtained: 804" + "<br>");
// document.write("Percentage:" + " " + percentage + "%")


// Task # 09
// document.write("<h1>Currency in PKR</h1>");
// var USD = (157.82 * 10);
// var SaudiRiyal = (42.08 * 25);
// var PakCurrency = (USD + SaudiRiyal);
// document.write("Total Currency in PKR is:" + PakCurrency);


// Task # 10
// var a = ((( 45 + 5) * 10)/ 2);
// document.write("Answer is: " + a);


// Task # 11
// document.write("<h1>The Age Calculator:</h1>");
// var currentyear = (2021);
// var birthyear = (1992);
// var age = (currentyear - birthyear);
// document.write("Current year: 2020" + "<br>");
// document.write("Birth year: 1992" + "<br>");
// document.write("Your age is: " + age)


// Task # 12
// document.write("<h1>The Geometrizer</h1>");
// var radius = (20);
// var pi = 22/7
// var circumference = (2 * pi * radius);
// var area = (3.142 * radius * radius);
// document.write("Radius of a circle is:" + radius + "<br>");
// document.write("The Circumference is:" + circumference + "<br>");
// document.write("The area is:" + area);


// Task # 13
// --a 
// var snacks = (" Chocolate Chips");

// --b 
// var currentage = (15);

// --c
// var maximumage = (65);

// --d 
// var perdayamount = (3);

// --e 
// var totalammount = (maximumage * perdayamount);

// document.write("<h1>The lifetime supply Calculator</h1>");
// document.write("Favourite snack:" + snacks + "<br>");
// document.write("Current age:" + currentage + "<br>");
// document.write("Estimated maximum age:" + maximumage + "<br>");
// document.write("Amount of snacks per day:" + perdayamount + "<br>");
// document.write("You will need " + totalammount + snacks +" to last you until the ripe old age of" + " " + maximumage);


// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------





// -------- Chapter # 06 - 09: MATH EXPRESSIONS --------

// Task # 01 --------
// var a;
// a = 10
// document.write("Result: <br> The value of a is:" + a + "<br>.............................................<br><br>")

// var b = ++a
// document.write("The value of ++a is:" + b + "<br>")
// document.write("Now the value of a is:" + a + "<br><br>")

// var c = a++
// document.write("The value of a++ is:" + c + "<br>")

// document.write("Now the value of a is:" + a + "<br><br>")

// var d = --a
// document.write("The value of --a is:" + d + "<br>")
// document.write("Now the value of a is:" + a + "<br><br>")

// var e = a--
// document.write("The value of a-- is:" + e + "<br>")
// document.write("Now the value of a is:" + a)



// Task # 02 --------

// var a = 2, b = 1;
// document.write("a is " + a + "<br>" + "b is" + b + " <br>")

// c = --a;
// document.write("The output of --a is: " + c + "<br>")

// d = --a - --b;
// document.write("The output of --a - --b is: " + d + "<br>")

// e = --a - --b + ++b;
// document.write("The output of --a - --b + ++b is: " + e + "<br>")

// varresult = --a - --b + ++b + b--;
// document.write("The output of --a - --b + ++b + b-- is: " + varresult + "<br> <br>")

// document.write("The result of --a - --b + ++b + b-- is: " + varresult)


// Task # 03 --------
// var a = prompt("Enter your name","name")
// alert("Hello " + a )


// Task # 04 --------
//Question not given ----

// Task # 05 --------
// var a = prompt("Enter your value", 5)
// var b = prompt("Enter length", 10)
// document.write("<h2>Table of " + a + "<br></h2>");
// for(var i = 1; i <= b; i++){
// 	document.write(a + "x" + i + "=" + a*i + "<br>")}


// Task # 06
// --a
// var english = +prompt("Enter English Marks");
// var urdu = +prompt("Enter Urdu");
// var maths = +prompt("Enter Mathematics Marks");

// --b
// var totalEng = 100
// var totalUrdu = 100
// var totalMaths = 100

// --c
// var firstsubject = english;

// --d
// var secondsubject = urdu;
// var thirdsubject = maths;

// --e
// var totalmarks = (totalEng + totalUrdu + totalMaths);

// var totalObt = (firstsubject + secondsubject + thirdsubject)

// Computation for percentage
// var per_eng = firstsubject / totalEng * 100
// var per_urdu = secondsubject / totalUrdu * 100
// var per_maths = thirdsubject / totalMaths * 100

// var percentage = totalObt / totalmarks * 100

// document.write("<h1>MARKSHEET</h1><table><thead><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></thead><tbody><tr><td>English </td><td>" + totalEng + "</td><td>" + firstsubject + "</td><td>" +  per_eng + "%" + "</td></tr><tr><td>Urdu </td><td> " + totalUrdu + "</td><td>" + secondsubject + "</td><td> "+  per_urdu + "%" + " </td></tr><tr><td>Mathematics</td><td>" + totalMaths + "</td><td>" + thirdsubject + "</td><td> "+  per_maths + "%" + " </td></tr></tr><tr><td></td><td> <strong>" + totalmarks + " </strong></td><td> <strong>" + totalObt + "</strong></td><td> <strong>" + percentage + "%" + "</strong> </td></tr></tbody></table>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 09 - 11: USER INPUT & CONDITIONAL STATEMENT --------

// Task # 01 --------
// x = prompt("Enter your city name")
// if (x == "Karachi" || "karachi" || "KARACHI"){
// 	alert("Welcome to city of lights")}


//Task # 02 --------
// var x = prompt("Enter your gender");
// if (x === "male") {
//     alert("Good Morning Sir");
// }
// if (x === "female") {
//     alert("Good Morning Ma'am");
// }


//Task # 03 --------
// var trafficsignal = prompt("Enter color of Traffic Signal");
// if (trafficsignal === "red") {
//     alert("Must stop");
// }
// else if (trafficsignal === "yellow") {
//     alert("Ready to move");
// }
// else if (trafficsignal === "green") {
//     alert("Move now");
// }


// Task # 04
// var fuel =+prompt("how much fuel you have");
// if (fuel < 0.25 ){
//     alert("Please refill the fuel in your car");
// }


//Task # 05 --------
//--a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");}

//--b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");}

//--c
//var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");}
//if (c === 13){
//alert("condition 2 is true");}
//if (++c < 14){
//alert("condition 3 is true");}
//if(c === 14){
//alert("condition 4 is true");}

//--d
//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");}

//--e
//if (true){
//alert("True");}
//if (false){
//alert("False");}

//--f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// Task # 06
// var obtmarks = +prompt("Enter your obtained marks in three subjects");
// var totalmarks = +prompt("Enter your total marks");

// var percentage = obtmarks / totalmarks * 100

// if (percentage >= 80 && percentage <= 100) {
//     var grade = ("A-one")
// }
// else if (percentage >= 70 && percentage <= 80) {
//     var grade = ("A")
// }
// else if (percentage >= 60 && percentage <= 70) {
//     var grade = ("B")
// }


// if (percentage >= 0 && percentage <= 60) {
//     var grade = ("F")
// }
// else if (grade === "A-one") {
//     var remarks = ("Excellent");
//     alert(remarks)
// }
// else if (grade === "A") {
//     var remarks = ("Good");
//     alert(remarks)
// }
// else if (grade === "B") {
//     var remarks = ("You need to improve");
//     alert(remarks)
// }
// else if (grade === "F") {
//     var remarks = ("sorry");
//     alert(remarks)
// }
// document.write("<h1>Marksheet</h1>");
// document.write("Total marks: " + totalmarks + "<br>");
// document.write("Marks obtained " + obtmarks + "<br>");
// document.write("Percentage : " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);


// Task # 07
// document.write("<h1>Guess Game!</h1>");
// var secretnumber = +prompt("Guess the secret number");
// if (secretnumber == 6) {
//     alert("Bingo! Correct answer.")
// }
// else if (secretnumber == 7) {
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Your answer is wrong");
// }


// Task # 08
// var a = +prompt("Write any number which is divisible by 3");
// if (a = 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99) {
//     alert("YES! This number can be divisible by 3");
// }
// else {
//     alert("This number can't be divisible by 3")
// }


// Task # 09
// var a = +prompt("Enter number");
// if (a % 2 == 0) {
//     alert("It's an even number");
// }
// else {
//     alert("It's an odd number");
// }



// Task # 10
// var t = +prompt("Enter Temperature");

// --a 
// if (t >= 40) {
// alert("It is too hot outside");
// }

// --b 
// else if (t >= 30) {
// alert("The Weather today is Normal");
// }

// --c 
// else if (t >= 20) {
// alert("Today’s Weather is cool");
// }

// --d 
// else if (t >= 10) {
//     alert("OMG! Today’s weather is so Cool");
// }


// Task # 11
// --a 
// var firstnum = +prompt("Enter first number");

//--b
// var secondnum = +prompt("Enter second number");

//--c
// var operator = prompt("Enter operator");

// calculated result
// var result = (firstnum + operator + secondnum);
// document.write("Result: " + result)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 12 - 13: IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS --------

//Task # 01 
// var a = prompt("Enter Numeber or String")

// if( a >= 65 && a <= 90){
//     alert("Upper Case")
// }
// else if(a >= 90 && a <= 122 ){
//     alert("Lower Case")
// }


//Task # 02 
// var a = +prompt("Enter any two numbers")
// if (a >= 10 && a < 99){
//     alert("larger number is 99")
// }
// else if( a = 99){
//     alert("Entered number is equal to larger")
// }


//Task # 03 
// var x = 1
// var y = -1
// var z = 0
// var a = +prompt("Enter any number")
// if (a >= x) {
//     alert("It's a Positive number");
// }
// else if(a <= y){
//     alert("It's a Negative number");
// }
// else if(a == z){
//     alert("Enter value is Zero");
// }
// else{
//     alert("Please enter any number")
// }

//Task # 04
// var v1 = "a"
// var v2 = "i"
// var v3 = "i"
// var v4 = "o"
// var v5 = "u"
// var V1 = "A"
// var V2 = "E"
// var V3 = "i"
// var V4 = "O"
// var V5 = "U"

// var a = prompt("Enter String of Length 1")

// if(a == v1 || a == v2 || a == v3 || a == v4 || a == v5){
//     alert("True")
// }
// else if( a == V1 || a == V2 || a == V3 || a == V4 || a == V5){
//     alert("True")
// }
// else{
//     alert("False")
// }

//Task # 05
// var pass = "user_password"
// var a = prompt("Please enter your password")
// if(a == pass){
//     alert("Correct! The password you entered matches the original password")
// }
// else if (a != pass){
//     alert("Incorrect password")
// }
// else {
//     alert("Please enter password")
// }


//Task # 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting)

//Task # 07
// var a = +prompt("Enter 24 hours clock format time")

// if(a >= 0000 && a < 1200){
//     alert("Good Morning")
// }
// else if(a >= 1200 && a < 1700){
//     alert("Good Afternoon")
// }
// else if(a >= 1700 && a < 2100){
//     alert("Good Evening")
// }
// else if(a >= 2100 && a < 2359){
//     alert("Good Night")
// }
// else{
//     alert("Please enter time 24 hours format (between 0000 - 2359)")
// }

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 14 - 16: ARRAYS --------

//Task # 01 
// arr = [];


// Task # 02
// var StudentsName=newArray=[];


// Task # 03
// var arr= ['hello', 'World!']


// Task # 04
// var arr= [1, 2, 3]


// Task # 05
// var arr= [true,false]


// Task # 06
// var arr= [1, 2, 3,null,true,false,undefined,"string","123"]


// Task # 07
// arr = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phill', 'PhD']

// document.write('<h1> Qualifications:  </h1> ')
// document.write("<br> 1) " + arr[0])
// document.write("<br> 2) " + arr[1])
// document.write("<br> 3) " + arr[2])
// document.write("<br> 4) " + arr[3])
// document.write("<br> 5) " + arr[4])
// document.write("<br> 6) " + arr[5])
// document.write("<br> 7) " + arr[6])
// document.write("<br> 8) " + arr[7])
// document.write("<br> 9) " + arr[8])


// Task # 08
// var student_names = ['Michael', 'John', 'Tony']
// var Score = [320, 230, 480]
// var totalScore = 500;

// document.write("Score of " + student_names[0] + " is " + Score[0] + ". Percentage " + ((Score[0]) / totalScore) * 100 + "% <br>")
// document.write("Score of " + student_names[1] + " is " + Score[1] + ". Percentage " + ((Score[1]) / totalScore) * 100 + "% <br>")
// document.write("Score of " + student_names[2] + " is " + Score[2] + ". Percentage " + ((Score[2]) / totalScore) * 100 + "% <br>")


// Task # 09
//  document.write("<h1>Colors</h1>")
//  var color_names = ['red' , 'green' , 'blue' ]
//  document.write(color_names)
//  color_names.unshift(prompt("enter the color you want to add at the begining"))
//  document.write("<br>" + color_names)
//  color_names.push(prompt("enter the color you want to add at the end"))
//  document.write("<br>" + color_names)
//  color_names.unshift('purple' , 'skyblue')
//  document.write("<br>" + color_names)
//  color_names.shift();
//  document.write("<br>" + color_names)
//  color_names.pop();
//  document.write("<br>" + color_names)
//  color_names.splice(prompt('where you want to add color'), 0 , prompt('which color you want to add'))
//  document.write("<br>" + color_names)
//  color_names.splice(0 , prompt('which color you want to delete'))
//  document.write("<br>" + color_names)


// Task # 10
//  document.write("<h1>Score:</h1>")
//  var studentScore = [320, 230, 480, 120 ]
//  document.write("Scores of Students: " + studentScore + "<br>")
//  document.write("Order Scores of Students: " + studentScore.sort())


// Task # 11
//  var city = ['Karachi', ' Lahore', ' Islamabad', ' Quetta', ' Peshawar']
//  document.write('<h2> Cities List </h2> <br>' + city)
//  var selected_city = city.slice(0 , 3)
//  document.write('<br> <h2> Selected Cities </h2>' + selected_city)


// Task # 12
//  var arr = ["This", "is", "my", "cat"]
//  var string = arr.join(" ");
//  document.write("Array: <br>" + arr + "<br></br>")
//  document.write("String: <br>" + string)


// Task # 13
// var arr=["Keyboard" , "House" , "Printer" , "Monitor"];
// var element=newArray=[];
// element [0] ="keyboard";
// element [1] ="House";
// element [2] ="Printer";
// element [3] ="Monitor";
// document.write("<h1> devices: </h1>" + "<br>" + element + "<br><br><br>")

// document.write("Out: <br>" + arr[0] + "<br><br>")
// document.write("Out: <br>" + arr[1] + "<br><br>")
// document.write("Out: <br>" + arr[2] + "<br><br>")
// document.write("Out: <br>" + arr[3] )


// Task # 13
// var arr=["Keyboard" , "House" , "Printer" , "Monitor"];
// var element=newArray=[];
// element [0] ="keyboard";
// element [1] ="House";
// element [2] ="Printer";
// element [3] ="Monitor";
// document.write("<h1> devices: </h1>" + "<br>" + element + "<br><br><br>")

// document.write("Out: <br>" + arr[3] + "<br><br>")
// document.write("Out: <br>" + arr[2] + "<br><br>")
// document.write("Out: <br>" + arr[1] + "<br><br>")
// document.write("Out: <br>" + arr[0] )


// Task # 14
// var arr = ["Apple", "Samsung", "Motorola", "Nokia" , "Sony" , "Haier"]
// document.write(`<select>
// <option> ${arr[0]} </option>
// <option> ${arr[1]} </option>
// <option> ${arr[2]} </option>
// <option> ${arr[3]} </option>
// <option> ${arr[4]} </option>
// <option> ${arr[5]} </option>
// </select>`)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 17 - 20: ARRAYS AND LOOP --------

// Task # 01
// var arr = [[]];


// Task # 02
// arr = [
// [0, 1, 2, 3],
// [1, 0, 1, 2],
// [2, 1, 0, 1],
//         ]
// for (var i = 0; i<arr.length;i++){
//     document.write(arr[i] + "<br>")
// }


// Task # 03
// for(var i = 1; i<=10; i++) {
//     document.write(i + "<br>")
// }


// Task # 04
// var tableNum = +prompt("Enter a number to show its multiplication table") 
// var tableLength = +prompt("Enter Length multiplication table")

// document.write("Multiplication Table of: " + tableNum + "<br>" + "Length " + tableLength + "<br><br>")

// for(i=1;i<=tableLength;i++){
//     document.write(tableNum + " X " + i + " = " + (tableNum*i) + "<br>")
// }


// Task # 05
// fruits = ["apple", "banana", "mango", "orange","strawberry"]

// for( x = 0; x < fruits.length; x++){
//     document.write(fruits[x] + "<br>")
// }

// for(var i =0; i<fruits.length; i++){
// document.write("Element at index " + i + " is " + fruits[i]+ "<br>");
// }


// Task # 06
// --a 
// document.write("<strong>Counting: </strong><br><br>")
// for( i = 1; i <= 15; i++){
//     document.write(i + ", ")
// }

// --b
// document.write("<br><br><strong>Reverse Counting: </strong><br><br>")
// for( i = 10; i >= 1; i--){
//     document.write(i + ", ")
// }

// --c
// document.write("<br><br><strong>Even: </strong><br><br>")
// for( i = 0; i <= 20; i++){
//     if (i % 2 == 0){
//         document.write( i + ", ")
//     }
// }

// --d
// document.write("<br><br><strong>Odd: </strong><br><br>")
// for( i = 0; i <= 20; i++){
//     if (i % 2 !== 0){
//         document.write( i + ", ")
//     }
// }

// --e
// document.write("<br><br><strong>Series: </strong><br><br>")
// for( i = 1; i <= 20; i++){
//     if (i % 2 == 0){
//         document.write( i + "k, ")
//     }
// }



// Task # 07
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("Welcome to ABC Bakery, What do you want to order Sir/Ma'am?")

// var match = true
// for (i = 0; i < a.length; i++) {
//     if (b === a[i]) {
//         match = false
//         document.write(a[i] + " is <strong>availabe <strong> at Index " + i + " in our bakery")
//     }  
// }

// if (match === true) {
//     document.write( "We're sorry. " + b + " is <strong> not availabe <strong> in our bakery")
// }  


// Task # 08
// var a = [24, 53, 78, 91, 12]
// var b = Math.max(...a)
// document.write("Arry items: " + a + "<br>" + "The largest number is " + b + "<br>")


// Task # 09
// var a = [24, 53, 78, 91, 12]
// var b = Math.min(...a)
// document.write("Arry items: " + a + "<br>" + "The smallest number is " + b + "<br>")


// Task # 10
// for( i = 1; i <= 100; i++){
//     if(i % 5 == 0){
//         document.write(i + ", ")
//     }
// }
