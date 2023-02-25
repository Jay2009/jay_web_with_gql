import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { IPostFormData } from "../../types/iRctHookForm";
import { GET_CURRENT_USER } from "../../apollo/cache";
import { ADD_POST, ALL_POSTS, SIGNUP } from "../../apollo/gqlQuery/user";
import {
  ICurrentUserData,
  ISignupData,
  ISignupVars,
} from "../../types/iApollo";
import { useRouter } from "next/router";
import ConfirmModal from "./confrimModal";

interface IAddPostProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  refetch: () => void;
}
const tags = ["", "Real estate", "Stock", "others"];

const regExpEngNum = /^[A-Za-z0-9]*$/;

const AddMarsPostModal: React.FC<IAddPostProps> = ({
  isModalOpen,
  handleCancel,
  refetch,
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
  const [createPost, {}] = useMutation(ADD_POST);
  const [isStockClicked, setIsStockClicked] = useState(false);
  const [isRealEstateClicked, setIsRealEstateClicked] = useState(false);
  const [isOthersClicked, setIsOthersClicked] = useState(false);
  const [tagList, setTagList] = useState<string[]>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [bakedPostData, setBakedPostData] = useState({});

  const onValid = (formData: IPostFormData) => {
    setBakedPostData({ ...formData, tags: tagList, writer: user?.userId });
    setIsConfirmModalOpen(true);
  };
  const onInvalid = (error: any) => {};
  const handleClose = () => {
    setIsConfirmModalOpen(false);
  };

  const destroyAllModal = () => {
    setIsConfirmModalOpen(false);
    handleCancel();
    Modal.destroyAll();
    reset();
    setIsStockClicked(false);
    setIsRealEstateClicked(false);
    setIsOthersClicked(false);
    setTagList([]);
  };

  const handleTagActive = (event: any) => {
    if (event.target.id == "stock") {
      setIsStockClicked(true);
      setTagList([...tagList, event.target.id]);
    }
    if (event.target.id == "realEstate") {
      setIsRealEstateClicked(true);
      setTagList([...tagList, event.target.id]);
    }
    if (event.target.id == "others") {
      setIsOthersClicked(true);
      setTagList([...tagList, event.target.id]);
    }
  };

  const handleTagDeactive = (event: any) => {
    if (event.target.id == "stock") {
      let filter = tagList.filter((element) => element != event.target.id);
      setTagList(filter);
      setIsStockClicked(false);
    }
    if (event.target.id == "realEstate") {
      let filter = tagList.filter((element) => element != event.target.id);
      setTagList(filter);
      setIsRealEstateClicked(false);
    }
    if (event.target.id == "others") {
      let filter = tagList.filter((element) => element != event.target.id);
      setTagList(filter);
      setIsOthersClicked(false);
    }
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
                <div className="input-title">Tag</div>
                <div className="tags">
                  {isStockClicked ? (
                    <div className="tag-wrap">
                      <div className="stock clicked">Stock</div>
                      <div className="tag-close" onClick={handleTagDeactive}>
                        <span id="stock">&#215;</span>{" "}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="none-btn stock-deactive"
                      id="stock"
                      onClick={handleTagActive}
                    >
                      Stock
                    </div>
                  )}

                  {isRealEstateClicked ? (
                    <div className="tag-wrap">
                      <div className="real-estate clicked">Real estate</div>
                      <div className="tag-close" onClick={handleTagDeactive}>
                        <span id="realEstate">&#215;</span>{" "}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="none-btn realEstate-deactive"
                      id="realEstate"
                      onClick={handleTagActive}
                    >
                      Real estate
                    </div>
                  )}

                  {isOthersClicked ? (
                    <div className="tag-wrap">
                      <div className="others clicked">Others</div>
                      <div className="tag-close" onClick={handleTagDeactive}>
                        <span id="others">&#215;</span>{" "}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="none-btn others-deactive"
                      id="others"
                      onClick={handleTagActive}
                    >
                      Others
                    </div>
                  )}
                </div>
              </div>

              <div className="error-msg">{errors?.tags?.message}</div>
            </div>
            <div className="form-input-wrap">
              <div className="form-input-row">
                <div className="input-title">Content</div>
                <textarea
                  maxLength={500}
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
                  placeholder="Type..."
                />
              </div>
              <div className="error-msg">{errors?.content?.message}</div>
            </div>
            <div className="tags-textArea">
              <div className="tags-textArea-wrap">
                {tagList.length > 0 ? "Tags -" : ""}
                {tagList[0] ? <div># {tagList[0]} </div> : ""}
                {tagList[1] ? <div># {tagList[1]} </div> : ""}
                {tagList[2] ? <div># {tagList[2]} </div> : ""}
              </div>
            </div>
            <button type="submit" className="btn-post">
              Post
            </button>
          </div>
        </form>
      </Modal>
      <ConfirmModal
        msg="Are you sure to post?"
        destroyAll={destroyAllModal}
        gqlFn={createPost}
        bakedData={bakedPostData ? bakedPostData : {}}
        showModal={isConfirmModalOpen}
        handleClose={handleClose}
        refetchData={refetch}
      />
      <style jsx>{`
        .none-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 30px;
          border-radius: 8px;
          border: 1px solid #6a6a6a;
          color: #6a6a6a;
          background: none;
          opacity: 0.8;
          font-size: 12px;
          height: 25px;
          border-radius: 5px;
        }
        .btn-post {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.4s;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          width: 80px;
          height: 30px;
          margin-top: 20px;
          margin-bottom: -20px;
          margin-left: 110px;
          border-radius: 3px;
          color: white;
          background: #3369aa;
          opacity: 0.8;
        }
        .btn-post:hover {
          cursor: pointer;
          opacity: 1;
        }
        .btn-post:active {
          border: 1px solid #2372db;
        }
        .none-btn:hover {
          cursor: pointer;
          opacity: 1;
        }
        .stock-deactive:hover {
          border: 1px solid #243060;
          color: #384da6;
        }
        .realEstate-deactive:hover {
          color: #66b834;
          border: 1px solid #304927;
        }
        .others-deactive:hover {
          color: #d9663b;
          border: 1px solid #4d2920;
        }

        .tags {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .tag-wrap {
          position: relative;
        }

        .tag-close {
          position: absolute;
          bottom: 15px;
          right: -10px;
          width: 25px;
          height: 25px;
          color: gray;
          text-align: center;
          text-justify: center;
        }
        .tag-close:hover {
          cursor: pointer;
        }
        .tags-textArea {
          position: absolute;
          right: 150px;
          bottom: 125px;
        }
        .tags-textArea-wrap {
          display: flex;
          gap: 10px;
          color: gray;
        }
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
          margin-top: -8px;
        }
        .clicked {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .stock {
          width: 70px;
          height: 25px;
          border-radius: 5px;
          color: #384da6;
          background: #131629;
          border: 1px solid #243060;
          text-align: center;
          text-justify: center;
          font-size: 12px;
        }
        .real-estate {
          width: 70px;
          height: 25px;
          border-radius: 5px;
          color: #66b834;
          background: #162312;
          border: 1px solid #304927;
          text-align: center;
          text-justify: center;
          font-size: 12px;
        }
        .others {
          width: 70px;
          height: 25px;
          border-radius: 5px;
          color: #d9663b;
          background: #2b1611;
          border: 1px solid #4d2920;
          text-align: center;
          text-justify: center;
          font-size: 12px;
        }

        .form-wrap {
          margin: 40px;
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
          padding-left: 15px;
          width: 80%;
          background-color: #151b23;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          border-radius: 5px;
          color: white;
          font-size: 15px;
        }
        .form-input:focus {
          transition: 0.4s;
          border: none;
          outline: 1px solid #707070;
        }
        .text-area {
          width: 80%;
          height: 300px;
          resize: none;
        }
        .error-msg {
          height: 15px;
          margin-left: 110px;
          color: rgb(255, 71, 92);
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

export default AddMarsPostModal;
