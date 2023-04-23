import React from "react";

export default function Button({ hrf, value, icon }) {
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="flex w-60 items-center justify-center gap-x-2 border-2 border-red-600 py-2 text-center font-semibold text-red-600 hover:bg-red-600 hover:text-white">
        <p>{icon}</p>
        <a href={hrf}>{value}</a>
      </div>
    </div>
  );
}
