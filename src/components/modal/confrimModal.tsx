import React, { useEffect } from "react";
import { Modal } from "antd";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { isRefetchedUser } from "recoil/atoms/userAtom";
import { IAddPostData } from "@/types/iApollo";

interface Iprops {
  showModal: boolean;
  msg: string;
  bakedData: IAddPostData | {} | string | null;
  gqlFn: (arg: {}) => void;
  refetchData: () => void;
  destroyAll: () => void;
  handleClose: () => void;
}

const ConfirmModal: React.FC<Iprops> = (props) => {
  const {
    msg,
    destroyAll,
    showModal,
    refetchData,
    gqlFn,
    bakedData,
    handleClose,
  } = props;

  //const [refetchedUser, setRefetchedUser] = useRecoilState(isRefetchedUser);
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);
  const destroyConfirmModal = () => {
    console.log(bakedData, "baked data$%!@%$#^#$^^&&&&&");

    destroyAll();
    gqlFn({ variables: { input: bakedData } });
    refetchData();
  };

  // useEffect(() => {
  // 	if (fineUserDataInClient?.length > 0) {
  // 		testValue = fineUserDataInClient;
  // 	}
  // }, [fineUserDataInClient]);

  return (
    <>
      <>
        <Modal
          open={showModal}
          onCancel={handleClose}
          cancelButtonProps={{ disabled: true }}
          footer={true}
          width={600}
          centered={true}
          className="modal"
        >
          <div className="confirm-wrap">
            <h3>{msg}</h3>
            <div className="btn-area">
              <div className="btn confirm" onClick={destroyConfirmModal}>
                Confirm
              </div>
              <div className="btn delete" onClick={handleClose}>
                Cancel
              </div>
            </div>
          </div>
        </Modal>
      </>

      <style jsx>{`
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
          display: flex;
          height: 35px;
          width: 80px;
          transition: 0.4s;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          border-radius: 8px;
          color: white;
          opacity: 0.8;
          justify-content: center;
          align-items: center;
        }
        .confirm {
          background: #3369aa;
        }

        .delete {
          background: tomato;
        }

        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default ConfirmModal;
