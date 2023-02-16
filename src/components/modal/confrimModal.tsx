import React, { useEffect } from "react";
import { Modal } from "antd";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { isRefetchedUser } from "recoil/atoms/userAtom";

interface Iprops {
  showModal: boolean;
  msg: string;
  onCancel: () => void;
  refetchData: () => void;
  destroyAll: () => void;
}

const ConfirmModal: React.FC<Iprops> = (props) => {
  const { msg, onCancel, destroyAll, showModal, refetchData } = props;

  //const [refetchedUser, setRefetchedUser] = useRecoilState(isRefetchedUser);
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);

  const destroyConfirmModal = () => {
    setIsConfirmClicked(true);
    refetchData();
    destroyAll();
  };

  const confirmModalClosed = () => {
    //setRefetchedUser(true);
    setIsConfirmClicked(false);
    onCancel();
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
          onCancel={confirmModalClosed}
          cancelButtonProps={{ disabled: true }}
          footer={true}
          width={600}
          centered={true}
          className="modal"
          zIndex={11}
        >
          <div className="confirm-wrap">
            <h3>{msg}</h3>
            <div className="btn-area">
              <div className="btn btn-save" onClick={destroyConfirmModal}>
                확인
              </div>
              <div className="btn btn-delete" onClick={onCancel}>
                취소
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

export default ConfirmModal;
