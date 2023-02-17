interface IBtnProps {
  width?: string | number;
  name?: string;
  onClick?: () => void;
}

const JayBtn: React.FC<IBtnProps> = ({ width, name }) => {
  return (
    <div>
      <button className="btn" style={{ width: width }}>
        {name}
      </button>

      <style jsx>{`
        .btn {
          color: white;
          justify-content: center;
          align-items: center;
          background-color: #3369aa;
          border-radius: 3px;
          height: 35px;
          opacity: 0.8;
          transition: 0.4s;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          outline: none;
        }
        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default JayBtn;
