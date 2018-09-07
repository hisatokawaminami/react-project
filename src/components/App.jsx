import React from 'react';
import Header from './Header';
import Home from './Home';
import ShowList from './ShowList';
import background from '../assets/images/background.jpg';

function App(){
  return (
    <div className="home">
      <style jsx>{`
          .body {
            background: url(${background})no-repeat top center fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
          `}
      </style>

<div className="body">
      <Header/>
      <Home/>
      <ShowList/>
    </div>
    </div>
  );
}

export default App;
