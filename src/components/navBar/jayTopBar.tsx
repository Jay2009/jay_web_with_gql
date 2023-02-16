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
import IconWithImg from "../common/iconWithImg";
import { useQuery } from "@apollo/client";
import { ICurrentUserData } from "@/types/iApollo";
import { currentUserVar, GET_CURRENT_USER } from "@/apollo/cache";
import UserInfoLogout from "./userInfoLogout";

//import { authority } from '../../states/admin/atomAdmin';

//const IconsWithImg = dynamic(() => import('../pageComponents/common/iconsWithImg'));
//const Logo = dynamic(() => import('../pageComponents/common/Logo'));

export default function JayTopBar() {
  const router = useRouter();
  const filteredPath: string[] = router.pathname.split("/", 2);

  const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
  const user = currentUser?.data?.user;
  //console.log(user, "userrrrr inner text");
  const [localStoreUser, setLocalStoreUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("loggedinUser")) {
      currentUserVar(JSON.parse(localStorage.getItem("loggedinUser") || "{}"));
    }
    if (localStorage.getItem("loggedinUser") == null) {
      if (user == null) {
        localStorage.removeItem("loggedinUser");
        currentUserVar(null);
        router.push("/login");
      }
    }
  }, [user]);

  return (
    <nav className="top-main">
      <div className="logo">
        <Link href="/" legacyBehavior>
          <a className="logo-content">
            <Image
              alt=""
              src="/assets/jayLogo.png"
              width={32}
              height={32}
              style={{ borderRadius: "5px" }}
            />
            Jay Web
          </a>
        </Link>
      </div>
      <div className="right-side-menu">
        <Link href="/mars" legacyBehavior>
          <a>
            <IconWithImg
              url={"/assets/mars.png"}
              title="Mars"
              active={filteredPath[1] == "mars" ? true : false}
            />
          </a>
        </Link>
        <Link href="/composition" legacyBehavior>
          <a>
            <IconWithImg
              url={"/assets/earth.png"}
              title="Earth"
              active={filteredPath[1] == "mars/ddd" ? true : false}
            />
          </a>
        </Link>

        <UserInfoLogout />
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
            gap: 20px;
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
