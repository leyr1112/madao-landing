import "./Artist.css";
import artist1 from "../../assets/artist1.png";
import artist2 from "../../assets/artist2.png";
import artist3 from "../../assets/artist3.png";
import about1 from "../../assets/about1.png"
import about2 from "../../assets/about2.jpeg"
import rm1 from "../../assets/rm1.png"
import rm2 from "../../assets/rm2.png"
import rm3 from "../../assets/rm3.png"


function Team() {
  return (
    <>
      <div id="team">
        <div className="container px-4 py-5">
          <div className="row gx-5 py-5">
            <div className="col-md-4 col-team pt-3">
              <div className="border-class">
                <img className="image-team" src={artist1} alt="" />
                <h2>Treasury Revenue</h2>
                <h3>Bonds & LP fees Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control MADAO supply.</h3>
                <a >
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-4 col-team pt-3">
              <div className="border-class">
                <img className="image-team" src={artist2} alt="" />
                <h2>Treasury Growth</h2>
                <h3>MADAO Treasury Treasury inflow is used to increase Treasury Balance and back outstanding MADAO tokens and regulate staking APY</h3>
                <a >
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-4 col-team pt-3">
              <div className="border-class">
                <img className="image-team" src={artist3} alt="" />
                <h2>Staking Rewards </h2>
                <h3>MADAO Token Compounds yields automatically through a treasury backed currency with intrinsic value</h3>
                <a >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={about1} alt="No pic" />
            </div>
            <div className="col-md-6 about-text mx-auto my-auto p-5">
              <h1>Welcome To Mystic Aliens</h1>
              <h2>About Mystic Aliens</h2>
              <h3>Programmatically and randomly generated on the Binance Smart Chain. Each Alien is unique, made from a combination of more than 50 attributes drawn by hand. A Mystic Alien is both a NFT collectible and a key to enter the spaceship and a lot more.</h3>
              {/* <a href="#Buynft"> <button>Mint Now</button></a> */}
              <a href="https://app.mysticaliens.com/#/nft-mint"><button className="mint-button">Mint Now</button> </a>
            </div>

          </div>
          <div className="row pt-5">

            <div className="col-md-6 about-text mx-auto my- auto p-5">
              <h1>Why Choose Us</h1>
              <h2>NFT Benefits </h2>
              <h3>By owning a Mystic Alien NFT, you will be teleported onto the Spaceship granting you supernatural powers and earning you passive income</h3>
              <div className="d-flex ">
                <div className="icon-sec text-center p-auto m-auto my-auto">
                  <img src={rm1} alt="" />
                </div>
                <div className="icon-textt ">
                  <h1>VIP Access</h1>
                  <h2>First In Line Launchpad Access. Giveaways + Airdrops. </h2>
                </div>
              </div>
              <div className="d-flex ">
                <div className="icon-sec text-center ">
                  <img src={rm2} alt="" />
                </div>
                <div className="icon-textt ">
                  <h1>Passive Income</h1>
                  <h2>Put your NFT to work and earn daily payouts.</h2>
                </div>
              </div>
              <div className="d-flex ">
                <div className="icon-sec text-center ">
                  <img src={rm3} alt="" />
                </div>
                <div className="icon-textt ">
                  <h1>Boosted APY</h1>
                  <h2>Exclusive Boosted APY Staking Access </h2>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={about2} alt="No pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
