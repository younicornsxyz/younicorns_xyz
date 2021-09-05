import Head from 'next/head';
import logo from '../public/assets/img/logo.png';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Web3 from "web3";
import { useState, useEffect } from 'react';
import { ADDRESS, ABI } from "../config.js"

export default function Mint() {

  async function removeDiv() {
    var notice = document.getElementById('notice');
    notice.style.display = "none";
  }

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_younicorns, set_how_many_younicorns] = useState(1)

  const [younicornContract, setYounicornContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [younicornPrice, setYounicornPrice] = useState(0)

  useEffect(async () => {

    signIn()

  }, [])

  async function signIn() {

    if (typeof window !== "undefined") {
      var msgBox = document.getElementById('notice-msg');
      var notice = document.getElementById('notice');
    }

    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);

    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
          // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
          .then((network) => { console.log(network); if (network != "main") { alert("You are on " + network + " network. Change network to mainnet or you will lose your funds.") } });
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        // console.error(error)
        notice.style.display = "flex";
        msgBox.innerHTML = error.message;
      })
  }

  //

  async function signOut() {
    setSignedIn(false)
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const younicornContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setYounicornContract(younicornContract)

    const salebool = await younicornContract.methods.saleIsActive().call()
    setSaleStarted(salebool)

    const totalSupply = await younicornContract.methods.totalSupply().call()
    setTotalSupply(totalSupply)

    const younicornPrice = await younicornContract.methods.younicornPrice().call()
    setYounicornPrice(younicornPrice)

  }

  async function mintYounicorn(how_many_younicorns) {

    if (typeof window !== "undefined") {
      var msgBox = document.getElementById('notice-msg');
      var notice = document.getElementById('notice');
    }

    if (younicornContract) {

      if (how_many_younicorns <= 20) {

        const price = Number(younicornPrice) * how_many_younicorns

        const gasAmount = await younicornContract.methods.mintYounicorn(how_many_younicorns).estimateGas({ from: walletAddress, value: price })
        console.log("estimated gas", gasAmount)

        console.log({ from: walletAddress, value: price })

        younicornContract.methods
          .mintYounicorn(how_many_younicorns)
          .send({ from: walletAddress, value: price, gas: String(gasAmount), type: '0x2' })
          .on('transactionHash', function (hash) {
            console.log("transactionHash", hash)
          })
          .catch(function (error) {
            notice.style.display = "flex";
            msgBox.innerHTML = error.message;
          });

      } else {
        notice.style.display = "flex";
        msgBox.innerHTML = "Max number of YOUnicorns to mint is 20.";
      }

    } else {
      notice.style.display = "flex";
      msgBox.innerHTML = "Wallet not connected.";
    }

  };

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more." />
        <meta name="author" content="YOUnicorns.xyz" />
        <title>YOUnicorns sale is on</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />
        <link href="assets/style.css" rel="stylesheet" />
        <meta property="og:url" content="https://www.younicorns.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YOUnicorns sale is on" />
        <meta property="og:description" content="YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more." />
        <meta property="og:image" content="https://www.younicorns.xyz/assets/img/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="younicorns.xyz" />
        <meta property="twitter:url" content="https://www.younicorns.xyz/" />
        <meta name="twitter:title" content="YOUnicorns sale is on" />
        <meta name="twitter:description" content="YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more." />
        <meta name="twitter:image" content="https://www.younicorns.xyz/assets/img/social.png" />
      </Head>
      <div className="notice" id="notice">
        <div className="msg-div">
          <p id="notice-msg">Error/ msg.</p>
          <span className="close" id="close" onClick={removeDiv}><i className="bi-x-circle"></i></span>
        </div>
      </div>
      <main className={styles.main}>
        <nav className="navbar navbar - expand - lg navbar - light fixed - top - sm" id="mainNav">
          <div className="container px-5 head-cont">
            <a className="navbar-brand fw-bold" href="https://www.younicorns.xyz">
              <Image src={logo} width="320" height="40" alt="YOUnicorns" />
            </a>
            <div className="link-list">
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://discord.gg/d3hYvT3VpV" target="_blank" rel="noopener noreferrer">
                <span className="d-flex align-items-center">
                  <i className="bi-discord me-2"></i>
                  <span className="small">Discord</span>
                </span>
              </a>
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://twitter.com/younicorns_xyz" target="_blank" rel="noopener noreferrer">
                <span className="d-flex align-items-center">
                  <i className="bi-twitter me-2"></i>
                  <span className="small">Twitter</span>
                </span>
              </a>
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://www.younicorns.xyz/live">
                <span className="d-flex align-items-center">
                  <i className="bi-check-circle-fill me-2"></i>
                  <span className="small">Mint</span>
                </span>
              </a>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">Get your share in YOUniverse</h1>
                  <p className="lead fw-normal text-muted mb-4">Get yourself some YOUnicorns and be a part of the YOUniverse to get airdrops, researches, alerts, revenue or fees generated from products built over time, and more.</p>
                  <p className="lead fw-normal mb-4" style={{ fontWeight: "bold !important" }}>Max number of YOUnicorns you can mint is 20. Going over will cause the transaction to fail.</p>
                  <div className="mint">
                    {!signedIn ? <button onClick={signIn} className="btn px-3 hover wallet" style={{ fontWeight: "bold" }}>Connect Wallet with MetaMask</button>
                      :
                      <button onClick={signOut} className="btn px-3 hover wallet">Wallet Connected: <span style={{ fontWeight: "bold" }}>{walletAddress}</span></button>}
                    <div id="mint" className="lead fw-normal text-muted" style={{ marginBottom: "20px" }}>
                      <span className="want">I want</span>

                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={how_many_younicorns}
                        onChange={e => set_how_many_younicorns(e.target.value)}
                        name=""
                        className="how-many"
                      />
                      <span className="uni">YOUnicorns</span>
                    </div>
                    {saleStarted ?
                      <button onClick={() => mintYounicorn(how_many_younicorns)} className="btn px-3 wallet-mint">Mint {how_many_younicorns} YOUnicorns</button>
                      : <button className="btn px-3 wallet-not-active">Sale is not active yet - or wallet not connected.</button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <aside className="text-center bg-gradient-primary-to-secondary">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xl-8">
                <div className="h2 fs-1 text-white">
                  <p style={{ marginBottom: "0" }}><span className="total-minted">Total YOUnicorns Minted:  <span style={{ fontWeight: "bold", textDecoration: "underline" }}> {!signedIn ? <>-</> : <>{totalSupply}</>} / 2200</span></span></p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <footer className={styles.footer} style={{ borderTop: "1px solid #dfdfdf" }}>
        <div className="container px-5 foot-cont">
          <div className="disclaimer">
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "bold" }}>Disclaimer:</span> YOUnicorns is not affiliated with Uniswap or any other crypto parties.
            </p>
          </div>
          <div className="link-list">
            <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://discord.gg/d3hYvT3VpV" target="_blank" rel="noopener noreferrer">
              <span className="d-flex align-items-center">
                <i className="bi-discord me-2"></i>
                <span className="small">Discord</span>
              </span>
            </a>
            <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://twitter.com/younicorns_xyz" target="_blank" rel="noopener noreferrer">
              <span className="d-flex align-items-center">
                <i className="bi-twitter me-2"></i>
                <span className="small">Twitter</span>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div >
  )
}