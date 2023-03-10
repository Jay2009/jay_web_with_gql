import React, { useEffect } from "react";
import { Modal } from "antd";
import { useState } from "react";
import { IAddPostData } from "@/types/iApollo";
import SuccessModal from "./successModal";

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

  const [isConfirmClicked, setIsConfirmClicked] = useState(false);

  const handleConfirmed = () => {
    gqlFn({ variables: { input: bakedData } });
    setIsConfirmClicked(true);
  };
  const handleSucessClose = () => {
    setIsConfirmClicked(false);
  };
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
              <div className="btn confirm" onClick={handleConfirmed}>
                Confirm
              </div>
              <div className="btn delete" onClick={handleClose}>
                Cancel
              </div>
            </div>
          </div>
        </Modal>
        <SuccessModal
          isConfirmClicked={isConfirmClicked}
          handleSucessClose={handleSucessClose}
          destroyAll={destroyAll}
          refetchData={refetchData}
        />
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
