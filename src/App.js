import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'
import AddPost from './pages/AddPost'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/single/:id" element={<SinglePost />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
