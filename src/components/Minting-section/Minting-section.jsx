import { React, useState, useEffect } from "react";
import Web3 from "web3";
import abi from "./abi.json";
import home1 from "../../assets/home-1.png"
import Fade from 'react-reveal/Fade';


import "./Minting-section.css";

require("dotenv").config();
const { REACT_APP_CONTRACT_ADDRESS } = process.env;
const Buy = ({ connecctstatus, setConnectedstatus }) => {
  const [connectedAccount, setConnectedAccount] = useState("CONNECT");
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.05);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  console.log("C", connecctstatus);

  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddress = "0xF3663e13CFefd35d80Ff5c0D177297B6B96a4C8F";
      const ct = new web3.eth.Contract(abi, contractaddress);
      setContract(ct);
      console.log("ct", ct);
      let price = await ct.methods.price().call();
      setContract(ct);
      setPrice(price);
      setPriceInEth(web3.utils.fromWei(price, "ether"));
      const supply = await ct.methods._TOTALSUPPLY().call();
      setTokenSupply(supply);
      const minted = await ct.methods.totalSupply().call();
      setMinted(minted);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function mint() {
    const web3 = window.web3;
    const _value = price * quantity;
    const address = await web3.eth.getAccounts();
    await contract.methods
      .mint(quantity)
      .send({ from: address.toString(), value: _value });
    setMinted(true);
    const totalSupply = await contract.methods.totalSupply().call();
    setTokenSupply(totalSupply);
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      // setConnectedstatus(true);
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <>
      <div id="Buynft" className="Buynft pb-5 pt-5">
        
        <div className="container-fluid p-5 ">
          <div className="row ">
          <Fade left>
            <div className="col-md-6 ">
              <img className="image" src={home1} alt="Pic" />
            </div>
            </Fade>
            <div className="col-md-1">
            </div>
            <Fade right>

            <div className="col-md-5 ">
              <div className="col-md-12 btngroup ">
                <h1 className="mint-heading text-center">Mystic Aliens</h1>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Price</h4>
                    <h4 style={{ color: "white" }} className="float-right ">{priceInEth} ETH</h4>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }} className="pt-2">Quantity(1-3)</h4>

                    <div
                      className="d-flex rounded btngroup "
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        className=" incre-btn m-0 p-0"
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <button type="button" className="btn text-white btn-size">
                        {quantity}
                      </button>
                      <button
                        className=" incre-btn m-0 p-0"
                        onClick={() => {
                          if (quantity < 5) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Total</h4>
                    <h4 style={{ color: "white" }} className="float-right">{supply}</h4>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Minted</h4>
                    <h4 style={{ color: "white" }} className="float-right">{minted}</h4>
                  </div>
                </div>
                <p className="text-center py-5">
                  <button href="#Buynft"
                    className="btn   mint-btn"
                    onClick={async () => {
                      await connectWallet();
                      await mint();
                    }}
                  // disabled
                  >
                    Mint Now
                  </button>
                </p>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buy;
