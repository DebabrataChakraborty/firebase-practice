import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, googleLogin,setUser, user } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Clear previous messages
    setError('');
    setSuccess('');

    loginUser(email, password)
      .then(result => {
        setSuccess('Successfully logged in!');
        console.log('Login successful:', result.user);
        // Optionally, navigate to another page like dashboard here.
      })
      .catch(error => {
        setError('Incorrect email or password.');
        console.error('Login failed:', error.message);
      });
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setSuccess('Successfully logged in with Google!');
        console.log('Google login successful:', result.user);
        setUser(result.user)
        navigate(location.state)
        // Optionally, navigate to another page like dashboard here.
      })
      .catch(error => {
        setError('Google login failed. Please try again.');
        console.error('Google login failed:', error.message);
      });
  }
  // useEffect(() => {
  //   if (user) {
  //     navigate(location.state)
  //   }

  // }, [user])

  return (
    <div className="card-body mx-auto w-[40%]">
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      {error && <div className="text-red-500 mt-2">{error}</div>}
      {success && <div className="text-green-500 mt-2">{success}</div>}

      <div className="mt-4">
        <button onClick={handleGoogleLogin} className="btn btn-success">
          Google-Login
        </button>
      </div>
    </div>
  );
};

export default Login;
