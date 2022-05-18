import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import Reply from "./Reply";

const NewComment = ({ id, order, timeStamp, content }) => {
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);

  const addReply = () => {
    if (reply === "") return;
    const newReply = {
      message: reply,
    };
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("comments"));
    const newObj = JSON.parse(JSON.stringify(dataFromLocalStorage));
    newObj.forEach((item) => {
      if (item.id === id) {
        item.reply = [...item.reply, newReply];
      }
    });
    localStorage.setItem("comments", JSON.stringify(newObj));
    setReplies([reply, ...replies]);
    setReply("");
  };

  return (
    <div className="relative rounded border-2 border-gray-900 flex flex-col my-4 gap-2 rounded bg-white w-1/2">
      <div className="border-b-2 border-gray-200  bg-gray-100 p-4 text-2xl flex items-center gap-4">
        <div className="text-blue-600"> Comment {order}</div>
        <div className="text-sm text-gray-500 font-semibold cursor-pointer italic">
          {timeStamp}
        </div>
      </div>
      <div className="text-xl p-4 border-b-2 border-gray-200 ">{content}</div>

      <div className="gap-1 flex flex-col p-4">
        {replies.map((item) => {
          return <Reply content={item} key={Math.random()} />;
        })}
      </div>

      <div className="flex gap-2 justify-between items-center p-4">
        <input
          placeholder="Reply..."
          className="outline-none p-2 bg-gray-200 grow"
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <MdSend
          onClick={addReply}
          className="w-8 h-8 cursor-pointer text-blue-500"
        />
      </div>
    </div>
  );
};

export default NewComment;
