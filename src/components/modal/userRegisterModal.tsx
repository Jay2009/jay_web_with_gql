import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { IRegisterFormData } from "../../types/iRctHookForm";
import { GET_CURRENT_USER } from "../../apollo/cache";
import { SIGNUP } from "../../apollo/gqlQuery/user";
import {
  ICurrentUserData,
  ISignupData,
  ISignupVars,
} from "../../types/iApollo";
import { useRouter } from "next/router";

interface IloginProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const regExpEngNum = /^[A-Za-z0-9]*$/;

const UserRegisterModal: React.FC<IloginProps> = ({
  isModalOpen,
  handleCancel,
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IRegisterFormData>();

  const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
  const [signup, signupResult] = useMutation<ISignupData, ISignupVars>(SIGNUP);

  useEffect(() => {
    if (signupResult.data?.signup === true) {
      alert("회원가입에 성공했습니다");
      handleCancel();
    } else if (signupResult.data?.signup === false) {
      alert("회원가입에 실패했습니다");
    }
  }, [signupResult.data]);

  const onValid = (formData: IRegisterFormData) => {
    signup({
      variables: {
        userId: formData.formId,
        userPw: formData.formPw,
        name: formData.formName,
      },
    });
  };
  const onInvalid = (error: any) => {};

  return (
    <div>
      <Modal
        title="Create Account"
        centered={true}
        open={isModalOpen}
        onCancel={handleCancel}
        width={380}
        footer
      >
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className="form-wrap">
            <div className="form-input-wrap">
              <div className="form-input-row">
                <div className="input-title">ID</div>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("formId", {
                    required: "please enter user ID",
                    minLength: {
                      message: "Minimum length is 3",
                      value: 3,
                    },
                    maxLength: {
                      message: "Maximum length is 20",
                      value: 20,
                    },
                    validate: {
                      noSpace: (value) =>
                        regExpEngNum.test(value) ||
                        "Only Alphabets or numbers are acceptable",
                    },
                  })}
                  className="form-input"
                  placeholder="Account"
                />
              </div>
              <div className="error-msg">{errors?.formId?.message}</div>
            </div>
            <div className="form-input-wrap">
              <div className="form-input-row">
                <div className="input-title">PW</div>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("formPw", {
                    minLength: {
                      message: "Minimum length is 5 long",
                      value: 5,
                    },
                    maxLength: {
                      message: "Maximum length is 30 long",
                      value: 30,
                    },
                    validate: {
                      noSpace: (value) =>
                        !value.includes(" ") || "Please enter without space.",
                    },
                  })}
                  className="form-input"
                  placeholder="Password"
                />
              </div>
              <div className="error-msg">{errors?.formPw?.message}</div>
            </div>
            <div className="form-input-wrap">
              <div className="form-input-row">
                <div className="input-title">NAME</div>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("formName", {
                    required: "please enter name",
                    minLength: {
                      message: "Minimum length is 3 long",
                      value: 3,
                    },
                    maxLength: {
                      message: "Maximum length is 8 long",
                      value: 8,
                    },
                  })}
                  className="form-input"
                  placeholder="Name or Nickname"
                />
              </div>
              <div className="error-msg">{errors?.formName?.message}</div>
            </div>

            {signupResult.data?.signup === false ? (
              <div
                style={{
                  color: "rgb(255, 71, 92)",
                  fontSize: "15px",
                }}
              >
                ID is already in use
              </div>
            ) : (
              ""
            )}
            <button type="submit" className="btn-form-create">
              OK
            </button>
          </div>
        </form>
      </Modal>
      <style jsx>{`
        .form-input:focus {
          transition: 0.4s;
          border: none;
          outline: 1px solid #707070;
        }
        .btn-form-create {
          margin-top: 20px;
          margin-bottom: -30px;
          width: 80px;
          border: none;
          height: 30px;
          border-radius: 8px;
          color: white;
          background: #3369aa;
          opacity: 0.8;
        }
        .btn-form-create:hover {
          cursor: pointer;
          opacity: 1;
        }
        .btn-form-create:active {
          border: 1px solid #2372db;
        }
        .form-wrap {
          margin-top: 40px;
          margin-bottom: 40px;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
        .form-input-wrap {
          width: 100%;
        }
        .form-input-row {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .input-title {
          width: 60px;
        }
        .form-input {
          height: 30px;
          width: 80%;
          background-color: #151b23;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          border-radius: 5px;
          color: white;
          font-size: 15px;
        }
        .error-msg {
          margin-left: 63px;
          color: rgb(255, 71, 92);
          fontsize: 15px;
        }
      `}</style>
    </div>
  );
};

export default UserRegisterModal;
