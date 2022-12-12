import { useState } from "react";

const initialState = {
  name: "",
  overview: "",
  poster_image: "",
  background_image: "",
  typeId: [1, 2, 3, 4],
};

function AddMovie(props) {
  const { handleShowMethod } = props;

  const [state, setState] = useState(initialState);

  const { name, overview, poster_image, background_image, typeId } =
    initialState;

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="w-full  z-50">
      <div className="absolute w-full h-screen flex items-center justify-center top-1/4">
        <form
          style={{ backgroundColor: "rgba(0,0,0,.75)" }}
          className="form-add rounded"
        >
          <h1 className="text-white text-xl p-4">Add New Movie</h1>
          <div className="w-full flex flex-col justify-center px-4 pt-4">
            <div className="w-full">
              <label className="text-white">Movie's Name</label>
              <input
                style={{ backgroundColor: "#333333" }}
                type="name"
                name="name"
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="Movie's Name"
                onChange={handleOnChange}
                value={name}
              />
            </div>

            <div className="w-full">
              <label className="text-white">Movie's Overview</label>
              <input
                style={{ backgroundColor: "#333333" }}
                type="overview"
                name="overview"
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="Movie's overview"
                onChange={handleOnChange}
                value={overview}
              />
            </div>
            <div className="w-full">
              <label className="text-white">Movie's URL Poster Image</label>
              <input
                style={{ backgroundColor: "#333333" }}
                type="poster_image"
                name="poster_image"
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="URL Poster Image"
                onChange={handleOnChange}
                value={poster_image}
              />
            </div>

            <div className="w-full">
              <label className="text-white">Movie's URL Background Image</label>
              <input
                style={{ backgroundColor: "#333333" }}
                type="background_image"
                name="background_image"
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="URL Background Image"
                onChange={handleOnChange}
                value={background_image}
              />
            </div>

            <div className="w-full mb-8">
              <label className="text-white">Type's Movie</label>
              <div className="w-full mt-2">
                <select
                  style={{ backgroundColor: "#333333" }}
                  className="text-white w-full h-10 rounded p-2 outline-none"
                >
                  <option value="1">Popular</option>
                  <option value="2">Top Rated</option>
                  <option value="3">Trending</option>
                  <option value="4">Comedy</option>
                </select>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button
                onClick={() => handleShowMethod()}
                className="w-1/4 bg-red-600 p-4 text-white rounded mr-1"
              >
                Back
              </button>
              <input
                type="submit"
                value="Save"
                className="w-1/4 bg-red-600 p-4 text-white rounded ml-1"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
