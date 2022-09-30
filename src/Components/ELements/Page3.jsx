import React from "react";
import { FaCat } from "react-icons/fa";

function Page3() {
  return (
    
      <div className="container text-center page2-container pt-3">
        <br /><br /><br />
        <div className="row">
          <div className="col-md-6">
          <div className="pages">
            <div className="about ">
              <span className=" aboutus">The Token</span> <br />
              <h2 className="text-start about-para">
                The SafeMoon Protocol V2 is a community focused DeFi token that
                forms part of the expanding SafeMoon ecosystem.
              </h2>
              <p className="text-start about-para">
                Four simple functions occur during each trade
              </p>
              <br />
              <ul>
                <div className="cat-list" data-aos="fade-up">
                  <div>
                    <FaCat color="#21bbb3" size={"60px"} />
                  </div> &nbsp;
                  <div>
                    <li className="text-start list-para">                   
                      <b>
                        Reflection <br /> 4% is Redistributed to all existing
                        holders
                      </b>
                    </li>
                  </div>
                </div>
                <br />

                <div className="cat-list" data-aos="fade-up">
                  <div>
                    <FaCat color="#21bbb3" size={"60px"} />
                  </div>&nbsp;
                  
                  <div>
                    <li className="text-start list-para">                   
                      <b>
                      LP Acquisition <br /> 
                            3% is added to liquidity
                      </b>
                    </li>
                  </div>
                </div><br />

                <div className="cat-list" data-aos="fade-up">
                  <div>
                    <FaCat color="#21bbb3" size={"60px"} />
                  </div>&nbsp;
                  <div>
                    <li className="text-start list-para">                   
                      <b>
                      Token Burn <br /> 2% of tokens are burned
                      </b>
                    </li>
                  </div>
                </div><br />

                <div className="cat-list" data-aos="fade-up">
                  <div>
                    <FaCat color="#21bbb3" size={"60px"} />
                  </div>&nbsp;
                  <div>
                    <li className="text-start list-para">                   
                      <b>
                      Growth Fund <br /> 1% is added to the SafeMoon Ecosystem Growth Fund
                      </b>
                    </li>
                  </div>
                </div>
                </ul>   





            </div>
          </div>
          </div>
          <div class="col-md-6">
          <div className="pages">
            <div className="astronautimg">
                <img className="img" width={"400px"} src="Assets/safemoonpage3.jpg" alt="safe moon img" />

            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
