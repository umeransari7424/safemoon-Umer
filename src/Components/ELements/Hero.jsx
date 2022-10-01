import React from "react";
// import Typed from "react-typed"
import BackGroungVideo from "../../Media/Home.mp4";

function Hero() {
  return (
    <div className="hero ">
      <video src={BackGroungVideo} autoPlay loop muted />
     <div className="content p-5">
     <div className="container text-center">
      
 
       
      
      <div className="row">
        <div className="col-md-6">
          {/* <div className="pages1"> */}
            <div className="about ">
              <p
                className="alert alert-warning alert-dismissible dangertext"
                
              >
                <strong>We've Evolved:</strong> Support for V1 SafeMoon has
                been officially closed
              </p>
              <span className="text-start about-para">
                WELCOME TO </span> 
                {/* <b className="safemoon">SAFEMOON</b> <br /> */}
                <span className="text-start safemoon-type"><span
                strings={['SAFEMOON']}
                typeSpeed={40}
            /> </span>
            <span className="text-start about-para">
                Community-driven Innovation for Good
                </span>
              <br />
              <div className="text-start">
                <button
                  type="button"
                  className="btn btn-light herobtn my-2 "
                >
                  <b className="about-para p-2">
                    Consolidate to V2 SafeMoon
                  </b>
                </button>
                <button type="button" className="btn  ">
                  <b className="about-para">Buy V2</b>
                </button>
                <button type="button" className="btn  herobtn2">
                  <b className="about-para">Swap</b>
                </button>
                <button type="button" className="btn  herobtn2">
                  <b className="about-para">Live Chart</b>
                </button>
              </div><br /><br /> <br />
              <h5 className="about-para">
                SafeMoon (SFM) V2 Contract:
              </h5>
            {/* </div> */}
          </div>
        </div>
        <div className="col-md-6 text-center">
          {/* <div className="pages1"> */}
            <div className="google">
              <p className="about-para text-start">
                Out Now: <br />
                <h1>SafeMoon Wallet</h1> <br />
                Get it on: <br />
              </p>
              <div>
                <img
                  src="Assets/google_play.png"
                  width={"30%"}
                  alt="googleplay"
                />
                <img
                  src="Assets/app_store.png"
                  width={"30%"}
                  alt="appstore"
                />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
  </div>
     </div>
      
    </div>
  );
}

export default Hero;
