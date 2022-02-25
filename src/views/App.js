import logo from './logo.svg';
import './App.scss';
import ListToDo from './ToDos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          Simple ToDo Apps with React.JS
        </p>
        
        <ListToDo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
