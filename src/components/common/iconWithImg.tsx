import React from "react";
import Image from "next/image";

interface IMenuIconProps {
  url: string;
  title?: string;
  active?: boolean;
  priority?: boolean;
}

const IconWithImg: React.FC<IMenuIconProps> = (props) => {
  const { url, title, active, priority } = props;

  return (
    <>
      <div className={active == true ? "menu-info active" : "menu-info"}>
        <div className="menu-title">
          {title}
          <Image priority={priority} alt="" src={url} width={26} height={26} />
          <br />
        </div>
      </div>
      <style jsx>{`
        .menu-info {
          width: 100px;
          height: 45px;

          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          align-items: center;
          border-radius: 15px;
          background: none;
          text-align: center;
          cursor: pointer;
        }
        .menu-info:hover {
          border-radius: 10px;
          background: #03314f;
        }
        .menu-info.active {
          border-radius: 10px;
          background: #06426b;
        }
        .menu-title {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          width: 100%;
          text-align: center;
          line-height: 16px;
        }
      `}</style>
    </>
  );
};

export default IconWithImg;
