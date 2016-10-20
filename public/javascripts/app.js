var App = {
  templates: JST,
  newTodoItem: function(){
    new NewTodoItemView();
  },
  editTodoItem: function(id){
    var item = this.todos.get(id);
    new EditTodoItemView(item);
  },
  markDone: function(item){
    this.todos.markAsDone(item);
  },
  updateTodo: function(item, new_params){
    this.todos.updateItem(item, new_params);
  },
  toggleComplete: function(id){
    if (this.todos.get(id).get('completed')) {
      this.todos.get(id).set('completed', false);
    }else{
      this.todos.get(id).set('completed', true);
    }
  },
  createNewTodo: function(todoItem){
    this.todos.addNewItem(todoItem);
  },
  deleteTodo: function(id){
    this.todos.remove(id);
  },
  init: function(){
    this.todos = new TodoList();
    this.todos.reset(JSON.parse(localStorage.getItem('todos')));
  }
}