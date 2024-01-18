import React, { useState } from 'react'

const Create = () => {
  const [blog, setBlog] = useState({
    title:"",
    subTitle:"",
    image:"",
    content:""
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Blog Data = ", blog);
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="border rounded p-3 shadow">
            <form autoComplete='off' onSubmit={submitHandler}>
              <div className="form-group bg-warning rounded">
                <h2 className="text-white text-center p-2">CREATE BLOG</h2>
              </div>
              <div className="form-group my-3">
                <label htmlFor="title">Title</label>
                <input type="text" name='title' className="form-control" id="title" placeholder='Blog Title' required />
              </div>
              <div className="form-group my-3">
                <label htmlFor="subtitle">Sub Title</label>
                <input type="text" name='subtitle' className="form-control" id="subtitle" placeholder='Blog Sub Title' required />
              </div>
              <div className="form-group my-3">
                <label htmlFor="image">Image URL</label>
                <input type="url" name='image' className="form-control" id="image" placeholder='Image URL' required />
              </div>
              <div className="form-group my-3">
                <label htmlFor="content">Content</label>
                <textarea name='content' className="form-control" id="content" placeholder='Blog Content' required />
              </div>
              <div className="form-group mt-3">
                <input type="submit" value="create" className='btn btn-outline-warning' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create