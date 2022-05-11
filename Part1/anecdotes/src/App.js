import { useState } from "react";

const Headings = ({ headings }) => {
  return <h2>{headings}</h2>;
};

//Button Component
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const AnecdoteDisplayed = ({ text, votesDisplayed }) => {
  return (
    <div>
      {text}
      <br />
      has {votesDisplayed} votes.
    </div>
  );
};

const App = () => {
  //Array of Anecdotes
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  //Hooks
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)); //ensures the array will always be able to handle any number of anecdotes

  //Random Number generated from length of anecdotes array
  const randomNumber = Math.floor(Math.random() * anecdotes.length);

  //Click Handlers
  const anecdoteClick = () => setSelected([randomNumber]);
  const voteClick = () => {
    const newVote = [...votes]; //create copy of votes array to add a new vote
    newVote[selected] += 1; //Adds the new vote to the selected anecdote
    setVotes(newVote); //Uses the newVote array with the newly added vote and replaces the votes so newVotes is now votes
  };

  const mostVotes = Math.max(...votes);
  const mostVoted = anecdotes[votes.indexOf(mostVotes)];

  const titles = {
    dailyAnecdote: "Anecdote of the day",
    winningAnecdote: " Anecdote with the most votes",
  };

  return (
    <div>
      <Headings headings={titles.dailyAnecdote} />
      <AnecdoteDisplayed
        text={anecdotes[selected]}
        votesDisplayed={votes[selected]}
      />

      <Button onClick={voteClick} text="Vote" />
      <Button onClick={anecdoteClick} text="Next Anecdote" />
      <Headings headings={titles.winningAnecdote} />
      <AnecdoteDisplayed text={mostVoted} votesDisplayed={mostVotes} />
    </div>
  );
};

export default App;
