import React, { Fragment} from 'react';
import {useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './route/index'; 
import axios from 'axios';


function App() {

  useEffect(()=>{
    fetchAPI()
  }, [])


  console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
  const fetchAPI = async()=>{
    const res =await axios.get(`http://localhost:3001/api/product/get-all`)
    console.log('res', res)
  }


  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout =route.isShowHeader ? DefaultComponent: Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
            } />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
