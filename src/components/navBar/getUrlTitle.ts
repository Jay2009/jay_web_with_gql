import { useRouter } from "next/router";

const GetUrlTitle = () => {
  const router = useRouter();
  // const filteredPath = router.pathname.split('/', 3);

  switch (router.pathname) {
    case "/":
      return "Main";
    case "/about":
      return "About / JayWeb";
    case "/about/developer":
      return "About / developer";
    case "/community":
      return "Community";
    default:
      return "Url is wrong";
  }
};

export default GetUrlTitle;
