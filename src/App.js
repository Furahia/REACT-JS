import './App.css';

import sunset1 from './images/sunset1.jpg'
import sunset2 from './images/sunset2.jpg'
import sunset3 from './images/sunset3.jpg'
import sunset4 from './images/sunset4.jpg'
import sunset5 from './images/sunset5.jpg'
import sunset6 from './images/sunset6.jpg'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Beautiful sunsets</h1>
      </header>
      <div className='photo-grid'>
        <img src={sunset1} alt="" />
        <img src={sunset2} alt="" />
        <img src={sunset3} alt="" />
        <img src={sunset4} alt="" />
        <img src={sunset5} alt="" />
        <img src={sunset6} alt="" />
      </div>
    </div>
  );
}

export default App;
