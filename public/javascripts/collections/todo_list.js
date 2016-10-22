var TodoList = Backbone.Collection.extend({
  model: TodoItem,
  localStorage: new Backbone.LocalStorage('todoLists'),
  addNewItem: function(item){
    if (item.due_month && item.due_year){
      item.due_date = item.due_month + "/" + item.due_year.slice(2);
    }
    this.create(item);
  },
  markAsDone: function(item){
    item.save({completed: true});
  },
  updateItem: function(item, new_params){
    item.save({title: new_params.title});
    item.save({due_day: new_params.due_day});
    item.save({due_month: new_params.due_month});
    item.save({due_year: new_params.due_year});
    item.save({description: new_params.description});
    if (item.get('due_month') && item.get('due_year')){
      var formatted_date = item.get('due_month') + "/" + item.get('due_year').slice(2);
      item.save({due_date: formatted_date});
    }
  },
  groupTodos: function(){
    this.groupedTodos = _.countBy(_.sortBy(this.toJSON(), function(model){
      return +((model.due_year || '0') + (model.due_month || '0'));
    }),'due_date');
    this.groupedDoneTodos = _.countBy((_.where(this.toJSON(), {completed: true})), 'due_date')
  },
  comparator: function(model){
    return +((model.get('completed') ? '1' : '0') + (model.get('due_year') || '0000') + (model.get('due_month') || '00'));
  },
  initialize: function(){
    this.on('change remove add', this.groupTodos);
    this.on('change', this.sort);
  }
});