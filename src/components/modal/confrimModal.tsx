import React, { useEffect } from "react";
import { Modal } from "antd";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { isRefetchedUser } from "recoil/atoms/userAtom";

interface Iprops {
  showModal: boolean;
  msg: string;

  refetchData: () => void;
  destroyAll: () => void;
}

const ConfirmModal: React.FC<Iprops> = (props) => {
  const { msg, destroyAll, showModal, refetchData } = props;

  //const [refetchedUser, setRefetchedUser] = useRecoilState(isRefetchedUser);
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);
  const destroyConfirmModal = () => {
    refetchData();
    destroyAll();
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
          onCancel={destroyConfirmModal}
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
              <div className="btn" onClick={destroyConfirmModal}>
                Confirm
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
          border: none;
          border-radius: 8px;
          color: white;
          background: #3369aa;
          opacity: 0.8;
          justify-content: center;
          align-items: center;
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
