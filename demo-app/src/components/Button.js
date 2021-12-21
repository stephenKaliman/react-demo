function Button(props)
{
    /* Takes function through props-- does whatever parent component needs it to do */
    return(
        <button className='button' onClick={props.clickHandler}>{props.text}</button>
    );
}

export default Button;