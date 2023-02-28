import React from "react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import JaySideBar from "@/components/navBar/jaySideBar";
import GetUrlTitle from "@/components/navBar/getUrlTitle";
import JayTopBar from "@/components/navBar/jayTopBar";
import Image from "next/image";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Developer = () => {
  const getUrl = GetUrlTitle();

  return (
    <div className="nav-frame">
      <div className="top-nav">
        <JayTopBar />
      </div>
      <div className="main-body">
        <JaySideBar />
        <div className="right-main">
          <span className="url-path-txt">{getUrl}</span>
          <div className="main-content">
            <Swiper
              id="main"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "800px",
                height: "500px",
              }}
              navigation
              pagination
              spaceBetween={50}
              slidesPerView={1}
              onInit={(swiper) => swiper}
              onSlideChange={(swiper) => {
                swiper.activeIndex;
              }}
            >
              <SwiperSlide>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h3>Check Jay&#39;s other projects</h3>
                  <div className="content-frame">
                    <Image
                      alt=""
                      src="/assets/femco3.png"
                      width={188}
                      height={338}
                      style={{ borderRadius: "10px" }}
                    />
                    <Image
                      alt=""
                      src="/assets/femco1.png"
                      width={188}
                      height={338}
                      style={{ borderRadius: "10px" }}
                    />
                    <Image
                      alt=""
                      src="/assets/femco2.png"
                      width={188}
                      height={338}
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div>
                    Link to <a href="https://jay2009.github.io/famco">Femco</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contact-frame">
                  <h3>Other projects & Contact</h3>

                  <div className="contact-wrap">
                    <div>
                      Github : &nbsp;
                      <a href="https://github.com/Jay2009">
                        https://github.com/Jay2009
                      </a>
                    </div>
                    <div>Email : jaem2009@naver.com</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx>{`
        .top-layer {
          display: flex;
          flex-direction: row;
          height: 35%;
          gap: 20px;
        }
        .main-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          gap: 20px;
          text-align: center;
        }

        .img-wrap {
          width: 800px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .content-frame {
          width: 586px;
          padding: 10px;
          display: flex;
          gap: 10px;
        }
        .contact-frame {
          gap: 150px;
          display: flex;
          flex-direction: column;
        }
        .contact-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }
        a {
          color: skyblue;
        }
        .btn-arrow {
          display: flex;
          opacity: 0.5;
          padding: 10px;
        }
        .empty {
          width: 45px;
          height: 45px;
          padding: 10px;
        }
        .btn-arrow:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

export default Developer;
