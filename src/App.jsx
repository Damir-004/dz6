import React from 'react';
import './App.css';
import photo1 from './images/photo1.png';
import photo2 from './images/photo2.png';
import photo3 from './images/photo3.png';
import photo4 from './images/photo4.png';
import photo5 from './images/photo5.png';
import photo6 from './images/photo6.png';
import photo7 from './images/photo7.png';

const App = () => {
  const [num, setNum] = React.useState(photo1);
  const ins = React.useRef();
  function fan(e) {
    console.log(Math.floor(ins.current.scrollTop));
  }

  return (
    <div className='container'>
      <div className='box'>
        <h1>
          Hello!
          <img className='imgBox' src={num} />
          comes in.
        </h1>
      </div>
      <div className='block-images' ref={ins} onScroll={fan}>
        <ul>
          <li>
            <img className='img' src={photo1} alt="" />
          </li>
          <li>
            <img className='img' src={photo2} alt="" />
          </li>
          <li>
            <img className='img' src={photo3} alt="" />
          </li>
          <li>
            <img className='img' src={photo4} alt="" />
          </li>
          <li>
            <img className='img' src={photo5} alt="" />
          </li>
          <li>
            <img className='img' src={photo6} alt="" />
          </li>
          <li>
            <img className='img' src={photo7} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;