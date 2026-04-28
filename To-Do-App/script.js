let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function showTask(){
    const list = document.getElementById('taskList')
    list.innerHTML = ""

    tasks.forEach((task,index)=>{
        const li = document.createElement('li')
        li.innerHTML = `${task}<button onclick="deleteTask(${index})">X</button>`
        list.appendChild(li)
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
function addTask(){
    const input = document.getElementById('taskInput')
    if(input.value==="")return
    
    tasks.push(input.value)
    input.value=""
    showTask()
}
function deleteTask(index){
    tasks.splice(index,1)
    showTask();
}
showTask()