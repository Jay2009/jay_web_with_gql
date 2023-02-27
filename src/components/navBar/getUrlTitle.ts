import { useRouter } from "next/router";
import { useEffect } from "react";

const GetUrlTitle = () => {
  const router = useRouter();

  switch (router.pathname) {
    case "/mars":
      return "Main Mars";
    case "/mars/about/jayWeb":
      return "About / JayWeb";
    case "/mars/about/developer":
      return "About / developer";
    case "/mars/community":
      return "Community";
    case "/earth":
      return "Main Earth";
    case "/earth/about/jayWeb":
      return "About / JayWeb";
    case "/earth/about/developer":
      return "About / developer";
    case "/earth/community":
      return "Community";
    default:
      return "Url is wrong";
  }
};

export default GetUrlTitle;
