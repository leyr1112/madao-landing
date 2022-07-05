
import "./home.css";
import home1 from "../../assets/home-1.png"

import card1 from "../../assets/11.jpeg"
import card2 from "../../assets/12.jpeg"
import card3 from "../../assets/13.jpeg"
import card4 from "../../assets/14.png"
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <>

      <div id="home" className="container-fluid">
        <div className="row p-5">
          <div className="col-md-1"></div>
          <Fade left>
            <div className="col-md-5 mx-auto mastermind-text ">
              <h1>
                Greetings, Mortal Being.<span> Mystic Aliens</span> Have Arived
              </h1>
              <p>
                For decades, humans have researched and wondered about life beyond Earth. The search is finally over, 2022 Mystic Aliens have landed and they brought a spaceship full of otherworldly treasures – you too can reap the rewards of the Mystic Aliens one of a kind staking + DAO Protocol. APY that is out of this world, literally.
              </p>
              {/* <button className="mint-button">                
                Mint Now
              </button> */}
              <a href="https://app.mysticaliens.com/#/nft-mint"><button className="mint-button">Mint Now</button> </a>
              <button className="eth-button">
                BSC
              </button>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-6 mx-auto mastermind">
              <img src={home1} alt=" No Pic" />
            </div>
          </Fade>
        </div>

      </div>
      <div className="container-fluid">
        <Fade bottom>
          <div className="row">
            <div className="col-md-3 pt-3">
              <img src={card1} />
            </div>
            <div className="col-md-3 pt-3">
              <img src={card2} />
            </div>
            <div className="col-md-3 pt-3">
              <img src={card3} />
            </div>
            <div className="col-md-3 pt-3">
              <img src={card4} />
            </div>
          </div>
        
        <div className="row">
          <div className="col-md-8 card-head mx-auto">
            <h1>Mystic Aliens DAO + NFT Platform <br /> How It All Works </h1>
          </div>

        </div>
        </Fade>
      </div>
    </>
  );
}
export default Home;
