import React from 'react';
import ReactDOM from 'react-dom/client'

// original React Element
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


// React.createElement => ReactElement-JS Object => Html Element(render)
//JSX (transpiled before it reaches the JS) - Parcel - Babel

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => render HTML Element

// React Element with JS
const Title =() => <h1 className='head' >Namaste react using JSX</h1>



// React Functional Component and these always start with Captial Letter if you remove the arrow function and simply put the lowercase then it is a react element
const HeadingComponent = () => {
    return (<div>
        <Title/>
        <h1>Namaste React Functional Component</h1> 
        </div>)
}

const HeadingComponent2= () => (
    <h1 className='heading'> Namaste React Functional1 Component</h1>
)

root.render( <HeadingComponent/>)