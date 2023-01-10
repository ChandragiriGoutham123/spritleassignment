const hi = document.getElementById("main")
const checkbox = document.getElementById("butto");
const warning = document.getElementById("his");
const ONES = document.getElementById("ONE")
const TWOS = document.getElementById("TWO")
const THREES = document.getElementById("THREE")
const FOURS = document.getElementById("FOUR")
const FIVES = document.getElementById("FIVE")
const SIXES = document.getElementById("SIX")
const SEVENS = document.getElementById("SEVEN")
const EIGHTS = document.getElementById("EIGHT")
const NINES = document.getElementById("NINE")
const ZEROS = document.getElementById("ZERO")
const ones = document.getElementById("one")
const twos = document.getElementById("two")
const threes = document.getElementById("three")
const fours = document.getElementById("four")
const fives = document.getElementById("five")
const sixs = document.getElementById("six")
const sevens = document.getElementById("seven")
const eights = document.getElementById("eight")
const nines = document.getElementById("nine")
const zeros = document.getElementById("zero")
const addition = document.getElementById("add")
const subtraction = document.getElementById("subt")
const multiplication = document.getElementById("mul")
const division = document.getElementById("divi")
const answer = document.getElementById("ans")


const logoutit = document.getElementById("logout")

checkbox.addEventListener("click", checkboxClick, false);
ONES.addEventListener("click", ONEZ, false)
ones.addEventListener("click", onez, false)
TWOS.addEventListener("click", TWOZ, false)
twos.addEventListener("click", twoz, false)
THREES.addEventListener("click", THREEZ, false)
threes.addEventListener("click", threez, false)
FOURS.addEventListener("click", FOURZ, false)
fours.addEventListener("click", fourz, false)
FIVES.addEventListener("click", FIVEZ, false)
fives.addEventListener("click", fivez, false)
SIXES.addEventListener("click", SIXEZ, false)
sixs.addEventListener("click", sixz, false)
SEVENS.addEventListener("click", SEVENZ, false)
sevens.addEventListener("click", sevenz, false)
EIGHTS.addEventListener("click", EIGHTZ, false)
eights.addEventListener("click", eightz, false)
NINES.addEventListener("click", NINEZ, false)
nines.addEventListener("click", ninez, false)
ZEROS.addEventListener("click", ZEROZ, false)
zeros.addEventListener("click", zeroz, false)
addition.addEventListener("click", additions, false)
subtraction.addEventListener("click", subtractions, false)
multiplication.addEventListener("click", multiplications, false)
division.addEventListener("click", divisions, false)


logoutit.addEventListener("click", logoutthegame, false);


function checkboxClick(event) {
    event.preventDefault();
    const name = document.getElementById("exampleInput1");
    const email = document.getElementById("exampleInputName");
    const password = document.getElementById("exampleInputNumber1");
    if (name.value === "" || email.value === "" || password.value === "") {
        warning.textContent = "*Enter valid details";
    } else {
        warning.textContent = "";
        hi.classList.add("d-none")
        sub.classList.remove("d-none")




    }


}



function logoutthegame() {

    sub.classList.add("d-none");
    main.classList.remove("d-none");


}

function ONEZ() {
    return a = 1;
}

function onez() {
    return b = 1;
}

function TWOZ() {
    return a = 2;
}

function twoz() {
    return b = 2;
}

function THREEZ() {
    return a = 3;
}

function threez() {
    return b = 3;
}

function FOURZ() {
    return a = 4;
}

function fourz() {
    return b = 4;
}

function FIVEZ() {
    return a = 5;
}

function fivez() {
    return b = 5;
}

function SIXEZ() {
    return a = 6;
}

function sixz() {
    return b = 6;
}

function SEVENZ() {
    return a = 7;
}

function sevenz() {
    return b = 7;
}

function EIGHTZ() {
    return a = 8;
}

function eightz() {
    return b = 8;
}

function NINEZ() {
    return a = 9;
}

function ninez() {
    return b = 9;
}

function ZEROZ() {
    return a = 0;
}

function zeroz() {
    return b = 0;
}

function additions() {
    answer.textContent = " ";
    answer.textContent = "a+b=" + (a + b)

}

function subtractions() {
    answer.textContent = " ";
    answer.textContent = "a-b=" + (a - b)


}

function multiplications() {
    answer.textContent = " ";
    answer.textContent = "a*b=" + (a * b)

}

function divisions() {
    answer.textContent = " ";
    answer.textContent = "a/b=" + Math.floor((a / b))

}
