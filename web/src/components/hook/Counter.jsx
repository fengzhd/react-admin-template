import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

function Counter() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    document.querySelector('#randomBox').innerHTML = random
  });

  return (
    <div>
      <div>
        <h1>State Hook</h1>
        <Button type="primary" onClick={() => setCount(count + 1)}> count +1 </Button>
        <p>点击了 {count} 次</p>
      </div>
      <div>
        <h1>Effect Hook</h1>
        <Button type="primary" onClick={() => setRandom(Math.random())}> 生成随机数,并写入页面 </Button>
        <p id="randomBox"></p>
      </div>
    </div>
  );
}

export default Counter