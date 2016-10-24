var TodoListView = Backbone.View.extend({
  el: 'body',
  template: App.templates.main_template,
  title_template: App.templates.title_template,
  events: {
    "click label[for='new_item']": "addNewTodo",
    "click label[for='sidebar_toggle']": 'toggleSidebar',
  },
  addNewTodo: function(){
    App.newTodoItem();
  },
  clearList: function(){
    $('tr').hide();
  },
  toggleSidebar: function(){
    App.toggleSidebar();
  },
  setTitle: function($element){
    var info = {
      title: $element.attr('data-title'),
      data: $element.attr('data-total')
    };
    $('#title_container').html(this.title_template(info));
  },
  render: function(){
    this.$el.html(this.template());
  },
  initialize: function(){
    this.render();
  }
});