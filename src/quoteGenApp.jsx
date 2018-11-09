import React from 'react'
import Button from './button.jsx';
import axios from 'axios';

class QuoteGenApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'He who hesitates is a hesitator',
            author: 'Coach Contereas'
        }
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        axios.get('https://talaikis.com/api/quotes/random/').then((response) => {
            this.setState( 
            {
                quote: response.data.quote,
                author: response.data.author
            });
        });
    }

    render() {
        return (
            <div>
            <p>{
                `"${this.state.quote}"`
            }</p>
            <p>{this.state.author}</p>
            <Button 
                value="Quote Me!"
                class='btn-class'
                clickFunct={this.getQuote}
            />
            </div>
        );
    }
}

export default QuoteGenApp;