import React from "react";

const Ulasan = ({ name, content, replies, imageUrl }) => (
  <div className="flex mt-10 ml-5">
    <img className="rounded-full w-10 h-10" src={imageUrl} />
    <div className="font-bold text-base ml-3 mt-2">
      {name}
      <p className="text-gray-600 whitespace-no-wrap max-w-4xl">{content}</p>
      {replies.length > 0 && (
        <details className="mt-5 ml-5">
          <summary className="cursor-pointer font-bold text-blue-600">
            {replies.length} balasan
          </summary>
          <div className="mt-5">
            {replies.map((reply, index) => (
              <div key={index} className="flex mt-3">
                <img
                  className="rounded-full w-10 h-10"
                  src="/assets/hacker.jpg"
                />
                <div className="font-bold text-base ml-3 mt-2">
                  {reply.name}
                  <p className="text-gray-600 whitespace-no-wrap max-w-4xl">
                    {reply.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  </div>
);

export default Ulasan;
