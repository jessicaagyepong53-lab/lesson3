// console.log("Hello, T4G Scholars!");

// let username = "Jessica";
// console.log(username); // Jessica

// console.log("What is your age?");
// let age = prompt("What is your age?");
// console.log(age);

// let num1 = 50;
// let num2 = 150;
// let sum = num1 + num2;
// console.log(sum); // 200

// console.log(num1 + num2); // 200
// console.log(num2 - num1); // 100
// console.log(num2 / num1); // 3
// console.log(num1 * num2); // 7500
// console.log(15 % 4); // 3 what is left after dividing 15 by 4

// let h = true;
// console.log(h); // true

// let j = false;
// console.log(j); // false

// let k = 20
// typeof k; // number
// console.log(typeof k); // number

// let m = ("30")
// typeof m; // string
// console.log(typeof m); // string
// // Promt the user to enter a number
// let answer = prompt ("Enter a number");
// Check if the number is even or odd
// if (number%2 == 0)
// {alert(`$(number) is even`);}

// // Display that the number the user entered is even or odd

// if (number%2 == 0) {
//     alert(`${number} is even`);
// } else {
//     alert(`${number} is odd`);
// }

//     Take the users name
//     And also ask for the age
//     If they are 18 or above display or tell them that they can sign up for your application.
// IF they are less than 18 years old tell them that they can’t signup for the application
// let zage = prompt("What is your age?");
// if (zage >= 18) {
//     alert(`hello ${username}, you can sign up for this website!`);
// } else {
//     alert(`Sorry ${username}, you can not sign up for this website!`);
// }
let username = prompt("What is your name?");
let yage = prompt("How old are you?");
let email = prompt("Enter your email address");
if (yage < 12) {
    alert(`Hi ${username}, you are ${yage} years old and you are too young to register. Sorry😞😞!`); // If the user is less than 12 years old, display they are too young to register for the application
} else if (yage >= 12 && yage < 18) {
    alert(`Hi ${username}, you are ${yage} years old and you have limited options to register for. We will keep in touch via your email: ${email}👋🏽👋🏽!`); // If the user is less than 18 and 12 years old or older, display they can register but they will need parental consent
} else if (yage >= 18) {
    alert(`Hi ${username}, you are ${yage} years old and you can register for any options of your choice. We will keep in touch via your email: ${email}👋🏽👋🏽!`); // If the user is 18 years old and above
} else {
    alert(`Hi ${username}, you must be ${yage} years old. We will keep in touch via your email: ${email}👋🏽👋🏽!`); // If the user is 12 years old
}

function makeMilo(){
    // tear rubber
    // blow air
}
makeMilo("");// Call the function to make milo

function bookAppointment(){
    // check calendar
    // call doctor
    // set appointment
    let booking = prompt("Would you like to book, confirm or cancel your appointment");
    if (booking == "book") {
        alert("Your appointment has been booked! We will keep in touch via your email: ${email}👋🏽👋🏽!");
    } else if (booking == "confirm") {
        alert("See you soon!");
    } else if (booking == "cancel") {
        alert("Your appointment has been cancelled! We will keep in touch via your email: ${email}👋🏽👋🏽!");
    } else {
        let reschedule = prompt("When would you like to reschedule your appointment?");
        alert(`Your appointment has been rescheduled to ${reschedule}! We will keep in touch via your email: ${email}👋🏽👋🏽!`);
    }
}
bookAppointment(); // Call the function to book an appointment

// Creating a function to ask for the user's gender
function gender(){
    let gender = prompt("What is your gender? Are you a male or a female?");
    console.log(gender); // Log the user's input for gender
    gender = gender.toLowerCase(); // Convert the input to lowercase to handle case sensitivity
     gender = gender.split(" ")[0]; // Split the input and take the first word to handle cases like "male student"
    if (gender == "male") {
       alert("You are a boy!👦🏽");
    } else if (gender == "female") {
        alert("You are a girl!👧🏽");
    } else {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
}

gender(); // Call the function to ask for gender

// document.querySelector("h1")
// <h1>​About Us​</h1>​
// document.querySelectorAll("h1")
// NodeList(4) [h1, h1, h1, h1]0: h11: h12: h13: h1length: 4[[Prototype]]: NodeList
// document.querySelectorAll("p")
// NodeList(16) [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p]0: pattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 18clientWidth: 253contentEditable: "inherit"currentCSSZoom: 1customElementRegistry: CustomElementRegistry {}dataset: DOMStringMap {}firstChild: textinnerHTML: "This is a flexbox"innerText: "This is a flexbox"isConnected: truelastChild: textlocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextSibling: textnodeName: "P"nodeType: 1offsetHeight: 18offsetLeft: 60offsetParent: bodyoffsetTop: 1033offsetWidth: 253outerHTML: "<p>This is a flexbox</p>"outerText: "This is a flexbox"ownerDocument: documentparentElement: div.cardparentNode: div.cardpart: DOMTokenList [value: '']previousElementSibling: imgpreviousSibling: textscrollHeight: 18scrollWidth: 253spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "P"textContent: "This is a flexbox"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLParagraphElement1: pattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 18clientWidth: 253contentEditable: "inherit"currentCSSZoom: 1customElementRegistry: CustomElementRegistry {}dataset: DOMStringMap {}firstChild: textinnerHTML: "Beautifully done"innerText: "Beautifully done"isConnected: truelastChild: textlocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextSibling: textnodeName: "P"nodeType: 1offsetHeight: 18offsetLeft: 353offsetParent: bodyoffsetTop: 911offsetWidth: 253outerHTML: "<p>Beautifully done</p>"outerText: "Beautifully done"ownerDocument: documentparentElement: div.cardparentNode: div.cardpart: DOMTokenList [value: '']previousElementSibling: imgpreviousSibling: textscrollHeight: 18scrollWidth: 253spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "P"textContent: "Beautifully done"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLParagraphElement2: p3: p4: p5: p6: p7: p8: p9: p10: p11: p12: p13: p14: p15: plength: 16[[Prototype]]: NodeList
// let h1 = document.querySelector("h1");
// undefined
// h1
// <h1>​About Us​</h1>​
// h1.style.backgroundColor = "Pink"
// 'Pink'
// h1.innerHTML = "JESSICA"
// 'JESSICA'