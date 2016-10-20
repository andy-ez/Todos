var TodoListView = Backbone.View.extend({
  el: 'body',
  template: App.templates.main_template,
  header_template: App.templates.title_template,
  list_template: App.templates.list_template,
  events: {
    "click label[for='new_item']": 'newTodo',
    "click label[for='sidebar_toggle']": 'toggleSidebar',
    "click .delete": 'removeItem',
    "click tbody tr td.list_item": "editTodo",
    "click label[for^='item']": "toggleComplete",
    "click #sidebar dl, #sidebar header": "setActive"
  },
  removeActiveClass: function(){
    $("#sidebar").find(".active").removeClass("active");
  },
  setActive: function(e){
    this.setCurrentSection(e);
    this.removeActiveClass();
    $(e.currentTarget).addClass("active");
  },
  getID: function(e){
    var row = $(e.target).closest("tr");
   return +row.attr('data-id');
  },
  editTodo: function(e){
    App.editTodoItem(this.getID(e));
  },
  toggleComplete: function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    App.toggleComplete(this.getID(e));
  },
  removeItem: function(e){
    App.deleteTodo(this.getID(e));
  },
  toggleSidebar: function(){
    $('#sidebar').toggle();
  },
  newTodo: function(){
    App.newTodoItem();
  },
  filter: function(e){
    $('#items header').html(this.header_template({current_section: this.current_section}));
    var title = this.current_section.title,
        class_name = $(e.currentTarget).attr('class')
    switch (true){
      case (/Completed/.test(title)):
        $('#list').html(this.list_template({todos: _.where(this.collection.toJSON(), {completed: true})}));
        break;
      case (!/Completed/.test(title) && /completed/.test(class_name)):
        $('#list').html(this.list_template({todos: _.where(this.collection.toJSON(), {completed: true, due_date: this.current_section.title})}));
        break;
      case (!/All Todos/.test(title) && !/completed/.test(class_name)):
        $('#list').html(this.list_template({todos: _.where(this.collection.toJSON(), {due_date: this.current_section.title})}));
        break;
      default:
        $('#list').html(this.list_template({todos: this.collection.toJSON()}));
        break;
    }
  },
  render: function(){
    this.$el.html(this.template({
      todos: this.collection.toJSON(), 
      todos_by_date: this.collection.groupedTodos,
      done_number: this.collection.where({completed: true}).length,
      done_todos_by_date: this.collection.groupedDoneTodos,
      current_section: this.current_section
    }));
    // this.$el.html(this.$el.html());
  },
  setCurrentSection: function(e){
    this.current_section.title = $(e.currentTarget).attr('data-title');
    this.current_section.data = $(e.currentTarget).attr('data-total');
    this.filter(e);
  },
  initialize: function(){
    var self = this;
    this.current_section = {
      title: "All Todos",
      data: self.collection.length
    };
    this.render();
    this.on('change_selection', this.filter);
    this.listenTo(this.collection, 'change reset add remove', this.render);
  }
});