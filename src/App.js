import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${formData.nome}\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}`);
    // Aqui depois integro com Google Sheets ou Email
  };

  return (
    <div className="container">
      <h1>Receba sua Consultoria Jurídica Exclusiva</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="whatsapp"
          placeholder="Seu WhatsApp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
        />
        <button type="submit">Quero ser Contatado</button>
      </form>
    </div>
  );
}

export default App;
