import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Search from './Pages/SearchPage/Search';
import Root from './Pages/RootPage/Root';
import Movielist from './Pages/MovieList/Movielist';
import Tvshow from './Pages/Tv Show/Tvshow';
import People from './Pages/PeopleList/People';
import PersonInfo from './Pages/PersonInfoPage/PersonInfo';
import Movieinfo from './Pages/MovieInfopage/Movieinfo';
import './i18n/i18n'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route  index element={<Root/>}/>
              <Route path='/search/:query' element={<Search/>}/>
              <Route path='/movie/:sort' element={<Movielist/>}/>
              <Route path='/tv/:sort' element={<Tvshow/>}/>
              <Route path='/populerpeople' element={<People/>}/>
              <Route path='/populerpeople/:id' element={<PersonInfo/>}/>
              <Route path='/movieinfo/:movie' element={<Movieinfo/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);