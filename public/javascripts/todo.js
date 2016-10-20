var todo_list = JSON.parse(localStorage.getItem("todos")) || [],
    templates = {};

$(function(){

  function TodoItem(info_array){
    this.title = this.findObjectByProp(info_array, "name", "title").value;
    this.year = this.findObjectByProp(info_array, "name", "due_year").value;
    this.month = this.findObjectByProp(info_array, "name", "due_month").value;
    this.day = this.findObjectByProp(info_array, "name", "due_day").value;
    this.description = this.findObjectByProp(info_array, "name", "description").value;
    this.id = this.last_id;
    this.completed = false;
    this.due_date = this.formatDate();
  }
  
  TodoItem.prototype = {
    constructor: TodoItem,
    last_id: localStorage.getItem("id") || 0,
    todos: todo_list || [],
    done: [],
    selected: [],
    current_section: {element: "all_header", title: "All Todos", data: 0},
    todos_by_date: {},
    done_todos_by_date: {},
    init: function(){
      this.setDone();
      this.groupItems("todos_by_date", this.todos);
      this.groupItems("done_todos_by_date", this.done);
      this.saveData();
    },
    findObjectByProp: function(array, prop, value){
      return array.filter(function(ele){
        return ele[prop] === value
      })[0];
    },
    createNew: function(info_array){
      this.last_id++ 
      var item = new TodoItem(info_array);      
      this.todos.push(item);
      this.init();
      console.log(this)
    },
    formatDate: function(){
      var due = "No Due Date"
      if (this.month !== "Month" && this.year !== "Year"){
        due = this.month+"/"+this.year.slice(2);
      }
      return due;
    },
    deleteItem: function(id){
      var idx = this.todos.indexOf(this.itemFromID(id));
          done_idx = this.done.indexOf(this.itemFromID(id));
      this.todos.splice(idx, 1);
      if (done_idx !== -1){
        this.done.splice(done_idx, 1)
      }
      this.init();
    },
    itemFromID: function(id){
      return this.todos.filter(function(ele){
        return ele.id === +id;
      })[0];
    },
    markComplete: function(item){
      item.completed = true;
      this.init()
    },
    toggleComplete: function(id){
      var item = this.itemFromID(id);
      item.completed = item.completed ? false : true;
      this.init();
    },
    updateItem: function(item, new_info){
      item.title = this.findItemByProp(new_info, "name", "title").value;
      item.year = this.findItemByProp(new_info, "name", "due_year").value;
      item.month = this.findItemByProp(new_info, "name", "due_month").value;
      item.day = this.findItemByProp(new_info, "name", "due_day").value;
      item.description = this.findItemByProp(new_info, "name", "description").value;
      this.formatDate.call(item);
      this.init();
    },
    findItemByProp: function(array, prop, value){
      return array.filter(function(ele){
        return ele[prop] === value
      })[0];
    },
    setDone: function(){
      this.done = this.todos.filter(function(item){
        return item.completed;
      })
    },
    saveData: function(){
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("done_todos", JSON.stringify(this.done));
      localStorage.setItem("id", this.last_id)
    },
    groupItems: function(type, items){
      this[type] = {}
      var grouped_todos = this[type];
      this.sortByDate(items).forEach(function(item){
        var todos_for_date = grouped_todos[TodoItem.prototype.formatDate.call(item)];
        if (todos_for_date && todos_for_date.indexOf(item) === -1){
          grouped_todos[TodoItem.prototype.formatDate.call(item)].push(item)
        }else{
          grouped_todos[TodoItem.prototype.formatDate.call(item)] = [];
          grouped_todos[TodoItem.prototype.formatDate.call(item)].push(item);
        }
      })
    },
    sortByDate: function(arr){
      var dates = arr.filter(function(ele){
        return ele.due_date !== "No Due Date";
      }).sort(this.compareDates),
          no_dates = arr.filter(function(ele){
        return ele.due_date === "No Due Date";
      });
      return no_dates.concat(dates);
    },
    compareDates: function(a, b){
      if (+a.year < +b.year){return -1;}
      else if (+a.year > +b.year){return 1;}
      else{
        if (+a.month < +b.month){return -1;}
        else if (+a.month > +b.month){return 1;}
        else {return 0;}
      }
    }
  };

  var View = {
    init: function(){
      $("script[type='text/x-handlebars']").each(function(){
        $templ = $(this);
        templates[$templ.attr("id")] = Handlebars.compile($templ.html());
      })

      $("script[data-type='partial']").each(function(){
        $templ = $(this);
        Handlebars.registerPartial($templ.attr("id"), $templ.html());
      })
    },
    renderForm: function(speed){
    $(".modal").fadeIn(speed).filter("#form_modal").css({
      top: $(window).scrollTop() + 200
    });
    $("#modal_layer").off("click").on("click", View.hideForm);
    },
    newForm: function(){
      this.resetFormInputs();
      this.renderForm(500);
    },
    editForm: function(item){
      this.renderForm(500);
      $("[name='title']").val(item.title);
      $("[name='due_year']").find("option:first-of-type").text(item.year);
      $("[name='due_month']").find("option:first-of-type").text(item.month);
      $("[name='due_day']").find("option:first-of-type").text(item.day);
      $("[name='description']").val(item.description);
    },
    resetFormInputs: function(){
    $("form")[0].reset();
    $("[name='due_year']").find("option:first-of-type").text("Year");
    $("[name='due_month']").find("option:first-of-type").text("Month");
    $("[name='due_day']").find("option:first-of-type").text("Day");
    },
    hideForm: function(speed){
      $(".modal").fadeOut(speed);
    },
    updateTitle: function(){
      $("#items header").html(templates.title_template(TodoItem.prototype))
    },
    markAsDone: function(id){
      $("tr[data-id="+id+"]").find(":checkbox").attr("checked", "checked");
    },
    markUndone: function(id){
      $("tr[data-id="+id+"]").find(":checkbox").attr("checked", false);
    }
  };

  var Control = {
    index: function(){
      TodoItem.prototype.selected = this.sort_todos(TodoItem.prototype.todos);
      $("body").html(templates.main_template(TodoItem.prototype))
      this.setSelected($("#all_header"));
      $("#all_header").attr("class", "active")
      this.bind();
    },
    completed: function(){
      TodoItem.prototype.selected = this.sort_todos(TodoItem.prototype.done);
      $("body").html(templates.main_template(TodoItem.prototype))
      this.setSelected($("#all_done_header"));
      $("#"+ TodoItem.prototype.current_section.element).attr("class", "active")
      this.bind();
    },
    allInMonth: function(month){
      TodoItem.prototype.selected = this.sort_todos(TodoItem.prototype.todos_by_date[month]);
      $("body").html(templates.main_template(TodoItem.prototype))
      $("#all_lists").find("dl[data-title='"+TodoItem.prototype.current_section.title+"']").attr("class", "active")
      this.bind();
    },
    completedInMonth: function(month){
      TodoItem.prototype.selected = TodoItem.prototype.done_todos_by_date[month];
      $("body").html(templates.main_template(TodoItem.prototype))
      $("#completed_lists").find("dl[data-title='"+TodoItem.prototype.current_section.title+"']").attr("class", "active")
      this.bind();
    },
    newTodo: function(){
        View.newForm();
        this.create();
    },
    create: function(){
      $("form [name='complete']").off("click").on("click", function(e){
        e.preventDefault();
        alert("Cannot mark as complete as item has not been created yet!");
      });

      $("#form_modal form").off("submit").on("submit", function(e){
        e.preventDefault();
        var $form = $(e.target)
        TodoItem.prototype.createNew($form.serializeArray());
        View.hideForm();
        Control.index();
      });
    },
    removeItem: function($item){
      idx = $item.closest("tr").attr("data-id");
      TodoItem.prototype.deleteItem(idx);
      this.index();
    },
    edit: function(idx){
      var item = TodoItem.prototype.itemFromID(idx);
      View.editForm(item);
      this.update(item)
    },
    update: function(item){
      $("form [name='complete']").off("click").on("click", function(e){
        e.preventDefault();
        TodoItem.prototype.markComplete(item);
        View.hideForm();
        View.markAsDone(item.id);
      });

      $("#form_modal form").off("submit").on("submit", function(e){
        e.preventDefault();
        var $form = $(e.target)
        TodoItem.prototype.updateItem(item, $form.serializeArray());
        View.hideForm();
        Control.index();
      });
    },
    sort_todos: function(arr){
      var completed = [],
          uncompleted = [];
          arr.forEach(function(item){
            if (item.completed){
              completed.push(item)
            }
            else{uncompleted.push(item);}
          })
          return uncompleted.concat(completed)
    },
    setSelected: function($el){
      TodoItem.prototype.current_section.element = $el.attr("id");
      TodoItem.prototype.current_section.title = $el.attr("data-title");
      TodoItem.prototype.current_section.data = $el.attr("data-total");
      View.updateTitle();
    },
    bind: function(){
      $("label[for='new_item']").off("click").on("click", function(){
        Control.newTodo();
      });

      $(".delete").off("click").on("click", function(e){
        e.preventDefault;
        var $item = $(e.target);
        Control.removeItem($item);      
      });

      $("tbody tr td.list_item label").off("click").on("click", function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        var $item = $(e.target),
            idx = $item.closest("tr").attr("data-id");
        Control.edit(idx);
      });

      $("tbody tr td.list_item").off("click").on("click", function(e){
        e.preventDefault();
        var $item = $(e.target),
            idx = $item.closest("tr").attr("data-id");
        TodoItem.prototype.toggleComplete(idx);
        Control.index();
      });

      $("#all_todos, #completed_todos").off("click").on("click", function(e){
        $("#sidebar").find(".active").removeClass("active");
        var $el = $(e.target).closest("header");
        if ($el.attr("data-title") === "Completed"){
          Control.completed();
        }else{
          Control.index();
        }
      });

      $("#all_lists, #completed_lists").off("click").on("click", function(e){
        var $item = $(e.target).closest("dl"),
            parent_id = $item.closest("article").attr("id"),
            month = $item.attr("data-title");
        $("#sidebar").find(".active").removeClass("active");
        Control.setSelected($item);
        if(parent_id === "all_lists"){Control.allInMonth(month);}
        else{Control.completedInMonth(month);}
      });
    }
  }
  View.init();
  TodoItem.prototype.init();
  Control.index();
});
