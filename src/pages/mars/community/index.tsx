import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import JaySideBar from "@/components/navBar/jaySideBar";
import GetUrlTitle from "@/components/navBar/getUrlTitle";
import JayTopBar from "@/components/navBar/jayTopBar";
import MarsCommunityTable from "@/components/tables/marsCommunityTable";

const Community = () => {
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
          <div className="table-area">
            <MarsCommunityTable />
          </div>
        </div>
      </div>

      <style jsx>{`
        .table-area {
          display: flex;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Community;
