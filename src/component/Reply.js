import React from "react";
import { BsReplyFill } from "react-icons/bs";

const Reply = ({ content }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="bg-gray-200 pl-2 grow">{content}</div>
      <BsReplyFill className="text-blue-500" />
    </div>
  );
};

export default Reply;
