function Challenge(props)
{
    return (
        <div className='chall'> {/* note: since 'class' is a reserved react term, we use className */}
            <h2>Challenge {props.number}</h2> {/* use variables like this with the curly braces */}
            <div className='actions'>
                <button className='button'>view</button>
            </div>
        </div>
    );
}

export default Challenge;