import React from 'react';
import './App.css';

function App() {

    const [formData, setFormData] = React.useState({
      email : "",
      password : "",
      confirmPassword : "",
      subscToEmail : false
    })

  function handleChange(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevData => {
      return {
        ...prevData, 
        [name] : type === "checkbox" ? checked : value
      }
    })
  }


  function handleSubmit(event) {
    console.log(formData);
    event.preventDefault();

    if(formData.password !== formData.confirmPassword){
      console.log("Passwords do not match")
      return
    }
    else{
      console.log("Successfully signed up")
    }

    if(formData.subscToEmail === true){
      console.log("Thanks for signing up for our newsletter!")
    } 
    
}

return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form-input"
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form-input"
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form-input"
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            
            <div className="form-marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name='subscToEmail'
                    checked={formData.subscToEmail}
                    onChange={handleChange}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form-submit"
            >
                Sign up
            </button>
        </form>
    </div>
)
}

export default App;
