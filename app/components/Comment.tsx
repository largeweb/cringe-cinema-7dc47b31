// app/components/Comment.tsx

import React from "react";

interface Props {
  comment: string;
}

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div className="bg-white p-3 rounded-md border border-gray-200 mb-2">
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default Comment;