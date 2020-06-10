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

            <p>{props.part} {props.exercises}</p>
        </div>
    );
}

const Header = ({header}) => {
    return (
        <div>
            <h1>{header}</h1>
        </div>
    );
}

// const Content = (props) => {
//     return (
//         <div>
//             <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
//             <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
//             <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
//         </div>
//     );
// }

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

const Statistic = (props) => {
    let percent = props.percent ? '%' : '';
    return (
        <tr>
            <td style={{textAlign: 'left'}}>
                {props.text}
            </td>
            <td style={{textAlign: 'left'}}>
                {props.value}
                {percent}
            </td>
        </tr>
    );
}

const Statistics = (props) => {

    let sum = props.options.reduce((a, b) => {
        return a + b;
    }, 0);

    if (!sum) {
        return (
            <div>
                <h2>
                    statistics
                </h2>
                <p>
                    No feedback given
                </p>
            </div>
        );
    }
    let average = (props.options[0] + (props.options[2] * -1)) / sum;
    let positive = props.options[0] / sum;

    return (
        <div>
            <h2>
                statistics
            </h2>
            <table>
                <tbody>
                    <Statistic text={'good'} value={props.options[0]} percent={0}/>
                    <Statistic text={'neutral'} value={props.options[1]} percent={0}/>
                    <Statistic text={'bad'} value={props.options[2]} percent={0}/>
                    <Statistic text={'all'} value={sum} percent={0}/>
                    <Statistic text={'average'} value={average} percent={0}/>
                    <Statistic text={'positive'} value={positive * 100} percent={1}/>
                </tbody>
            </table>
        </div>
    );
}

const Content = (props) => {
    let nums = props.content.map(part => part.exercises);
    return (
        <div>
            {props.content.map(part =>
                <Part key={part.id} part={part.name} exercises={part.exercises} />
                )
            }
            <p><strong>total of {nums.reduce((a, b) => { return a + b; }, 0)} exercises</strong></p>
        </div>

    );
}

const Course = (props) => {
    return (
        <div>
            <Header header={props.course.name} />
            <Content content={props.course.parts} />
        </div>
    );
}

const App = (props) => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return (<Course course={course} />);

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

    // const[left, setLeft] = useState(0);
    // const [right, setRight] = useState(0);
    // const [allClicks, setAll] = useState([]);
    //
    // const handleLeftClick = () => {
    //     setAll(allClicks.concat('L'));
    //     setLeft(left + 1);
    // }
    //
    // const handleRightClick = () => {
    //     setAll(allClicks.concat('R'));
    //     setRight(right + 1);
    // }
    //
    // return (
    //     <div>
    //         <div>
    //             {left}
    //             <Button
    //                 handleClick={handleLeftClick}
    //                 style={{backgroundColor: "yellow"}}
    //                 text={'left'}
    //             />
    //             <Button
    //                 handleClick={handleRightClick}
    //                 style={{backgroundColor: "green"}}
    //                 text={'right'}
    //             />
    //             {right}
    //         </div>
    //         <div>
    //             <History allClicks={allClicks} />
    //         </div>
    //     </div>
    // );

    // save clicks of each button to own state
    // const [good, setGood] = useState(0);
    // const [neutral, setNeutral] = useState(0);
    // const [bad, setBad] = useState(0);
    //
    // let options = [good, neutral, bad];
    //
    // return (
    //     <div>
    //         <div>
    //             <h1>
    //                 give feedback
    //             </h1>
    //         </div>
    //         <div>
    //             <Button handleClick={() => setGood(good + 1)} text={'good'} style={{backgroundColor: 'limegreen'}}/>
    //             <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
    //             <Button handleClick={() => setBad(bad + 1)} text={'bad'} style={{backgroundColor: 'red'}} />
    //         </div>
    //         <Statistics options={options} />
    //     </div>
    // );

}

ReactDOM.render(<App />, document.getElementById('root'))