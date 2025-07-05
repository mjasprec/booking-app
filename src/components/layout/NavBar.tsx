"use client";

import ClerkUserButtons from "@/components/ClerkUserButtons/ClerkUserButtons";
import Container from "@/components/Container";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <Container>
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <Image src="/globe.svg" alt="brand logo" height="30" width="30" />
          </div>

          <ClerkUserButtons />
        </div>
      </Container>
    </>
  );
};

export default NavBar;
