const app = document.querySelector('#app')
const todo = document.querySelector('input[name = "todo"]');
const results = document.querySelector('#results');

// app.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const newTodo = makeTodo(todo.value);
//     results.appendChild(newTodo);

// });

// function makeTodo(text) {
//     const makeTodo = document.createElement('h2');
//     makeTodo.innerText = todo.Value;
//     return makeTodo;

// }
// console.log(today.value)

app.addEventListener('submit', function (e) {
    e.preventDefault();
    const makeTodo = document.createElement('h2')
    makeTodo.innerText = todo.value;
    results.appendChild(makeTodo);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "remove";
    makeTodo.appendChild(removeBtn)
    removeBtn.addEventListener('click', function (e) {
        e.target.parentElement.remove();

    })
});


