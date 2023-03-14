import React, { useEffect } from "react";
import { Modal } from "antd";
import { useState } from "react";

interface Iprops {
  isConfirmClicked: boolean;
  refetchData: () => void;
  destroyAll: () => void;
  handleSucessClose: () => void;
}

const SuccessModal: React.FC<Iprops> = (props) => {
  const { isConfirmClicked, handleSucessClose, refetchData, destroyAll } =
    props;

  const handleSuccess = () => {
    handleSucessClose();
    refetchData();
    destroyAll();
  };

  return (
    <>
      <>
        <Modal
          open={isConfirmClicked}
          onCancel={handleSuccess}
          cancelButtonProps={{ disabled: true }}
          footer={true}
          width={600}
          centered={true}
          className="modal"
        >
          <div className="confirm-wrap">
            <h3>Success!</h3>
            <div className="btn-area">
              <div className="btn confirm" onClick={handleSuccess}>
                OK
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
        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default SuccessModal;
