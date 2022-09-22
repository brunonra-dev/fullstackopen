import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })

  return (
    <div>
      {props.anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <button onClick={() => {
        const copy = {...votes}
        copy[selected] += 1
        setVotes(copy)
      }}>
        vote
      </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))}> next anecdote </button>

      <h1>anecdote with most votes:</h1>
      {props.anecdotes[Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b)]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);