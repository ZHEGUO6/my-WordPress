# React 18

```javascript
// 全局安装 create-react-app
npm install -g create-react-app
create-react-app -V
5.0.1

// 创建一个项目
create-react-app your-app // 注意命名方式

// 如果不想全局安装，可以使用 npx
npx create-react-app your-app // 也可以实现相同的效果

// 等待的时间会安装三个东西
react 顶级库
react-dom web上的运行环境，app端是react-native
react-scripts 包含运行和打包react应用程序的所有脚本及配置

```

```javascript
|--README.md  使用方法的文档
|--node_modules 所有依赖安装的目录
|--package-lock.json 锁定安装时的包的版本号，保证团队的依赖能保证一致
|--package.json 安装的所有包，运行项目的方法
|--public 静态公共目录
|--src 开发用的源代码目录
```

```javascript
// nodejs
npm i -g nrm // 全局安装nrm源管理器，这个可以让你快速切换npm源仓库
nrm ls // 列出你现在的源仓库列表
nrm use npm // 切换国外源 下载速度较慢，建议使用国内taobao镜像源

```



## 编写第一个react程序

```javascript
// 注意 react 18 放弃 ReactDom.render()写法，改为

import React from 'vite_press_one/fore-end/react/react';
import {createRoot} from 'react-dom/client';
// 绑定root节点
const container = document.getElementById('root');
const root = createRoot(container);
// 渲染页面
root.render("hello world");

```



## 什么是 `JSX`

```javascript
概念：jsx是 javascript 和 XML(HTML) 的缩写，表示在js代码中编写HTML模版结构，它是React中编写 UI 模版的方式。

const message = 'this is message'
function App(){
    return (
        <div>
    <h1>this is title </h1>
        {message}
		</div>
    )
}
优势：
 1. HTML的声明式模版写法
 2. JS 的可编程能力
 jsx并不能被浏览器能被浏览器解析，必须通过解析器解析。
```



## `JSX` 表达式

1. 使用引号传递字符串
2. 使用js变量
3. 函数调用和方法调用
4. 使用js对象

```javascript
import React from 'vite_press_one/fore-end/react/react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App/>);

const app = "Vue3"

function getString() {
    return "我是李国哲"
}

function App() {
    return (
        <div className="App">
            {/*使用变量*/}
            <h1>this is App {app}</h1>
            {/*使用字符串*/}
            <h1> {'我是一个字符串'}</h1>
            {/*使用函数*/}
            <h1> {getString()}</h1>
            {/*使用方法*/}
            <h1> {new Date().toLocaleString()}</h1>
            {/*使用js对象*/}
            <h1 style={{color: '#fff', background: '#000'}}>测试</h1>
        </div>
    )
}

// 注意：if语句，switch语句，变量声明属于语句，不是表达式，不能出现在{}中。
```



## `JSX` 实现列表渲染

```javascript
// console.log("hello world")
import React from 'vite_press_one/fore-end/react/react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App/>);

const list = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 28,
        city: "London"
    },
    {
        name: "Jim",
        age: 35,
        city: "Paris"
    }
]

function App() {
    return (
        <div className="App">
            {/*必须加key值，用于内部提升react浏览器性能，否则会报错*/}
            <ul> {list.map(item => <li style={{fontSize: "20px"}} key={item.name}>{item.name}</li>)}</ul>
        </div>
    )
}
```



## `JSX` 实现条件渲染

```javascript
function App() {
    const isLogin = false
    return (
        <div className="App">
            {/*控制一个元素渲染*/}
            {/*逻辑与 &&*/}
            {isLogin && <span>this is show</span>}
            {<br/>}
            {/*控制两个元素渲染*/}
            {/*三目运算符*/}
            {isLogin ? <span>loading...</span> : <span>this is not show</span>}

        </div>
    )
}
```



## `JSX` 实现复杂条件渲染

```javascript
const count = 3;
// 定义核心函数 根据文章类型返回不同的JSX模版
// 函数式组件
function getIMage() {
    if (count === 0) {
        return <div>我是无图模式</div>
    } else if (count === 1) {
        return <div>我是单图模式</div>
    } else if (count === 3) {
        return <div>我是三图模式</div>
    }
}

function App() {
    return (
        <div className="App">
            {getIMage()}
        </div>
    )
}
```



## 绑定事件

```javascript
// 点击事件
function App() {
    // 打印事件对象
    const handleClick = (name, e) => {
        console.log("我被点击了", name, e)
    }
    return (
        <div className="App">
            <button onClick={(e) => handleClick('jack', e)}>点击</button>
        </div>
    )
}
```



## React 组件

- 在React 中，一个组件就是首字母大写的函数，内部存放了组件的逻辑和视图UI，渲染组件只需要把组件当成标签书写即可。

```javascript
// react 组件
function App() {

    return (
        <div className="App">
            {/*自闭和标签和成对标签*/}
            <Button/>
            <Button></Button>
        </div>
    )
}

// 也可以写成箭头函数
function Button() {
    // 书写业务逻辑
    const handleClick = () => {
        console.log("click")
    }
    return (
        <button onClick={() => handleClick()}>
            按钮
        </button>
    )
}
```



## useState

- `useState` 是一个React Hook 函数，它允许我们向组件添加一个状态变量，从而控制影响组件的渲染结果。
- 和普通 `JS` 变量不同的是，状态变量一旦发生变化组件的视图UI也会发生变化（数据驱动视图）

```javascript
import {useState} from "vite_press_one/fore-end/react/react";

// react 组件
function App() {
    // 调用useState添加一个状态变量
    // count 状态变量的初始值为 0
    // setCount 改变count的值的方法
    const [count, setCount] = useState(0);
    // 点击按钮时调用setCount
    const handleClick = () => {
        // 用传入的新值修改count
        // 重新使用新的 count 值渲染组件
        setCount(count + 1);
    }
    return (
        <div className="App">
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}

// 修改状态的规则
规则一：状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改状态不能引发视图更新

const handleClick = () => {
    // 用传入的新值修改count
    // 重新使用新的 count 值渲染组件
    setCount(count + 1);
    // count++ 直接修改，不会引发视图更新
}
规则二：对于对象类型的状态变量，应该始终传给set方法一个全新的对象来进行修改。

// react 组件 
function App() {

    const [from, setCount] = useState({
        name: '张三',
        age: 18
    });
    const handleClick = () => {
        // 传入一个新的对象
        setCount({
            ...from,
            age: from.age + 1,
            name: '李四' // 覆盖掉原有的值
        });
    }
    console.log(from);
    return (
        <div className="App">
            <button onClick={handleClick}>修改对象</button>
        </div>
    )
}
```



## 组件样式控制

1. 行内样式
2. class类名控制

```javascript
// class类名控制
// index.css
    .foo{
        color:red,
        font-size:20px
    }
// index.js 文件
    import './index.css'// 引入外部css文件
    function App() {
        return (
            <div className="App">
                <button className="foo">修改对象</button>
            </div>
        )
    }
```



###    `lodash` & `classnames` 简单 `JS` 工具库

```javascript
// lodash
// 通过 npm 下载到项目中
$ npm i -g npm
$ npm i --save lodash

// 如何导入
// Load the full build.
var _ = require('lodash');
import _ from 'lodash'
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

```javascript
// classnames
<li className="nav-sort">
className={classNames('nav-item', {active: activeTab === item.type})}
</li>
// 如果activeTab 全等于 item.type,那么 选择器的类名就是 nav-time active
```



## 受控表单绑定

```javascript
// 声明一个react状态，useState
// 通过value属性绑定react状态
// 绑定onChange事件，通过事件参数拿到输入框最新的值，反向修改到react状态
function Input() {
    const [value, setValue] = useState("")
    console.log(value)
    return (
        <input type={"text"}
               value={value}
               onChange={(e) => setValue(e.target.value)}/>
    )
}
```



## React中获取Dom

```javascript
function Input() {
    // 创建一个ref对象
    const inputRef = useRef(null)
    const [value, setValue] = useState("")
    const showDom = () => {
        // 打印dom节点对象
        console.dir(inputRef.current)
    }
    return (
        <div>
        // ref对象绑定dom元素
            <input type={"text"}
                   value={value}
                   ref={inputRef}
                   onChange={(e) => setValue(e.target.value)}/>
            <button onClick={(e) => showDom()}>显示dom</button>
        </div>
    )
}
```



## 组件通信

1. 父组件传递数据--在子组件标签上绑定属性
2. 子组件接收数据--子组件通过**props**接收参数

### 父传子

```javascript
// 组件嵌套
function Son(props) {
    console.log(props)
    return (<div>
            <span>this is 子组件</span>
            <span>{props.name}</span> 
        </div>)
    // props === {name:"hhhhh"}
}

function Input() {

    const username = "hhhhhh"
    return (<div>
            <span>this is 父组件</span>
            <Son name={username}/>
        </div>)
}

```

**props说明**

1. props 可以传递任意的数据。 数字，字符串，布尔值，数组，对象，`JSX`。
2. props 是只读对象，子组件只能读取props中的数据，不能直接进行修改，父组件的数据只能由父组件修改。

```javascript
function Son(props) {
    console.log(props)
    return (<div>
        <span>this is 子组件</span>
        <span>{props.name}</span>
        <span>JSX:{props.child}</span>
    </div>)
    // props === {name:"hhhhh"}
}

function Input() {

    const username = "hhhhhh"
    return (<div>
        <span>this is 父组件</span>
        <Son name={username}
             isTrue={true}
             number={10}
             arr={["aa", "aaa"]}
             obj={{name: "user", age: 10}}
             child={<span>这是一个span标签</span>}
             func={() => console.log("我答应了")}
        />
    </div>)
}

function Son(props) {
    console.log(props)
    return (<div>
        this is son,{props.children}
            </div>)
}

function Input() {

    return (<div>
        <Son>
            {/*组件标签里面的元素可以在父组件里面通过 props.children 获取*/}
            <span>这是一个span标签</span>
        </Son>
    </div>)
}
```



### 子传父

```javascript
// 核心：在子组件中调用父组件的函数并传参

function Son({onGetData}) {
    const data = 'this is Son'
    return (<div>
        <button onClick={()=>onGetData(data)}>click</button>
    </div>)
}
function Input() {
    const [msg,setMsg] = useState("")
    const getData = (e) => {
        console.log(e)
        setMsg(e)
    }
    return (<div>
        <span>this is App</span>
        <div style={{background:"red"}}>{msg}</div>
        <Son onGetData={getData}>

        </Son>
    </div>)
}
```



## 兄弟组件通信

实现思路：借助"状态提升"机制，通过父组件进行兄弟组件之间的数据传递。

```javascript
function A({onGetName}) {
    const name = 'this is A name'
    return (<div>
        <button onClick={() => onGetName(name)}>send</button>
    </div>)
}

function B({name}) {

    return (<div>
        {name}
    </div>)
}

function Input() {
    const [name,setName] = useState("")
    const getAname = (e) => {
        console.log(e)
        setName(e)
    }
    return (<div>
        <span>this is App</span>
        <A onGetName={getAname}></A>
        <B name={name}></B>
    </div>)
}
```



## 使用context机制跨层级组件通信

1. 使用`createContext`方法创建一个上下文对象`Ctx`.
2. 在顶层组件（`App`）中通过`Ctx.provider`组件提供数据。
3. 在底层组件中（B）通过`useContext` 钩子函数获取消费数据。
4. 所有底层组件共享顶层组件的状态数据。

```javascript
// 1. 使用createContext方法创建一个上下文对象MsgContext.
const MsgContext = createContext();

function A() {

    return (<div>
        <B/>
    </div>)
}
// 3. 在底层组件中（B）通过`useContext` 钩子函数获取消费数据。
function B() {
const msg = useContext(MsgContext)
    return (<div>
        <span>金木研爱着雾岛董香--《{msg}》</span>
    </div>)
}
// 2. 在顶层组件（`Input`）中通过MsgContext.Provider组件提供数据。
function Input() {
    const msg = "东京喰种"
    return (<div>
        <MsgContext.Provider value={msg}>
            <h1>使用Context机制跨组件通信</h1>
            <span>欢迎观看</span>
            <A/>
        </MsgContext.Provider>
    </div>)
}
```



## `useEffect` 的使用

是一个React Hook 函数，用于在React组件中创建不是由事件引起而是有渲染本身引起的操作，比如发送AJAX请求，更改`dom`等。

```javascript
const URL = "./json/list.json "

function Input() {
    // 声明一个状态数组
    const [datalist, setData] = useState([])
    useEffect(() => {
        //     发请求
        async function getList() {
            const res = await fetch(URL)
            const ResList = await res.json()
            // console.log(ResList)
            // 把请求回来的数据覆盖空数组
            setData(ResList.data.list)
        }

        getList()
    }, []);
    return (
        <div>
            this is app
            <ul>
                {datalist.map(item => (<li key={item.id}>{item.name}
                    <span>{item.age}</span>
                </li>))}
            </ul>
        </div>
    )
}
```

### `useEffect` 依赖项参数说明

`useEffect` 副作用函数的执行时机存在多种情况，根据传入依赖项的不同，会有不同的执行表现。

|     依赖项     |        副作用函数执行时机         |
| :------------: | :-------------------------------: |
|   没有依赖项   |  组件初始渲染+组件状态更新时执行  |
|   空数组依赖   |      只在初始渲染时执行一次       |
| 添加特定依赖项 | 组件初始渲染+特性依赖项变化时执行 |

```javascript
function Input() {
    // 1. 没有特定依赖项 组件初始渲染 + 组件状态更新时执行
    // useEffect(() => {
    //     console.log("副作用函数执行了")
    // });

    // 2. 空数组依赖 只在初始渲染时执行一次
    // useEffect(() => {
    //     console.log("副作用函数执行了")
    // },[]);

    // 3. 添加特定依赖项  组件初始渲染 + 特性依赖项变化时执行
    const [count, setCount] = useState(0)
    const [Str, setStr] = useState("")
        useEffect(()=>{
            console.log("副作用函数执行了")
            // 当Str状态更新时才会在控制台打印，count状态更新不会引发副作用函数执行。
        },[Str])
    return (
        <div>
            this is app
            <div>
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setStr("终焉世界之龙")}>显示字符串</button>
                <h2>{count}</h2>
                <h2>{Str}</h2>
            </div>
        </div>
    )
}
```

### 清除副作用

说明：清除副作用的函数最常见的执行时机是在**组件卸载时自动执行**。

```react
function Son() {
    useEffect(() => {
        var timer = setInterval(() => {
            console.log("定时器执行中。。。。")
        },2000)
        // 卸载组件时清除副作用
        return ()=>{
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            this is son
        </div>
    )
}

function Input() {
    const [show, setShow] = useState(true)
    return (
        <div>
            this is app
            <div>
                {show && <Son/>}
                <div>
                    <button onClick={() => setShow(false)}>卸载子组件</button>
                </div>
            </div>
        </div>
    )
}
```



## useMemo 钩子函数

`useMemo` 是 React 的一个 Hook，用于优化性能，避免在每次渲染时都进行复杂的计算。这个 Hook 会记住一个函数的返回值，并在依赖项改变时再次计算。这样，如果组件的其他部分没有变化，这个计算结果就可以复用，减少不必要的计算。

```react
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// computeExpensiveValue: 这是一个函数，用于执行昂贵的计算或创建对象。这个函数只会在其依赖项改变时被调用。
//依赖项数组 [a, b]: 这个数组列出了 useMemo 依赖于哪些变量来决定是否需要重新计算 computeExpensiveValue 的结果。当这些依赖项中的任何一个值发生变化时，useMemo 会重新执行提供的函数。

// 用途
// 1. 性能优化: 当组件中有大量计算或者创建大对象的操作，并且这些操作的结果可以直接基于某些 props 或 state 来确定时，可以使用 useMemo 来缓存这些结果，避免在每次渲染时都重复计算。

// 2.避免不必要的渲染: 如果某个子组件的属性是一个复杂计算的结果，而这个计算依据的值没有改变，那么通过 useMemo 可以确保子组件不会因为这个属性的变化而重新渲染。
```

```react
// 假设有一个组件需要计算两个大数组的合并并排序，这个操作很耗时，但只有当这两个数组本身改变时才需要重新计算
import React, { useMemo } from 'react';

function MyComponent({ array1, array2 }) {
  const mergedAndSortedArray = useMemo(() => {
    // 合并两个数组并排序，这是一个昂贵的操作
    const combined = [...array1, ...array2].sort((a, b) => a - b);
    return combined;
  }, [array1, array2]); // 仅当 array1 或 array2 改变时，才会重新计算

  return (
    <div>
      {/* 使用已排序的合并数组 */}
      {mergedAndSortedArray.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
```



## 自定义 Hook 函数

我们在组件开发的时候，一些逻辑如果可以复用，我们可以把它做成函数封装在外面，需要的时候直接调用就行，这样做提高了代码复用性。

封装自定义 hook 的通用思路。

1. 声明一个以use打头的函数。
2. 在函数体内封装可复用的逻辑（只要是可复用的逻辑）
3. 把组件中用到的状态或者回调 return 出去。

```react
// 需求：自定义一个显示 & 隐藏元素节点的hook
function Input() {
    // 自定义 hook 参数可以重命名
    const [aaa, TTT] = useToggle()
    return (
        <div>
            <div>
                <div>
                    <button onClick={() => TTT()}>点击</button>
                </div>
                {aaa && <h1>我准备好了</h1>}
            </div>
        </div>
    )
}

// 自定义 hook
// 1. 函数名以 use 开头
// 2. 函数内部使用 React 的 Hook
function useToggle() {
    const [value, setShow] = useState(true)
    const ToggleShow = () => {
        setShow(!value)
    }

    return [
        value,
        ToggleShow
    ]
}
```

### React Hook 使用规则

1. 只能在组件内或者其他自定义hook函数中调用。
2. 只能在组件的顶层调用，不能嵌套在 if , for ,其他函数中。



## Redux 集中状态管理工具

Redux是React最常用的集中状态管理工具，可以独立于框架运行。

作用：通过集中管理的方式管理应用的状态。



案例：使用纯Redux实现计数器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.bootcss.com/redux/4.0.0/redux.js"></script>
</head>
<body>

<div>
    <button id="decrement">-</button>
    <span>0</span>
    <button id="increment">+</button>
</div>
<script>
    <!---->
    // 1. 定义reducer函数
    // 作用：根据不同的action对象，返回不同的状态对象
    // state：管理的数据初始状态
    // action：对象 type 标记当前想要做什么样的修改
    function reducer(state = {count: 0}, action) {
        // 数据不可变，基于原始状态生成一个新的状态
        if (action.type === 'INCREMENT') {
            return {count: state.count + 1}
        }
        if (action.type === 'DECREMENT') {
            return {count: state.count - 1}
        }
        return state
    }

    // 2. 使用reducer函数生成state实例
    const store = Redux.createStore(reducer)
    // 3.通过store实例的subscribe订阅数据变化
    // 回调函数可以在数据变化时执行
    store.subscribe(() => {
        document.querySelector('span').innerHTML = store.getState().count

    })
    // 4.通过store实例的dispatch函数提交action更新状态
    const inBtn = document.getElementById('increment')
    const deBtn = document.getElementById('decrement')
    inBtn.addEventListener('click', () => {
//     增
        store.dispatch({
            type: 'INCREMENT'
        })
    })

    deBtn.addEventListener('click', () => {
// 减
        store.dispatch({
            type: 'DECREMENT'
        })
    })

    // 5.通过store实例的getState获取最新的状态更新到视图中
</script>
</body>
</html>
```

### `Redux`管理数据流程梳理

1. **state** - 一个对象 存放着我们管理的数据状态。
2. **action** - 一个对象 用来描述你想怎么该数据。
3. **reducer** - 一个函数 根据action的描述生成一个新的state。

### `redux`环境搭建

1. Redux Toolkit --官方推荐编写redux逻辑的方式，是一套工具的集合集。
2. react-redux 用来链接redux和react组件的中间件

```react
// 使用CRA快速创建react项目
npx create-react-app react-redux
//安装配套工具
npm i @reduxjs/toolkit react-redux
// 启动项目
npm run start
```



# Reactrouter

**什么是前端路由？**

一个路径 path 对应一个组件 component 当我们在浏览器中访问一个 path 的时候，path 对应的组件会在浏览器页面中进行渲染。

```react
// 1. 创建项目并且安装依赖
npx create-react-app [name]
npm i
// 2. 安装最新的 ReactRouter包
npm i react-router-dom
// 3. 启动项目
npm run start
```

**什么是路由导航？**

路由系统中的多个路由之间需要进行**路由跳转**，并且在跳转的同时有可能需要**传递参数**进行通信。

- 声明式导航

```react
// 声明式导航是指通过模版中<link/>组件描述出要跳转到哪里去，比如后台管理系统的左侧导航栏通常使用这种方式。
<link to="/article" >文章</link>
// 通过给组件的to属性制定要跳转到路由path，组件会被渲染为浏览器支持的a链接，如果需要传参直接通过字符串拼接的方式拼接参数就行。
```

- 编程式导航

```react
// 编程式导航是指通过'useNavigate'钩子得到导航方法，然后通过调用方法以命令式的形式进行路由跳转，比如想在登录请求完毕之后跳转就可以选择这种方式，更加灵活。
<button onClick={()=>navigate('/article')}>跳转文章</button>
// 语法说明：通过调用navigate()方法传入地址path实现跳转
```

**导航传参**

```react
// 第一种方法 from表单传参
// 传输参数组件
<button onClick={()=>navigate('/article?id=101&name=jack')}>跳转</button>

// 接收参数组件
import {useSearchParams} from 'react-router-dom'
const [params] = useSearchParams()
let id = params.get('id')

// 第二种方法 json对象传参
// 传输参数组件
<button onClick={()=>navigate('/article/1001/kerwin')}>跳转</button>
// router 给path添加占位符
{
    path:'/article/:id/:name',
    element:<Article/>
}
//接收参数组件
const params = useParams()
const id = params.id
const name = params.name
```

**什么是嵌套路由**？

在一级路由里面内嵌了其他路由，嵌套在一级路由内的又叫二级路由。

1. 使用 `children` 属性配置路由嵌套关系
2. 使用 `<Outlet/>` 组件配置二级路由渲染位置 类似于`Vue`的 `<router-view></router-view>`

**默认二级路由**

```react
{
        // 嵌套路由 嵌套在Layout组件中
        path: "/",
        element: <Layout/>,
        children: [
            {
                // 默认路由 添加一个index为true
                index:true,
                element: <About/>,
            },
            {
                path: "board",
                element: <Board/>,
            },
        ],
    }
```

**404路由配置**

场景：当浏览器输入**URL**的路径在整个路由配置中都找不到对应的path，为了用户体验，可以使用 404 兜底组件进行渲染。

实现步骤：

1. 准备一个 **`NotFound`** 组件
2. 在路由数组的末尾，以*作为path进行配置

**两种路由模式**

1. history模式  `createBrowserRouter`
2. hash模式  `createHashRouter`

| 路由模式 |   URL表现   |          底层原理           | 是否需要后端支持 |
| :------: | :---------: | :-------------------------: | ---------------- |
| history  |  url/login  | history对象 + pushState事件 | 需要             |
|   hash   | url/#/login |     监听 hashChange事件     | 不需要           |

## 路径解析配置

`CRA`本身把`Webpack`配置包装到了黑盒里无法直接修改，需要借助一个插件-- `carco` 解析@为路径 src/

配置步骤：

1. 安装 `craco`

​	   `npm i -D @craco/craco`

1. 项目根目录下创建配置文件

   `craco.config.js`

2. 配置文件中添加路径解析配置

3. 包文件中配置启动和打包命令

```js
// craco.config.js 文件 负责解析@符号
const path = require('path')

module.exports = {
  webpack: {
    //   别名配置
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
```

```json
// jsconfig.json 文件 负责代码自动联想提示
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

antD-mobile主题定制 适用于 **react** 的移动端组件库

1. 全局定制

   **整个应用范围内**的组件都生效

   ```css
   /* theme.css 文件 */
   :root:root{
       --adm-color-primary: rgba(86, 196, 184, 0.93);
   }
   ```

   

2. 局部定制

​		**只在某些元素内部**的组件生效

```css
        /* theme.css 文件 或者 局部scss文件*/
        .自定义类名{
             --adm-color-primary: rgba(86, 196, 184, 0.93);
        }
```

## 使用CRA初始化项目

`npx create-react-app [name]`

| **文件夹** |    作用    |
| :--------: | :--------: |
|    apis    |    接口    |
|   assets   |  静态资源  |
| components |  通用组件  |
|   pages    | 页面级组件 |
|   router   | 路由Router |
|   store    | Redux状态  |
|   utils    |  工具函数  |



## 使用Token做路由权限控制

```react
import {getToken} from "@/utils";
import {Navigate} from "react-router-dom";

// 鉴权路由
// children: 路由组件
// 如果token存在，则渲染children，否则跳转到登录页

export function AuthRoute({children}) {
    const token = getToken()
    if (token) {
        return children
    } else {
        return <Navigate to="/login"/>
    }
}

// store index.js
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout/></AuthRoute>
    },
    {
        path: "/login",
        element: <Login/>,
    }
])
```



## Layout 处理token失效

什么是token失效？

为了用户的安全和隐私考虑，在**用户长时间未在网站中做任何操作且规定的时间失效之后**，当前的token就会失效，一旦失效，不能再作为用户令牌标识请求隐私数据。

前端如何知道token已经失效了？

通常在token失效之后再去请求接口，后端会返回**401状态码**，前端可以监控这个状态做后续的操作。

token失效了前端做什么？

1. 在 axios 响应拦截器里面监控401状态码。
2. 清除失效token，跳转登录界面。

## 拓展：API模块的封装

```react
// 用户登录模块的请求
import {request} from "@/utils";

// 1. 封装登录请求API
function loginUserAPI(LoginData) {
    return request({
        url: "/authorizations",
        method: "POST",
        data: LoginData
    })
}

// 2. 封装查询用户信息的请求API
function findUserAPI() {
    return request({
        url: '/user/profile',
        method: 'GET'
    })
}

export {
    loginUserAPI,
    findUserAPI
}
```



### 组件库 react-quill 富文本编辑器

1. 安装 react-quill 富文本编辑器

```
npm i react-quill@2.0.0-beta.2 --legacy-peer-deps
```

2. 导入编辑器组件和配套样式文件
3. 渲染编辑器组件
4. 调整编辑器组件样式



## 枚举条件渲染

```react
// 定义一个对象
const status = {
    1:<Tag color="warning">待审核</Tag>,
    2:<Tag color="success">审核通过</Tag>
}

{
    title: '状态',
    dataIndex: 'status',
    render: data => status[data]
}
```



### 文章列表-筛选功能的实现

筛选功能的本质：给请求列表接口传递不同的参数和后端要不同的数据。

实现步骤：

1. 准备完整的请求参数对象
2. 获取用户选择的表单数据
3. 把表单数据放到接口对应的字段中
4. 重新调用文章列表接口渲染Table列表



## 打包优化 - 路由懒加载

1. **什么是路由懒加载？**

路由懒加载是指路由的 `JS` 资源只有在被访问时才会动态获取，目的是为了优化项目首次打开的时间。

2. 如何进行配置？

- 把路由修改为由React提供的lazy函数进行动态导入
- 使用React内置的Suspense 组件包裹路由中element选项对应的组件。

```react
// 1. 使用lazy函数引入组件 实现路由懒加载
const Layout = lazy(() => import("@/pages/Layout"));
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Publish = lazy(() => import("@/pages/Publish"));
const Article = lazy(() => import("@/pages/Article"));
const Hotpoint = lazy(() => import("@/pages/Hotpoint"));
const User = lazy(() => import("@/pages/User"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout/></AuthRoute>,
        children: [
            {
                index: true,
                element: <Suspense fallback={"加载中..."}><Home/></Suspense>
            },
            {
                path: "/publish",
                element: <Suspense fallback={"加载中..."}><Publish/></Suspense>,
            },
            {
                path: "/article",
                element: <Suspense fallback={"加载中..."}><Article/></Suspense>,
            },
            {
                path: "/hot",
                element: <Suspense fallback={"加载中..."}><Hotpoint/></Suspense>,
            },
            {
                path: "/user",
                element: <Suspense fallback={"加载中..."}><User/></Suspense>,
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>,
    },
])
```



## 打包优化-包体积分析

```react
//  "analyze": "source-map-explorer 'build/static/js/*.js'"  配置执行命令
//   npm i source-map-explorer --legacy-peer-deps 下载包体积可视化模块
//   npm run analyze  运行命令 
```



什么是包体积分析？

通过可视化的方式，直观的体现出项目中各种包打包之后的体积的大小，方便做优化。





# React 性能优化 API

## useReducer

1. 定义一个reducer函数（根据不同的action返回不同的新状态）
2. 在组件内部调用useReducer,并传入reducer函数和状态的初始值。
3. 事件发生时，通过dispatch函数分派一个action对象（通知reducer要返回哪个新状态并渲染UI）

```react
import {useReducer} from "react";
// 第一步
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'SET':
            return action.payload
        default:
            return state
    }
}

function App() {
    // 第二步
    // 类似于 useState 用于更新状态渲染页面 处理复杂数据
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div className="App">
      <span>this is a test
      </span>
            <div>
               {/*第三步*/}
                <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
                {state}
                <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
                {/*传参*/}
                <button onClick={() => dispatch({type: 'SET', payload: 200})}>200</button>
            </div>
        </div>
    );
}
```



## useMemo

作用：在组件每次重新渲染的时候**缓存计算的结果**。

```react
import {useReducer, useMemo, useState} from "react";

// 斐波那契数列
function fib(n) {
    console.log('开始计算了')
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

function App() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    // useMemo 缓存   返回计算得到的结果
    const result = useMemo(() => fib(count1), [count1])
    console.log("组件重新渲染了")
    return (
        <div className="App">
      <span>this is a test
      </span>
            <div>
                <button onClick={() => setCount1(count1 + 1)}>change1----{count1}</button>
                <button onClick={() => setCount2(count2 + 1)}>change2----{count2}</button>
                {result}
            </div>
        </div>
    );
}
```



## `React.memo`

说明：经过memo函数包裹生成的缓存组件**只有在props发生变化**的时候才会重新渲染。

```react
import {useReducer, useMemo, useState, memo} from "react";

// react 默认渲染机制 1. 函数组件每次都会重新渲染 2. 函数组件每次都会重新执行 3. 子组件也会重新渲染

function App() {
    console.log("父组件重新渲染了")
    const [count, setCount] = useState(0)
    return (
        <div className="App">
      <span>this is a test
      </span>
            <div>
                <div>
                    <button onClick={() => setCount(count + 1)}>{count}</button>
                </div>
                <Memo ooo={count}/>
            </div>
        </div>
    );
}

// 使用memo函数进行缓存 只有函数组件的props发生变化时才会重新渲染
const Memo = memo(
    function Son({count}) {
        console.log("子组件重新渲染了")
        return (
            <div>
                <span>this is son</span>
            </div>
        )
    })

```

```react
// memo的比较机制 以及性能优化

import {useReducer, useMemo, useState, memo} from "react";

// react 默认渲染机制 1. 函数组件每次都会重新渲染 2. 函数组件每次都会重新执行 3. 子组件也会重新渲染

function App() {
    console.log("父组件重新渲染了")
    const [count, setCount] = useState(0)
    // 父组件一渲染 数组的引用类型也会发生改变
    // const list = [1, 2, 3]
    const list = useMemo(() => {
        // useMemo 空数组依赖 只会在页面最开始渲染的时候执行一次 把 list 保存在 缓存里面 不会随着父组件重新渲染
        return [1, 2, 3]
    },[])
    return (
        <div className="App">
      <span>this is a test
      </span>
            <div>
                <div>
                    <button onClick={() => setCount(count + 1)}>{count}</button>
                </div>
                <Memo list={list}/>
            </div>
        </div>
    );
}

// memo 的比较机制 1. 浅比较 2. 引用类型比较的是引用地址是否相等
// 1. 传递一个引用类型的prop 比较的是新值和旧值的引用是否相等 当父组件重新渲染 传递的是一个新的数组引用
// 2. 保证引用稳定 使用useMemo存在缓存里面
const Memo = memo(
    function Son({list}) {
        console.log("子组件重新渲染了")
        return (
            <div>
                <span>this is son--{list}</span>
            </div>
        )
    })

```



## useCallback

作用：在组件**多次重新渲染的时候缓存函数**。



## forwardRef

```react
import {useReducer, useMemo, useState, memo, useRef, forwardRef} from "react";

function App() {
    const InputRef = useRef(null)
    const handle = () => {
        // 点击之后子组件表单聚焦
        InputRef.current.focus()
    }
    return (
        <div className="App">
      <span>this is a test
      </span>
            <div>
                <Input ref={InputRef}/>
                <button onClick={handle}>focus</button>
            </div>
        </div>
    );
}


const Input = forwardRef((props, ref) => {
        return (
            <div>
                <input type="text" ref={ref}/>
            </div>
        )
    }
)
```

通过使用 `forwardRef`，即使Input是一个函数组件，我们仍然可以在父组件中直接访问并操作它的DOM元素，而不需要将其转换为类组件。这在需要对子组件进行直接DOM操作（如聚焦、滚动等）时非常有用。



## useImperativeHandle

此钩子允许你修改通过 ref 暴露的内容，实质上是定制了组件在进行命令式编程时的公共API。



## 类组件基础结构

类组件就是通过 `JS` 中的类来组织组件中的代码。

1. 通过类属性state定义状态数据
2. 通过setState方法来修改状态数据
3. 通过render来写UI模版（JSX语法一致）

```react
import {useReducer, useMemo, useState, memo, useRef, forwardRef, useImperativeHandle, Component} from "react";

function App() {

    return (
        <div className="App">
            这里是父组件
            <div>
                <Counter/>
            </div>
        </div>
    );
}

// 使用class类组件
class Counter extends Component {

//     编写组件的逻辑结构
//     1. 定义状态数据 2. 定义事件处理函数 3. 定义渲染函数render
    state = {
        count: 0
    }

    // 自定义事件处理函数
    handleSetCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // 自定义渲染函数 JSX
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleSetCount}>+1</button>
            </div>
        )
    }
}
```



## 类组件的生命周期函数

概念：组件从创建到销毁的**各个阶段自动执行的函数**就是生命周期函数。

```react
1. componentDidMount:组件挂载完毕自动执行 - 异步数据获取
2. componentWillUnmount:组件卸载时自动执行 - 清理副作用
3. componentDidUpdate:组件状态更新时自动执行
```

```react
import {useReducer, useMemo, useState, memo, useRef, forwardRef, useImperativeHandle, Component} from "react";

function App() {
    const [show, setShow] = useState(true)
    return (
        <div className="App">
            这里是父组件
            <button onClick={() => setCount(!bbb)}>change</button>
            <div>
                {show && <Counter/>}
            </div>
        </div>
    );
}

// 使用class类组件
class Counter extends Component {

//     编写组件的逻辑结构
//     1. 定义状态数据 2. 定义事件处理函数 3. 定义渲染函数render
    state = {
        count: 0
    }

    // 生命周期函数 挂载完成，获取数据
    componentDidMount() {
        console.log('组件挂载完成')
    }

    componentDidUpdate() {
        console.log('组件状态更新')
    }

// 可以用于清除副作用 1. 卸载组件 2. 卸载组件时清除定时器 3. 卸载组件时清除事件监听
    componentWillUnmount() {
        console.log('组件卸载')
    }

    // 自定义事件处理函数
    handleSetCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // 自定义渲染函数
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleSetCount}>+1</button>
            </div>
        )
    }
}
```



## 类组件的组件通信

概念：类组件和Hooks编写的组件在组件通信的**思想上完全一致**。

1. 父传子：通过prop绑定数据
2. 子传父：通过prop绑定父组件中的函数，子组件调用
3. 兄弟通信：状态提升，通过父组件做桥接

```react
import {useReducer, useMemo, useState, memo, useRef, forwardRef, useImperativeHandle, Component} from "react";

function App() {
    const [show, setShow] = useState(true)
    return (<div className="App">
        <Father/>
    </div>);
}

// 1. 父传子 prop函数
// 2. 子传父 调用函数传参
// 父组件
class Father extends Component {

    state = {
        msg: "这是父组件传过来的"
    }
    ongetData = (data) => {
        // 传过来子组件的数据
        console.log(data)
    }

    // 自定义渲染函数
    render() {
        return (<div>
            {/*把父组件的函数传给子组件*/}
            <Child msg={this.state.msg} onGet={this.ongetData}/>
        </div>)
    }
}

// 子组件
class Child extends Component {

    // 自定义渲染函数
    render() {
        return (<div>
            <p>这里是子组件</p>
            <p>{this.props.msg}</p>
            {/*接收父组件传过来的函数 并且传参*/}
            <button onClick={() => this.props.onGet("dadadada")}>send</button>
        </div>)
    }
}

```



## zustand 极简的状态管理工具

```react
import {create} from "zustand";

// 使用Zustand创建store
// Zustand是一个轻量级的状态管理库 类似于redux
const useStore = create((set) => {
    // 1. 函数参数必须返回一个对象，对象内部编写状态数据和方法
    // 2. set是用来修改数据的专门方法必须调用它来修改数据
    // 语法1: 参数是函数 需要用到老数据
    // 语法2: 参数直接是一个对象 set({ count: 100 })
    return {
        // 存储状态数据
        count: 0,
        // 更新状态数据的方法
        increment: () => set((state) => ({count: state.count + 1}))
    }
})

function AppZustand() {
    const {count, increment} = useStore();
    return (
        <div>
            AppZustand--{count}
            <div>
                <button onClick={increment}>add</button>
            </div>
        </div>
    )
}

export default AppZustand;
```

### 异步支持

```react
import {create} from "zustand";
import {ChannelAPI} from "@/apis";
import {useEffect} from "react";

const useStore = create((set) => {
    return {
        datalist: [],
        // 异步请求数据
        FetchData: async () => {
            const res = await ChannelAPI()
            set({datalist: res.data.channels})
        }

    }
})

function AppZustand() {
    const {datalist, FetchData} = useStore();
    useEffect(() => {
        FetchData()
    }, [datalist]);
    return (
        <div>
            <div>
                <ul>
                    {datalist.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default AppZustand;
```



### 切片模式

场景：当单个store比较大的时候，可以采用 **切片模式** 进行模块拆分组合，类似于模块化。



# React与TypeScript

### 	搭建项目

```react
// 搭建react+ts项目开发环境
npm create vite@latest 【项目名字】 --template react-ts

// 安装依赖 npm i

// 运行项目 npm run dev
```



## useState 自动推导

1. 根据初始值自动判断
2. 适于明确的初始值



## useState 传递泛型参数

useState本身是一个泛型函数，可以传入具体的自定义类型

```tsx
type User = {
    name:string
    age:number
}
const [user,setUser] = useState<User>();
```

说明：

1. 限制useState函数参数的初始值必须满足类型为：User | ()=>User
2. 限制setUser函数的参数必须满足类型为：User | ()=>User | undefined
3. user状态数据具备User类型相关的类型提示

```tsx
import {useState} from "react";

type User = {
    name: string
    age: number
}

function App() {
    //     初始值是一个对象
    const [user, setUser] = useState<User>({name: 'qqq', age: 18})

    //     初始值是一个函数，返回一个类型相同的对象
    //     const [user, setUser] = useState<User>(() => {
    //         return {
    //             name: 'qqq',
    //             age: 18
    //         }
    //     })

    // const change = () => {
    //     setUser(() => {
    //         return {
    //             name: 'qqq',
    //             age: 18
    //         }
    //     })
    // }
    return (
        <>
            <div>
                <p>{user.name}</p>
                <p>qqq</p>
                this is app 666
                <p>666</p>
            </div>
        </>
    )
}

export default App
```

### 初始值为null

1. 限制useState函数参数的初始值可以是 User | null
2. 限制useState函数参数类型可以是 User | null

```tsx
import {useState} from "react";

type User = {
    name: string
    age: number
}

function App() {
    //     联合类型
    const [user, setUser] = useState<User | null>({name: 'qqq', age: 18})
    const change = () => {
        setUser({name: 'qqq', age: 18})
        setUser(null)
    }
    return (
        <>
            <div>
                {/*
                1. 为了类型安全 可选链做为null值判断
                2. 当user不为null值时可以进行点运算，为null值时不会进行点运算，相当于类型判断
                */}
                <p>{user?.name}</p>
                <p>qqq</p>
                this is app 666
                <p>666</p>
            </div>
        </>
    )
}

export default App
```

### 基础运用--父传子

```tsx
// type Props = {
//     name: string
//     age: number
// }

interface Props {
    name: string
    age?: number // 可选参数
}

function Button(props: Props) {
    const {name, age} = props

    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
        </>
    )
}

function App() {
    return (
        <>
            <div>
                <Button name={"折果"} age={20}/>
            </div>
        </>
    )
}

export default App
```

### 为children添加类型

```tsx
import React from "react";

interface Props {
    name: string
    children: React.ReactNode
}

// children 可以传递多种参数
function Button(props: Props) {
    const {name, children} = props

    return (
        <>
            <p>{name}</p>
            <button>{children}</button>
        </>
    )
}

function Son() {
    return (
        <>
            <div>
                <ul>
                    <li>111</li>
                    <li>111</li>
                </ul>
            </div>
        </>
    )
}

function App() {
    return (
        <>
            <div>
                <Button name={"折果"}>
                    <h1>点击</h1>
                    <h1>点击</h1>
                </Button>
                <Button name={"真帅"}>
                    点击
                </Button>
                <Button name={"传递组件"}>
                    <Son/>
                </Button>
            </div>
        </>
    )
}

export default App
```

### 基础运用--子传父

```tsx
interface Props {
    onGetMsg?: (msg: string) => void
}


function Son(props: Props) {
    const msg = 'hello'
    const {onGetMsg} = props
    return (
        <>
            <button onClick={() => onGetMsg?.(msg)}>click</button>
        </>
    )
}

function App() {
    const Handle = (msg: string) => {
        console.log(msg)
    }
    return (
        <>
            <div>
                <Son onGetMsg={(msg) => {
                    console.log(msg)
                }}/>
                <Son onGetMsg={Handle}/>
            </div>
        </>
    )
}

export default App
```

### useRef

```tsx
// 1. 获取dom
// 2. 稳定引用的存储器 （定时器管理）


import {useEffect, useRef} from "react";


function App() {
    const domRef = useRef<HTMLInputElement>(null)
    const domRef2 = useRef<undefined | number>(undefined)
    useEffect(() => {
        domRef.current?.focus()

        domRef2.current = setInterval(() => {
            console.log(domRef2.current)
        }, 1000)

        return () => {
            clearInterval(domRef2.current)
        }
    }, [])
    return (
        <>
            <div>
                <input ref={domRef}/>
            </div>
        </>
    )
}

export default App
```



## TS-vite 配置路径别名

```tsx
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// 由于是ts环境 需要导入 npm i @types/node -D 包
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})

// tsconfig.json
// 插入配置
"baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
```

### 接口通用泛型和接口具体类型

```tsx
import {http} from "@/utils";

// 1. 定义泛型
type ResType<T> = {
    message: string;
    data: T
}

// 2. 定义具体的借口类型
type ChannelItem = {
    id: number
    name: string
}

type ChannelRes = {
    channels(channels: any): unknown;
    channelList: ChannelItem[]
}

// 请求频道列表
export function fetchChannelListApi() {
    return http.request<ResType<ChannelRes>>({
        url: '/channels',
    })
}
```



### antd-mobile List列表使用方法

交互要求：List列表在滑动到底部时，自动加载下一页列表数据。

实现思路：

1. 滑动到底部触发加载下一页动作。

`<InfiniteScroll/>`

2. 加载下一页数据

`pre_timestamp 接口参数`

3. 把老数据和新数据做拼接处理

   `[...oldList,...newList]`

4. 停止监听边界值

   `hasMore`

```
import {Image, InfiniteScroll, List} from 'antd-mobile'
// mock数据
import {fetchListApi} from '@/api/ChannelList.ts'
import type {ListRes} from '@/api/ChannelList.ts'
import {useEffect, useState} from "react";

type Props = {
    channelId: string
}
const HomeList = (props: Props) => {
    const {channelId} = props
    const [page, setPage] = useState(1)

    const [list, setList] = useState<ListRes>({
        page: 1,
        per_page: 10,
        results: [],
        total_count: 16
    })
    useEffect(() => {
        const getList = async () => {
            try {
                const res = await fetchListApi({
                    channel_id: channelId,
                    page: 1
                })
                setList(res.data.data)
            } catch (error) {
                // @ts-ignore
                throw new Error("获取数据失败", error)
            }
        }
        getList()
    }, [channelId]);

    // 开关 标记是否还有新数据
    // 上拉加载的必要条件 1. hasMore必须为true 2. 必须小于threshold阈值
    const [hasMore, setHasMore] = useState(true)
    // 请求加载数据函数 异步
    const loadMore = async () => {
        // 编写下一步核心逻辑

        try {
            const res = await fetchListApi({
                channel_id: channelId,
                page: page
            })
            setList({
                ...list,
                page: page,
                results: [...list.results, ...res.data.data.results]
            })

            if (res.data.data.results.length === 0) {
                setHasMore(false)
            } else {
                setPage(page + 1)
            }
        } catch (error) {
            // @ts-ignore
            throw new Error("获取数据失败", error)
        }

    }

    return (
        <>
            <List>
                {list.results.map((item) => (
                    <List.Item
                        key={item.id}
                        prefix={
                            <Image
                                src={item.cover.images[0] ? item.cover.images[0] : '@/assets/react.svg'}
                                style={{borderRadius: "50%"}}
                                fit="cover"
                                width={50}
                                height={50}
                            />
                        }
                        description={item.pubdate}>
                        {item.title}
                    </List.Item>
                ))}
            </List>

            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10}/>
        </>
    )
}

export default HomeList
```

