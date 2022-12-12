import { useState } from "react";
import "./comment.style.css";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Comment() {
  const storageComment = JSON.parse(localStorage.getItem("comments"));

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(storageComment ?? []);

  const warningMessage = () => {
    toast.warn("Mày đã viết gì đâu mà đòi Click!", {
      draggable: false,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const addComment = () => {
    if (newComment.length === 0) {
      warningMessage();
      return;
    }
    setComments((prev) => {
      const saveNewComment = [...prev, newComment];
      const jsonComment = JSON.stringify(saveNewComment);
      localStorage.setItem("comments", jsonComment);
      return saveNewComment;
    });
    setNewComment("");
  };
  const toastMessage = () => {
    toast.success("Đã xóa bình luận", {
      className: "",
      draggable: false,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const deleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);

    const jsonComment = JSON.stringify(newComments);
    localStorage.setItem("comment", jsonComment);
    setComments(newComments);

    toastMessage();
    return newComments;
  };

  return (
    <div className="text-white w-full pl-10 pr-10 pt-20">
      <h1 className="text-4xl select-none">Đánh giá</h1>
      <div className="w-full pt-10 h-20">
        <input
          className="input w-full h-full pl-5 rounded-lg"
          type="text"
          placeholder="Hãy nói điều gì đó"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-end pt-2 pb-5">
        <button
          className="btn-color text-white py-2 px-4 rounded-lg"
          onClick={addComment}
        >
          Đăng
        </button>
      </div>
      <div className="w-full comment-wrap">
        <ul className="w-full">
          {comments.map((comment, index) => (
            <li className="w-full flex pb-4 pl-1 pt-1" key={index}>
              <div className="w-10 h-10 flex">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/EotxkWC4dXajaesh2iVgdIB5-o6pINoas_k-z7nVjRGSu4k9QZwMZIcRNXyUWGn3rg"
                />
              </div>
              <div className="pl-3 w-[calc(100%-2.5rem)] flex justify-between">
                <div>
                  <h1 className="flex flex-col text-xl">Anonymouse</h1>
                  <p className="text-sm">{comment}</p>
                </div>
                <span
                  className="px-2 text-red-700 cursor-pointer"
                  onClick={deleteComment}
                >
                  x
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
    </div>
  );
}

export default Comment;
