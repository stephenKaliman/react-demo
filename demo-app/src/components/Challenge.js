import Button from "./Button.js";

function Challenge(props)
{
    function viewHandler()
    {
        console.log("Challenge "+props.number+" viewed!"); 
        /* Note: you don't need the curly braces for props.number for string concat! */
    }
    /* Note: you don't need to pass props to the viewHandler, since anything in here can access it */

    return (
        <div className='chall'> {/* note: since 'class' is a reserved react term, we use className */}
            <h2>Challenge {props.number}</h2> {/* use variables like this with the curly braces */}
            <div className='actions'>
                <Button text="view" clickHandler={viewHandler}/> 
                {/* Note: multiple props aren't separated by commas, just spaces! */}
            </div>
        </div>
    );
}

export default Challenge;