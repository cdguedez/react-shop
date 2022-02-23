import React from 'react'
import '@assets/styles/edit-account.scss'

const EditAccount = () => {
  return (
<div className="login">
  <div className="form-container">
    <h1 className="title">Edit Account</h1>
    <form action="/" className="form">
      <div>
        <label htmlFor="name" className="label">Name</label>
        <p className="value">Camila Yokoo</p>
        <label htmlFor="email" className="label">Email</label>
        <p className="value">camilayokoo@gmail.com</p>
        <label htmlFor="password" className="label">Password</label>
        <p className="value">*********</p>
      </div>
      <input type="submit" defaultValue="Edit" className="secondary-button login-button" />
    </form>
  </div>
</div>

  )
}

export default EditAccount