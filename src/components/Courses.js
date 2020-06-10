import React from "react";

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
    console.log(props);
    return (
        <div>
            <Header header={props.course.name} />
            <Content content={props.course.parts} />
        </div>
    );
}

const Courses = (props) => {
    console.log(props);
    return (
        <div>
            {props.courses.map(course => {
                return (
                    <Course key={course.id} course={course} />
                );
            })}

        </div>
    );
}

export default Courses;