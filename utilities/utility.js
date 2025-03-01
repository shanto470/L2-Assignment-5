function updateTaskNumber(id) {
    const taskAssigned = document.getElementById(id).innerText;
    const convertedTaskAssigned = parseInt(taskAssigned)
    
    const sum = convertedTaskAssigned - 1;
    document.getElementById('task-assigned').innerText = sum;

    if (sum === 0) {
        alert('congrates!!! you have completed all the current task.')
    }
    else {
        console.log('shah');
    }
    // return convertedTaskAssigned
}
function updateNavNumber(id) {
    const navNumber = document.getElementById(id).innerText;
    const convertedNavNumber = parseInt(navNumber)

    const sum2 = convertedNavNumber + 1;
    document.getElementById('nav-number').innerText = sum2
    // return convertedNavNumber;
}
// button disabled function
function disableBtn(id) {
    id.setAttribute('disabled', 'true');
    id.classList.remove("bg-[#3752FD]");
    id.classList.add("bg-[#3751fd2a]", "cursor-not-allowed");
}
// update history function
function updateHistory(headlineId, historyId) {
    const headLine = document.getElementById(headlineId).innerText;
    const history = document.getElementById(historyId)
    const p = document.createElement('p');

const d = new Date()
const date =p.innerHTML = d.toLocaleTimeString('en-US', { hour12: true });;

    p.innerText = `
    You have Complete The Task ${headLine} at ${date}` 
    p.classList.add(
        "text-[#00000083]",
       "bg-[#F4F7FF]",
        "pl-3",
        "pb-3",
        "pr-3",
        "rounded-lg",
        "mt-4"
    )
    history.appendChild(p)  
}


function randomBgColor() {
    const hexCode = "0123456789ABCDEF";
    let bgColor = "#";
    for (let i = 0; i < 6; i++) {
        bgColor = bgColor + hexCode[Math.floor(Math.random() * 16)];
    }
    return bgColor;
}
document.getElementById("themeBtn").addEventListener("click", function () {
    const bgColor = randomBgColor();
    document.body.style.backgroundColor = bgColor;
});


const d = new Date()
 const date = document.getElementById('date').innerHTML = d.toDateString();
