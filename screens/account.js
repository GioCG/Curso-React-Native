import React from 'react';

export default function Account() {
  const user = {
    name: 'Juan Pérez',
    email: 'juanperez@email.com',
    role: 'Cliente Premium',
    joined: 'Enero 2024'
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👤 Mi Cuenta</h1>

      <div style={styles.card}>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Correo:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
        <p><strong>Miembro desde:</strong> {user.joined}</p>
      </div>

      <button style={styles.button}>Editar Perfil</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#333',
    maxWidth: '600px',
    margin: 'auto',
  },
  title: {
    color: '#c8102e',
    marginBottom: '1.5rem',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '1.5rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#c8102e',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};
