import React, {useEffect , Fragment, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './route/index'; 
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import { jwtDecode } from "jwt-decode";
import { isJsonString } from './utils';
import * as UserService from './services/UserService';
import { updateUser } from './redux/slice/userSlide';
import {useDispatch, useSelector} from "react-redux"
import Loading from './components/LoadingComponent/Loading';


function App() {
  const dispatch=useDispatch();
  const [isPending, setIsPending]= useState(false)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    setIsPending(true)
    const {storageData, decoded}= handleDecoded()
      if(decoded?.id){
        handleGetDetailsUser(decoded?.id, storageData)
      }
      // setIsPending(false)
    } 

    // setIsLoading(true)
    // const { storageData, decoded } = handleDecoded()
    // if (decoded?.id) {
    //   handleGetDetailsUser(decoded?.id, storageData)
    // }
    // setIsLoading(false)
  , [])


  const handleDecoded = () => {
    let storageData= localStorage.getItem('access_token')
    let decoded ={}
    if(storageData && isJsonString(storageData)){
      storageData= JSON.parse(storageData)
      decoded= jwtDecode(storageData)
      
    }
    return{decoded, storageData}
  }


  UserService.axiosJWT.interceptors.request.use(async(config) =>{
    const  currentTime= new Date()
    const { decoded}= handleDecoded()
    // Do something before request is sent
    if(decoded?.exp < currentTime.getTime() / 1000){
      const data= await UserService.refreshToken()
      config.headers['token'] ='Bearer ${data?.access_token}'
    }
    return config;
  }, (err) =>{
    // Do something with request error
    return Promise.reject(err);
  });

  const handleGetDetailsUser = async (id, token) => {
    // const storage = localStorage.getItem('refresh_token')
    // const refresh_token = JSON.parse(storage)
    const res = await UserService. getDetailsUser(id, token)
    console.log('res', res)
    dispatch(updateUser({ ...res?.data, access_token: token }))
    setIsPending(false)
  }


  return (
    <div>
      <Loading isPending={isPending} style={{background:'#ccc'}}  >
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const ischeckAuth = !route.isPrivate || user.isAdmin

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
      </Loading>
    </div>
  );
}

export default App;
