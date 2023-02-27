import React, { useEffect } from "react";
import JaySideBar from "@/components/navBar/jaySideBar";
import GetUrlTitle from "@/components/navBar/getUrlTitle";
import JayTopBar from "@/components/navBar/jayTopBar";
import Image from "next/image";

const WorkInProgress = () => {
  const getUrl = GetUrlTitle();

  return (
    <div>
      <div className="main-content">
        <h1>Work in progress</h1>
        <Image
          alt=""
          src="/assets/work-in-progress.png"
          width={256}
          height={256}
        />
      </div>

      <style jsx>{`
        .main-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          gap: 50px;
        }
      `}</style>
    </div>
  );
};

export default WorkInProgress;
