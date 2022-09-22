import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
};


const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      {
      good === 0 && neutral === 0 && bad === 0 ?
      <p>No feedback given</p> : 
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={good + neutral + bad} />
            <Statistic text="average" value={(good - bad) / (good + neutral + bad)} />
          </tbody>
        </table>
      </div>
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}> good </button>
      <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
      <button onClick={() => setBad(bad + 1)}> bad </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
