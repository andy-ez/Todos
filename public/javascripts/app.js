var App = {
  templates: JST,
  hideTodoView: function(todo){
    todo.view.$el.hide();
  },
  showTodo: function(todo){
    todo.view.$el.show();
  },
  renderTodoItem: function(todo){
    new TodoItemView({model: todo});
  },
  renderTodoList: function(){
    this.todos.each(this.hideTodoView);
    this.todos.each(this.showTodo);
  },
  indexView: function(){
    this.todos.each(this.renderTodoItem);
  },
  renderCompleted: function(){
    this.todos.each(this.hideTodoView);
    this.todos.where({completed: true}).forEach(this.showTodo);
  },
  renderAllTodosByMonth: function(){
    this.todos.each(this.hideTodoView);
    this.todos.where({
      due_date: this.sidebar.current_section.title
    }).forEach(this.showTodo);
  },
  renderCompletedByMonth: function(){
    this.todos.each(this.hideTodoView);
    this.todos.where({
      due_date: this.sidebar.current_section.title,
      completed: true
    }).forEach(this.showTodo);
  },
  newTodoItem: function(){
    new NewTodoItemView();
  },
  editTodoItem: function(todo){
    new EditTodoItemView({model: todo});
  },
  markDone: function(item){
    this.todos.markAsDone(item);
  },
  updateTodo: function(item, new_params){
    item.updateItem(new_params);
  },
  toggleComplete: function(todo){
    todo.toggleComplete();
  },
  toggleSidebar: function(){
    this.sidebar.toggle();
  },
  createNewTodo: function(todoItem){
    var todo = this.todos.addNewItem(todoItem);
    new TodoItemView({model: todo});
    this.sidebar.render();
  },
  deleteTodo: function(todo){
    todo.destroy();
  },
  setTitle: function(){
    this.main_view.setTitle(this.sidebar.active_element);
  },
  init: function(){
    this.main_view = new TodoListView();
    this.todos = new TodoList();
    this.todos.fetch();
    this.indexView();
    this.sidebar = new SidebarView({collection: this.todos});
    this.setTitle();
  }
}