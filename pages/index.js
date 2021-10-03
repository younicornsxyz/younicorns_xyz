import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/assets/img/logo.png'
import hero from '../public/assets/img/unicorn-hero.png'
import quak from '../public/assets/img/quak.png'
import headsLeft from '../public/assets/img/heads-left.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more." />
        <meta name="author" content="YOUnicorns.xyz" />
        <title>YOUnicorns - A Unicorn NFT Project</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />
        <link href="assets/style.css" rel="stylesheet" />
        <meta property="og:url" content="https://www.younicorns.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YOUnicorns - A Unicorn NFT Project" />
        <meta property="og:description" content="YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more." />
        <meta property="og:image" content="https://www.younicorns.xyz/assets/img/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="younicorns.xyz" />
        <meta property="twitter:url" content="https://www.younicorns.xyz/" />
        <meta name="twitter:title" content="YOUnicorns - A Unicorn NFT Project" />
        <meta name="twitter:description" content="YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more." />
        <meta name="twitter:image" content="https://www.younicorns.xyz/assets/img/social.png" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar navbar - expand - lg navbar - light fixed - top - sm" id="mainNav">
          <div className="container px-5 head-cont">
            <a className="navbar-brand fw-bold" href="https://www.younicorns.xyz">
              <Image src={logo} width="320" height="40" alt="YOUnicorns" />
            </a>
            <div className="link-list">
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://opensea.io/collection/younicorns" target="_blank" rel="noopener noreferrer">
                <span className="d-flex align-items-center">
                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 80.001 80.001">
                    <g id="opensea" transform="translate(0 0.001)">
                      <path id="Subtraction_1" data-name="Subtraction 1" d="M-3880-70a39.746,39.746,0,0,1-15.569-3.144,39.87,39.87,0,0,1-12.714-8.573,39.868,39.868,0,0,1-8.573-12.715A39.745,39.745,0,0,1-3920-110a39.748,39.748,0,0,1,3.144-15.57,39.868,39.868,0,0,1,8.573-12.715,39.867,39.867,0,0,1,12.714-8.573A39.746,39.746,0,0,1-3880-150a39.755,39.755,0,0,1,15.572,3.144,39.863,39.863,0,0,1,12.715,8.573,39.865,39.865,0,0,1,8.572,12.715A39.749,39.749,0,0,1-3840-110a39.745,39.745,0,0,1-3.144,15.569,39.867,39.867,0,0,1-8.573,12.715,39.87,39.87,0,0,1-12.715,8.573A39.75,39.75,0,0,1-3880-70Zm-26.173-32.331a.4.4,0,0,0-.4.4v.269a15.091,15.091,0,0,0,15.049,15.1h23.455c4.4,0,6.913-4.038,9.346-7.943.671-1.076,1.364-2.189,2.083-3.189,1.287-1.79,4.381-3.213,5.3-3.607a.418.418,0,0,0,.25-.379v-2.9a.4.4,0,0,0-.4-.4.393.393,0,0,0-.111.016l-13.689,3.957a.39.39,0,0,0-.19.116,36.239,36.239,0,0,1-3.045,3l-.021.018a4.61,4.61,0,0,1-3.014,1.115h-4.956v-5.054h3.939a.423.423,0,0,0,.274-.1l.509-.467c.216-.2.473-.436.785-.749l.08-.079c.166-.165.337-.335.508-.527.174-.169.36-.372.587-.637.318-.343.627-.7.916-1.046a8.852,8.852,0,0,0,.624-.786c.223-.259.439-.551.642-.827.067-.1.137-.2.21-.3l.017-.024c.084-.117.166-.232.249-.352.157-.234.3-.47.421-.68a12.927,12.927,0,0,0,.994-1.886c.126-.272.228-.559.325-.837l0,0,.039-.111a8.513,8.513,0,0,0,.273-.966A7.487,7.487,0,0,0-3865-114.5a4.158,4.158,0,0,0-.091-.7v-.037a2.783,2.783,0,0,0-.107-.494,11.716,11.716,0,0,0-.753-2.233c-.1-.237-.215-.5-.365-.8-.263-.49-.582-1.066-.957-1.632-.068-.108-.144-.22-.218-.328l0-.007c-.056-.082-.12-.175-.179-.266-.22-.338-.466-.665-.7-.98l-.174-.231c-.141-.184-.3-.371-.448-.552-.09-.108-.181-.217-.27-.326-.242-.294-.477-.569-.716-.841-.718-.811-1.533-1.636-2.567-2.6-.137-.137-.3-.285-.475-.439-.647-.589-1.208-1.076-1.669-1.447-.147-.113-.276-.222-.4-.328l0,0c-.076-.064-.148-.125-.218-.182-.148-.11-.276-.208-.383-.289l0,0-.163-.124a.4.4,0,0,0-.12-.06l-.527-.148v-4.364a2.58,2.58,0,0,0-.744-1.817,2.5,2.5,0,0,0-1.8-.754,2.56,2.56,0,0,0-2.543,2.571v2.94l-.264-.074-.716-.2-.652-.181h0l-.007,0-.012,0h-.014l-4.947-1.341a.26.26,0,0,0-.069-.01.257.257,0,0,0-.22.129.254.254,0,0,0,0,.255l.79,1.461c.045.112.1.222.159.339.037.073.077.152.113.23.13.26.259.53.384.8.08.174.2.439.352.735l.132.293.037.081c.208.462.422.938.635,1.456l0,.007,0,.008c.179.427.365.869.526,1.322.468,1.214.882,2.44,1.23,3.643.089.277.158.539.232.816l0,.012c.031.119.063.239.1.36l.051.221c.171.68.288,1.239.37,1.757.08.436.144.8.18,1.175l0,.034c.053.42.108.854.126,1.284.036.4.055.822.055,1.225a12.919,12.919,0,0,1-.31,2.95l-.006.022q-.018.067-.036.134c-.06.225-.123.457-.2.685-.069.245-.16.494-.248.735l-.005.015c-.031.085-.062.17-.094.258l-.011.031c-.071.191-.142.383-.229.571a28.641,28.641,0,0,1-1.614,3.223c-1.055,1.866-1.981,3.221-2.331,3.717-.042.063-.082.122-.121.179l-.008.012c-.035.052-.07.1-.1.151a.409.409,0,0,0-.026.426.4.4,0,0,0,.36.221h6.4v5.054h-6.472a4.624,4.624,0,0,1-4.124-2.562,4.464,4.464,0,0,1-.467-2.511.47.47,0,0,0-.121-.358.409.409,0,0,0-.3-.137Zm17.633-23.886a.4.4,0,0,0-.338.186l-11.707,18.312-.194.3a.39.39,0,0,0-.015.405.4.4,0,0,0,.358.211h12.039a.4.4,0,0,0,.333-.176c.163-.25.311-.5.439-.745a20.282,20.282,0,0,0,2.3-5.034c.944-4.053-1.681-10.6-2.853-13.228A.4.4,0,0,0-3888.541-126.217Z" transform="translate(3920 150)" />
                    </g>
                  </svg>
                  <span className="small">OpenSea</span>
                </span>
              </a>
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
              {/* <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://www.younicorns.xyz/live">
                <span className="d-flex align-items-center">
                  <i className="bi-check-circle-fill me-2"></i>
                  <span className="small">Mint</span>
                </span>
              </a> */}
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">We are all unicorns, including YOU.</h1>
                  <p className="lead fw-normal text-muted mb-5">YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more.</p>
                  {/* <div className="d-flex flex-column flex-lg-row align-items-center">
                    <a className="me-lg-3 mb-4 mb-lg-0 mntwht" href="https://www.younicorns.xyz/live" style={{ textDecoration: "none", border: "1px solid transparent" }}><span className="d-flex align-items-center btn-rounded-fill">
                      <i className="bi-check-circle-fill me-2"></i>
                      <span>Mint</span>
                    </span></a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="quaks bg-light">
          <div className="content container px-5">
            <div className="recent">
              <h3>Recent projects: </h3>
              <p>Only after a week or two of the launch, we&apos;ve given back over $50K to YOUnicorn holders in airdrops and generated revenue.</p>
              <p>For reference, here&apos;s the transaction of the $35K+ revenue share from Quaks project with holders: <span><a href="https://etherscan.io/tx/0xdec7638002b7f108b10fdfb66814c00640bd95a485b0e0c4b9ade42c4424acde">https://etherscan.io/tx/0xdec7638002b7f108b10fdfb66814c00640bd95a485b0e0c4b9ade42c4424acde</a></span></p>
            </div>
            <div className="projects">
              <a href="https://www.quaks.xyz" rel="nofollow noreferrer" target="_blank">
                <div className="project">
                  <Image className="quak-img" src={quak} layout="responsive" alt="Quaks" />
                  <div className="project-details">
                    <p className="p-title">Quaks</p>
                    <p className="p-desc">Quaks is a collection of 6,000 beautiful ducks with proof of ownership on the Ethereum blockchain.</p>
                    <div className="project-socials">

                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <aside className="text-center bg-gradient-primary-to-secondary">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xl-8">
                <div className="h2 fs-1 text-white mb-4">
                  <p>“The unicorn is not known for its horn, beauty, or purity; But for its strength and courage as one.”</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section id="features">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0 features-div">
                <div className="container-fluid px-5">
                  <div className="row gx-5">
                    <div className="col-md-6 mb-5">
                      <div className="text-center">
                        <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                        <h3 className="font-alt">Airdrops and Revenue</h3>
                        <p className="text-muted mb-0">Like magic, we will airdrop tokens and NFTs of our future projects to all YOUnicorns, and will share the revene generated of those projects with holders.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="text-center">
                        <i className="bi-file-earmark-binary icon-feature text-gradient d-block mb-3"></i>
                        <h3 className="font-alt">Alpha</h3>
                        <p className="text-muted mb-0">Like wisdom, we possess the power to share valuable research with you about profitable Cryptocurrency projects and trends. </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                      <div className="text-center">
                        <i className="bi-bell icon-feature text-gradient d-block mb-3"></i>
                        <h3 className="font-alt">Notifications</h3>
                        <p className="text-muted mb-0">Like knowledge, we are aware of all the new and upcoming Crypto projects and trends that we will share with YOUnicorns.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-center">
                        <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                        <h3 className="font-alt">Support</h3>
                        <p className="text-muted mb-0">Like leaders, we will help YOUnicorns in all that you do, leading you in the right direction with much-needed support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-lg-0">
                <div className="features-device-mockup">
                  <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                        <stop className="gradient-start-color" offset="0%"></stop>
                        <stop className="gradient-end-color" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50"></circle></svg><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                  <div className="device-wrapper">
                    <div>
                      <Image src={headsLeft} layout="responsive" alt="YOUnicorns Features" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-white sale" id="download" style={{ borderTop: "1px solid #dfdfdf" }}>
          <div className="container">
            <div className="container px-5 sale-details">
              <h2 className="text-center font-alt mb-0">2200 YOUnicorns</h2><h2 className="text-center font-alt mb-0">0.05 ETH</h2>
              <h2 className="text-center font-alt mb-0">20 MAX BUYS AT A TIME</h2>
            </div>
            <div className="btn-f container d-flex flex-column flex-lg-row justify-content-end">
              <a className="me-lg-3 mb-4 mb-lg-0 mntwht" href="https://www.younicorns.xyz/live" style={{ textDecoration: "none", border: "1px solid transparent" }}><span className="d-flex align-items-center btn-rounded-fill">
                <i className="bi-check-circle-fill me-2"></i>
                <span>Mint</span>
              </span></a>
            </div>
          </div>
        </section> */}
      </main>

      <footer className={styles.footer} style={{ borderTop: "1px solid #dfdfdf" }}>
        <div className="container px-5 foot-cont">
          <div className="disclaimer">
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "bold" }}>Disclaimer:</span> YOUnicorns is not affiliated with Uniswap or any other crypto parties.
            </p>
          </div>
          <div className="link-list">
            <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://opensea.io/collection/younicorns" target="_blank" rel="noopener noreferrer">
              <span className="d-flex align-items-center">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 80.001 80.001">
                  <g id="opensea" transform="translate(0 0.001)">
                    <path id="Subtraction_1" data-name="Subtraction 1" d="M-3880-70a39.746,39.746,0,0,1-15.569-3.144,39.87,39.87,0,0,1-12.714-8.573,39.868,39.868,0,0,1-8.573-12.715A39.745,39.745,0,0,1-3920-110a39.748,39.748,0,0,1,3.144-15.57,39.868,39.868,0,0,1,8.573-12.715,39.867,39.867,0,0,1,12.714-8.573A39.746,39.746,0,0,1-3880-150a39.755,39.755,0,0,1,15.572,3.144,39.863,39.863,0,0,1,12.715,8.573,39.865,39.865,0,0,1,8.572,12.715A39.749,39.749,0,0,1-3840-110a39.745,39.745,0,0,1-3.144,15.569,39.867,39.867,0,0,1-8.573,12.715,39.87,39.87,0,0,1-12.715,8.573A39.75,39.75,0,0,1-3880-70Zm-26.173-32.331a.4.4,0,0,0-.4.4v.269a15.091,15.091,0,0,0,15.049,15.1h23.455c4.4,0,6.913-4.038,9.346-7.943.671-1.076,1.364-2.189,2.083-3.189,1.287-1.79,4.381-3.213,5.3-3.607a.418.418,0,0,0,.25-.379v-2.9a.4.4,0,0,0-.4-.4.393.393,0,0,0-.111.016l-13.689,3.957a.39.39,0,0,0-.19.116,36.239,36.239,0,0,1-3.045,3l-.021.018a4.61,4.61,0,0,1-3.014,1.115h-4.956v-5.054h3.939a.423.423,0,0,0,.274-.1l.509-.467c.216-.2.473-.436.785-.749l.08-.079c.166-.165.337-.335.508-.527.174-.169.36-.372.587-.637.318-.343.627-.7.916-1.046a8.852,8.852,0,0,0,.624-.786c.223-.259.439-.551.642-.827.067-.1.137-.2.21-.3l.017-.024c.084-.117.166-.232.249-.352.157-.234.3-.47.421-.68a12.927,12.927,0,0,0,.994-1.886c.126-.272.228-.559.325-.837l0,0,.039-.111a8.513,8.513,0,0,0,.273-.966A7.487,7.487,0,0,0-3865-114.5a4.158,4.158,0,0,0-.091-.7v-.037a2.783,2.783,0,0,0-.107-.494,11.716,11.716,0,0,0-.753-2.233c-.1-.237-.215-.5-.365-.8-.263-.49-.582-1.066-.957-1.632-.068-.108-.144-.22-.218-.328l0-.007c-.056-.082-.12-.175-.179-.266-.22-.338-.466-.665-.7-.98l-.174-.231c-.141-.184-.3-.371-.448-.552-.09-.108-.181-.217-.27-.326-.242-.294-.477-.569-.716-.841-.718-.811-1.533-1.636-2.567-2.6-.137-.137-.3-.285-.475-.439-.647-.589-1.208-1.076-1.669-1.447-.147-.113-.276-.222-.4-.328l0,0c-.076-.064-.148-.125-.218-.182-.148-.11-.276-.208-.383-.289l0,0-.163-.124a.4.4,0,0,0-.12-.06l-.527-.148v-4.364a2.58,2.58,0,0,0-.744-1.817,2.5,2.5,0,0,0-1.8-.754,2.56,2.56,0,0,0-2.543,2.571v2.94l-.264-.074-.716-.2-.652-.181h0l-.007,0-.012,0h-.014l-4.947-1.341a.26.26,0,0,0-.069-.01.257.257,0,0,0-.22.129.254.254,0,0,0,0,.255l.79,1.461c.045.112.1.222.159.339.037.073.077.152.113.23.13.26.259.53.384.8.08.174.2.439.352.735l.132.293.037.081c.208.462.422.938.635,1.456l0,.007,0,.008c.179.427.365.869.526,1.322.468,1.214.882,2.44,1.23,3.643.089.277.158.539.232.816l0,.012c.031.119.063.239.1.36l.051.221c.171.68.288,1.239.37,1.757.08.436.144.8.18,1.175l0,.034c.053.42.108.854.126,1.284.036.4.055.822.055,1.225a12.919,12.919,0,0,1-.31,2.95l-.006.022q-.018.067-.036.134c-.06.225-.123.457-.2.685-.069.245-.16.494-.248.735l-.005.015c-.031.085-.062.17-.094.258l-.011.031c-.071.191-.142.383-.229.571a28.641,28.641,0,0,1-1.614,3.223c-1.055,1.866-1.981,3.221-2.331,3.717-.042.063-.082.122-.121.179l-.008.012c-.035.052-.07.1-.1.151a.409.409,0,0,0-.026.426.4.4,0,0,0,.36.221h6.4v5.054h-6.472a4.624,4.624,0,0,1-4.124-2.562,4.464,4.464,0,0,1-.467-2.511.47.47,0,0,0-.121-.358.409.409,0,0,0-.3-.137Zm17.633-23.886a.4.4,0,0,0-.338.186l-11.707,18.312-.194.3a.39.39,0,0,0-.015.405.4.4,0,0,0,.358.211h12.039a.4.4,0,0,0,.333-.176c.163-.25.311-.5.439-.745a20.282,20.282,0,0,0,2.3-5.034c.944-4.053-1.681-10.6-2.853-13.228A.4.4,0,0,0-3888.541-126.217Z" transform="translate(3920 150)" />
                  </g>
                </svg>
                <span className="small">OpenSea</span>
              </span>
            </a>
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
    </div>
  )
}
