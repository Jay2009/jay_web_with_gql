import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
//import { authority, isRefetchedUser, loggedInUserId, userAuthority } from '../../states/admin/atomAdmin';
//import { GET_USER } from '../../hooks/api/graphql/user/queryUser';
//import UserInfoEdit from './userInfoEdit';
import IconWithImg from "../common/iconWithImg";
import Link from "next/link";
import { ICurrentUserData, ILogoutData } from "@/types/iApollo";
import { currentUserVar, GET_CURRENT_USER } from "@/apollo/cache";
import { SINGLE_USER, LOGOUT } from "@/apollo/gqlQuery/user";
import UserEditModal from "../modal/userEditModal";
import { loggedInUserId } from "recoil/atoms/userAtom";

let localLoginId: string | null;

interface ILocalLoginObj {
  authority: string;
  name: string;
  token: string;
  userId: string;
}

const UserInfoLogout: React.FC = () => {
  const router = useRouter();
  const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
  const user = currentUser.data?.user;
  const [logout, logoutResult] = useMutation<ILogoutData>(LOGOUT);

  const [isSettingClicked, setIsSettingClicked] = useState(false);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  const [localStoreUser, setLocalStoreUser] = useState<ILocalLoginObj>();

  // const [userauthority, setUserAuthority] = useRecoilState(userAuthority);

  // const [refetchedUser, setRefetchedUser] = useRecoilState(isRefetchedUser);
  const [recoilLoggedInUser, setRecoilLoggedInUser] =
    useRecoilState(loggedInUserId);

  const { loading, error, data, refetch } = useQuery(SINGLE_USER, {
    variables: {
      userId: recoilLoggedInUser ? recoilLoggedInUser : localLoginId,
    },
  });

  useEffect(() => {
    localLoginId = JSON.parse(
      localStorage.getItem("loggedinUser") || "{}"
    ).userId;
    // if (data) {
    // 	setUserAuthority(data.getUser.authority);
    // }
    console.log(data,"heyy");
    
  }, [data]);

  useEffect(() => {
    //console.log(user, "user%%%%%%%%%%%%%");
    setLocalStoreUser(JSON.parse(localStorage.getItem("loggedinUser") || "{}"));
  }, [user]);

  useEffect(() => {
    console.log(logoutResult.data, "my user name@@@@@");
    if (logoutResult.data?.logout === true) {
      localStorage.removeItem("loggedinUser");
      currentUserVar(null);
      alert("로그아웃에 성공.");
      router.push("/login");
    } else if (logoutResult.data?.logout === false) {
      alert("로그아웃에 실패.");
    }
  }, [logoutResult.data]);

  const onSetting = () => {
    setIsSettingClicked(true);
  };
  const handleSettingCancel = () => {
    setIsSettingClicked(false);
  };
  const destroyEditModal = () => {
    setIsSettingClicked(false);

    //setRefetchedUser(false);
  };

  const onLogOut = () => {
    setIsLogoutClicked(true);
  };

  const handleLogOutConfirm = () => {
    setIsLogoutClicked(false);
    logout();
    //router.push("/login");
  };
  const handleLoginCancel = () => {
    setIsLogoutClicked(false);
  };

  return (
    <>
      {/* <Link href="/admin">
        <a>
          <IconWithImg
            url={"/assets/icons/menuIcons/admin.png"}
            title={"관리자"}
            // active={filteredPath[1] == "admin" ? true : false}
          />
        </a>
      </Link> */}
      <div className="user-area">
        <div className="user-area-icon" onClick={onSetting}>
          <div>{ data?.singleUser?.name}</div>
          &nbsp;
          <Image alt="" src="/assets/astronaut.png" width={32} height={32} />
        </div>
        <UserEditModal
          localStoreUser={localStoreUser ? localStoreUser : null}
          showModal={isSettingClicked}
          refetchUserInfo={refetch}
          handleCancel={handleSettingCancel}
          destroyAll={destroyEditModal}
        />

        <div className="user-logout" onClick={onLogOut}>
          <Image alt="" src="/assets/logout.png" width={24} height={24} />
        </div>
        <Modal
          open={isLogoutClicked}
          maskClosable={true}
          onCancel={handleLoginCancel}
          cancelButtonProps={{ disabled: true }}
          footer={null}
          width={600}
          centered={true}
          className="modal"
          zIndex={11}
        >
          <div className="confirm-wrap">
            <h3>로그아웃 하시겠습니까?</h3>
            <div className="btn-area">
              <div className="btn btn-save" onClick={handleLogOutConfirm}>
                확인
              </div>
              <div className="btn btn-delete" onClick={handleLoginCancel}>
                취소
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <style jsx>{`
        .user-area {
          margin-left: 15px;
          margin-right: 15px;
          display: flex;
          gap: 20px;
          color: #fff;
          font-size: 18px;
          /* font-weight: bold; */
          align-items: center;
          line-height: 24px;
          font-weight: 700;
        }
        .user-area-icon {
          display: flex;
          width: auto;
          justify-content: center;
          align-items: center;
          height: 42px;
          border: none;
          opacity: 0.7;
          color: #3a7df2;
        }
        .user-area-icon:hover {
          cursor: pointer;
          opacity: 1;
        }
        .user-area span {
          font-size: 14px;
          font-weight: 500;
        }
        .user-logout {
          margin-left: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.7;
        }
        .user-logout:hover {
          cursor: pointer;
          opacity: 1;
        }
        .confirm-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
        .btn-area {
          display: flex;
          margin-top: 20px;
          gap: 15px;
        }
        .btn {
          width: 85px;
          height: 35px;
          font-size: 14px;
          font-weight: normal;
          padding: 5px 0;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          text-align: center;
        }
        .btn-save {
          color: #2cabff;
          border: 1px solid #2cabff;
          opacity: 0.8;
          background-color: #06283e;
        }
        .btn-delete {
          color: #ff6060;
          border: 1px solid #ff6060;
          opacity: 0.8;
          background-color: #201f2d;
        }
        .btn-save:hover {
          border: 1px solid #2cabff;
          opacity: 1;
        }
        .btn-delete:hover {
          border: 1px solid #ff6060;
          opacity: 1;
        }
        .completed-add-user {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default UserInfoLogout;
