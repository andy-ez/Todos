var EditTodoItemView = Backbone.View.extend({
  el: '#new_todo',
  events: {
    'click #modal_layer': 'close',
    'submit': 'update',
    'click button': 'markDone'
  },
  fadeSpeed: 200,
  markDone: function(e){
    e.preventDefault();
    App.markDone(this.model);
    this.close();
  },
  update: function(e){
    e.preventDefault();
    var inputs = $(e.target).serializeArray(),
        new_params = {};
    inputs.forEach(function(field){
      new_params[field.name] = field.value;
    });
    App.updateTodo(this.model, new_params);
    this.close();
  },
  destroy: function(){
    this.undelegateEvents();
    this.$el.removeData().unbind();
  },
  close: function(){
    this.$overlay.add(this.$form).fadeOut(this.fadeSpeed);
    this.destroy();
  },
  fillInputs: function(item){
    $("[name='title']").val(item.get('title'));
    $("[name='due_year']").val(item.get('due_year'));
    $("[name='due_month']").val(item.get('due_month'));
    $("[name='due_day']").val(item.get('due_day'));
    $("[name='description']").val(item.get('description'));
  },
  render: function(item){
    this.$overlay.add(this.$form).fadeIn(this.fadeSpeed);
    this.fillInputs(item);
  },
  initialize: function(item){
    this.$overlay = $('#modal_layer')
    this.$form = $('#form_modal');
    this.model = item;
    this.render(item);
  }
});