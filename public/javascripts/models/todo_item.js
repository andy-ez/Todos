var TodoItem = Backbone.Model.extend({
  defaults: {
    title: "Empty Todo Item",
    due_date: 'No Due Date',
    completed: false,
  },
  initialize: function(attributes){
    this.set('id', +this.cid.replace('c', ''));
  }
});