import ReactDom from 'react-dom';
import { App } from './App';

// render(render対象, render箇所) : ReactDomが持っているメソッド
// id: root ⇨public > index.htmlのdiv#root
// Appコンポーネントをdiv#rootの中に挿入
ReactDom.render(<App />, document.getElementById('root'));
