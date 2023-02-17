import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='flex justify-between text-center p-3 border-b-2 border-gray-500 font-bold'>
        <span className='text-3xl'>Filmy<span className='text-red-500'>Verse</span></span>
        <Link to={"/addmovie"}>
        <Button className='text-lg text-white flex text-center justify-center items-center cursor-pointer'><AddIcon className='mr-1'/>Add new</Button>
        </Link>
    </div>
  )
}

export default Header