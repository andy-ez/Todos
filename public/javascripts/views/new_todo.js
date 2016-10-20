var NewTodoItemView = Backbone.View.extend({
  el: '#new_todo',
  events: {
    'click #modal_layer': 'close',
    'submit': 'create',
    'click button': 'disabledButton'
  },
  fadeSpeed: 200,
  disabledButton: function(e){
    e.preventDefault();
    alert('Click save button to create a new Todo');
  },
  create: function(e){
    e.preventDefault();
    var inputs = $(e.target).serializeArray(),
        todoItem = {};
    inputs.forEach(function(field){
      todoItem[field.name] = field.value;
    });
    App.createNewTodo(todoItem);
    e.target.reset();
    this.close();
  },
  close: function(){
    this.$overlay.add(this.$form).fadeOut(this.fadeSpeed);
    this.destroy();
  },
  destroy: function(){
    this.undelegateEvents();
    this.$el.removeData().unbind();
  },
  render: function(){
    this.$form.find('form')[0].reset();
    this.$overlay.add(this.$form).fadeIn(this.fadeSpeed);
  },
  initialize: function(){
    this.$overlay = $('#modal_layer')
    this.$form = $('#form_modal');
    this.render();
  }
});