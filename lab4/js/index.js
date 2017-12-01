"use strict";
$(function () {
    const todoDatabaseUrl = 'http://localhost:3000/tasks';
    const checkboxSelector = '.todo input[type="checkbox"]';
    const todoDeleteSelector = '.delete-todo';
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
            row.find('span').first().text(todo.isDone ? 'Done' : 'Not done');
        });
    }
    function bindDeletes() {
        $(todoDeleteSelector).on('click.delete', event => {
            const row = $(event.target).closest('tr');
            row.css('background-color', '#dc354540');
            const todoId = $(event.target).closest('tr').attr('todoid');
            const todo = $.grep(todos, todo => todo.id == Number(todoId))[0];
            deleteTodo(todo, getTodos);
        });
        // $(todoDeleteSelector).on('mouseenter.delete', event => {
        //   const row = $(event.target).closest('tr')
        //   row.css('background-color', '#dc354540')
        // })
        // $(todoDeleteSelector).on('mouseleave.delete', event => {
        //   const row = $(event.target).closest('tr')
        //   row.css('background-color', '#fff')
        // })
    }
    function rebindActions() {
        $(checkboxSelector).off('click.checkbox');
        bindCheckboxes();
        $(todoDeleteSelector).off('click.delete mouseenter.delete mouseleave.delete');
        bindDeletes();
    }
    function handleInvalidInput() {
        const priorityHelpEl = $('#priority-help');
        const taskHelpEl = $('#task-help');
        const dateHelpEl = $('#date-help');
        isPriorityValid() ? priorityHelpEl.hide() : priorityHelpEl.show();
        isTitleValid() ? taskHelpEl.hide() : taskHelpEl.show();
        isDateValid() ? dateHelpEl.hide() : dateHelpEl.show();
    }
    function bindFormSubmit() {
        formEl.on('submit', e => {
            e.preventDefault();
            if (!isPriorityValid() || !isTitleValid() || !isDateValid()) {
                handleInvalidInput();
                return;
            }
            const newTodo = createTodoItem(Number(priorityEl.val()), String(titleEl.val()), String(dateEl.val()));
            saveNewTodo(newTodo, getTodos);
            clearInputFields();
        });
    }
    function isTitleValid() {
        return titleEl.val() !== '';
    }
    function isPriorityValid() {
        const points = parseInt(String(priorityEl.val()));
        return points >= 0;
    }
    function isDateValid() {
        const dateValues = /(\d{4})[\.\-\\](\d{2})[\.\-\\](\d{2})/.exec(String(dateEl.val()));
        if (dateValues) {
            const date = new Date(Number(dateValues[1]), Number(dateValues[2]), Number(dateValues[3]));
            if (date.getDate() != Number(dateValues[3]))
                return false;
            return true;
        }
        return false;
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
            `<td>` +
            `<input type="checkbox" ${todo.isDone ? 'checked' : ''}/>` +
            `<span>${todo.isDone ? 'Done' : 'Not done'}</span>` +
            `</td>` +
            `<td>${todo.priority}</td>` +
            `<td>${todo.task}</td>` +
            `<td>` +
            todo.date +
            `<span class="delete-todo">X</span>` +
            `</td>` +
            '</tr>');
    }
    function renderTodos() {
        todoListEl.find('tbody').html('');
        todos.forEach(todo => {
            appendTodo(todo);
        });
        rebindActions();
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
    function saveNewTodo(todo, callback) {
        $.ajax({
            type: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            url: todoDatabaseUrl,
            data: JSON.stringify(todo),
            success: () => {
                callback && callback();
            }
        });
    }
    function deleteTodo(todo, callback) {
        $.ajax({
            type: 'DELETE',
            url: `${todoDatabaseUrl}/${todo.id}`,
            success: () => {
                callback && callback();
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
