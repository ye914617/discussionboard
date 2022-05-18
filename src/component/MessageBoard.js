import React from "react";
import NewComment from "./NewComment";

const MessageBoard = ({ data, getData }) => {
  let arr = [];
  const indexMaker = () => {
    if (data === null) return;
    for (let i = 0; i < data.length; i++) {
      arr.push(i + 1);
    }
  };
  indexMaker();
  const arr2 = arr.reverse();
  return (
    <>
      {data
        ? data.map((item, index) => {
            return (
              <NewComment
                key={item.id}
                content={item.content}
                id={item.id}
                timeStamp={item.timeStamp}
                order={arr2[index]}
                getData={getData}
              />
            );
          })
        : "Nothing to display"}
    </>
  );
};

export default MessageBoard;
