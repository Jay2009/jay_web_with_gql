import { useRouter } from "next/router";
import { useEffect } from "react";

const GetUrlTitle = () => {
  const router = useRouter();
  // const filteredPath = router.pathname.split('/', 3);
  console.log(router, "routerrrrrrr");
  switch (router.pathname) {
    case "/mars":
      return "Main";
    case "/mars/about/jayWeb":
      return "About / JayWeb";
    case "/mars/about/developer":
      return "About / developer";
    case "/mars/community":
      return "Community";
    default:
      return "Url is wrong";
  }
};

export default GetUrlTitle;
