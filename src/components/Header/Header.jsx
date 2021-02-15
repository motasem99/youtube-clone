import React, { useState } from 'react';

import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
            alt='youtube'
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder='Search'
          type='text'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          className='header__icon'
          alt=''
          src='https://avatars.githubusercontent.com/u/54185788?s=400&u=e300c4156729bf78a943366a69d3a1e750dbeae4&v=4'
        />
      </div>
    </div>
  );
};

export default Header;
