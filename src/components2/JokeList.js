import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'uuid-v4'
import './JokeList.css'
import Joke from './Joke'

class JokeList extends Component {
    // default props
    static defaultProps = {
        numJokesToGet: 10
    }

    constructor(props) {
        super(props);
        this.state = {
          jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
          loading: false
        };
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        console.log(this.seenJokes);
        this.handleClick = this.handleClick.bind(this);
    }

    handleVote(id, delta) {
        this.setState((st) => ({
            jokes: st.jokes.map(j => j.id === id ? { ...j, votes: j.votes + delta } : j)
        }), () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)))
    }

    async getJokes() {
        try {
        // load jokes, using application/json
        let jokes = [];
        while(jokes.length < this.props.numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com", { headers: { Accept: 'application/json' } })
            let newJoke = res.data.joke;
            if(! this.seenJokes.has(newJoke)) {
                jokes.push({ id: uuid(), text: newJoke, votes: 0 })
            } else {
                console.log("FOUND A DUPLICATE!");
                console.log(newJoke)
            }
        }

        this.setState(st => ({
            loading: false,
            jokes: [...st.jokes, ...jokes]
        }), () => window.localStorage.setItem("jokes", JSON.stringify(jokes)))

        window.localStorage.setItem("jokes", JSON.stringify(jokes));
        } catch(e) {
            alert(e)
            this.setState({ loading: false })
        }
    }

    handleClick() {
        this.setState({ loading: true }, this.getJokes)        
    }

    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes();
    }

    render() {
        if(this.state.loading) {
            return (
                <div className="Jokelist-spinner">
                    <i className="far fa-8x fa-laugh fa-spin" />
                    <h1 className="Jokelist-title">Loading...</h1>
                </div>
            )
        }

        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes)

        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className='JokeList-getmore' onClick={this.handleClick}>Fetch Jokes</button>
                </div>
                
                <div className="JokeList-jokes">
                    { jokes.map(joke => (
                        <Joke key={joke.id} votes={joke.votes} text={joke.text} upvote={() => this.handleVote(joke.id, 1)} downvote={() => this.handleVote(joke.id, -1)} />
                    )) }
                </div>
            </div>
        )
    }
}

export default JokeList
// 19 - 12