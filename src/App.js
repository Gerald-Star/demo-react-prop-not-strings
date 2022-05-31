import React from 'react'
import Jokes from './components/Jokes'


// Challenge: Pass in a prop that is not a string datatype.
//   Eample: I want each Jokes componenet to receive an "upvotes" and "downvotes"
//           prop that is number.
          
//   Also, props with array of customElements,
//     and a boolen of whether the jokes is a pun(isPun) with a value true/false


export default function App() {
  return (
    <div>

      
      {/* we can jump back and forth in
      React by using JS curly vraces sames as in props */}

      <Jokes
        punchline="It's hard to explain puns to light-hearted people."
        isPun={true}
        upvotes={10}
        downvotes={3}
        comments={[{author: "", body: "", title: ""}]}
        
      />

      <Jokes
        setup="I got my daughter a fridge for her birthday"
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}
        
      
      />

      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
      
      />

      <Jokes
        setup="Why don' t pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
      />
      
      <Jokes 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
      
      />
      
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
      
      />


    </div>
  )
}

