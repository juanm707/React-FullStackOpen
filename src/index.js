import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name, age}) => {
    // const {name, age} = props;

    const yearBorn = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old.
            </p>
            <p>
                So you were probably born in {yearBorn()}.
            </p>
        </div>
    );
}

const Display = ({counter}) => <div>{counter}</div>

const Button = (props) => {
    return (
        <button onClick={props.handleClick} style={props.style}>
            {props.text}
        </button>
    );
}

const Part = (props) => {
    return (
        <div>
            <h2>{props.part}</h2>
            <p>{props.exercises}</p>
        </div>
    );
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    );
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
            <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
            <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
        </div>
    );
}

const Total = (props) => {
    let total = 0;
    console.log(props);
    props.total.parts.forEach(value => {
        total = total + value.exercises;
    });

    return (
        <div>
            <p>Total exercises: {total}</p>
        </div>
    );
}

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        );
    }

    return (
      <div>
          button press history: {props.allClicks.join(' ')}
      </div>
    );
}

const App = (props) => {
    // const course = {
    //     name: 'Half Stack application development',
    //     parts: [
    //         {
    //             name: 'Fundamentals of React',
    //             exercises: 10
    //         },
    //         {
    //             name: 'Using props to pass data',
    //             exercises: 7
    //         },
    //         {
    //             name: 'State of a component',
    //             exercises: 14
    //         }
    //     ]
    // }
    //
    // return (
    //     <div>
    //         <Header course={course} />
    //         <Content course={course} />
    //         <Total total={course}/>
    //     </div>
    // );

    // const [counter, setCounter] = useState(0);
    //
    // const increaseByOne = () => setCounter(counter + 1);
    // const setToZero = () => setCounter(0);
    // const decreaseByOne = () => setCounter(counter - 1)

    // const handleClick = () => {
    //     setCounter(counter + 1);
    // }

    // setTimeout(
    //     () => setCounter(counter + 1),
    //     1000
    // )

    // return (
    //     <div>
    //         <Display counter={counter} />
    //         <Button
    //             handleClick={increaseByOne}
    //             style={{backgroundColor: "limegreen"}}
    //             text={"Add One"}
    //         />
    //         <Button
    //             handleClick={setToZero}
    //             style={{backgroundColor: "red"}}
    //             text={"Reset to zero"}
    //         />
    //         <Button
    //             handleClick={decreaseByOne}
    //             style={{backgroundColor: "lightblue"}}
    //             text={"Subtract One"}
    //         />
    //     </div>
    // );

    const[left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1);
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
    }
    
    return (
        <div>
            <div>
                {left}
                <Button
                    handleClick={handleLeftClick}
                    style={{backgroundColor: "yellow"}}
                    text={'left'}
                />
                <Button
                    handleClick={handleRightClick}
                    style={{backgroundColor: "green"}}
                    text={'right'}
                />
                {right}
            </div>
            <div>
                <History allClicks={allClicks} />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))