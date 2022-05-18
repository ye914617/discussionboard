import React, { useState } from "react";

const InputField = ({ getData, data }) => {
  const [comment, setComment] = useState("");

  const addComment = () => {
    if (comment === "") return;
    const newComment = {
      id: new Date().getTime().toString(),
      content: comment,
      timeStamp: new Date().toString().slice(4, 25),
      reply: [],
    };
    if (data === null) {
      localStorage.setItem("comments", JSON.stringify([newComment]));
      setComment("");
      getData();
    } else {
      localStorage.setItem("comments", JSON.stringify([newComment, ...data]));
      setComment("");
      getData();
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded justify-evenly items-center border-2 border-blue-500 w-1/3 p-4 my-4">
      <textarea
        className="bg-gray-200 p-2 w-full h-16 rounded outline-none"
        placeholder="Say something"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={addComment}
        className="text-white bg-blue-500 rounded p-2 w-full"
      >
        Submit
      </button>
    </div>
  );
};

export default InputField;
