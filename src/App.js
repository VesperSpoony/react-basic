// 项目的根组件
// App -> index.js -> public/index.html
import { useState, useRef, useContext, createContext, useEffect } from "react"
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

function Son(props) {
  return (
    <div>
      <button onClick={() => props.onGetMsg("MMMSSSGGG")}>click</button>
      {props.name}{props.child}emm{props.children}
    </div>
  )
}

function Son2(props) {
  return (
    <div>
      {props.msg}
    </div>
  )
}

const MsgContext = createContext()

function A() {
  return (
    <div>
      <B></B>
    </div>
  )
}

function B() {
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B {msg}
    </div>
  )
}

const URL = 'http://geek.itheima.net/v1_0/channels'

function useToggle() {
  const [val, setVal] = useState(true)
  const toggle = () => {
    setVal(!val)
  }
  return {
    val,
    toggle
  }
}

function App() {
  const [count1, setCount1] = useState(0)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const showDom = () => {
    console.log(inputRef.current);
  }
  const name = "this is son name"
  const [msg, setMsg] = useState('')
  const getMsg = msg => {
    console.log(msg)
    setMsg(msg)
  }

  const [list1, setList1] = useState([])
  useEffect(() => {
    // 额外参数
    // 第二个参数为空数组时仅会调用一次
    async function getList() {
      const res = await fetch(URL)
      const list = await res.json()
      console.log(list)
      setList1(list.data.channels)
    }
    getList()
  }, [])

  const [wu, setWu] = useState(0)
  const [yi, setYi] = useState(0)
  useEffect(() => {
    console.log("无依赖项")
  })

  useEffect(() => {
    console.log("空数组依赖")
  }, [])

  useEffect(() => {
    console.log("特定依赖项")
  }, [yi])

  function Test() {
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("+1+1+1")
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    }, [])
    return (
      <div>TEST</div>
    )
  }

  const [show, setShow] = useState(true)

  // const [val, setVal] = useState(true)
  // const toggle = () => {
  //   setVal(!val)
  // }
  const { val, toggle } = useToggle()

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
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text" />
      <input
        ref={inputRef}
        type="text" />
      <button onClick={showDom}>show</button>
      <Son name={name} child={<span>span</span>} />
      <Son>
        <span>this is span</span>
      </Son>
      <Son onGetMsg={getMsg}></Son>
      <div>{msg}</div>
      <Son2 msg={msg}></Son2>
      <MsgContext.Provider value={msg}>
        <A></A>
      </MsgContext.Provider>
      <ul>
        {list1.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <button onClick={() => setWu(wu + 1) + { wu }}>wu click</button>
      <button onClick={() => setYi(yi + 1) + { yi }}>yi click</button>
      {show && <Test></Test>}
      <button onClick={() => setShow(!show)}>show</button>

      {val && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App
