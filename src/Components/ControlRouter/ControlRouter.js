import "../ControlRouter/controlrouter.style.css";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
function ControlRouter(props) {
  const { navigate } = props;
  return (
    <div className="text-white text-base bottom-2 pl-2 fixed z-50 flex">
      <div
        onClick={() => navigate(-1)}
        className="left-btn mr-1 w-10 h-5 flex justify-center items-center rounded"
      >
        <ImArrowLeft className="leading-5" />
      </div>
      <div
        onClick={() => navigate(+1)}
        className="right-btn ml-1 w-10 h-5 flex justify-center items-center rounded"
      >
        <ImArrowRight className="" />
      </div>
    </div>
  );
}

export default ControlRouter;
