"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Container from "../Container";

const NavBar = () => {
  return (
    <div className="sticky top-0 border-b border-blue-primary bg-secondary">
      <Container>
        <header className="flex justify-end items-center p-4 gap-4 h-12">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#5128f4] text-white rounded font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </Container>
    </div>
  );
};

export default NavBar;
