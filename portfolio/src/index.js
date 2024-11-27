import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //crating a parallel event that accesses the element root
root.render(
  <> {/* when we render in react everything must be under same parent tag */}
    <App/>
</>
); //renders the element in root and displays it using html in the react file

