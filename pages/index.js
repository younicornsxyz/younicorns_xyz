import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/assets/img/logo.png'
import hero from '../public/assets/img/unicorn-hero.png'
import headsLeft from '../public/assets/img/heads-left.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="We are all unicorns, including YOU - to be supporting Crypto this early. We can prove that with the help of Blockchain and NFTs for years to come." />
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
        <meta property="og:description" content="We are all unicorns, including YOU - to be supporting Crypto this early. We can prove that with the help of Blockchain and NFTs for years to come." />
        <meta property="og:image" content="https://www.younicorns.xyz/assets/img/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="younicorns.xyz" />
        <meta property="twitter:url" content="https://www.younicorns.xyz/" />
        <meta name="twitter:title" content="YOUnicorns - A Unicorn NFT Project" />
        <meta name="twitter:description" content="We are all unicorns, including YOU - to be supporting Crypto this early. We can prove that with the help of Blockchain and NFTs for years to come." />
        <meta name="twitter:image" content="https://www.younicorns.xyz/assets/img/social.png" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar navbar - expand - lg navbar - light fixed - top - sm" id="mainNav">
          <div className="container px-5 head-cont">
            <a className="navbar-brand fw-bold" href="https://www.younicorns.xyz">
              <Image src={logo} width="320" height="40" alt="YOUnicorns" />
            </a>
            <div className="link-list">
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://twitter.com/younicorns_nfts" target="_blank" rel="noopener noreferrer">
                <span className="d-flex align-items-center">
                  <i className="bi-twitter me-2"></i>
                  <span className="small">Twitter</span>
                </span>
              </a>
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://discord.gg/d3hYvT3VpV" target="_blank" rel="noopener noreferrer">
                <span className="d-flex align-items-center">
                  <i className="bi-discord me-2"></i>
                  <span className="small">Discord</span>
                </span>
              </a>
              <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover not-active" href="#">
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
                  <p className="lead fw-normal text-muted mb-5">Like unicorns, we all are amazing creatures to be supporting this amazing industry, Crypto. It takes miracles and will to continue to change this world for good - and we are all doing that.</p>
                  <div className="d-flex flex-column flex-lg-row align-items-center">
                    <a className="me-lg-3 mb-4 mb-lg-0 mntwht not-active" href="#!" style={{ textDecoration: "none", border: "1px solid transparent" }}><span className="d-flex align-items-center btn-rounded-fill">
                      <i className="bi-check-circle-fill me-2"></i>
                      <span>Mint</span>
                    </span></a>
                    <a className="me-lg-3 mb-4 mb-lg-0 mntwht hover" href="#whitelist" style={{ textDecoration: "none", border: "1px solid transparent" }}><span className="d-flex align-items-center btn-rounded-no-fill">
                      <span>Whitelist</span>
                    </span></a>
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
                <div className="h2 fs-1 text-white mb-4">
                  <p>“The unicorn is not known for its horn, beauty, or purity; But for its strength and courage as one.”</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className="bg-light">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg-5">
                <h2 className="display-4 lh-1 mb-4">Be a unicorn in a field full of horses</h2>
                <p className="lead fw-normal text-muted mb-4">YOUnicorns is an NFT project that tries to thank the crypto community for being involved in the space this early, supporting it to eventually reach the masses and change the world for good.</p>
                <p className="lead fw-normal text-muted mb-4">This is not an easy job to do, and it is becoming clearer with government bodies banning the use of cryptocurrencies.</p>
                <p className="lead fw-normal text-muted mb-4">It takes strength, courage, and much more to stay around and support this sector, like unicorns. This is why we think you are a unicorn, YOUnicorn.</p>
                <p className="lead fw-normal text-muted mb-4">And this project makes it a fact by holding an YOUnicorn NFT on a blockchain to prove that.</p>
                <p className="lead fw-normal text-muted mb-4">Years from now, you can show that you were one of the few people in the world who cared and worked for the betterment of this world.</p>
              </div>
              <div className="col-sm-8 col-md-6">
                <div className="px-5 px-sm-0"><Image className="Image-fluid" src={hero} alt="We are all unicorns, including you." layout="responsive" /></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-secondary-to-primary" id="download">
          <div className="container px-5 sale-details">
            <h2 className="text-center text-white font-alt mb-0">2200 YOUnicorns</h2><h2 className="text-center text-white font-alt mb-0">0.05 ETH</h2>
            <h2 className="text-center text-white font-alt mb-0">20 MAX BUYS AT A TIME</h2>
          </div>
        </section>
        <section id="features">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0 features-div">
                <div className="container-fluid px-5">
                  <div className="row gx-5">
                    <div className="col-md-6 mb-5">
                      <div className="text-center">
                        <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                        <h3 className="font-alt">Airdrops</h3>
                        <p className="text-muted mb-0">Like magic, we will airdrop tokens and NFTs of our future projects to all YOUnicorns.</p>
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
        <section className="whitelist" style={{ background: "linear-gradient(rgb(255 255 255), rgb(255 255 255 / 67%)), url(assets/img/banner.png);" }}>
          <div className="cta-content">
            <div className="container px-5">
              <h6 className="display-6 lh-1 mb-4" id="whitelist">
                Whitelist here and we will send you a link to sale 5 minutes before it actually happens publicly.
                <br />
              </h6>
              <a className="btn-rounded-no-fill py-3 px-4 mntwht hover" href="http://eepurl.com/hFJBXj" target="_blank" rel="noopener noreferrer">Whitelist</a>
            </div>
          </div>
        </section>
        <section className="bg-gradient-primary-to-secondary" id="download">
          <div className="container px-5">
            <h2 className="text-center text-white font-alt mb-0">Sale starts very soon. Stay tuned.</h2>
          </div>
        </section>
      </main>

      <footer className={styles.footer} style={{ borderTop: "1px solid #dfdfdf" }}>
        <div className="container px-5 foot-cont">
          <div className="disclaimer">
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "bold" }}>Disclaimer:</span> YOUnicorns is not affiliated with Uniswap or any other crypto parties. The project wants to thank every one of you involved with Crypto and helping this sector grow at the much needed pace.
            </p>
          </div>
          <div className="link-list">
            <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://twitter.com/younicorns_nfts" target="_blank" rel="noopener noreferrer">
              <span className="d-flex align-items-center">
                <i className="bi-twitter me-2"></i>
                <span className="small">Twitter</span>
              </span>
            </a>
            <a className="btn rounded-pill px-3 mb-2 mb-lg-0 hover" href="https://discord.gg/d3hYvT3VpV" target="_blank" rel="noopener noreferrer">
              <span className="d-flex align-items-center">
                <i className="bi-discord me-2"></i>
                <span className="small">Discord</span>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
