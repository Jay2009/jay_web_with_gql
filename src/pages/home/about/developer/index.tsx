import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
// import MgUserWholeTable from '../../components/pageComponents/admin/userManage/mgUserWholeTable';
// import { userAuthority } from '../../states/admin/atomAdmin';
import JaySideBar from "@/components/navBar/jaySideBar";
import GetUrlTitle from "@/components/navBar/getUrlTitle";
import JayTopBar from "@/components/navBar/jayTopBar";

const Developer = () => {
  const getUrl = GetUrlTitle();

  return (
    <div className="nav-frame">
      <div className="top-nav">
        <JayTopBar />{" "}
      </div>
      <div className="main-body">
        <JaySideBar />
        <div className="right-main">
          <span className="url-path-txt">{getUrl}</span>
          {/* <MgUserWholeTable /> */}
        </div>
      </div>

      <style jsx>{`
        .top-layer {
          display: flex;
          flex-direction: row;
          height: 35%;
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default Developer;
