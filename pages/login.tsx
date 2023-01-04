import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loggedInUserId } from "../recoilAtom/adminAtom";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { ALL_USERS, LOGIN } from "../apollo/gqlQuery/user";

interface IFormData {
  id: string;
  pw: string;
  errors?: {
    id: {
      message: string;
    };
  };
}

let isRefreshed = false;
let localLoginId: string;

const Login = () => {
  const [capsLockFlag, setCapsLockFlag] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const [recoilLoggedInUser, setRecoilLoggedInUser] =
    useRecoilState(loggedInUserId);

  //const [getUserAuth, { data, loading, error }] = useLazyQuery(USER_AUTH);
  //console.log(data, loading, error, "all userssssss");
  const [login, loginResult] = useMutation(LOGIN);
  const loginData = loginResult.data?.login;
  console.log(loginData, "login data");
  useEffect(() => {
    if (loginResult.data?.login) {
      console.log(loginResult.data);

      alert("로그인에 성공했습니다.");
    } else if (loginResult.data?.login === null) alert("로그인 실패.");
  }, [loginResult.data]);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IFormData>();

  const checkCapsLock = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let capsLock = e.getModifierState("CapsLock");
    setCapsLockFlag(capsLock);
  };

  const onValid = (formData: IFormData) => {
    //getUserAuth({ variables: { userId: formData.id, userPw: formData.pw } });
  };

  const onInValid = (error: any) => {
    console.log(error, "error");
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onValid; // call the fn when enter key pressed
    }
  };

  const router = useRouter();

  return (
    <div className="background-frame">
      <form
        className="content-wrap"
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <Image alt="" src="/assets/moon.png" width={150} height={150} />
        <div className="title-txt">
          <h1>Welcome to Jay Web </h1>
          <div className="apollo-frame">
            <h3>with Apollo</h3>
            <div className="rocket-icon">
              <Image alt="" src="/assets/rocket.png" width={30} height={30} />
            </div>
          </div>
        </div>

        <div className="input-area">
          <input
            type="text"
            autoComplete="off"
            {...register("id", {
              required: "please enter user ID",
            })}
            className="input-id"
            name="id"
            placeholder="Account"
            style={{
              fontSize: "15px",
              borderRadius: "3px",
              color: "white",
            }}
          />
        </div>
        <div
          style={{
            color: "rgb(255, 71, 92)",
            fontSize: "15px",
          }}
        >
          {errors?.id?.message}
        </div>

        <div className="input-area">
          <input
            type="password"
            className="input-pw"
            {...register("pw", {
              required: "please enter Password",
            })}
            placeholder="Password"
            autoComplete="off"
            onKeyDown={(e) => checkCapsLock(e)}
            onKeyPress={handleOnKeyPress}
            style={{
              fontSize: "15px",
              color: "white",
              borderRadius: "3px",
            }}
          />
        </div>

        <div
          style={{
            color: "rgb(255, 71, 92)",
            fontSize: "15px",
          }}
        >
          {errors?.pw?.message}
        </div>

        <div>{capsLockFlag ? <span>Capslock is Active</span> : ""}</div>

        <button type="submit" className="btn-signIn">
          <h3>Sign in</h3>
        </button>
      </form>

      <style jsx>{`
        .background-frame {
          display: flex;
          width: 100%;
          height: 100vh;
          justify-content: center;
          align-items: center;
          background: url("/../assets/universe.png");
          background-size: cover;
        }
        .content-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 400px;
          gap: 10px;
        }

        .title-txt {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
          animation: fadein 5s ease-in-out;
          -moz-animation: fadein 5s; /* Firefox */
          -webkit-animation: fadein 5s; /* Safari and Chrome */
          -o-animation: fadein 5s; /* Opera */
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @-moz-keyframes fadein {
          /* Firefox */
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @-webkit-keyframes fadein {
          /* Safari and Chrome */
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @-o-keyframes fadein {
          /* Opera */
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        h1 {
          margin: 0;
          font-weight: bold;
          margin-top: 40px;
        }
        .apollo-frame {
          position: relative;
        }
        .rocket-icon {
          position: absolute;
          top: 60px;
          right: 37px;
          transform: rotate(-45deg);
          animation: goToMoon 3s ease-in-out;
        }
        @keyframes goToMoon {
          from {
            transform: translateY(0px) rotate(-45deg);
          }
          to {
            transform: translateY(-220px) rotate(-45deg);
          }
        }

        .input-area {
          display: flex;
          width: 100%;
          height: 40px;
          margin-top: 15px;
        }

        .input-id {
          background: #343a40;
          background-image: url(/assets/user.png);
          background-repeat: no-repeat;
          background-position: 15px center;
          padding-left: 60px;
          width: 100%;
          background-color: #151b23;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
        }
        .input-pw {
          background-image: url(/assets/pw.png);
          background-repeat: no-repeat;
          background-position: 15px center;
          padding-left: 60px;
          width: 100%;
          background-color: #151b23;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
        }
        .input-id:focus,
        .input-pw:focus {
          outline: none;
        }

        .btn-signIn {
          margin-top: 20px;
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          background-color: #3369aa;
          border-radius: 3px;
          width: 100%;
          height: 40px;
          opacity: 0.8;
          transition: 0.4s;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          outline: none;
        }
        .btn-signIn:hover {
          cursor: pointer;
          opacity: 1;
        }
        .btn-signIn:focus {
          cursor: pointer;
          opacity: 1;
        }
        .btn-signIn:active {
          border: 1px solid #2372db;
        }
        span {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Login;
