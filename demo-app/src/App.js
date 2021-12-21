import Challenge from './components/Challenge';

function App() {
  return (
    <div>
      <h1>Challenges</h1>
      <div className='chall'> {/* note: since 'class' is a reserved react term, we use className */}
        <h2>Challenge 1</h2>
        <div className='actions'>
          <button className='button'>view</button>
        </div>
      </div>
      <div className='chall'> 
        <h2>Challenge 2</h2>
        <div className='actions'>
          <button className='button'>view</button>
        </div>
      </div>
      <div className='chall'> 
        <h2>Challenge 3</h2>
        <div className='actions'>
          <button className='button'>view</button>
        </div>
      </div>
    </div>
  );
}

export default App;
