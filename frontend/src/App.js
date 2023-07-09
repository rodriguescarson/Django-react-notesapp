import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import NotePage from './pages/NotePage'
import NotesListPage from './pages/NotesListPage'
import Header from './components/Header'
import './App.css';
function App() {
  return (
    <HashRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage/>} />
            <Route path="/note/:id" element={<NotePage />} />
         </Routes>
        </div>      </div>
    </HashRouter>
  );
}

export default App;