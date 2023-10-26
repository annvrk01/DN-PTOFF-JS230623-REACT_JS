import React from 'react';
import "./index.css";



export default function dangnhap() {
    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title">Register account</h1>
                
                <form>
                    <div className="mb-2">
                        <label htmlFor="first-name" className="form-label">First Name</label>
                    <input 
                        id="first-name"
                        className="form-control"
                        type="text"
                        name="firstName"
                          />
                            </div>
                 

                     <div className="mb-2">
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input 
                        id="last-name"
                        className="form-control"
                        type="text"
                        name="lastName"
                          />
                            </div>
                            
                     <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        id="email"
                        className="form-control"
                        type="text"
                        name="email"
                          />
                            </div>

                            <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        id="password"
                        className="form-control"
                        type="password"
                        name="password"
                          />
                            </div>

                            
                            <div className="mb-2">
                        <label htmlFor="confirm-password" className="form-label">Comfirm-Password</label>
                    <input 
                        id="confirm-password"
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                          />
                            </div>

                           <button  type="submit" href="http://localhost:3000/dangki">
          Register
        </button>    
                    
                </form>

            </div>
        </div>
    );

}
