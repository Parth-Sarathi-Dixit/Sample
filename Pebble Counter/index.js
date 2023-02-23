

// initialize the count as 0

let count = 0;

// listen for clicks on the increment button


let countElement = document.getElementById("count-el");

function increment(){
    
    // increment the count by 1 each time button is clicked
    
    count++;
    
    // console.log("clicked " + count);
        
    // console.log(element);
    
    // change the count-el in the HTML to reflect the new count
    
    countElement.innerText = count;
}

let savedValue = document.getElementById("saved-el");

function save(){

    let pElement = document.getElementById("saved-el");
    pElement.textContent += count + " - ";
    count = 0;
    document.getElementById("count-el").innerText = count;

}


