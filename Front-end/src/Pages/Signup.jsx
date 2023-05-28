import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/Register", values)
      .then((response) => {
        console.log(response.data);
        // Handle the response from the server
        localStorage.setItem("auth", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occur during the request
      });
    Navigate("/");
  };

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
  <div className="bg-grey-lighter min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <form onSubmit={handleSubmit}>
        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
        <input
         
          type="text"
          value={values.username}
          onChange={handleChange}
          name="username"
          placeholder="Username"
        />
          {errors.username && (
                          <p style={{ color: "red", fontSize: "13px" }}>
                            {errors.username}
                          </p>
                        )}

        <input
         value={values.email}
                          onChange={handleChange}
                          name="email"
                          type="email"
                          placeholder="email"
        />
          {errors.email && (
                          <p style={{ color: "red", fontSize: "13px" }}>
                            {errors.email}
                          </p>
                        )}
                        
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
          {errors.email && (
                          <p style={{ color: "red", fontSize: "13px" }}>
                            {errors.email}
                          </p>
                        )}
        <button
             className="mt-3 bg-gradient-to-r from-sky-300 to-cyan-300 inline-block  ms-24 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
             type="submit"
        >
          Create Account
        </button>
        </form>
        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>{" "}
          and
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-grey-dark mt-6">
      <Link to="/login" className="mb-0 mr-2">
                          Do you have account ?{" "}
                        </Link>
      </div>
    </div>
  </div>
    </>
  );
}
