/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { Select } from 'antd';

import {useTranslation} from 'react-i18next'
export default function Header(props) {
  const {t, i18n} = useTranslation();
  const { Option } = Select;
  const handleChange =(value) => {
       i18n.changeLanguage(value)
  }
  return (
    <div>
      <header className="p-4 dark:bg-coolGray-800  bg-opacity-60 bg-black text-white fixed w-full z-10">
        <div className="container flex justify-between h-16 mx-auto">
          <NavLink
            to="/"
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
              alt="valorant"
              style={{ width: "50px", height: "50px" }}
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/home"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 dark:border-transparent dark:border-emerald-400 text-white"
                activeClassName="border-b-2 border-white"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 dark:border-transparent dark:border-emerald-400 text-white"
                activeClassName="border-b-2 border-white"
              >
                Contact
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1  dark:border-transparent dark:border-emerald-400 text-white"
                activeClassName="border-b-2 border-white"
                to="/news"
              >
                News
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="self-center px-8 py-3 rounded"
            >
              {t('Sign In')}
            </button>
            <button className="self-center px-8 py-3 font-semibold rounded dark:text-coolGray-50">
              Sign up
            </button>

            <Select defaultValue="vi" style={{ width: 100 }} onChange={handleChange}>
            <Option value="eng">Eng </Option>
            <Option value="fin">Fin </Option>
            <Option value="vi">Vi </Option>
            </Select>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-coolGray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
