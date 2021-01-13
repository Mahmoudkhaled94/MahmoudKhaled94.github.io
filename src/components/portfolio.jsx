import React from "react";
// hyde
import hyde from "../img/work/hyde.jpg";
import hyde1 from "../img/work/hyde1.jpg";
import hyde2 from "../img/work/hyde2.jpg";
import hyde3 from "../img/work/hyde3.jpg";
import hyde4 from "../img/work/hyde4.jpg";
import hyde5 from "../img/work/hyde5.jpg";
import hyde6 from "../img/work/hyde6.jpg";

// palm
import palm from "../img/work/palm.png";
import palm1 from "../img/work/palm1.png";
import palm2 from "../img/work/palm2.png";
import palm3 from "../img/work/palm3.png";
import palm4 from "../img/work/palm4.png";
import palm5 from "../img/work/palm5.png";
import palm6 from "../img/work/palm6.png";

// sodic
import sodic from "../img/work/sodic.png";
import sodic1 from "../img/work/sodic1.png";
import sodic2 from "../img/work/sodic2.png";
import sodic3 from "../img/work/sodic3.png";

// almaza
import almaza from "../img/work/almaza.png";
import almaza1 from "../img/work/almaza1.png";
import almaza2 from "../img/work/almaza2.png";
import almaza3 from "../img/work/almaza3.png";
import almaza4 from "../img/work/almaza4.png";

// jinni
import jinni from "../img/work/jinni.png";
import jinni1 from "../img/work/jinni1.png";
import jinni2 from "../img/work/jinni2.png";
import jinni3 from "../img/work/jinni3.png";

// hap
import hap from "../img/work/hap.png";
import hap1 from "../img/work/hap1.png";
import hap2 from "../img/work/hap2.png";
import hap3 from "../img/work/hap3.png";
import hap4 from "../img/work/hap4.png";
import hap5 from "../img/work/hap5.png";

// sodic Web
import sodicW from "../img/work/sodicW.png";
import sodicW1 from "../img/work/sodicW1.png";
import sodicW2 from "../img/work/sodicW2.png";
import sodicW3 from "../img/work/sodicW3.png";
import sodicW4 from "../img/work/sodicW4.png";

// Paymob
import paymob from "../img/work/paymob.png";
import paymob1 from "../img/work/paymob1.png";
import paymob2 from "../img/work/paymob2.png";
import paymob3 from "../img/work/paymob3.png";
import paymob4 from "../img/work/paymob4.png";
import paymob5 from "../img/work/paymob5.png";

// APS
import aps from "../img/work/aps.png";
import aps1 from "../img/work/aps1.png";
import aps2 from "../img/work/aps2.png";
import aps3 from "../img/work/aps3.png";

// Filey
import filey from "../img/work/filey.png";
import filey1 from "../img/work/filey1.png";
import filey2 from "../img/work/filey2.png";
import filey3 from "../img/work/filey3.png";
import filey4 from "../img/work/filey4.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  This are some of the project that i'v done.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={hyde} data-lightbox="gallery-hyde">
                  <div className="work-img">
                    <img src={hyde} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Hyde Park</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          lumen MySQL ReactJS ReactNative.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://play.google.com/store/apps/details?id=com.kijamii.hydepark'>
                          <span className="ion-social-android"></span>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://apps.apple.com/us/app/hyde-park-community/id1464522488'>
                          <span className="ion-social-apple"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={hyde1}
                  data-lightbox="gallery-hyde"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hyde2}
                  data-lightbox="gallery-hyde"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hyde3}
                  data-lightbox="gallery-hyde"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hyde4}
                  data-lightbox="gallery-hyde"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hyde5}
                  data-lightbox="gallery-hyde"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hyde6}
                  data-lightbox="gallery-hyde"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={sodic} data-lightbox="gallery-sodic">
                  <div className="work-img">
                    <img src={sodic} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">SODIC Mobile App</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          lumen MySQL ReactJS ReactNative.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://play.google.com/store/apps/details?id=com.kijamii.hydepark' >
                          <span className="ion-social-android"></span>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://apps.apple.com/us/app/sodic-app/id1390362823#?platform=iphone' >
                          <span className="ion-social-apple"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={sodic1}
                  data-lightbox="gallery-sodic"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sodic2}
                  data-lightbox="gallery-sodic"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sodic3}
                  data-lightbox="gallery-sodic"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={jinni} data-lightbox="gallery-jinni">
                  <div className="work-img">
                    <img src={jinni} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Jinni APP</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          lumen MySQL ReactJS ReactNative.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://play.google.com/store/apps/details?id=com.jinni&hl=en&gl=US'>
                          <span className="ion-social-android"></span>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://apps.apple.com/eg/app/jinni-services/id1450754451'>
                          <span className="ion-social-apple"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={jinni1}
                  data-lightbox="gallery-jinni"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={jinni2}
                  data-lightbox="gallery-jinni"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={jinni3}
                  data-lightbox="gallery-jinni"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={filey} data-lightbox="gallery-filey">
                  <div className="work-img">
                    <img src={filey} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Filey APP</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          lumen MySQL ReactJS ReactNative.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://play.google.com/store/apps/details?id=com.kijamii.filey&hl=en&gl=US'>
                          <span className="ion-social-android"></span>
                        </a>
                      </div>
                    </div>
                    {/* <div className="col-sm-2">
                      <div className="w-like">
                        <a target="_blank" href='https://apps.apple.com/us/app/filey/id1354645184'>
                          <span className="ion-social-apple"></span>
                        </a>
                      </div>
                    </div> */}

                  </div>
                </div>
                <a
                  href={filey1}
                  data-lightbox="gallery-filey"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={filey2}
                  data-lightbox="gallery-filey"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={filey3}
                  data-lightbox="gallery-filey"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={filey4}
                  data-lightbox="gallery-filey"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={palm} data-lightbox="gallery-palm">
                  <div className="work-img">
                    <img src={palm} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">
                        PalmHills
                        </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          PHP MySQL ReactJS NextJS.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://www.palmhillsdevelopments.com/" target="_blank">
                          <span className="ion-android-open"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={palm1}
                  data-lightbox="gallery-palm"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={palm2}
                  data-lightbox="gallery-palm"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={palm3}
                  data-lightbox="gallery-palm"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={palm4}
                  data-lightbox="gallery-palm"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={palm5}
                  data-lightbox="gallery-palm"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={palm6}
                  data-lightbox="gallery-palm"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={almaza} data-lightbox="gallery-almaza">
                  <div className="work-img">
                    <img src={almaza} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Almaza Bay Website</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          PHP MySQL HTML5 jquery.
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://almazabay.com/" target="_blank">
                          <span className="ion-android-open"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={almaza1}
                  data-lightbox="gallery-almaza"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={almaza2}
                  data-lightbox="gallery-almaza"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={almaza3}
                  data-lightbox="gallery-almaza"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={almaza4}
                  data-lightbox="gallery-almaza"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={hap} data-lightbox="gallery-hap">
                  <div className="work-img">
                    <img src={hap} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">HAP</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          PHP MySQL HTML5 jquery.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://hap.com.eg/" target="_blank">
                          <span className="ion-android-open"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={hap1}
                  data-lightbox="gallery-hap"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hap2}
                  data-lightbox="gallery-hap"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hap3}
                  data-lightbox="gallery-hap"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hap4}
                  data-lightbox="gallery-hap"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hap5}
                  data-lightbox="gallery-hap"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={sodicW} data-lightbox="gallery-sodicW">
                  <div className="work-img">
                    <img src={sodicW} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">SODIC Website </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          lumen MySQL ReactJS NextJS.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://sodic.wmca.cloud/" target="_blank">
                          <span className="ion-android-open"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={sodicW1}
                  data-lightbox="gallery-sodicW"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sodicW2}
                  data-lightbox="gallery-sodicW"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sodicW3}
                  data-lightbox="gallery-sodicW"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sodicW4}
                  data-lightbox="gallery-sodicW"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={paymob} data-lightbox="gallery-paymob">
                  <div className="work-img">
                    <img src={paymob} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Paymob</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          lumen MySQL ReactJS NextJS.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://paymob.com/" target="_blank">
                          <span className="ion-android-open"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={paymob1}
                  data-lightbox="gallery-paymob"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={paymob2}
                  data-lightbox="gallery-paymob"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={paymob3}
                  data-lightbox="gallery-paymob"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={paymob4}
                  data-lightbox="gallery-paymob"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={paymob5}
                  data-lightbox="gallery-paymob"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={aps} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={aps} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">APS</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          lumen MySQL ReactJS NextJS.
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://aps.aucegypt.edu/en" target="_blank">
                          <span className="ion-android-open"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={aps1}
                  data-lightbox="gallery-aps"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aps2}
                  data-lightbox="gallery-aps"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aps3}
                  data-lightbox="gallery-aps"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
