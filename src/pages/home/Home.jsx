import React from "react";
import Img from "../../assets/images/start.svg";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { authentication } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // const provider = new GoogleAuthProvider();
    // signInWithRedirect(authentication, provider)
    //   .then((response) => {
    //     console.log(response.user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     console.log(errorCode);
    //     console.log(errorMessage);
    //   });

    navigate("/dashboard");
  };

  return (
    <section className="home container mx-auto grid place-items-center h-screen">
      <div className="text-center">
        <header>
          <h2 className="text-4xl font-semibold mb-16">
            Create tasks, Edit the task, Mark the task as complete.
          </h2>
          <img
            src={Img}
            alt="header"
            loading="lazy"
            className="w-72 h-auto mx-auto"
          />
          <p className="mt-8 text-2xl font-semibold">Let's get started!</p>
        </header>
        <button
          type="button"
          className="bg-primary-blue mt-16 py-3 px-7 rounded-lg text-white font-semibold hover:opacity-80 text-2xl"
          onClick={handleSignIn}
        >
          Sign in with your Google Account
        </button>
      </div>
    </section>
  );
};

export default Home;
