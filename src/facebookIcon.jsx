import React from 'react';

class FacebookIcon extends React.Component {

    render() {
        const iStyle = {
            backgroundColor: 'transparent'
        }

           // todo: implement URL sharing. Sharing of actual text isn't possible 

        return (
            <a className="button" href={`http://www.facebook.com/dialog/share?app_id=299255360916667&message=%22${this.props.quote}%22%0A%0A%2D${this.props.author}`} id="tweet-quote" title="Tweet this quote!" target="_blank">
<i className={`fa fa-facebook-f ${this.props.class}`} style={iStyle}></i>
            </a>
        );
    }
}

export default FacebookIcon;