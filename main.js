// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let countEl =document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count  += 1
    countEl.innerText = count  //Increament function
}

/*saving button function*/
let saveEl = document.getElementById("save-el")//printing (previous entries ID)

//function is from on-click save function
function save(){
    let counter = count + " - "
    saveEl.innerHTML += counter
    //this code resets the save function to zero
    countEl.textContent = 0
    count=0
}
/*saving button function end*/
