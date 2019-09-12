import React from 'react';

class DisplayResult extends React.Component {

    constructor(props){
        super(props);
        this.isPairRule = this.isPairRule.bind(this);
    }
      isPairRule(listItems) {
        for(var j=0; j< listItems.length; j++) {
            for(var i=j+1 ; i < listItems.length; i++) {
                var nextElement = listItems[i];
                if(listItems[j].value === nextElement.value) {
                     return 'true';
                }
            }
        }
        return 'false';

    };

    render() {
        var listItems = this.props.items;
        console.log(listItems);    
         
        return (
            <div>
            <div> <h1>This is result where we display </h1></div>
            <div> <h1>This is a pair rule :{this.isPairRule(listItems)} </h1></div>
            </div>
        );
    }


}

export default DisplayResult;
