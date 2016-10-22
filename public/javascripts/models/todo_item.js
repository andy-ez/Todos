var TodoItem = Backbone.Model.extend({
  defaults: function(){
    return {
      title: "Empty Todo Item",
      due_date: 'No Due Date',
      completed: false,
    };
  },
  initialize: function(){
  }
});