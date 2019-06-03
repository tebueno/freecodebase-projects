import React from 'react'
import Button from './button.jsx';
import axios from 'axios';
import Twitter from './twitter.jsx';
import './scss/main.scss';

class QuoteGenApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            btnValue: 'New Quote',
            btnClass: 'quote__button',
            btnId: 'new-quote',
            theme: '',
            themes: ['firebrick', 'green', 'blue', 'orange', 'sienna']            
        }
        this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {
        this.getQuote();
    }

    getQuote() {
        axios.get('https://talaikis.com/api/quotes/random/').then((response) => {
            this.setState( 
            {
                quote: response.data.quote,
                author: response.data.author,
                theme: this.getRandomTheme(this.state)
            });
        }).catch(() => {
            this.setState( 
                {
                    quote: 'Whoops! The quote machine is taking a nap, check back in 5mins',
                    author: 'The Internet',
                    theme: this.getRandomTheme(this.state)
                });
        });
    }

    getRandomTheme(obj) {
        const randArry = obj.themes.filter((value) => value !== obj.theme);
        const randIndex = (Math.random() * (randArry.length - 1)).toFixed(0);
        return randArry[randIndex];
    }

    render() {
        return (
            <div id='background' className={`quote--${this.state.theme}`}>
            <div id='quote-box' className='quote'>
            <div className='quote__body'>
                <span id='text'>
                    {`"${this.state.quote}"`}
                </span>
                </div>
                <div className='quote__author'>
                <span id='author'>
                    {`- ${this.state.author}`}
                </span>
                </div>
                <div className='quote__footer'>
                <Twitter 
                    class={`quote--${this.state.theme}`}
                    quote={this.state.quote}
                    author={this.state.author}
                />
                {/*TODO: Add in Facebook component */}
                <Button 
                    id={this.state.btnId}
                    value={this.state.btnValue}
                    class={`quote--${this.state.theme} ${this.state.btnClass} `} 
                    clickFunct={this.getQuote}
                />
                </div>
            </div>
            </div>
        );
    }
}

export default QuoteGenApp;