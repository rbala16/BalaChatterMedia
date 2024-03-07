import './App.css';
import { BrowserRouter,Navigate,Routes,Route } from 'react-router-dom';
import HomePage from 'scenes/homePage/homePage';
import LoginPage from 'scenes/loginPage/loginPage';
import profilePage from 'scenes/profilePage/profilePage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<loginPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/profile/:userId' element={<profilePage/>} />    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
