function Order() {
  this.items = [],
  this.total = 0,
  this.currentId = 0
}

Order.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.addSandwhich = function(sandwhich){
  sandwich.id = this.assignId();
  this.items.push(sandwhich);
}

Order.prototype.remove = function(id){
  for (var i = 0; i < this.items.length; i++){
    if (this.items[i].id === id){
      this.items.splice(this.items.indexOf(this.items[i]), 1);
    }
  }
}
Order.prototype.calcTotal = function(){
  var amount = 0;
  this.items.forEach(function(item){
    amount += item.price;
  });
  this.total = amount;
  return this.total;
}
function Meal(toppings) {
  this.toppings = toppings,
  this.price = 0
}
Meal.prototype.addToppings = function(toppingsToAdd){
  this.toppings = toppingsToAdd.concat(this.toppings);
}
Meal.prototype.calcPrice = function(){
  this.price = this.toppings.length + 2;
}
// front end
var newOrder = new Order();

$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var bread = $("input:radio[name=bread]:checked").val();
    // .get grabs the value of the jquery object
    var meats = $("input:checkbox[name=meat]:checked").map(function(){
      return this.value;
    }).get();
    var tops = $("input:checkbox[name=top]:checked").val();
    var condiments = $("input:checkbox[name=cond]:checked").val();

    console.log(bread, meats);
  });
});
