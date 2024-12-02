import { useEffect } from "react";

export const useClickOutSide = (ref, callback) => {
  const handleOutSide = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleOutSide);

    return () => {
      document.addEventListener("mouseup", handleOutSide);
    };
  });
};
