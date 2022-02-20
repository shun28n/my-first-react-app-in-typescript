import React, { useEffect, useRef, useState } from 'react';

// Propsを使わない時は空オブジェクトの指定でいい
const Counter: React.FunctionComponent<{}> = () => {
  // １つ目の値が状態(〇〇)、２つ目が変更する関数(set〇〇)
  // useStateに型をつけることでvalue, setValueの引数戻り値にも型制約をつけられる
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  // useEffect コンポーネントがレンダーされると実行される
  useEffect(() => {
    renderTimes.current++;
  });
  const ref = useRef<HTMLInputElement>(null!); // ！nonNullアサーションオペレータ
  const focusInput = () => {
    ref.current.focus(); // ?. nullじゃなければ実行
  };
  // const ref = useRef<HTMLInputElement>(null);
  // const focusInput = () => {
  //   ref.current?.focus(); // ?. nullじゃなければ実行
  // };
  // const focusInput = () => {
  //   const current = ref.current;
  //   if (current != null) {
  //     current.focus();
  //   }
  // };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text"></input>
      <button onClick={focusInput}>Click me!</button>
    </div>
  );
};

export default Counter;
