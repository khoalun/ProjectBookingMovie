/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Film(props) {
  const { movie } = props;

  return (
    <div className="h-full mr-2  bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <img src={movie.hinhAnh} alt={movie.tenPhim} />
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        {movie.tenPhim}
      </h1>
      <a className="leading-relaxed mb-3">{movie.moTa}</a>
      <a className="text-indigo-500 inline-flex items-center">
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
