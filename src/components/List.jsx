var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"Deepesh"}, {"id":2,"text":"Bhagyashri"}, {"id":3,"text":"Abhishek"}, {"id":4,"text":"Vaibhavi"}];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item){
     return<ListItem key={item.id} ingredient={item.text} />;
   });
    return(<ul>{listItems}</ul>);
  }
});

module.exports = List;
