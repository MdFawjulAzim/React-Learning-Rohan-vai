import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <StyledWrapper>
        <section className="loader">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="slider" style={{ "--i": i }} />
          ))}
        </section>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .slider {
    position: relative;
    width: 20px;
    height: 80px;
    overflow: hidden;
    background: #fff;
    border-radius: 30px;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 30px #fff,
      inset -5px -5px 10px rgba(0, 0, 255, 0.1),
      inset 5px 5px 10px rgba(0, 0, 0, 0.1);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.3), 0 420px 0 400px #2697f3,
      inset 0 0 0 rgba(0, 0, 0, 0.1);
    animation: bounce 2.5s ease-in-out infinite;
    animation-delay: calc(-0.5s * var(--i));
  }

  @keyframes bounce {
    0% {
      transform: translateY(250px);
      filter: hue-rotate(0deg);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(250px);
      filter: hue-rotate(180deg);
    }
  }
`;

export default Loader;
