import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/slices/shootSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleToShoot = () => {
    dispatch(fetchData());
    alert("Data is Displayed!");
    navigate("/display");
  };


  return (
    <div className="box">
      <div onClick={handleToShoot} className="btn-shoot">
        SHOOT
      </div>
    </div>
  );
};

export default Home;
