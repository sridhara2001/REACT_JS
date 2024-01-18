import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './image/Image'

const Artist = (props) => {
      const {id, name, images, genres, followers} = props
  return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3">
            <div className="card shadow">
                  <Image data={images? images[0] : false}/>

                  <div className="card-body">
                        <h5 className='text-center text-secondary'>{name}</h5>
                        <ul className="list-group">
                              <li className="list-group-item">
                                    <p>
                                          <i class="bi bi-person-bounding-box"></i>
                                          <span className='float-end'>{followers.total}</span>
                                    </p>
                              </li>
                        </ul>
                  </div>
                  <div className="card-footer">
                        <NavLink to={`/track/${id}`} className='btn btn-outline-primary'><i class="bi bi-music-note-list"></i><b> Track</b></NavLink>    
                  </div>
            </div>
      </div>
  )
}

export default Artist