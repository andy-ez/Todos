var SidebarView = Backbone.View.extend({
  el: '#sidebar',
  home_el: 'header.all_todos',
  template: App.templates.sidebar_template,
  events: {
    "click dl, header": "setActive",
    "click dl.all_todos": "filterAllByDate",
    "click header.all_todos": "showAll",
    "click header.completed": "showAllCompleted",
    "click dl.completed": "filterCompletedByDate"
  },
  filterAllByDate: function(){
    App.renderAllTodosByMonth()
  },
  showAll: function(){
    App.renderTodoList();
  },
  showAllCompleted: function(){
    App.renderCompleted();
  },
  filterCompletedByDate: function(){
    App.renderCompletedByMonth();
  },
  removeActiveClass: function(){
    this.$el.find(".active").removeClass("active");
  },
  setActive: function(e){
    this.current_element = {
      title: $(e.currentTarget).attr('data-title'),
      class: $(e.currentTarget).attr('class')
    }
    this.setCurrentSection(e);
    this.removeActiveClass();
    $(e.currentTarget).addClass('active');
  },
  render: function(){
    this.$el.html(this.template({
      todos: this.collection.toJSON(), 
      todos_by_date: this.collection.grouped(),
      done_number: this.collection.where({completed: true}).length,
      done_todos_by_date: this.collection.groupedDone(),
      current_section: this.current_section
    }));
    if (this.current_element){
      var class_name = this.current_element.class,
          title = this.current_element.title;
      this.active_element = $("." + class_name).filter("[data-title='" + title + "']")[0] || $(this.home_el);
      this.active_element.click();
    }
  },
  setTitle: function(){
    App.setTitle();
  },
  toggle: function(){
    this.$el.toggle();
  },
  setCurrentSection: function(e){
    this.current_section.title = $(e.currentTarget).attr('data-title');
    this.current_section.data = $(e.currentTarget).attr('data-total');
    this.trigger('changeSelection');
    App.setTitle();
  },
  initialize: function(){
    var self = this;
    this.current_section = {
      title: "All Todos",
      data: self.collection.length
    };
    this.render();
    this.$el.find('header').eq(0).addClass('active');
    this.listenTo(this.collection, 'change:completed change:due_date remove', this.render);
    this.listenTo(this.collection, 'change remove', this.setTitle);
  }
})