import React from "react";
import{ FaUsers ,FaHandHoldingUsd } from "react-icons/fa";
import {BsWater} from "react-icons/bs";

function Page4() {
  return (
    <div className="container text-center page2-container ">
        
      <div className="row">
       
        <div className="col-md-4">
            <div className="user">
                <div className="user-icon p-4">
                <FaUsers size={"40px"}/>
                </div>
                <div className="p-5">
                    <h4 className="text-start about-para">Community Focused</h4> 
                    <p className="text-start about-para">Community Focused and fair launch. The dev team burned all of their tokens and participated with everyone else.</p>
                </div>

            </div>
        </div>
        <div className="col-md-4">
        <div className="user">
                <div className="user-icon p-4">
                <BsWater size={"40px"}/>
                </div>
                <div className="p-5">
                    <h4 className="text-start about-para">Automatic LP</h4> 
                    <p className="text-start about-para">Every trade contributes towards auto-generating liquidity that goes into multiple pools used by exchanges</p>
                </div>

            </div>
        </div>
        <div className="col-md-4">
        <div className="user">
                <div className="user-icon p-4">
                <FaHandHoldingUsd size={"40px"}/>
                </div>
                <div className="p-5">
                    <h4 className="text-start about-para">RFI Static Rewards</h4> 
                    <p className="text-start about-para">Holders earn passive rewards through static reflection as they watch their balance of SafeMoon grow indefinitely.</p>
                </div>
                </div>
         
        </div>
      </div>
      </div>

  );
}

export default Page4;
