import React from 'react'

export default function ShowImg({ans}) {
  return (
    <div>
        <div className='imagediv'>
            <div ><img className='imagebox' src={ans.urls.full} alt="" /></div>
            
        </div>
    </div>
  )
}
