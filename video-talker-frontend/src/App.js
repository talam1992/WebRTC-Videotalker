import './App.css';
import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';

function App () {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <div className='App'>
      Hello Here is React App
    </div>
  );
}

export default App;
