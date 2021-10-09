let count = 0;

const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")
const saveBtn = document.getElementById("save-btn")
incrementBtn.addEventListener("click", function(){
    count++;
    countEl.innerHTML = count
})

decrementBtn.addEventListener("click", function(){
    if(count > 0){
        count--;
        countEl.innerHTML = count
    } else {
        countEl.innerHTML = "Invalid"
    }

})

saveBtn.addEventListener("click", function(){
    let message = count + " - " 
    saveEl.innerHTML +=  message
})