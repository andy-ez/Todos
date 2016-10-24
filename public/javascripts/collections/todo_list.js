var TodoList = Backbone.Collection.extend({
  model: TodoItem,
  localStorage: new Backbone.LocalStorage('todoLists'),
  addNewItem: function(item){
    if (item.due_month && item.due_year){
      item.due_date = item.due_month + "/" + item.due_year.slice(2);
    }
    return this.create(item);
  },
  markAsDone: function(item){
    item.save({completed: true});
  },
  sortByDate: function(model){
    return +((model.due_year || '0') + (model.due_month || '0'));
  },
  groupTodos: function(){
    this.groupedTodos = this.grouped();
    this.groupedDoneTodos = this.groupedDone();
  },
  groupedDone: function(){
    return _.countBy((_.sortBy(_.where(this.toJSON(), {completed: true}), this.sortByDate)), 'due_date');
  },
  grouped: function(){
    return _.countBy(_.sortBy(this.toJSON(), this.sortByDate),'due_date');
  },
  comparator: function(model){
    return +((model.get('completed') ? '1' : '0') + (model.get('due_year') || '0000') + (model.get('due_month') || '00'));
  },
  initialize: function(){
    this.on('change', this.sort);
    this.on('change remove add', this.groupTodos);
  }
});