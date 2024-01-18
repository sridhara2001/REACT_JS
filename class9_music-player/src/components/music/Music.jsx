import React, { useState, useEffect, Fragment } from 'react'
import "./assets/Music.css";
import Artist from './artist/Artist';
import token from '../../token/Token';
import Search from './serach/Search';

const URL = 'https://api.spotify.com';

const Music = () => {

      const [artist, setArtist] = useState([]);

      const searchArtist = async (artistName) => {
            await fetch(`${URL}/v1/search?q=${artistName}&type=artist`,
            {
               method: 'GET',
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })
            .then(res => res.json())
            .then(out => {
                  console.log(out.artists.items)
                  setArtist(out.artists.items);
            })
            .catch(err => {console.error(err)});
      }

      useEffect(() => { searchArtist("sbp") }, []);

  return (
      <Fragment>
            <div className='banner'>
                  <div className="container">
                        <div className="row">
                              <div className="col">
                                    <h1 className='text-center mt-5'>WELCOME TO REACT MUSIC PLAYER APP</h1>
                              </div>
                        </div>
                  </div>
            </div>
            <div className='container my-5'>
                  <div className="row">
                        <div className="col">
                              <h2 className="text-center">ARTIST</h2>
                        </div>
                  </div>

                  <Search searchName = {searchArtist} />

                  <div className="row">
                  {
                        artist && artist.map((item, index) => {
                              return(
                                    <Artist key={index} {...item}/>
                              )
                        })
                  }
                  </div>
            </div>
      </Fragment>
  )
}

export default Music