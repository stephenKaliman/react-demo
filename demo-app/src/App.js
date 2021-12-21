import Challenge from './components/Challenge';
import Popup from './components/Popup';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>Challenges</h1>
      {/* custom tags have to be capitalized */}
      <Challenge number="1 :)"/>
      <Challenge number="2 :0"/>
      <Challenge number="3 :D"/>
      <Popup />
      <Backdrop />
    </div>
  );
}

export default App;
