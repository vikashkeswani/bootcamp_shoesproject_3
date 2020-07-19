import React from 'react' ;
import footwear from './../images/footwear.jpeg' ;
import './../App.css' ;
function Home(){
    return(
        <div>
            {/* <h1>Welcome to My Home Page</h1> */}
            <img src={footwear} alt="Home Page" className="homePic" />
        </div>
    );
}

export default Home ;