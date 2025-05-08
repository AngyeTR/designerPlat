import 'gridstack/dist/gridstack.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { EditorPage } from './Pages/EditorPage';
import { HomePage } from './Pages/HomePage';
import { ResourcesPage } from './Pages/ResourcesPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/editor' element={<EditorPage/>} />
      <Route path='/resources' element={<ResourcesPage/>} />
    </Routes>
    )}

export default App
