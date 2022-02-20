import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

// コンポーネントにデフォルトの値を設定
App.defaultProps = {
  message: 'Hello, Default Props!',
};

export default App;
