import React from 'react';

class UnorderedList extends React.Component {
    render() {
        var listItems = this.props.items.map(function(item) {
            return (
              <li key="{item.name}">
                <a href="{item.link}">{item.name}</a>
              </li>
            );
          });
        return (
            <ul>
                {listItems}
            </ul>
        );   


    }


}
export default UnorderedList;

/*var RepeatModule = React.createClass({
    getDefaultProps: function() {
      return { items: [] }
    },
    render: function() {
  
      var listItems = this.props.items.map(function(item) {
        return (
          <li key="{item.name}">
            <a href="{item.link}">{item.name}</a>
          </li>
        );
      });
  
      return (
          <ul>
            {listItems}
          </ul>
      );
    }
}
  });
  */