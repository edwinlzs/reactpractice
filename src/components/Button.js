import React, {Component} from "react";
import '../css/button.css';

class Button extends Component{
    render(){
        const {displayText, backgroundColor, fontColor} = this.props
        return(
            <div className="button" style={{backgroundColor: backgroundColor, color: fontColor}}>
                {displayText}
            </div>
        );
    }
}

export default Button;