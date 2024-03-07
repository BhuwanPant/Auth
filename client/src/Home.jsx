import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import axios from 'axios';

function Home() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [isAuthenticated , setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5173/login',{name,email,password,isAuthenticated});
      if(response[1]?.data?.message == 'Login Succesfully') setData(response[1]);
      // console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // console.log(data)
  return (
    <>
        <Navbar/>
        <Carousel/>
    </>
  )
}

export default Home