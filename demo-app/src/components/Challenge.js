function Challenge()
{
    return (
        <div className='chall'> {/* note: since 'class' is a reserved react term, we use className */}
            <h2>Challenge 1</h2>
            <div className='actions'>
                <button className='button'>view</button>
            </div>
        </div>
    );
}

export default Challenge;