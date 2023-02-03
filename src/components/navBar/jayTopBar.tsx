import { Layout, Menu, Breadcrumb } from "antd";

import Link from "next/link";
// import Logo from '../pageComponents/common/Logo';
import { useRouter } from "next/router";
// import IconItSelf from '../pageComponents/common/IconItSelf';
import { useEffect, useState } from "react";
// import { UserInfo } from './';
import IconItSelf from "../common/iconItSelf";
import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";
import Image from "next/image";
//import { authority } from '../../states/admin/atomAdmin';

//const IconsWithImg = dynamic(() => import('../pageComponents/common/iconsWithImg'));
//const Logo = dynamic(() => import('../pageComponents/common/Logo'));

export default function JayTopBar() {
  const router = useRouter();
  const filteredPath: string[] = router.pathname.split("/", 2);

  useEffect(() => {}, []);

  return (
    <nav className="top-main">
      <div className="logo">
      <Link href="/" legacyBehavior>
          <a className="logo-content">
          <Image alt="" src="/assets/jayLogo.png" width={32} height={32} style={{borderRadius: "5px"}}/>
          Jay Web
          </a>
        </Link>
        
      </div>
      <div className="right-side-menu">
        <Link href="/home" legacyBehavior>
          <a>
            <IconItSelf url={"/assets/community.png"} title={"TestPage1"} />
          </a>
        </Link>
        <Link href="/composition" legacyBehavior>
          <a>
            <IconItSelf url={"/assets/about.png"} title={"TestPage2"} />
          </a>
        </Link>

        {/* <UserInfo /> */}
      </div>
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: white;
          }
          .top-main {
            height: 100%;
            display: flex;
            align-items: center;
            background: linear-gradient(to left, #071528, #0b1d35);
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 25);
            justify-content: space-between;
          }
          .right-side-menu {
            display: flex;
            gap: 40px;
            margin-right: 40px;
          }
          .logo {
            margin-left: 20px;
          }
          .logo-content {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }
        `}
      </style>
    </nav>
  );
}
