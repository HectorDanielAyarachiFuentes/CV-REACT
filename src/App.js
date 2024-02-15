import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nombre Apellido</h1>
        <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <img
          src="/imagenes/dulce.png"
          alt="Profile"
          style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
        />
      </div>
    </div>
  
        <p>Desarrollador Web</p>
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
