import React from 'react';
import background from '../assets/images/background.jpg';

function Footer(){
  return (
    <div className="background">
      <style jsx>{`
          body {
            background: url(${background})no-repeat top center fixed;
            background-size: cover;
            margin-top: 100p;
            padding: 0;
            height: 100%;
            width: 100%;
            display: flex;
    flex-direction: column;

          }
          .footer {background-color: #368163;

 position: sticky;
 height: 3em;
 width:100%;
 flex: 1 0 auto;
   padding: var( — space) var( — space) 0;
   width: 100%;
   margin-top: 500px;
          }
          `}
      </style>
      <body className="body">
        <div className="footer">
          <p>
            THE CENTRAL SALOON &diams;
            207 1ST AVE SOUTH SEATTLE, WA &diams;
            (206) 622-0209 &diams;
            OPEN 11AM-2AM DAILY
          </p>



        </div>
      </body>
    </div>
  );
}

export default Footer;