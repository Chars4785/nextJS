import React from 'react';
import ReactDOM from 'react-dom';

const MAX_COLUMS = 7;
const MIN_COLUMS = 1;

class CardGrid extends React.Component{
    constructor(props){
        super(props)
        this.rootRef = React.createRef();
    }

    renderChild(){
        if( this.rootRef.current ){
            console.log(this.rootRef.current.offsetWidth)
            console.log("o",window.outerWidth)
            console.log("s",window.innerWidth)
        }
        // console.log(this.rootRef.currdent.offsetWidth)
        return this.props.children
    }

    render(){
        const { children } = this.props
        return(
            <div ref={this.rootRef}>
                {this.renderChild()}
            </div>
        )
    }
}

export default CardGrid