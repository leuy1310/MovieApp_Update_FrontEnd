import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import "./App.css";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ControlRouter from "./Components/ControlRouter/ControlRouter";
import Detailnfo from "./Components/DetailInfo/DetailInfo";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Page/HomePage";
import MyListPage from "./Page/MyListPage";
import Footer from "./Components/Footer/Footer";
import MoviesPage from "./Page/MoviesPage";
import Search from "./Components/Search/Search";
function App() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [myList, setMyList] = useState([]);

  const toastMessage = () => {
    toast.success("Đã thêm vào My List", {
      className: "",
      draggable: false,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const handleAddToMyList = (movie) => {
    if (myList.indexOf(movie) !== -1) {
      toastMessage();
      return;
    }
    setMyList([...myList, movie]);
  };

  const navigate = useNavigate();
  return (
    <div className="scroollbar-style">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage handleAddToMyList={handleAddToMyList} />}
        ></Route>
        <Route
          path="/:id"
          element={
            <Detailnfo
              movie={MovieDetail}
              showModal={MovieDetail ? true : false}
            />
          }
        ></Route>
        <Route
          path="/movies"
          element={<MoviesPage handleAddToMyList={handleAddToMyList} />}
        ></Route>
        <Route
          path="/movies/:id"
          element={
            <Detailnfo
              movie={MovieDetail}
              showModal={MovieDetail ? true : false}
            />
          }
        ></Route>
        <Route
          path="/mylist"
          element={
            <MyListPage
              movie={MovieDetail}
              myList={myList}
              setMyList={setMyList}
            />
          }
        ></Route>
        <Route
          path="/mylist/:id"
          element={
            <Detailnfo
              movie={MovieDetail}
              showModal={MovieDetail ? true : false}
            />
          }
        ></Route>

        <Route
          path="/search"
          element={
            <Search movie={MovieDetail} handleAddToMyList={handleAddToMyList} />
          }
        ></Route>
        <Route
          path="/search/:id"
          element={
            <Detailnfo
              movie={MovieDetail}
              showModal={MovieDetail ? true : false}
            />
          }
        ></Route>
      </Routes>
      <ControlRouter navigate={navigate} />
      <Footer />
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
    </div>
  );
}

export default App;
