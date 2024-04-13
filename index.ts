#! /usr/bin/env node

import inquirer from "inquirer"; 

let todos:string [] = [];
async function creatTodo (todos:string[]){
    do{

        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an operation",
            name: "select",
            choices:["Add", "Update", "View", "Delete"]
        });
     if(ans.select == "Add"){
        let addTodo = await inquirer.prompt({
            type: "input",
            message:"add item...",
            name: "todo"
        });
        todos.push(addTodo.todo)
        console.log(todos)
     }
     if(ans.select == "Update"){
        let updateTodo = await inquirer.prompt({
            type:"list",
            message:"select item for update",
            name: "todo",
            choices:todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message:"add item...",
            name: "todo"
        });
        let newTodos = todos.filter(val => val !== updateTodo.todo)
        todos = [...newTodos,addTodo.todo];
        console.log(todos)
     }
     if(ans.select == "View"){
        console.log(todos)
     }
     if(ans.select == "Delete"){
        let deleteTodo = await inquirer.prompt({
            type:"list",
            message:"select item for delete",
            name: "todo",
            choices:todos.map(item => item)
        });
        let newTodos = todos.filter(val => val !== deleteTodo.todo)
        todos = [...newTodos]
        console.log(todos)
     }

    }while(true)
}
creatTodo(todos)

