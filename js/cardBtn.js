// card 1
document.getElementById('btn-1').addEventListener('click', function () {
    alert('Board updated successfully')
    disableBtn(this)
    updateTaskNumber("task-assigned")
    updateNavNumber("nav-number")
    updateHistory('headline-1','history')   
})
// card 2
document.getElementById('btn-2').addEventListener('click', function () {
    alert('Board updated successfully')
    disableBtn(this);
    updateTaskNumber("task-assigned")
     updateNavNumber('nav-number')
    updateHistory('headline-2','history')
})
// card-3
document.getElementById('btn-3').addEventListener('click', function () {
    alert('Board updated successfully')
    disableBtn(this);
    updateTaskNumber("task-assigned")
     updateNavNumber('nav-number')
    updateHistory('headline-3','history')
})
// card 4
document.getElementById('btn-4').addEventListener('click', function () {
    alert('Board updated successfully')
    disableBtn(this);
    updateTaskNumber("task-assigned")
     updateNavNumber('nav-number')
    updateHistory('headline-4','history')
})
// card 5
document.getElementById('btn-5').addEventListener('click', function () {
    alert('Board updated successfully')
    disableBtn(this);
    updateTaskNumber("task-assigned")
     updateNavNumber('nav-number')
    updateHistory('headline-5','history')
})
// card 6
document.getElementById('btn-6').addEventListener('click', function () {
    alert('Board updated successfully')
    disableBtn(this);
    updateTaskNumber("task-assigned")
     updateNavNumber('nav-number')
    updateHistory('headline-6','history')
})

// delete history
document.getElementById('history-btn').addEventListener('click', () => {
    document.getElementById('history').remove('p')
})



