/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Film(props) {
  const { movie } = props;

  return (
    <div className="h-full mr-2  bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          background: `url(${movie.hinhAnh}) no-repeat,url(https//picsum.photos/1000/200)`,
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
      >
        <img
          src={movie.hinhAnh}
          alt={movie.tenPhim}
          className="opacity-1 w-full"
          style={{ height: "200px" }}
        />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">
        {movie.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3">
        {movie.moTa.length > 100 ? (
          <span>{movie.moTa.slice(0, 100)} ...</span>
        ) : (
          <span>{movie.moTa}</span>
        )}
      </p>
      <a className="text-indigo-500 inline-flex items-center ">
        Booking Ticket
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
