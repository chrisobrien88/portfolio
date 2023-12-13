import React from "react";
import { Image } from "@nextui-org/react";

const MyLogo = () => {
  return (
    <Image
      isBlurred
      alt="Chris O'Brien - fullstack developer"
      width={50}
      height={"auto"}
      src="chrisobrienlogo.png"
      radius="sm"
    />
  );
};

export default MyLogo;
