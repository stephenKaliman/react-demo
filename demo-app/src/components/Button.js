function Button(props)
{
    function clickHandler()
    {
        console.log("clicked!");
    }

    return(
        <button className='button' onClick={clickHandler}>{props.text}</button>
    );
}

export default Button;