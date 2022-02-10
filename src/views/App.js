import logo from './logo.svg';
import './App.scss';
import MyComponent from './examples/MyComponent';

/**
 *  Có 2 loại Component:
 *  + class components: khi cần xử lí Logic, handleState ...
 *  + function components: Nhận vào như thế nào thì nó sẽ render nguyên như vậy
 *    Nó không hề xử lí Logic cái gì cả 
 *    Chứa 2 loại function:
 *      - function bình thường: 
 *          ví dụ: function App(){}
 *      - arrow function: khai báo bằng 1 cái biến
 *          ví dụ: const App = (){}
 *
 * 
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
