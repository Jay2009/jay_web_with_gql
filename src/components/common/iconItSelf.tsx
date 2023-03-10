import React, { useContext } from "react";
import Image from "next/image";
import PortfolioContext from "context/context";

interface IIconProps {
  url: string;
  isCollapsed?: boolean;
  title?: string;
}

const IconItSelf: React.FC<IIconProps> = (props) => {
  const { url, isCollapsed, title } = props;
  const { prefix } = useContext(PortfolioContext);

  return (
    <>
      <div
        className={
          isCollapsed == false ? "logo-Itself-deactive" : "logo-Itself-active"
        }
      >
        <Image
          alt="propImg"
          loader={({ src }) => `${prefix}${src}`}
          src={url}
          width={24}
          height={24}
        />
      </div>

      <style jsx>{`
        .logo-Itself-deactive {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
        }
        .logo-Itself-active {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.8;
        }
        .logo-Itself-active:hover {
        }
      `}</style>
    </>
  );
};

export default IconItSelf;
