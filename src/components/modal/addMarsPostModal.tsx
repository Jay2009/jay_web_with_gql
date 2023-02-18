import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { IPostFormData, IRegisterFormData } from "../../types/iRctHookForm";
import { GET_CURRENT_USER } from "../../apollo/cache";
import { SIGNUP } from "../../apollo/gqlQuery/user";
import {
  ICurrentUserData,
  ISignupData,
  ISignupVars,
} from "../../types/iApollo";
import { useRouter } from "next/router";

interface IAddPostProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}
const tags = ["", "Real estate", "Stock", "Bank"];

const regExpEngNum = /^[A-Za-z0-9]*$/;

const AddMarsPostModal: React.FC<IAddPostProps> = ({
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
  } = useForm<IPostFormData>();

  const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
  const user = currentUser.data?.user;

  const [signup, signupResult] = useMutation<ISignupData, ISignupVars>(SIGNUP);

  useEffect(() => {
    let tagList = [];
    if(getValues("tags")){
    console.log(getValues("tags"), "tag is ??");
   
  }
  }, [getValues("tags")]);

  const onValid = (formData: IPostFormData) => {
    watch();
    console.log(watch(), "watchh");
    
    
    
    // console.log({ ...formData }, "success!!");
    // signup({
    //   variables: {
    //     userId: formData.formId,
    //     userPw: formData.formPw,
    //     name: formData.formName,
    //   },
    // });
  };
  const onInvalid = (error: any) => {
    console.log(error, "error");
  };

  return (
    <div>
      <Modal
        title="Create Post"
        centered={true}
        open={isModalOpen}
        onCancel={handleCancel}
        width={800}
        footer
      >
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className="form-wrap">
            <div className="form-input-wrap">
              <div className="form-input-row">
                <div className="input-title">Title</div>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("title", {
                    required: "Please write title",
                    minLength: {
                      message: "Minimum length is 3",
                      value: 3,
                    },
                    maxLength: {
                      message: "Maximum length is 30",
                      value: 30,
                    },
                  })}
                  className="form-input"
                  placeholder="Title"
                />
              </div>
              <div className="error-msg">{errors?.title?.message}</div>
            </div>
            <div className="form-input-wrap">
              <div className="form-input-row">
              <div className="input-title">tags</div>
                <select className="form-input"  {...register("tags", {})}>
                <option ></option>
                    <option >a</option>
                    <option >b</option>
                    <option >c</option>
                 
                </select>
              </div>
              <div className="error-msg">{errors?.tags?.message}</div>
            </div>
            <div className="form-input-wrap">
              <div className="form-input-row">
                <div className="input-title">Content</div>
                <textarea
                  autoComplete="off"
                  {...register("content", {
                    required: "Please write any content",
                    minLength: {
                      message: "Minimum length is 3 text long",
                      value: 3,
                    },
                    maxLength: {
                      message: "Maximum length is 500 text long",
                      value: 500,
                    },
                  })}
                  className="form-input text-area"
                  placeholder="Write"
                />
              </div>
              <div className="error-msg">{errors?.content?.message}</div>
            </div>

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
          margin:40px;
          display: flex;
          width: 80%;
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
          justify-content: space-between;
          align-items: center;
        }
        .input-title {
          width: 80px;
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
        .text-area{
          width: 80%;
          height: 250px;
         resize: none;
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

export default AddMarsPostModal;
