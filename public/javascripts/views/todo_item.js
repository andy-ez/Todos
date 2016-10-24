var TodoItemView = Backbone.View.extend({
  tagName: 'tr',
  attributes: function(){
    var self = this
    return{
      'data-id': this.model.id
    }
  },
  events: {
    'click .delete': 'deleteTodo',
    'click td.list_item': 'editTodo',
    "click label[for^='item']": "toggleComplete"
  },
  template: App.templates.item_partial,
  deleteTodo: function(){
    App.deleteTodo(this.model);
    this.destroy();
  },
  destroy: function(){
    this.undelegateEvents();
    this.$el.remove();
  },
  editTodo: function(){
    App.editTodoItem(this.model);
  },
  toggleComplete: function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    App.toggleComplete(this.model);
  },
  render: function(){
    this.update();
    this.$el.appendTo($('#list'));
  },
  update: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function(){
    this.render();
    this.model.view = this;
    this.listenTo(this.model, 'change', this.update);
  }
});