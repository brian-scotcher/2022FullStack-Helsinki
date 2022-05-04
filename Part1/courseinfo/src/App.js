import React from "react";

const Header = (props) => {
  console.log(props.course);
  return <h1>{props.course.name}</h1>;
};

const Content = ({part1, part2, part3}) => {
  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return <p>Number of exercises {props.total}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  );
};

export default App;
