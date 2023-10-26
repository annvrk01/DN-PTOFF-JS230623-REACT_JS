import '@reach/dialog/styles.css'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'

import {Logo} from './components/logo'

function Login (props) {
  return (
      <div>
          <h1> Login</h1>
      </div>
  );
}



function Form({onSubmit, buttonText}) {
  const handleSubmit = e => {
    e.preventDefault()
    // lấy value của các element trong một form
    const {username, password} = e.target.elements
    onSubmit({username: username.value, password: password.value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [modalOpen, setModalOpen] = React.useState('none')

  const login = data => {
    console.log(data)
  }

  const register = data => {
    console.log(data)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>My Listing</h1>
      <div>
        <button
          onClick={() => {
            setModalOpen('login')
          }}
        >
          Login
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setModalOpen('register')
          }}
        >
          Register
        </button>
      </div>
      <Dialog aria-label="Form" isOpen={modalOpen === 'login'}>
        <div>
          <button
            onClick={() => {
              setModalOpen('none')
            }}
          >
            Close
          </button>
        </div>
        <h3>Login</h3>
        <Form onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Form" isOpen={modalOpen === 'register'}>
        <div>
          <button
            onClick={() => {
              setModalOpen('none')
            }}
          >
            Close
          </button>
        </div>
        <h3>Register</h3>
        <Form onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
export default Login;