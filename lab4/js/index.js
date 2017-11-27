$(function () {
  const checkboxSelector = '.todo input[type="checkbox"]';
  const formEl = $('form');
  const titleEl = $('#todo-title');
  const pointsEl = $('#todo-points');
  const dateEl = $('#todo-date');
  
  function bindCheckboxes() {
    $(checkboxSelector).on('click.checkboxes', e => {
      label = $(event.target).parent().find('label');
      label.toggleClass('removed');
    })
  }
  
  function rebindCheckboxes() {
    $(checkboxSelector).off('click.checkboxes');
    bindCheckboxes();
  }

  function bindFormSubmit() {
    formEl.on('submit', e => {
      e.preventDefault();
      if (!validateTitle() || !validatePoints() || !validateDate()) {
        return;
        // show popup or something
      }
      const element = $('<div class="todo">' +
                          '<input type="checkbox"/>' +
                          `<label for="checkbox">${titleEl[0].value}</label>` +
                        '</div>');
      titleEl.value = '';
      $('.todo-list').append(element);
      rebindCheckboxes();
    })
  }

  function validateTitle() {
    if (titleEl[0].value === '')
      return false;
  }

  function validatePoints() {
    const points = parseInt(pointsEl[0].value);
    if (!Number.isInteger(points) || points < 0)
      return false;
  }
  
  function validateDate() {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateEl[0].value))
      return false;
    const date = new Date(dateEl[0].value);
    if (date.getDate() != dateEl[0].value.substring(8, 10)) {
      return false;
    }
  }
  
  bindCheckboxes();
  bindFormSubmit();
})