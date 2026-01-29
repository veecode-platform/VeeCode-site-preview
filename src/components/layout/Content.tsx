interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="flex w-[90vw] md:w-[800px] max-w-full flex-col items-center text-black text-center">
    {children}
  </div>
);

export default Content;
