import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Vérification email
  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1000);
      return false;
    }
  };

  //Gestion message error & success
  const failMessage = (message) => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = message;
    formMess.style.opacity = '1';
    formMess.style.background = 'rgb(253,87,87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('prenom').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  };

  const successMessage = () => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML =
      'Message envoyé ! Je vous recontacterais ès que possible.';
    formMess.style.background = '#00c1ec';
    formMess.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('prenom').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback('template_9grayqr', {
        name,
        prenom,
        phone,
        email,
        message,
      });
    } else {
      failMessage('Merci de remplir correctement les champs requis *');
    }
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('service_gmail', templateId, variables)
      .then((res) => {
        successMessage();
        setName('');
        setPrenom('');
        setPhone('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        failMessage("Une erreur s'est produite, veuillez réessayer.");
      });
  };

  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <form className="contact-form">
          <h1>Contactez-moi</h1>
          <div className="form-content">
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="nom *"
              value={name}
              autoComplete="off"
            />
            <input
              type="text"
              id="prenom"
              name="prenom"
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="prénom *"
              value={prenom}
            />
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="téléphone"
              value={phone}
            />
            <div className="email-content">
              <label id="not-mail">Email non valide</label>
              <input
                type="mail"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email *"
                value={email}
                autoComplete="off"
              />
            </div>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message *"
              value={message}
            />
          </div>
          <input
            className="button"
            type="button"
            value="Envoyer"
            onClick={handleSubmit}
          />
          <div className="form-message"></div>
        </form>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/sebastien-fernandes-7a7169165/"
              title="nouvelle fenêtre profil linkedin"
              // noopener interdit toutes modifications de l'URL
              // noreferrer empêche les sites externes visés par le lien d'obtenir des information sur l'origine du trafic
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/sebich"
              title="nouvelle fenêtre profil github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
