import React, { useRef } from 'react';

const Hamburger = () => {
  const btnref = useRef(null);

  const handleBurger = () => {
    const currentState = btnref.current.getAttribute("data-state");
    if (!currentState || currentState === "closed") {
      btnref.current.setAttribute("data-state", "opened");
      btnref.current.setAttribute("aria-expanded", "true");
    } else {
      btnref.current.setAttribute("data-state", "closed");
      btnref.current.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <button
      onClick={handleBurger}
      className="button-three border"
      aria-controls="primary-navigation"
      aria-expanded="false"
      ref={btnref}
    >
      <svg
        stroke="var(--button-color)"
        fill="none"
        className="hamburger"
        viewBox="-10 -10 120 120"
        width="30"
      >
        <path
          className="line"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
