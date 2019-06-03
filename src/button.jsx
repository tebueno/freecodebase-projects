import React from 'react';
class Button extends React.Component {


    render() {
        return (
            <button 
                id= {this.props.id}
                onClick= {this.props.clickFunct} 
                className={this.props.class}
                value={this.props.value}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Button;