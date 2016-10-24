var TodoItem = Backbone.Model.extend({
  defaults: function(){
    return {
      title: "Empty Todo Item",
      due_date: 'No Due Date',
      completed: false,
    };
  },
  updateItem: function(new_params){
    this.save({title: new_params.title});
    this.save({due_day: new_params.due_day});
    this.save({due_month: new_params.due_month});
    this.save({due_year: new_params.due_year});
    this.save({description: new_params.description});
    if (this.get('due_month') && this.get('due_year')){
      var formatted_date = this.get('due_month') + "/" + this.get('due_year').slice(2);
      this.save({due_date: formatted_date});
    }
  },
  toggleComplete: function(){
    this.get('completed') ? this.save({completed: false}) : this.save({completed: true});
  },
  initialize: function(){
  }
});