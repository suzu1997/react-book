export const ColoredMessage = (props) => {
  const { color, children } = props; // オブジェクトの分割代入

  const contentStyle = {
    color, // オブジェクトの省略記法
    fontSize: '20px',
  };

  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};
