import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const ClerkUserButtons = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default ClerkUserButtons;
