import React from 'react';
import './App.css'; // Asegúrate de que la ruta es correcta según tu estructura de archivos

function Header() {
  return (
    <header className="App-header">
      {/* Contenido del header movido aquí */}
      <div
        style={{
          backgroundColor: '#4285f4',
          height: '400px',
          position: 'relative',
          width: '100%',
        }}
      >
        <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: '80px' }}>
          Hector Daniel Ayarachi Fuentes
        </h1>
      </div>

      <div style={{ textAlign: 'center', marginTop: '-150px', position: 'relative' }}>
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src="/imagenes/dulce.png"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>
        Desarrollador Web
      </p>
    </header>
  );
}

export default Header;
