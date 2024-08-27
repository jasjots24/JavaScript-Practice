
let todoList =[
    {
        Item: 'Buying milk',
         dueDate: '4/6/2024'
    },
    {   
        Item: 'Buying Book',
        dueDate: '6/8/2024'
    }
];

displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElememt = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElememt.value;
    todoList.push({Item: todoItem, dueDate:  todoDate});
    inputElement.value=''
    displayItems();
}

function displayItems(){
    let containerElements = document.querySelector('.todo-container');
    let newHtml ='';
    for(let i =0;i<todoList.length;i++){
       let {Item, dueDate} = todoList[i];
    newHtml+= `
    <span>${Item}</span>
    <span>${dueDate}</span>
    <button onClick="todoList.splice(${i},1);
    displayItems();
    ">Delete</button>
    `;
}
containerElements.innerHTML = newHtml;
}