function Popup(props) {
    return(
        <div className='popup'>
            <p>Challenge description blah blah blah</p>
            <button className='button btn--alt' onClick={props.close}>Close</button>
            <button className='button'>Submit</button>
        </div>
    );
}

export default Popup;