'use client'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from './nav-links';
import { useState } from 'react';
import { Drawer, Box } from '@mui/material';

// ハンバーガーメニュー
export default function Hamburger() {

  // メニューを開くかの判定
  const [isOpen, setIsOpen] = useState(false);

  // ハンバーガーメニューを押下すると発火
  function handleChageIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div onClick={handleChageIsOpen}>
        {!isOpen && <MenuIcon style={{ fontSize: 48 }} />}
      </div>
      <Drawer anchor='right' open={isOpen} onClose={handleChageIsOpen}>
        <Box width={200}>
          <Box component="div" onClick={handleChageIsOpen} className='flex mb-8 flex-row-reverse'>
            <CloseIcon fontSize='large' />
          </Box>
          <Box component="div" className='flex flex-col'>
            <NavLinks handleOnClick={handleChageIsOpen}/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}