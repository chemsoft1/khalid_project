import React from 'react';

const Joke = props => {
       return(
        <div>
            <h3 style= {{display:props.question ? 'block' : 'none', 
            color: !props.question ? 'blue' : 'yellow'}} >
                Question : {props.question}</h3>
            <h3 style= {{display:props.punchLine ? 'block' : 'none', 
            color: !props.question ? 'grey' : 'green'}} >
                Answer: {props.punchLine}</h3> <hr />
        </div>
    )
}

export default Joke;