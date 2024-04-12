import React, {useEffect , Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './route/index'; 
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'

function App() {


  // useEffect(()=>{
  //   fetchAPI()
  // }, [])

  // const fetchAPI = async()=>{
  //   const res =await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`)
  //   return res.data
  // }
 
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchAPI })

  // console.log('query', query)

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
