import React from "react";
import './App.css'

export default function Form(){
    const [formData, setFormData] = React.useState({
        firstName : "", 
        lastName : "", 
        email : "", 
        comments : "", 
        isFriendly : false,
        employment: "",
        favColor : ""
    })

    // console.log(formData)

    function handleChange(event) {
        //console.log(event)
        // console.log("Changed")
        //setFirstName(event.target.value)
        const {name, value, type, checked} = event.target
        setFormData(
            prevFromData => {
                return {
                    ...prevFromData, 
                    [name] : type === "checkbox" ? checked : value
                }
            }
        )
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange} 
                name = "firstName"
                value = {formData.firstName}
            ></input>
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name = "lastName"
                value = {formData.lastName}
            ></input>
            <input 
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                name = "email"
                value = {formData.email}
            ></input>
            <textarea 
                placeholder="Comments"
                onChange={handleChange}
                name = "comments"
                value = {formData.comments}
            ></textarea>
            <br/>
            <input type="checkbox"
                   id = "isFriendly"
                   checked = {formData.isFriendly}
                   onChange={handleChange}
                   name = "isFriendly"
            ></input>

            <label htmlFor="isFriendly">Are you Friendly?</label>
            <br/>
            
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type ="radio"
                    id ="unemployed"
                    name = "employment"
                    value = "unemployed"
                    onChange = {handleChange}
                    checked = {formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type ="radio"
                    id ="part-time"
                    name = "employment"
                    value = "part-time"
                    onChange = {handleChange}
                    checked = {formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type ="radio"
                    id ="full-time"
                    name = "employment"
                    value = "full-time"
                    onChange = {handleChange}
                    checked = {formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />        
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value= {formData.favColor}
                onChange={handleChange}
                name="favColor"
                >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <button type="Submit">Submit</button>
        </form>
    )

}