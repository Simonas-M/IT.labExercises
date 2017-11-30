"use strict";
$(function () {
    const todoDatabaseUrl = 'http://localhost:3000/tasks';
    const checkboxSelector = '.todo input[type="checkbox"]';
    const formEl = $('form');
    const titleEl = $('#todo-task');
    const priorityEl = $('#todo-priority');
    const dateEl = $('#todo-date');
    const todoListEl = $('.todo-list');
    let todos = [];
    function bindCheckboxes() {
        $(checkboxSelector).on('click.checkbox', event => {
            const row = $(event.target).closest('tr');
            const todo = $.grep(todos, todo => todo.id == Number(row.attr('todoid')))[0];
            todo.isDone = !todo.isDone;
            updateTodo(todo);
            row.toggleClass('strikeout');
        });
    }
    function rebindCheckboxes() {
        $(checkboxSelector).off('click.checkbox');
        bindCheckboxes();
    }
    function handleInvalidInput() {
        return;
    }
    function bindFormSubmit() {
        formEl.on('submit', e => {
            e.preventDefault();
            // if (!isTitleValid() || !isPriorityValid() || !isDateValid()) {
            //   handleInvalidInput()
            //   alert('values are invalid')
            //   return
            //   // show popup or something
            // }
            saveNewTodo(createTodoItem(Number(priorityEl.val()), String(titleEl.val()), String(dateEl.val())));
            clearInputFields();
            getTodos();
        });
    }
    function isTitleValid() {
        return titleEl.val() !== '';
    }
    function isPriorityValid() {
        const points = parseInt(String(priorityEl.val()));
        if (points < 0)
            return false;
    }
    function isDateValid() {
        if (!/^\d{4}(-|\\|\.)\d{2}(-|\\|\.)\d{2}$/.test(String(dateEl.val())))
            return false;
        const date = new Date(String(dateEl.val()));
        if (date.getDate() != Number(String(dateEl.val()).substring(8, 10))) {
            return false;
        }
    }
    function clearInputFields() {
        priorityEl.val(''),
            titleEl.val(''),
            dateEl.val('');
    }
    function createTodoItem(priority, task, date) {
        const maxCurrentId = Math.max(...todos.map(todo => todo.id));
        return {
            id: maxCurrentId + 1,
            isDone: false,
            priority,
            task,
            date
        };
    }
    function createTodoItemEl(todo) {
        return $(`<tr todoid="${todo.id}" class="todo ${todo.isDone ? 'strikeout' : ''}">` +
            `<td><input type="checkbox" ${todo.isDone ? 'checked' : ''}/></td>` +
            `<td>${todo.priority}</td>` +
            `<td>${todo.task}</td>` +
            `<td>${todo.date}</td>` +
            '</tr>');
    }
    function renderTodos() {
        todoListEl.find('tbody').html('');
        todos.forEach(todo => {
            appendTodo(todo);
        });
        bindCheckboxes();
    }
    function appendTodo(todo) {
        todoListEl.find('tbody').append(createTodoItemEl(todo));
    }
    function updateTodo(todo) {
        $.ajax({
            type: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${todoDatabaseUrl}/${todo.id}`,
            data: JSON.stringify(todo),
            success: () => {
                console.log('update successful!');
            }
        });
    }
    function saveNewTodo(todo) {
        $.ajax({
            type: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            url: todoDatabaseUrl,
            data: JSON.stringify(todo),
            success: () => {
                console.log('post successful');
            }
        });
    }
    function getTodos() {
        todos = [];
        $.getJSON(todoDatabaseUrl, (tasks) => {
            todos = tasks;
            renderTodos();
        });
    }
    getTodos();
    bindFormSubmit();
});
