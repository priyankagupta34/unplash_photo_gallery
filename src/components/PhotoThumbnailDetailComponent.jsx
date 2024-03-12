import React from 'react'
import { Link } from 'react-router-dom';

export default function PhotoThumbnailDetailComponent({image}) {
    const {user, created_at, /*tags, likes*/} = image;
    const date = `${new Date(created_at).getDate()}-${new Date(created_at).getMonth()}-${new Date(created_at).getFullYear()}`;
  return (
    <div className='photoDetailBlock'>
        <div className='photoDetailBlockDiv'>
            <Link to={user.links.portfolio} >{user.name}</Link>
        </div>
        <div className='photoDetailBlockDiv'>
            {date}
        </div>
    </div>
  )
}
