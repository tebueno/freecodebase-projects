import React from 'react';

class Twitter extends React.Component {

    render() {
        const iStyle = {
            backgroundColor: 'transparent'
        }
    
        return (
            <a className="button" href={`http://twitter.com/intent/tweet?text=%22${this.props.quote}%22%0A%0A%2D${this.props.author}`} id="tweet-quote" title="Tweet this quote!" target="_blank">
<i className={`fa fa-twitter ${this.props.class}`} style={iStyle}></i>
            </a>
        );
    }
}

export default Twitter;