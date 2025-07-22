import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import CharacterList from './components/CharacterList';
import FavoritesPage from './components/FavoritesPage';
import CharacterDetails from './components/CharacterDetails';
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<CharacterList />}></Route>
          <Route path='/favorites' element={<FavoritesPage />}></Route>
          <Route path='character/:id' element={<CharacterDetails/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
