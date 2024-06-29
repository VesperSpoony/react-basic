// 项目的根组件
// App -> index.js -> public/index.html
import { useState } from "react"
import './index.css'

const count = 100
function getName() {
  return 'jack'
}

const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]

const login = true

const articleType = 1

function getArticleType() {
  if (articleType === 0) {
    return <div>0</div>
  } else if (articleType === 1) {
    return <div>1</div>
  } else {
    return <div>2</div>
  }
}

const handleClick = (name, e) => {
  console.log("button点击", name, e)
}

function Button() {
  return <button>组件</button>
}

const style = { color: 'red', fontSize: '50px' }

function App() {
  const [count1, setCount1] = useState(0)
  return (
    <div className="App">
      this is an app
      {/* 使用引号传递字符串 */}
      {'message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>
        this is div
      </div>
      {/* 渲染列表 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      {/* 条件渲染 */}
      {login && <span>this is a span </span>}
      {!login ? <span>yes</span> : <span>no</span>}
      {getArticleType()}
      {/* 事件绑定 */}
      <button onClick={(e) => handleClick('emmm', e)}>click me</button>
      {/* 组件 */}
      <Button />
      <Button></Button>
      {/* useState */}
      <div>
        <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
      </div>
      {/* 行内样式控制 */}
      <span style={{ color: 'red', fontSize: '50px' }}>span</span>
      <span style={style}>span</span>
      <span className="foo">span</span>
    </div>
  )
}

export default App
