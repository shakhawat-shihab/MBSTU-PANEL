import './App.css';
import React from 'react';
import NavigationBar from './Pages/Shared/Navigationbar/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import SpecialPage from './Pages/SpecialPage/SpecialPage';
function App() {
  // const a = React.version;
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path='/secure'>
            <SpecialPage></SpecialPage>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
