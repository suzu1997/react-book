import ReactDom from 'react-dom';

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// render(render対象, render箇所) : ReactDomが持っているメソッド
// id: root ⇨public > index.htmlのdiv#root
// Appコンポーネントをdiv#rootの中に挿入
ReactDom.render(<App />, document.getElementById('root'));
