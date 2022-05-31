import React from 'react'

export default function Jokes(props) {
    console.log(props.comments)
    return (
      
      <div>
          
          {/* Passing props usings conditional rendering 
          To easily pass this method first pass the prop using JS curly braces*/}

            {/* <h3>{props.setup}</h3>
            <p>{props.punchline}</p>
            <hr /> */}

            {/* Method 2. pass the props using conditional rendering */}

            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline }</p>

    </div>
  )
}
