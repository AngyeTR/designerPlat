import 'gridstack/dist/gridstack.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { EditorPage } from './Pages/EditorPage';
import { HomePage } from './Pages/HomePage';
import { ResourcesPage } from './Pages/ResourcesPage';
import { ViewPage } from './Pages/ViewPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/view/:id' element={<ViewPage />}/>
      <Route path='/editor/:id' element={<EditorPage/>} />
      <Route path='/resources' element={<ResourcesPage/>} />
    </Routes>
    )}

export default App
