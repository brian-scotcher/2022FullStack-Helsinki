import { useState } from 'react'

const Title = ({titles}) => {
  return<h2>{titles}</h2>  
}

const DisplayFeedback = ({ good, neutral, bad}) => {
  
  return (
    <div>
    Good: {good} <br/>
    Neutral: {neutral} <br/>
    Bad: {bad}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const titles = {
    feedback: 'Give Feedback',
    stats: 'Statistics'
  }

  const setToGood = newValue => {
    console.log('Good Responses', newValue)
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    console.log('Neutral Responses', newValue)
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    console.log('Bad Responses', newValue)
    setBad(newValue)
  }

  

  return (
    <div>
      <Title titles={titles.feedback} />
      <Button handleClick={() => setToGood(good +1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral +1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad +1)} text="Bad" />

      <Title titles={titles.stats} />
      <DisplayFeedback
      good={good}
      neutral={neutral}
      bad={bad}
      />

    </div>
  )
}

export default App