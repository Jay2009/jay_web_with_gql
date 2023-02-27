import React, { useState, useEffect } from "react";
import { Select, Modal, Checkbox, Button } from "antd";
import { useMutation, useQuery } from "@apollo/client";
//import { UPDATE_USER } from '../../hooks/api/graphql/user/queryUser';
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { UPDATE_USER } from "@/apollo/gqlQuery/user";
import { currentUserVar } from "@/apollo/cache";
import ConfirmModal from "./confrimModal";
import { IProfilChangeFormData } from "@/types/iRctHookForm";
// import { isLocalStorPwBoxSelected } from '../../states/admin/atomAdmin';
// import ConfirmUserInfoModal from './userInfoConfirmModal';
// import UserInfoConfirmModal from './userInfoConfirmModal';
// import { IEventProps } from '../../types/userDataType';
interface IUserProps {
  localStoreUser: {
    authority: string;
    name: string;
    token: string;
    userId: string;
  } | null;
  showModal: boolean;
  handleCancel: () => void;
  refetchUserInfo: () => void;
  destroyAll: () => void;
}

const { Option } = Select;

const UserEditModal: React.FC<IUserProps> = (props) => {
  let allInput;
  const {
    localStoreUser,
    showModal,
    handleCancel,
    refetchUserInfo,
    destroyAll,
  } = props;

  const [updateUser, {}] = useMutation(UPDATE_USER);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IProfilChangeFormData>();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isPwBtnClicked, setIsPwBtnClciked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [bakedUserData, setBakedUserData] = useState({});

  useEffect(() => {
    if (localStoreUser) {
      setValue("userId", localStoreUser.userId);
      setValue("name", localStoreUser.name);
    }
  }, [localStoreUser]);

  const onValid = (formData: IProfilChangeFormData) => {
    setBakedUserData({ ...formData, token: localStoreUser?.token });
    sessionStorage.setItem(
      "loggedinUser",
      JSON.stringify({ ...formData, token: localStoreUser?.token })
    );
    showConfirmModal();
  };

  const onInValid = () => {};

  const showConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };
  const handleConfirmCancel = () => {
    setIsConfirmModalOpen(false);
  };

  const destroyAllModal = () => {
    destroyAll();
    setIsConfirmModalOpen(false);
    Modal.destroyAll();
    setIsPwBtnClciked(false);
    setIsEditClicked(false);
  };

  const handleChangePwBtn = () => {
    setIsPwBtnClciked(true);
  };

  const handleEditBtn = () => {
    setIsEditClicked(true);
  };

  return (
    <>
      <Modal
        title="User Info"
        open={showModal}
        onCancel={() => {
          setIsEditClicked(false);
          setValue(
            "userId",
            JSON.parse(sessionStorage.getItem("loggedinUser") || "{}").userId
          );
          setValue(
            "name",
            JSON.parse(sessionStorage.getItem("loggedinUser") || "{}").name
          );
          handleCancel();
        }}
        cancelButtonProps={{ disabled: true }}
        footer={true}
        width={850}
        centered={true}
        className="modal"
        zIndex={5}
      >
        <form onSubmit={handleSubmit(onValid, onInValid)}>
          <div className="input-area">
            <div className="input-row">
              <span>User ID</span>
              <div
                style={{
                  position: "relative",
                }}
              >
                <input
                  disabled={true}
                  value={localStoreUser?.userId}
                  type="text"
                  className="input-edit"
                  style={{
                    borderRadius: "9px",
                    width: 150,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "rgb(255, 71, 92)",
                    fontSize: "12px",
                  }}
                >
                  {errors?.userId?.message}
                </div>
              </div>
              <span>Name</span>
              <div
                style={{
                  position: "relative",
                }}
              >
                <input
                  disabled={!isEditClicked}
                  {...register("name", {
                    required: "Please enter name.",
                    minLength: {
                      message: "Minimum length is 3 long",
                      value: 3,
                    },
                    maxLength: {
                      message: "Maximum length is 8 long",
                      value: 8,
                    },
                    validate: {
                      noSpace: (value) =>
                        !value.includes(" ") || "Please enter without space.",
                    },
                  })}
                  type="text"
                  className="input-edit"
                  style={{
                    borderRadius: "9px",
                    width: 150,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "rgb(255, 71, 92)",
                    fontSize: "12px",
                  }}
                >
                  {errors?.name?.message}
                </div>
              </div>
            </div>
            {isEditClicked == true ? (
              <div className="input-row">
                <span>User PW</span>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  {isPwBtnClicked == true ? (
                    <input
                      placeholder="New Password"
                      {...register("userPw", {
                        maxLength: {
                          message: "Maximum length is 30 long",
                          value: 30,
                        },
                        validate: {
                          noSpace: (value) =>
                            !value?.includes(" ") ||
                            "Please enter without space.",
                        },
                      })}
                      type="text"
                      className="input-edit"
                      style={{
                        borderRadius: "9px",
                        width: 150,
                      }}
                    />
                  ) : (
                    <div className="change-btn-wrap">
                      <button
                        className="btn-change-pw"
                        onClick={handleChangePwBtn}
                      >
                        Change
                      </button>
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "rgb(255, 71, 92)",
                      fontSize: "12px",
                    }}
                  >
                    {errors?.userPw?.message}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {isEditClicked == true ? (
            <div className="btn-area">
              <button type="submit" className="btn">
                Save
              </button>
            </div>
          ) : (
            <div className="btn-area">
              <div onClick={handleEditBtn} className="btn edit">
                Edit info
              </div>
            </div>
          )}
        </form>
      </Modal>

      <ConfirmModal
        msg="Are you sure to save the change?"
        destroyAll={destroyAllModal}
        showModal={isConfirmModalOpen}
        refetchData={refetchUserInfo}
        handleClose={handleConfirmCancel}
        bakedData={bakedUserData}
        gqlFn={updateUser}
      />

      <style jsx>{`
        .btn-area {
          display: flex;
          margin-top: 50px;
          justify-content: center;
          align-items: center;
        }
        .btn {
          display: flex;
          height: 35px;
          width: 80px;
          border: none;
          border-radius: 8px;
          color: white;
          background: #3369aa;
          opacity: 0.8;
          justify-content: center;
          align-items: center;
        }
        .edit {
          width: 80px;
          background: #484b4f;
        }
        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
        .btn:active {
          border: 1px solid #2372db;
        }
        .btn-change-pw {
          width: 85px;
          height: 32px;
          font-size: 14px;
          font-weight: normal;
          background-color: #424951;
          color: white;
          border: none;
          border-radius: 8px;
          opacity: 0.8;
        }
        .btn-change-pw:hover {
          cursor: pointer;
          opacity: 1;
        }

        .input-area {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 36px;
        }
        .input-row {
          width: 85%;
          display: flex;
          align-items: center;
        }
        .change-btn-wrap {
          border-radius: 20px;
          border: none;
          text-align: center;
          display: flex;
          width: 150px;
          margin-right: 80px;
          justify-content: center;
          align-items: center;
        }
        .input-edit {
          margin-right: 80px;
          background-color: #151b23;
          border: gray;
          outline: gray;
          height: 32px;
          width: 100%;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          color: #a4a4a4;
          font-size: 15px;
          padding-left: 10px;
        }
        .input-edit:focus {
          transition: 0.4s;
          border: none;
          outline: 1px solid #707070;
        }
        span {
          display: inline-block;
          width: 100px;
        }
      `}</style>
    </>
  );
};

export default UserEditModal;
