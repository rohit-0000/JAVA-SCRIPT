// const addButton=document.getElementById('addTaskBtn');

// addButton.addEventListener('click', function() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value.trim();

//     if (taskText !== "") {
//         const taskList = document.getElementById('taskList');
//         const taskItem = document.createElement('li');
//         taskItem.textContent = taskText;
//         taskItem.setAttribute('style','display:flex');
//         taskItem.setAttribute('style','justify-content : space-betwwen');

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.className = 'delete-btn';
//         deleteBtn.addEventListener('click', function() {
//             taskList.removeChild(taskItem);
//         });

//         // taskItem.addEventListener('click', function() {
//         //     taskItem.classList.toggle('completed');
//         // });

//         taskItem.appendChild(deleteBtn);
//         taskList.appendChild(taskItem);

//         // taskInput.value = '';
//     }
// });

const addButton=document.querySelector('#addTaskBtn');
function taskAdded(){
    const inputColum=document.getElementById('taskInput');
    const TaskInput=inputColum.value.trim();

    if(TaskInput!=="")
    {
        const task=document.getElementsByClassName('task');
        task[0].setAttribute('style', 'display:block');
        const List=document.getElementById('taskList');
        const List_item=document.createElement('li');
        // List_item.id="itemid";
        const checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.id="complete";
        
        
        checkbox.addEventListener('click', function() {
            if (List_item.style.backgroundColor === 'rgb(136, 136, 136)' && List_item.style.textDecoration === 'line-through') {
                List_item.setAttribute('style', 'background-color: white; text-decoration: none');
            } else {
                List_item.setAttribute('style', 'background-color: #888; text-decoration: line-through');
            }
        });
        
        
        
        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.className='delete-btn';
        deleteBtn.addEventListener('click',function(){
            List.removeChild(List_item);
        })
        
        List_item.appendChild(checkbox);
        List_item.append(TaskInput);
        List_item.appendChild(deleteBtn);
        List.appendChild(List_item);
        // List_item.setAttribute('style','display:flex');
        // List_item.setAttribute('style','justify-content : space-evenly');
        inputColum.value='';
    }
}
addButton.addEventListener('click',taskAdded);

