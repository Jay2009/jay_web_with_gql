import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useEffect, useState } from "react";
// import MgUserWholeTable from '../../components/pageComponents/admin/userManage/mgUserWholeTable';
// import { userAuthority } from '../../states/admin/atomAdmin';
import JaySideBar from "@/components/navBar/jaySideBar";
import GetUrlTitle from "@/components/navBar/getUrlTitle";
import JayTopBar from "@/components/navBar/jayTopBar";
import Image from "next/image";

const Developer = () => {
  const getUrl = GetUrlTitle();
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const handleToRight = () => {
    setIsArrowClicked(true);
  };
  const handleToLeft = () => {
    setIsArrowClicked(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            <h3>Check Jay&#39;s other projects</h3>
            <div className="img-wrap">
              <div className="btn-arrow empty"></div>
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
              <div className="btn-arrow first" onClick={handleToRight}>
                <Image
                  alt=""
                  src="/assets/right-big-arrow.png"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div>
              Link to <a href="https://jay2009.github.io/famco">Femco</a>
            </div>
          </div>
          <div className="main-content ">
            <h3>Other projects & Contact</h3>
            <div className="img-wrap">
              <div className="btn-arrow" onClick={handleToLeft}>
                <Image
                  alt=""
                  src="/assets/left-big-arrow.png"
                  width={45}
                  height={45}
                />
              </div>
              <div>
                Github : &nbsp;
                <a href="https://github.com/Jay2009">
                  https://github.com/Jay2009
                </a>
              </div>

              <div className="btn-arrow empty"></div>
            </div>
            <div>Email : jaem2009@naver.com</div>
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
          gap: 20px;
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
          display: flex;
          gap: 10px;
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
