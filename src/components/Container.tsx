const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-width-[1920px] w-full mx-auto xl:px-20 px-4 py-2">
      {children}
    </div>
  );
};

export default Container;
