import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import IconItSelf from "../common/iconItSelf";

interface ISubLinkObj {
  link: string;
  path: string;
  imgUrl: string;
}
interface ICustomSubObj extends Array<ISubLinkObj> {}

interface IWholeLinkObj {
  link: string;
  path: string;
  imgUrl: string;
  subMenu?: ICustomSubObj;
}
interface ICustomObj extends Array<IWholeLinkObj> {}

let links: ICustomObj = [];
const COOKIE_KEY = "collapse";

let stringBool = "";

const JaySideBar = () => {
  const router = useRouter();
  const filteredPath = router.pathname.split("/", 3);
  console.log(filteredPath[1], "psthhh");

  const [isCollapsed, setIsCollapsed, removeCookie] = useCookies([COOKIE_KEY]);
  const [isSubClicked, setIsSubClicked] = useState(true);

  const handleReload = <T extends Event>(e: T) => {
    stringBool = "";
    e.preventDefault();
    removeCookie(COOKIE_KEY);
  };

  useEffect(() => {
    if (isCollapsed[COOKIE_KEY]) {
      // window.addEventListener("load", handleReload);
      window.addEventListener("unload", handleReload);
    }
  }, [isCollapsed[COOKIE_KEY]]);

  const onSlider = () => {
    let myBool = isCollapsed?.collapse?.toLowerCase() === "true";
    myBool = !myBool;
    stringBool = myBool.toString();
    if (stringBool == "false") {
      removeCookie(COOKIE_KEY);
    } else {
      setIsCollapsed(COOKIE_KEY, stringBool);
    }
  };

  const onSubMenuClick = () => {
    setIsSubClicked(!isSubClicked);
  };

  if (filteredPath[1] == "mars") {
    links = [
      {
        link: "Main",
        path: "/mars",
        imgUrl: "/assets/main-page.png",
      },
      {
        link: "Community",
        path: "/mars/community",
        imgUrl: "/assets/community.png",
      },
      {
        link: "About",
        path: "/mars/about/jayWeb",
        imgUrl: "/assets/about.png",
        subMenu: [
          {
            link: "JayWeb",
            path: "/mars/about/jayWeb",
            imgUrl: "/assets/browser.png",
          },
          {
            link: "Developer",
            path: "/mars/about/developer",
            imgUrl: "/assets/developer.png",
          },
        ],
      },
    ];
  }

  // if (filteredPath[1] == "admin") {
  //   links = [
  //     {
  //       link: "User manage",
  //       path: "/admin",
  //       imgUrl: "/assets/icons/sideMenuIcons/admin.png",
  //     },
  //   ];
  // }

  return (
    <nav
      className={
        isCollapsed[COOKIE_KEY] ? "navbar-close navBar" : "navbar-open navBar"
      }
    >
      <div>
        <div
          className={
            isCollapsed[COOKIE_KEY] ? "btn-slider-close" : "btn-slider-open"
          }
        >
          <>&nbsp;</>
          <div className="arrow" onClick={onSlider}>
            <IconItSelf
              url={
                isCollapsed[COOKIE_KEY]
                  ? "/assets/right-arrow.png"
                  : "/assets/left-arrow.png"
              }
            />
          </div>
        </div>
        {links.map((list, i) => {
          return (
            <div className="all-wrap" key={i}>
              <div className="all-menu-elements">
                {list.subMenu ? (
                  <div className="flex-column-wrap">
                    <div
                      onClick={onSubMenuClick}
                      className={isCollapsed[COOKIE_KEY] ? "hover-coord" : ""}
                    >
                      <a
                        className={
                          !isCollapsed[COOKIE_KEY]
                            ? filteredPath[2] == list.path.split("/", 3)[2]
                              ? "selected-menu"
                              : "menu-element"
                            : filteredPath[2] == list.path.split("/", 3)[2]
                            ? "selected-menu"
                            : "menu-element"
                        }
                      >
                        <IconItSelf url={list.imgUrl} />
                        <span
                          className={
                            isCollapsed[COOKIE_KEY]
                              ? "txt-close txt"
                              : "txt-open txt"
                          }
                        >
                          <div>{list.link}</div>
                          <div>
                            <div className="sub-menu">
                              {list.subMenu ? (
                                <div className="more-img">
                                  <IconItSelf
                                    url={
                                      isSubClicked == false
                                        ? "/assets/top-arrow.png"
                                        : "/assets/bottom-arrow.png"
                                    }
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                    <div className="hover-box">
                      {list?.subMenu?.map((list, j) => {
                        return (
                          <div key={j}>
                            <Link href={list.path} legacyBehavior>
                              <a
                                className={
                                  router.pathname == list.path
                                    ? "selected-submenu-element"
                                    : "submenu-element"
                                }
                              >
                                {list.link}
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link key={i} href={list.path} legacyBehavior>
                    <a
                      className={
                        router.pathname == list.path
                          ? "selected-menu"
                          : "menu-element"
                      }
                    >
                      <IconItSelf url={list.imgUrl} />
                      <span
                        className={
                          isCollapsed[COOKIE_KEY]
                            ? "txt-close txt"
                            : "txt-open txt"
                        }
                      >
                        <div>{list.link}</div>
                      </span>
                    </a>
                  </Link>
                )}
              </div>
              <>
                {isSubClicked == true ? (
                  <>
                    {list?.subMenu?.map((list, k) => {
                      return (
                        <Link key={k} href={list.path} legacyBehavior>
                          <a
                            className={
                              !isCollapsed[COOKIE_KEY]
                                ? router.pathname == list.path
                                  ? "selected-submenu-element"
                                  : "submenu-element"
                                : "sub-remove"
                            }
                          >
                            <div
                              className={
                                isCollapsed[COOKIE_KEY]
                                  ? "submenu-icon-folded submenu-icon"
                                  : "submenu-icon-unfolded submenu-icon"
                              }
                            >
                              <IconItSelf url={list.imgUrl} />
                            </div>
                            <span
                              className={
                                isCollapsed[COOKIE_KEY]
                                  ? "sub-txt-close sub-txt"
                                  : "sub-txt-open sub-txt"
                              }
                            >
                              {list.link}
                            </span>
                          </a>
                        </Link>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .all-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hover-submenu {
            display: flex;
            margin-right: -50px;
            background-color: #061426;
            height: 100px;
          }
          .hover-coord {
            display: inline-block;
          }
          .hover-coord:hover + div.hover-box {
            visibility: visible;
          }
          .hover-box:hover {
            visibility: visible;
          }
          .hover-box {
            visibility: hidden;
            position: absolute;
            width: 130px;
            padding: 3px;
            left: calc(100% + 6px);
            top: 10px;
            transition: 0.1s;
            border-radius: 8px;
            background: #04436d;
            opacity: 0.8;
          }
          .more-img {
          }
          .more-img:hover {
            cursor: pointer;
          }
          .flex-column-wrap {
            display: flex;
            flex-direction: row;
            position: relative;
            gap: 20px;
            justify-content: center;
          }
          .navBar {
            background: linear-gradient(to left, #0c203a, #071527);
            transition-duration: 0.8s;
            display: flex;
          }
          .navbar-open {
            transition: 0.8s;
          }
          .navbar-close {
            transition: 0.8s;
          }
          .btn-slider-open {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            margin-right: -23px;
            opacity: 1;
          }
          .btn-slider-close {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            margin-right: -23px;
            opacity: 1;
          }
          .txt {
            display: flex;
            white-space: nowrap;
            transition: 0.3s;
            justify-content: space-between;
            align-items: center;
          }
          .txt-close {
            opacity: 0;
            width: 0;
            height: 0;
            visibility: hidden;
            margin-left: -15px;
          }
          .selected-menu .txt-open {
            opacity: 1;
          }
          .txt-open {
            width: 100px;
            visibility: visible;
            margin-left: 10px;

            opacity: 0.7;
          }
          .sub-wrap {
            margin-top: -10px;
          }
          .submenu-icon {
            transition: 0.4s;
          }
          .submenu-icon-folded {
            width: 0;
            height: 0;
          }
          .submenu-icon-unfolded {
            display: flex;
            width: 100%;
            height: 100%;
          }
          .sub-remove {
            visibility: hidden;
            width: 0px;
            height: 0px;
          }
          .sub-txt {
            display: flex;
            white-space: nowrap;
            justify-content: space-between;
            align-items: center;
            transition: 0.4s;
            color: white;
            opacity: 0.7;
          }
          .sub-txt-close {
            opacity: 0;
            width: 0;
            height: 0;
            visibility: hidden;
            margin-left: -15px;
            color: white;
          }
          .sub-txt-open {
            visibility: visible;
            width: 100px;
            opacity: 1;
            color: white;
          }
          @keyframes subTxt {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .arrow {
            display: flex;
            width: 30px;
            height: 30px;
            justify-content: center;
            align-items: center;
            background-color: #003558;
            border-radius: 7px;
            margin-right: 10px;
            opacity: 0.8;
          }
          .arrow:hover {
            cursor: pointer;
            opacity: 1;
          }
          .all-menu-elements {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .sub-link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          .sub-link-wrap {
            width: 100%;
          }
          .selected-menu {
            margin: 10px;
            height: 40px;
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            border-radius: 8px;
            color: white;
            opacity: 1;
            background-color: #06426b;
          }
          .menu-element {
            margin: 10px;
            height: 40px;
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            border-radius: 8px;
            color: white;
            opacity: 1;
            transition: 0.25s;
            cursor: pointer;
          }
          a {
            text-decoration-line: none;
          }
          .menu-element:hover,
          .submenu-element:hover {
            background-color: #03314f;
            opacity: 1;
          }
          .selected-menu:hover {
            cursor: pointer;
          }
          .selected-submenu-element {
            margin: 3px;
            height: 40px;
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            color: white;
            opacity: 1;
            background-color: #03314f;
          }
          .submenu-element {
            margin: 3px;
            height: 40px;
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s;
            border-radius: 8px;
            color: white;
            opacity: 0.7;
          }
        `}
      </style>
    </nav>
  );
};

export default JaySideBar;
