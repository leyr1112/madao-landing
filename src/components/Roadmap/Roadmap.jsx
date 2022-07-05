import { Telegram, Twitter } from "@material-ui/icons";
import "./Roadmap.css";
import { FaDiscord, FaDotCircle } from "react-icons/fa";
import rmp from "../../assets/12.jpeg";
import Counter from "../../Counter";
import { Link, Typography } from "@material-ui/core";
const Roadmap = () => {
  return (
    <>
      <div id="roadmap">
        <div className="container pb-5 pt-5">
          <div className="row">
            <div className="col-md-6 my-auto rm-text">
              <h1>RoadMap</h1>
              <h2>Let's have a look at the future events</h2>
              <div className="row">
                <div className="col-md-6 d-flex ">
                  <div className="icon-div text-center ">
                    <FaDotCircle className="icon" />
                  </div>
                  <div className="icon-text ">
                    <h1>Q 1 - 2022 </h1>
                    <h2>Minting of 2,022 Mystic Aliens NFTs </h2>
                  </div>
                </div>
                <div className="col-md-6 d-flex ">
                  <div className="icon-div text-center ">
                    <FaDotCircle className="icon" />
                  </div>
                  <div className="icon-text ">
                    <br />
                    <h2>Marketing Push To Spread Awareness + Partnerships </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex ">
                  <div className="icon-div text-center ">
                    <FaDotCircle className="icon" />
                  </div>
                  <div className="icon-text ">
                    <br />
                    <h2>MA Dao - Full Launch </h2>
                  </div>
                </div>
                <div className="col-md-6 d-flex ">
                  <div className="icon-div text-center ">
                    <FaDotCircle className="icon" />
                  </div>
                  <div className="icon-text ">
                    <br />
                    <h2>Third Party Audit </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex ">
                  <div className="icon-div text-center ">
                    <FaDotCircle className="icon" />
                  </div>
                  <div className="icon-text ">
                    <br />
                    <h2>$10,000 Giveaway For NFT Holders </h2>
                  </div>
                </div>
                <div className="col-md-6 d-flex ">
                  <div className="icon-div text-center ">
                    <FaDotCircle className="icon" />
                  </div>
                  <div className="icon-text ">
                    <br />
                    <h2>NFT Marketplace + APY Boost</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Counter />
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#030017" }}>
          <div className="col-md-8 mx-auto rm-bottom" style={{ textAlign: "center", display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <Link href="https://t.me/MysticAliens">
                <Telegram className="MuiSvgIcon-fontSizeLarge" />
              </Link>
              <Link href="https://twitter">
                <Twitter className="MuiSvgIcon-fontSizeLarge" />
              </Link>
              <Link href="https://discord">
                <FaDiscord className="MuiSvgIcon-fontSizeLarge" />
              </Link>
            </div>
            <Typography style={{padding: '8px', color: '#9198a6'}}>
              © Copyright 2021-2022, Mystic Aliens. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
