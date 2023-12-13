import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [input, setInputs] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    first: true,
    last: true,
    email: true,
    password: true,
  });

  function validateInputs() {
    if (input.first.trim() === "") {
      setValid((prevState) => ({ ...prevState, first: false }));
    } else {
      setValid((prevState) => ({ ...prevState, first: true }));
    }
    if (input.last.trim() === "") {
      setValid((prevState) => ({ ...prevState, last: false }));
    } else {
      setValid((prevState) => ({ ...prevState, last: true }));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
      setValid((prevState) => ({ ...prevState, email: false }));
    } else {
      setValid((prevState) => ({ ...prevState, email: true }));
    }
    if (input.password.trim() === "") {
      setValid((prevState) => ({ ...prevState, password: false }));
    } else {
      setValid((prevState) => ({ ...prevState, password: true }));
    }
  }

  return (
    <form
      className="bg-white w-full p-6 md:p-[33px] md:gap-[20px] lg:p-[40px] rounded-xl flex flex-col gap-4"
      style={{ boxShadow: "0px 8px 0px 0px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex flex-col gap-[6px]">
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="First Name"
          className={`px-[20px] py-[15px] rounded-[5px] border-2 w-full ${
            !valid.first && "border-[#FF7979]"
          }`}
          onChange={(e) => {
            setInputs((prevState) => ({
              ...prevState,
              first: e.target.value,
            }));
          }}
        />
        {!valid.first && (
          <p className="italic text-[#FF7979] text-right text-[11px]">
            First Name cannot be empty
          </p>
        )}
      </div>
      <div>
        <input
          type="text"
          id="last-name"
          name="last-name"
          placeholder="Last Name"
          className={`px-[20px] py-[15px] rounded-[5px] border-2 w-full ${
            !valid.last && "border-[#FF7979]"
          }`}
          onChange={(e) => {
            setInputs((prevState) => ({
              ...prevState,
              last: e.target.value,
            }));
          }}
        />
        {!valid.last && (
          <p className="italic text-[#FF7979] text-right text-[11px]">
            Last Name cannot be empty
          </p>
        )}
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          className={`px-[20px] py-[15px] rounded-[5px] border-2 w-full ${
            !valid.email && "border-[#FF7979] text-[#FF7979]"
          }`}
          onChange={(e) => {
            setInputs((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />
        {!valid.email && (
          <p className="italic text-[#FF7979] text-right text-[11px]">
            Looks like this is not an email
          </p>
        )}
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className={`px-[20px] py-[15px] rounded-[5px] border-2 w-full ${
            !valid.password && "border-[#FF7979]"
          }`}
          onChange={(e) => {
            setInputs((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
        {!valid.password && (
          <p className="italic text-[#FF7979] text-right text-[11px]">
            Password cannot be empty
          </p>
        )}
      </div>
      <button
        type="button"
        className="bg-[#38CC8B] text-[15px] md:hover:bg-[#77E2B3] duration-300 w-full py-[15px] text-white rounded-[5px]"
        style={{ boxShadow: "0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset" }}
        onClick={validateInputs}
      >
        CLAIM YOUR FREE TRIAL
      </button>
      <p className="text-[11px] text-center text-[#A6A1CF]">
        By clicking the button, you are agreeing to our{" "}
        <span className="font-bold text-[#FF7979] cursor-pointer">
          Terms and Services
        </span>
      </p>
    </form>
  );
};

export default Form;
