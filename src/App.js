import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <header className="App-header">
        {/* Portada */}
        <div
          style={{
            backgroundColor: '#4285f4', // Puedes cambiar el color de fondo
            height: '400px', // Ajusta la altura según tus necesidades
            position: 'relative',
            width: '100%',
          }}
        >
          {/* Contenido de la portada (puedes añadir texto u otros elementos) */}
          <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: '80px' }}>
            Hector Daniel Ayarachi Fuentes
          </h1>
        </div>

      {/* Foto de perfil */}
<div style={{ textAlign: 'center', marginTop: '-150px', position: 'relative' }}>
  <div
    style={{
      display: 'inline-block',
      position: 'relative',
      width: '200px', // Establece el ancho fijo del contenedor
      height: '200px', // Establece la altura fija del contenedor
      borderRadius: '50%', // Hace que el div sea circular
      overflow: 'hidden', // Asegura que la imagen no sobresalga del contenedor circular
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Efecto de sombra
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


        {/* Información adicional */}
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>
          Desarrollador Web
        </p>
      </header>

      <section className="App-section">
        <h2>Experiencia Laboral</h2>
        <div className="App-item">
          <h3>Empresa ABC</h3>
          <p>Cargo: Desarrollador Frontend</p>
          <p>Fecha: Enero 2020 - Presente</p>
        </div>

        {/* Agrega más experiencias laborales según sea necesario */}
      </section>

      <section className="App-section">
        <h2>Educación</h2>
        <div className="App-item">
          <h3>Universidad XYZ</h3>
          <p>Titulo: Licenciatura en Informática</p>
          <p>Fecha de Graduación: Mayo 2019</p>
        </div>

        {/* Agrega más información educativa según sea necesario */}
      </section>

      <section className="App-section">
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>React.js</li>
          <li>HTML5, CSS3</li>
          <li>JavaScript</li>
          {/* Agrega más habilidades según sea necesario */}
        </ul>
      </section>

      <section className="App-section">
        <h2>Idiomas</h2>
        <ul>
          <li>Español (Nativo)</li>
          <li>Inglés (Intermedio)</li>
          {/* Agrega más idiomas según sea necesario */}
        </ul>
      </section>
    </div>
  );
}

export default App;
