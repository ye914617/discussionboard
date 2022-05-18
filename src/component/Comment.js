import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import Reply from "./Reply";
import { AiOutlineClose } from "react-icons/ai";

const Comment = ({ content, timeStamp, order, id, deleteComment, getData }) => {
  const [data, setData] = useState([]);
  const [reply, setReply] = useState("");
  console.log(data);
  //   const getReply = () => {
  //     const dataFromLocalStorage = JSON.parse(localStorage.getItem(`${id}`));
  //     console.log(dataFromLocalStorage);
  //     setData(dataFromLocalStorage);
  //   };

  const getReply = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("comments"));
    const replies = dataFromLocalStorage.filter((rep) => {
      if (rep.id === id) {
        return rep;
      }
    });
    // console.log(replies);
    const newReplies = replies.map((aaa) => {
      return aaa.reply;
    });
    // console.log(newReplies);
    setData(newReplies);
  };

  //   const addReply = () => {
  //     if (reply === "") return;
  //     const newReply = {
  //       id: new Date().getTime().toString(),
  //       content: reply,
  //       timeStamp: new Date().toString().slice(4, 25),
  //     };
  //     if (data === null) {
  //       localStorage.setItem(`${id}`, JSON.stringify([newReply]));
  //       setReply("");
  //       getReply();
  //     } else {
  //       localStorage.setItem(`${id}`, JSON.stringify([newReply, ...data]));
  //       setReply("");
  //       getReply();
  //     }
  //   };

  const addReply = () => {
    const newReply = {
      id: new Date().getTime().toString(),
      content: reply,
      timeStamp: new Date().toString().slice(4, 25),
    };
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("comments"));
    const newObj = JSON.parse(JSON.stringify(dataFromLocalStorage));
    newObj.forEach((item) => {
      if (item.id === id) {
        item.reply = [...item.reply, newReply];
        // setReply("");
      }
      //   getReply();
    });
    localStorage.setItem("comments", JSON.stringify(newObj));
    getReply();
    // console.log(newObj);

    //     const newReply = {
    //               id: new Date().getTime().toString(),
    //               content: reply,
    //               timeStamp: new Date().toString().slice(4, 25),
    //             };
  };

  //   const deleteReply = (replyId) => {
  //     const dataFromLocalStorage = JSON.parse(localStorage.getItem(`${id}`));
  //     console.log(dataFromLocalStorage.length);
  //     if (dataFromLocalStorage.length === 1) {
  //       localStorage.removeItem(`${id}`);
  //       setData("");
  //       getReply();
  //     } else {
  //       const deletedReply = dataFromLocalStorage.filter((item) => {
  //         return item.id !== replyId;
  //       });
  //       localStorage.setItem(`${id}`, JSON.stringify(deletedReply));
  //       setData("");
  //       getReply();
  //     }
  //   };

  //   const deleteAll = (id) => {
  //     const dataFromLocalStorage = JSON.parse(localStorage.getItem(`${id}`));
  //     if (dataFromLocalStorage === null) {
  //       deleteComment(id);
  //       setData("");
  //       //   getReply();
  //     } else {
  //       localStorage.removeItem(`${id}`);
  //       deleteComment(id);
  //       setData("");
  //       //   getReply();
  //     }
  //   };

  useEffect(() => {
    getReply();
  }, []);

  return (
    <div className="relative rounded border-2 border-gray-900 flex flex-col my-4 gap-2 rounded-xl bg-white w-1/2">
      {/* <AiOutlineClose
        onClick={() => deleteAll(id)}
        className="absolute h-8 w-8 right-4 top-4"
      /> */}
      <div className="border-b-2 border-gray-200  bg-gray-100 rounded-t p-4 text-2xl flex items-center gap-4">
        <div className="text-blue-600"> Comment {order}</div>
        <div className="text-sm text-gray-500 font-semibold cursor-pointer italic">
          {timeStamp}
        </div>
      </div>
      <div className="text-xl p-4 border-b-2 border-gray-200 ">{content}</div>

      <div className="gap-1 flex flex-col p-4">
        {data
          ? data.map((item, index) => {
              return (
                <Reply
                  content={item.content}
                  timeStamp={item.timeStamp}
                  id={item.id}
                  order={index + 1}
                  //   deleteReply={deleteReply}
                />
              );
            })
          : "Be the first to reply!"}
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

export default Comment;
