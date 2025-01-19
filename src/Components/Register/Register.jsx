import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser,setUser } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const ConfirmPassword = e.target.ConfirmPassword.value;
    console.log(name)

    // Using nested ternary for validation
    password.length < 6
      ? setError('Password must be at least 6 characters long!')
      : password !== ConfirmPassword
      ? setError('Passwords do not match!')
      : (setError(''), // Clear errors
        registerUser(email, password)
          .then((result) => {
            setUser(result.user); // Handle success
          })
          .catch((error) => {
            setError(error.message); // Handle error
          }));
  };
    return (

      <div>
    
      <form onSubmit={handleRegister} className="card-body mx-auto w-[40%]">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" name="name"  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email"  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"name="password"  required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" className="input input-bordered"name="ConfirmPassword"  required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if exists */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    
      </div>
 
    );
};

export default Register;