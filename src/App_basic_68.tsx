import React from 'react';

// 一般的にインターフェースを用いてアノテーションすることが多い。可読性。再利用性
interface AppProps{
  message:string;
}

// コンポーネントに対してreactが提供している型の付け方
// デフォルト値のチェックも行ってくれる
const App:React.FunctionComponent<AppProps> = ({message}) => {
  // propsオブジェクトからmessageだけを取り出す。分割代入
  return <div>{ message }</div>;
};

// 引数にメンバ名と型を記載することで外部からの代入を制限できる
// デフォルト値のチェックができないので非推奨
// const App = ({message}:AppProps) => {
//   // propsオブジェクトからmessageだけを取り出す。分割代入
//   return <div>{ message }</div>;
// };

// コンポーネントにデフォルトの値を設定
App.defaultProps ={
  message: 'Hello, Default Props!'
}

export default App;
