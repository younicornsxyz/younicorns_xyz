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
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://discord.gg/d3hYvT3VpV" target="_blank" rel="noopener noreferrer">
                <span className="d-flex align-items-center">
                  <i className="bi-discord me-2"></i>
                  <span className="small">Discord</span>
                </span>
              </a>
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://younicorns-xyz.medium.com/" target="_blank" rel="noopener noreferrer">
                <span className="d-flex align-items-center">
                  <i className="bi-megaphone-fill me-2"></i>
                  <span className="small">Medium</span>
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
                  <h1 className="display-1 lh-1 mb-3">We are all unicorns, including YOU.</h1>
                  <p className="lead fw-normal text-muted mb-5">YOUnicorns is a DAO-like NFT project that shares airdrops, resources, research, generated fee or revenue of built projects with holders, and more.</p>
                  <div className="d-flex flex-column flex-lg-row align-items-center">
                    <a className="me-lg-3 mb-4 mb-lg-0 mntwht" href="https://www.younicorns.xyz/live" style={{ textDecoration: "none", border: "1px solid transparent" }}><span className="d-flex align-items-center btn-rounded-fill">
                      <i className="bi-check-circle-fill me-2"></i>
                      <span>Mint</span>
                    </span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="quaks bg-light">
          <div className="content container px-5">
            <div className="recent">
              <h3>Recent projects: </h3>
              <p>Only after a week or two of the launch, we've given back over $50K to YOUnicorn holders in airdrops and generated revenue.</p>
              <p>For reference, here's the transaction of the $35K+ revenue share from Quaks project with holders: <span><a href="https://etherscan.io/tx/0xdec7638002b7f108b10fdfb66814c00640bd95a485b0e0c4b9ade42c4424acde">https://etherscan.io/tx/0xdec7638002b7f108b10fdfb66814c00640bd95a485b0e0c4b9ade42c4424acde</a></span></p>
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
        <section className="bg-white sale" id="download" style={{ borderTop: "1px solid #dfdfdf" }}>
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
        </section>
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
            <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://younicorns-xyz.medium.com/" target="_blank" rel="noopener noreferrer">
              <span className="d-flex align-items-center">
                <i className="bi-megaphone-fill me-2"></i>
                <span className="small">Medium</span>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
