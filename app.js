//45 Q/A assignment
//Q1;
console.log("hello world");
//Q2;
var myname = "armeen fatima";
var message = "like to eat fastfood";
console.log(myname + " " + message);
//Q3;
var mypet = "mano";
console.log(mypet.toLowerCase());
console.log(mypet.toUpperCase());
//Q4;
var author = "mother teresa";
var quote = 'once said,"spread love everywhere you go"';
console.log(author + "" + quote);
//Q5;
var famouspoet = "allamaiqbal";
var poetry = 'said,"dil bhelany ko khayal acha ha ghlib"';
console.log(famouspoet + " " + poetry);
//Q6;
var broname = "/trohan/n";
console.log("unmodified:");
console.log(broname);
console.log("/nusing lstrip():");
console.log(broname);
console.log("/tusing rstrip():");
console.log(broname);
console.log("/nusing strip():");
console.log(broname);
//Q7;
var number = 10;
console.log(number);
//Q8
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(24 / 3);
//Q9;
var fvtnum = 5;
var msg = "is my lucky number";
console.log(fvtnum + " " + msg);
//Q10;
//1.this bprogram calculates the number;
var num1 = 12;
var num2 = 8;
console.log(num1 + num2);
//2.this programs says hello to my friend;
var frnd = "maryam";
var mssg = "hello";
var Q = "how r u?";
console.log(frnd + mssg + Q);
//Q11;
var friends = ["roni", "nimra", "maryam"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
//Q12;
var relatives = ["nani", "dadi"];
var mesg = "hello,";
console.log(mesg + " " + relatives[0]);
var mesg2 = "hye,";
console.log(mesg2 + " " + relatives[1]);
//Q13;
var guests = ["ali,", "usuf,", "roni,"];
console.log(guests[0], "please come for dinner.");
console.log(guests[1], "lets dinner with us.");
console.log(guests[2], "we invite you for dinner today.");
//Q14;
//#print the invitation again...
console.log("print invite again!");
var g1 = guests[2];
console.log("sorry,roni can't make it to dinner.");
var g2 = ["khan"];
console.log("khan,come for dinner tonight");
//Q15;
//#lets add some more people...
console.log("we got a bigger table!");
var moreguests = ["mariyam,", "nimra,"];
console.log(moreguests[0], "pls come for dinner");
console.log(moreguests[1], "pls come for dinner");
//Q16;
//#OH NO,tables are full...
console.log("tables are full!");
console.log(guests[1], "sorry we can't invite you,tables are full.");
console.log(moreguests[1], "there's no space in hotel,invite you later.");
//Q17;
var places = ["lahore", "islamabad", "murree", "quetta"];
console.log("original order:");
places.sort();
console.log(places);
console.log("alphabetical:");
places.sort();
console.log(places);
console.log("reverse alphabetical:");
places.reverse();
console.log(places);
console.log("reverse:");
places.reverse();
console.log(places);
//Q18;
var invitations = ["armeen", "usuf", "rohan"];
var count = (invitations);
console.log("people will come to my dinner party", (count));
//Q19;
var colours = ["red", "yellow", "green"];
console.log("before sorting");
console.log(colours);
console.log("after sorting");
console.log(colours);
//Q20;
var studentdetails = {
    studentname: "armeen fatima",
    studentid: "armeen00",
};
console.log("student name is:" + studentdetails.studentname);
console.log("student id is:" + studentdetails.studentid);
//Q21;
var list = [50, "bela", 'ciao'];
console.log("international error calling for del element -5 which is out of range...");
console.log(list[-5]);
//Q22;
var menu = ["pasta", "manchorian", "noodles"];
console.log("we have food,", menu);
//Q23;
var device = "laptop";
if (device == "laptop") {
    console.log(true);
}
else {
    console.log(false);
}
var mobile = "redmi";
if (mobile == "iphone") {
    console.log(true);
}
else if (mobile == "moto") {
    console.log(true);
}
else {
    console.log(false);
}
//Q24;
var num = 10;
if (num == 10) {
    console.log("right");
}
else if (num != 12) {
    console.log("right");
}
else if (num &= 10) {
    console.log("right");
}
else if (number <= 12) {
    console.log("right");
}
else {
    console.log("wrong");
}
//Q25;
var aliencolor = "green";
if (aliencolor == "green") {
    console.log("you just earned 5 points!");
}
//Q26;
var aliencolour = "yellow";
if (aliencolour == "green") {
    console.log("you just earned 5 points! ");
}
else {
    console.log("you earned 10 points!");
}
//Q27;
var aliencolr = "red";
if (aliencolr == "green") {
    console.log("you just earned 5 points!");
}
else if (aliencolr == "yellow") {
    console.log("you just earned 10 points!");
}
else {
    console.log("you earned 15 points!");
}
//Q28;
var myage = 18;
if (myage < 2) {
    console.log("i'm a baby!");
}
else if (myage < 4) {
    console.log("i'm a toddler!");
}
else if (myage < 13) {
    console.log("i'm a kid!");
}
else if (myage < 20) {
    console.log("i'm a teenager!");
}
else if (myage < 50) {
    console.log("i'm an adult!");
}
else {
    console.log("i'm elder!");
}
//Q29;
var fvtfruits = ["apple", "mango", "watermelon"];
if ("apple" == fvtfruits[0]) {
    console.log("you really like apples!");
}
if ("mango" == fvtfruits[1]) {
    console.log("you really like mangoes!");
}
if ("cherry" == fvtfruits[3]) {
    console.log("you really like cherries!");
}
if ("watermelon" == fvtfruits[2]) {
    console.log("you really like watermelon!");
}
if ("grapes" == fvtfruits[1]) {
    console.log("you really like grapes!");
}
//Q30;
var usernames = ["armeen", "ali", "admin"];
if ("admin" == usernames[2]) {
    console.log("hello,admin;would you like to join us?");
}
if ("armeen" == usernames[0]) {
    console.log("hello,armeen;thank you for logging in!");
}
if ("ali" == usernames[1]) {
    console.log("hello,ali;thank you for logging in!");
}
else {
    console.log("you are not eligible!");
}
//Q31;
var newusers = [];
if ("admin" == newusers[1]) {
    console.log("hello,admin;would you like to join us?");
}
else if ("roni" == newusers[1]) {
    console.log("hello,roni;you like to join");
}
else {
    console.log("we need to find some new users!");
}
//Q32;
var currentuser = ["admin", "roni"];
var newuser = ["armeen", "ali"];
if ("admin" == currentuser[0]) {
    console.log("sorry,admin;you are not eligible for this!");
}
if ("armeen" == newuser[0]) {
    console.log("congrats,armeen;you are our new user!");
}
if ("ali" == newuser[1]) {
    console.log("conrats,ali;you can join us!");
}
else {
    console.log("they are unavailable!");
}
//Q33;
var ordinalnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (1 == ordinalnumbers[1]) {
    console.log("1st");
}
if (2 == ordinalnumbers[2]) {
    console.log("2nd");
}
if (3 == ordinalnumbers[3]) {
    console.log("3rd");
}
if (4 == ordinalnumbers[4]) {
    console.log("4rth");
}
if (5 == ordinalnumbers[5]) {
    console.log("5th");
}
if (6 == ordinalnumbers[6]) {
    console.log("6th");
}
if (7 == ordinalnumbers[7]) {
    console.log("7th");
}
if (8 == ordinalnumbers[8]) {
    console.log("8th");
}
if (9 == ordinalnumbers[9]) {
    console.log("9th");
}
if (10 == ordinalnumbers[10]) {
    console.log("10th");
}
//Q34;
var pizzas = ["peproni", "veggie"];
console.log(pizzas[0]);
console.log(pizzas[1]);
if ("peproni" == pizzas[0]) {
    console.log("i love peproni pizza!");
}
if ("veggie" == pizzas[1]) {
    console.log("i really like veggie pizza");
}
console.log("i love pizzas!");
//Q35;
var animals = ["cat", "cow", "goat"];
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
if ("cow" == animals[1]) {
    console.log("cow is my favourite animal.i love it.");
}
if ("cat" == animals[0]) {
    console.log("cat would make a great pet!");
}
if ("goat" == animals[2]) {
    console.log("goat is very innocent animal!");
}
console.log("all of these animals have cute voice!");
//Q36;
function maketshirts() {
    var size = "small";
    var message = "i love adidas!";
    console.log(" i'm going to make " + size + " tshirt ");
    console.log("he will say," + " " + message);
}
maketshirts();
//Q37;
function makeshirts() {
    var size = "medium";
    var message = "i want blue color!";
    console.log(" i'm going to make " + size + " tshirt ");
    console.log("he will say," + " " + message);
}
makeshirts();
function makenewshirt() {
    var size = "large";
    var message = "i like cotton stuff!";
    console.log(" i'm going to make " + size + " newshirt ");
    console.log("he will say," + "" + message);
}
makenewshirt();
//Q38;
function cities() {
    var city1 = "karachi";
    var city2 = "santiago";
    var country1 = "pakistan";
    var country2 = "chile";
    console.log(city1 + " is in " + country1);
    console.log(city2 + " is in " + country2);
}
cities();
//Q39;
function newcities() {
    var city01 = "karachi";
    var province01 = "sindh";
    var city02 = "lahore";
    var province02 = "punjab";
    console.log(city01 + "," + province01);
    console.log(city02 + "," + province02);
}
newcities();
//Q40;
function albums() {
    var song = "kali kali zulfoon";
    var artist = "nusrat fateh ali khan";
    var drama = "rahe junoon";
    var hero = "danish taimur";
    console.log(song + "," + artist);
    console.log(drama + "," + hero);
}
albums();
//Q41;
function magician() {
    var magician1 = "david blaine";
    var magician2 = "teller";
    console.log(magician1);
    console.log(magician2);
}
magician();
//Q42;
function greatmagicians() {
    var magician1 = "david blaine";
    var magician2 = "teller";
    console.log(magician1);
    console.log(magician2);
    console.log(magician1 + " the great ");
    console.log(magician2 + " the great ");
}
greatmagicians();
//Q43;
function unchangedmagician() {
    var magician1 = "david blaine";
    var magician2 = "teller";
    console.log(magician1);
    console.log(magician2);
    console.log("great magician: ");
    console.log(magician1 + " the great ");
    console.log(magician2 + " the great ");
    console.log("original magician: ");
    console.log(magician1);
    console.log(magician2);
}
unchangedmagician();
//Q44;
function sandwich() {
    var items = "egg,kabab,bread,cheese,kabab,salad,chicken,peanut butter,ketchup,mayounise&sauce";
    console.log("i'll make you a great sandwich!");
    console.log(" ...adding " + items);
    console.log("your sandwich is ready!");
}
sandwich();
//Q45;
function cars() {
    var car = "audi";
    var manufacturer = "volkswagen";
    var year = 1999;
    var model = "audi S3";
    var colour = "black";
    console.log(car + ":" + manufacturer + "," + model + "," + year + "," + colour);
}
cars();
