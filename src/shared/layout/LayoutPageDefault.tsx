export const LayoutPageDefault: React.FC = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex place-content-center">{children}</div>
    </>
  );
};
