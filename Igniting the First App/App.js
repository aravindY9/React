import React from 'react';
import ReactDOM from 'react-dom/client'
// React.createElement =>  Object => Html Element(render)

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
