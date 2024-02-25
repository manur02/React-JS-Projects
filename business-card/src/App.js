import './App.css';
import React from 'react';
import Star from './Star';

function App() {
  const [contact, setContact] = React.useState({
    firstName: "Regina",
    lastName: "Filange",
    phone: "+1 (637) 983-3014",
    email: "reginafilange@gmail.com",
    isFavorite: false
})

function toggleFavorite() {
  // console.log("Toggle Favorite")
  setContact(prevContact => {
    return {
       ...prevContact, isFavorite : !prevContact.isFavorite
    }
  })
}

  return (
    <main>
      <article className="card">
          <img src="./my-photo.jpg" className="card-image" />
          <div className="card-info">
              <Star isFilled = {contact.isFavorite}
                    handleClick = {toggleFavorite}
              />
              <h2 className="card-name">
                  {contact.firstName} {contact.lastName}
              </h2>
              <p className="card-contact">{contact.phone}</p>
              <p className="card-contact">{contact.email}</p>
          </div>
          
      </article>
  </main>
  );
}

export default App;
