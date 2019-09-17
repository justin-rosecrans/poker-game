import React from 'react';

class DisplayResult extends React.Component {

    constructor(props){
        super(props);
        this.isPairRule = this.isPairRule.bind(this);
    }
      isPairRule(listItems) {
          var finalString='';
          for(var index in listItems) {
              finalString = finalString + listItems[index].code.substring(0,1);
          }
        
          const onePairRegex = new RegExp('.*(\\w)\\1.*#.*')
          console.log(finalString);


        for(var j=0; j< listItems.length; j++) {
            for(var i=j+1 ; i < listItems.length; i++) {
                var nextElement = listItems[i];
                if(listItems[j].value === nextElement.value) {
                     return 'Two of a kind!';
                }
            }
        }
        return '';

    };

    render() {
        var listItems = this.props.items;
        console.log(listItems);    
         
        return (
            <div>
                <div> <h1>{this.isPairRule(listItems)} </h1></div>
            </div>
        );
    }


}

export default DisplayResult;
