import React from 'react';
import './Example.scss';

function Example(props) {
  return (
    <div>
      <p>Example</p>
      <p className='font'>Example</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a>456</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>123</li>
        <li>
          <a>456</a>
        </li>
      </ul>
      <p className='base'>base,</p>
      <p className='inverse'>inverse,</p>
      <p className='info'>info,</p>
      <p className='alert'>alert,</p>
      <p className='success'>success,</p>
      <p className='message'>message,</p>
      <p className='success2'>success2,</p>
      <p className='error'>error,</p>
      <p className='warning'>warning,</p>
      <div className='square-av'></div>
      <div className='circle-av'></div>
      <div className='sidebar'></div>
      <div className='gray'>Grays</div>
      <div className='button'>button</div>
      <div className='pulse'>pulse</div>
    </div>
  );
}

export default Example;
