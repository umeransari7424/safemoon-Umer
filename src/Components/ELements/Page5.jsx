import React from "react";

function Page5() {
  return (
   
      <div className="container-fluid text-center bg">
        <div className="row">
        <div className="col-md-6">
        <div className="about ">
          <span className=" aboutus">Introducing</span> <br />
          <h2 className="text-start about-para">The SafeMoon Exchange</h2> <br />
          <p className="text-start about-para">
          The SafeMoon exchange is a revolutionary new idea that will bring <br /> tokenomics to all of crypto on its platform. We call this Cryptonomics
          </p>
          <button type="button" className="btn btn-outline-light">Coming Soon</button>

        </div>
        </div>
        <div className="col-md-6">
            <div className="phoneimg">
                <img className="phone-img"  src="Assets/safemoonpage5.jpg" alt="safe moon img" />

            </div>
        
        </div>
        </div>
      </div>

  );
}

export default Page5;
