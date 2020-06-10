import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// anecdote.js



const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [allVotes, setVotes] = useState(Array(props.anecdotes.length).fill(0));

    const getRandomAnecdote = () => {
        setSelected(Math.floor(Math.random() * props.anecdotes.length));
    }

    const voteForAnecdote = () => {
        const copyAllVotes = [...allVotes];
        copyAllVotes[selected] += 1;
        setVotes(copyAllVotes);
    }

    return (
        <div>
            <p>{props.anecdotes[selected]}</p>
            <p> has {allVotes[selected]} votes</p>
            <div>
                <button onClick={voteForAnecdote}>vote</button>
                <button onClick={getRandomAnecdote}>next anecdote</button>
            </div>
        </div>
    );
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))