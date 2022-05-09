import { useState } from "react";

const Title = ({ titles }) => {
  return <h2>{titles}</h2>;
};

//Component for each individual statistic
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const noVotes = "No feedback given";

  //constants for stats
  const totalVotes = good + neutral + bad; //toal number of votes
  const averageVotes = (good - bad) / totalVotes; //average number of votes between +1 and -1
  const positivePercentage = (good / totalVotes) * 100 + "%"; //Percentage of positive votes

  if (totalVotes === 0) {
    return <div>{noVotes}</div>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good: " value={good} />
          <StatisticLine text="Neutral: " value={neutral} />
          <StatisticLine text="Bad: " value={bad} />
          <StatisticLine text="Total: " value={totalVotes} />
          <StatisticLine text="Average: " value={averageVotes} />
          <StatisticLine text="Positive: " value={positivePercentage} />
        </tbody>
      </table>
    );
  }
};

//Button Component
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Click Handlers
  const goodClick = () => setGood(good + 1);
  const neutralClick = () => setNeutral(neutral + 1);
  const badClick = () => setBad(bad + 1);

  const titles = {
    feedback: "Give Feedback",
    stats: "Statistics",
  };

  return (
    <div>
      <Title titles={titles.feedback} />
      <Button onClick={goodClick} text="Good" />
      <Button onClick={neutralClick} text="Neutral" />
      <Button onClick={badClick} text="Bad" />

      <Title titles={titles.stats} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
