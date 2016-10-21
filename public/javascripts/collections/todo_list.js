var TodoList = Backbone.Collection.extend({
  model: TodoItem,
  addNewItem: function(item){
    if (item.due_month && item.due_year){
      item.due_date = item.due_month + "/" + item.due_year.slice(2);
    }
    this.add(item);
  },
  markAsDone: function(item){
    item.set('completed', true);
  },
  updateItem: function(item, new_params){
    for (prop in new_params){
      item.set(prop, new_params[prop]);
    }
    if (item.get('due_month') && item.get('due_year')){
      item.set('due_date', item.get('due_month') + "/" + item.get('due_year').slice(2));
    }
  },
  groupTodos: function(){
    this.groupedTodos = _.countBy(this.toJSON(),'due_date');
    this.groupedDoneTodos = _.countBy((_.where(this.toJSON(), {completed: true})), 'due_date')
  },
  save: function(){
    this.groupTodos();
    localStorage.setItem('todos', JSON.stringify(this.toJSON()));
  },
  comparator: function(model){
    // return (model.get('completed') ? '1' : '0') + (model.get('due_year') || '0000') + (model.get('due_month') || '00');
    return model.get('due_year');
  },
  initialize: function(){
    this.on("change add remove", this.save);
  }
});