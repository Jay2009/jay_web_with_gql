import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
// import MgUserWholeTable from '../../components/pageComponents/admin/userManage/mgUserWholeTable';
// import { userAuthority } from '../../states/admin/atomAdmin';
import JaySideBar from "@/components/navBar/jaySideBar";
import GetUrlTitle from "@/components/navBar/getUrlTitle";
import JayTopBar from "@/components/navBar/jayTopBar";
import Image from "next/image";
import WorkInProgress from "@/components/common/workInprogress";

const Jayweb = () => {
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
            <h2>- What you can do in Jay web </h2>
            <p className="fist-paragraph">
              <span>
                - In Jay web, you can do investing training game with &quot;Real
                data&quot;.
              </span>
              <span>
                - Also, there is a communication page that people can shere any
                information about investment and others.
              </span>
            </p>
            <h2>- Some features of Jay web</h2>
            <p className="fist-paragraph">
              <span>
                1. Memory lifecycle dependent backend server which means Jay web
                does not have traditional DB (such as MongoDB, MYSQL...) But,
                Apollo server has a role as backend. Therefore, there are
                advantages and disadvantages.
              </span>
              <span>
                2. Much faster when fetching Open API data to the client because
                of the power of GQL in Aopollo.
              </span>
              <span>
                3. Bcrypt and token are used for little security on user&#39;s
                password.
              </span>
              <span>
                4. My own customizable side bar(with cookies) as a reusable
                component that can be used to other project.
              </span>
              <span>5. react hook form used for input validation check.</span>
            </p>
            <div className="img-wrap">
              <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white" />
              <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
              <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
              <img src="https://img.shields.io/badge/Apollo GraphQL-311C87?style=flat&logo=Apollo GraphQL&logoColor=white" />
              <img src="https://img.shields.io/badge/Recoil-0928FF?style=flat&logo=Atom&logoColor=white" />
              <img src="https://img.shields.io/badge/Apache ECharts-AA344D?style=flat&logo=ApacheECharts&logoColor=white" />
              <img src="https://img.shields.io/badge/Ant Design-0170FE?style=flat&logo=AntDesign&logoColor=white" />
            </div>
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
          justify-content: start;
          align-items: start;
          height: 100%;
          width: 100%;
          text-align: center;
        }
        .fist-paragraph {
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          gap: 40px;
          text-align: start;
        }
        span {
          display: flex;
          white-space: normal;
          width: 900px;
        }
        .img-wrap {
          display: flex;
          margin-top: 20px;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default Jayweb;
