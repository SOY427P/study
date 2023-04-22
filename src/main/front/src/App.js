import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
    const [board, setBoard] = useState([]);
    useEffect(() => {
        fetch("/board/api/list")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBoard(data);
            });
    }, []);

    const date_formatter = function (val) {
        return new Date(val).toLocaleDateString();
    };
    return (
        <div className="App">
            <table border="1" width="80%" height="200">
                <caption>게시판</caption>
                <thead>
                <tr align="center">
                    <td></td>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                </thead>
                <tbody>
                {board.map(b => (
                    <tr key={b.id} align="center">
                        <td>{b.id}</td>
                        <td>{b.title}</td>
                        <td>{b.contents}</td>
                        <td>{b.writer}</td>
                        <td>{date_formatter(b.reg_date)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


