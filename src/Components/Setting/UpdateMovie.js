function UpdateMovie(props) {
  const { handleShowUpdate } = props;
  return (
    <div className="w-full z-50 ">
      <div className="absolute w-full h-screen flex items-center justify-center top-1/4 z-50">
        <div
          style={{ backgroundColor: "rgba(0,0,0, .9)" }}
          className="form-add rounded"
        >
          <h1 className="text-white text-xl p-4">Update</h1>
          <div className="w-full flex flex-col justify-center px-4 pt-4">
            <div className="w-full">
              <label className="text-white">Movie's Name</label>
              <input
                style={{ backgroundColor: "#333333" }}
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="Movie's Name"
              />
            </div>

            <div className="w-full">
              <label className="text-white">Movie's Overview</label>
              <input
                style={{ backgroundColor: "#333333" }}
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="Movie's overview"
              />
            </div>
            <div className="w-full">
              <label className="text-white">Movie's URL Poster Image</label>
              <input
                style={{ backgroundColor: "#333333" }}
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="URL Poster Image"
              />
            </div>

            <div className="w-full">
              <label className="text-white">Movie's URL Background Image</label>
              <input
                style={{ backgroundColor: "#333333" }}
                className="w-full h-10 text-white mt-2 mb-8 p-2 rounded outline-none"
                placeholder="URL Background Image"
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
                onClick={() => handleShowUpdate()}
                className="w-1/4 bg-red-600 p-4 text-white rounded mr-1"
              >
                Back
              </button>
              <button className="w-1/4 bg-red-600 p-4 text-white rounded ml-1">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateMovie;
