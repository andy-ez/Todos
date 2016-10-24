this["JST"] = this["JST"] || {};

Handlebars.registerPartial("all_list_template", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<dl data-title=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" data-total=\""
    + alias4(alias5(depth0, depth0))
    + "\" class='all_todos'><dt><time>"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</time></dt><dd>"
    + alias4(alias5(depth0, depth0))
    + "</dd></dl>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.todos_by_date : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("all_todos_template", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<header data-title=\"All Todos\" data-total=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todos : depth0)) != null ? stack1.length : stack1), depth0))
    + "\" id=\"all_header\" class='all_todos active'><dl><dt>All Todos</dt><!----><dd>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todos : depth0)) != null ? stack1.length : stack1), depth0))
    + "</dd></dl></header>";
},"useData":true}));

Handlebars.registerPartial("completed_list_template", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<dl data-title=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" data-total=\""
    + alias4(alias5(depth0, depth0))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class='completed'><dt><time>"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</time></dt><dd>"
    + alias4(alias5(depth0, depth0))
    + "</dd></dl>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.done_todos_by_date : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("completed_todos_template", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header data-title=\"Completed\" data-total=\""
    + alias4(((helper = (helper = helpers.done_number || (depth0 != null ? depth0.done_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"done_number","hash":{},"data":data}) : helper)))
    + "\" id=\"all_done_header\" class='completed'><dl><dt>Completed</dt><!----><dd>"
    + alias4(((helper = (helper = helpers.done_number || (depth0 != null ? depth0.done_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"done_number","hash":{},"data":data}) : helper)))
    + "</dd></dl></header>";
},"useData":true}));

Handlebars.registerPartial("item_partial", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"checkbox\" name=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" checked/>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"checkbox\" name=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><td class=\"list_item\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<label for=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</label></td><td class=\"delete\"><img src=\"images/trash.png\" alt=\"Delete\"/></td></tr>";
},"useData":true}));

Handlebars.registerPartial("list_template", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.item_partial,depth0,{"name":"item_partial","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.todos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("title_template", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label for=\"sidebar_toggle\"><img src=\"images/hamburger.png\" alt=\"Toggle Sidebar\" /> </label> <dl><dt><time>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.current_section : depth0)) != null ? stack1.title : stack1), depth0))
    + "</time></dt><!----><dd>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.current_section : depth0)) != null ? stack1.data : stack1), depth0))
    + "</dd> </dl>";
},"useData":true}));

this["JST"]["item_partial"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"checkbox\" name=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" checked/>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"checkbox\" name=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\"list_item\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<label for=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</label></td><td class=\"delete\"><img src=\"images/trash.png\" alt=\"Delete\"/></td>";
},"useData":true});

this["JST"]["main_template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"sidebar\" ></div><div id=\"items\" ><header><label for=\"sidebar_toggle\"><img src=\"images/hamburger.png\" alt=\"Toggle Sidebar\" /></label><dl id='title_container'></dl></header><main><label for=\"new_item\"><img src=\"images/plus.png\" alt=\"Add Todo Item\" /><h2>Add new to do</h2></label><table cellspacing=\"0\"><tbody id='list'></tbody></table><div id='new_todo'><div class=\"modal\" id=\"modal_layer\"></div><div class=\"modal\" id=\"form_modal\"><form action=\"\" method=\"post\"><fieldset><ul><li><label for=\"title\">Title</label><input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Item 1\"/></li><li><label for=\"due\">Due Date</label><div class=\"date\"><select id=\"due_day\" name=\"due_day\" required> <option disabled selected>Day</option><option value=\"01\">1</option><option value=\"02\">2</option><option value=\"03\">3</option><option value=\"04\">4</option><option value=\"05\">5</option><option value=\"06\">6</option><option value=\"07\">7</option><option value=\"08\">8</option><option value=\"09\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option></select>/ <select id=\"due_month\" name=\"due_month\" required> <option disabled selected>Month</option><option value=\"01\">January</option><option value=\"02\">February</option><option value=\"03\">March</option><option value=\"04\">April</option><option value=\"05\">May</option><option value=\"06\">June</option><option value=\"07\">July</option><option value=\"08\">August</option><option value=\"09\">September</option><option value=\"10\">October</option><option value=\"11\">November</option><option value=\"12\">December</option></select> / <select id=\"due_year\" name=\"due_year\" placeholder=\"year\" required> <option disabled selected>Year</option><option>2014</option><option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option><option>2022</option><option>2023</option><option>2024</option><option>2025</option></select></div></li><li><label for=\"description\">Description</label><textarea cols=\"50\" name=\"description\" rows=\"7\" placeholder=\"Description\"></textarea></li><li><input type=\"submit\" value=\"Save\" /><button name=\"complete\">Mark As Complete</button></li></ul></fieldset></form></div></div></main></div>";
},"useData":true});

this["JST"]["sidebar_template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"all\"><div id=\"all_todos\">"
    + ((stack1 = container.invokePartial(partials.all_todos_template,depth0,{"name":"all_todos_template","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div><article id=\"all_lists\">"
    + ((stack1 = container.invokePartial(partials.all_list_template,depth0,{"name":"all_list_template","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</article></section><section class=\"completed\" id=\"completed_items\"><div id=\"completed_todos\">"
    + ((stack1 = container.invokePartial(partials.completed_todos_template,depth0,{"name":"completed_todos_template","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div><article id=\"completed_lists\">"
    + ((stack1 = container.invokePartial(partials.completed_list_template,depth0,{"name":"completed_list_template","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</article></section>";
},"usePartial":true,"useData":true});

this["JST"]["title_template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<dt><time>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</time></dt><!----><dd>"
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data}) : helper)))
    + "</dd>";
},"useData":true});