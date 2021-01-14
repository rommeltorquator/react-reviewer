import React, { Component } from 'react'
import Card from './Card'
import './Deck.css'
import axios from 'axios'
// componentDidMount, axios, key, ajax, try-catch

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            deck: null,
            drawn: []
        }

        this.getCard = this.getCard.bind(this);
    }
    
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({
            deck: deck.data
        })
    }

    async getCard() {
        try {
            let deck_id = this.state.deck.deck_id;
            let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
            let cardRes = await axios.get(cardUrl);

            if(!cardRes.data.success) {
                throw new Error("No Card Remaining")
            }

            let card = cardRes.data.cards[0];
            this.setState(prevState => ({
                drawn: [
                    ...prevState.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch(err) {
            alert(err);
        }
    }

    render() {
        // be particular with the map function, use parenthesis after the arrow instead of curly braces
        const cards = this.state.drawn.map(card => (
            <Card key={card.id} name={card.name} image={card.image} />
        ));

        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card</button>                      
                <div className="Deck-cardarea">{cards}</div>
            </div>
        )
    }
}

export default Deck
// 5