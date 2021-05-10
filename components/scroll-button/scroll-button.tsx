import { ChevronUpIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Button from "../button/button";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(document.documentElement.scrollTop > 300);
  };

  const scrollToTop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Button
      className={classNames(
        "fixed bottom-0 right-0 m-6 z-50",
        visible ? "invisible md:visible" : "invisible"
      )}
      outlined
      large
      icon={ChevronUpIcon}
      shadow
      onClick={scrollToTop}
    />
  );
}
