import React from "react";
import {SiDiscord} from "react-icons/si";
import {AiFillFacebook ,AiFillTwitterSquare,AiFillInstagram,AiFillLinkedin,AiFillYoutube,AiFillRedditCircle} from "react-icons/ai";



function Footer() {
  return (
    <div className="container-fluid text-center page2-container">
      <div className="row">
        <div className="col-md-8">
          <div className="footer m-5">
            
              <img
                className=" safmoon-image"
                src="Assets/safemoon.png"
                width={"70px"}
                alt="safemoon logo"
              />

           
            <div className="p-4">
              <h2 className="text-start about-para">
                SafeMoon - Innovating for Good
              </h2>
              <p className="text-start about-para">
                Building blockchain, commerce, metaverse and NFT products to
                derive new <br /> kinds of value from crypto technology and to
                apply it to increasingly better <br /> use. Advancing our
                innovations to every part of the world. <br />   
              </p><br />
              <div className="text-start">
              
              <SiDiscord size={"8%"} color={"#21bbb3 "}/> <AiFillFacebook size={"8%"} color={"#21bbb3 "}/>
              <AiFillTwitterSquare size={"8%"} color={"#21bbb3 "}/> <AiFillInstagram size={"8%"} color={"#21bbb3 "}/>
              <AiFillLinkedin size={"8%"} color={"#21bbb3 "}/>
              <AiFillYoutube size={"8%"} color={"#21bbb3 "}/> <AiFillRedditCircle size={"8%"} color={"#21bbb3 "}/></div>
           
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="wallet">
          <ul className="list-unstyled">
                <li className="wallet-para " >Wallet Tracker</li>
                <li className="wallet-para">Branding</li>
                <li className="wallet-para">White Paper</li>
                <li className="wallet-para">Contract</li>
                <li className="wallet-para">Status</li>
                <li className="wallet-para">SafeMoon Card</li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="wallet2">
            <ul className="list-unstyled">
                <li className="wallet-para " >List a Token</li>
                <li className="wallet-para">List a Token</li>
                <li className="wallet-para">Careers</li>
                <li className="wallet-para">Education</li>
                <li className="wallet-para">Wallpaper</li>
            </ul>
           
          </div>
        </div>
       <div className="my-3">
        <button className="btn btn-dark footerbtn my-2">Term of Use</button> &nbsp;
        <button className="btn btn-dark footerbtn my-2">Privacy Policy</button> &nbsp;
        <button className="btn btn-dark footerbtn my-2">Cookie Policy</button> &nbsp;
        <button className="btn btn-dark footerbtn my-2">Wellet EULA</button> &nbsp;
        <button className="btn btn-dark footerbtn my-2">Wallet Privacy</button> &nbsp;
        <button className="btn btn-dark footerbtn my-2">Disclaimer</button> &nbsp;
        <button className="btn btn-dark footerbtn my-2">FAQ</button> &nbsp;
        <button className="btn btn-dark footerbtn my-2">Our Partners</button> &nbsp;
        </div>
        <p className="about-para">Copyright © 2022 SafeMoon US LLC | All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
