import React, { useState } from 'react';
import './styles.css'

// Componente da tela de login
function LoginScreen({ goToRegistration, goToForgotPassword, goToDashboard }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação do usuário

    // Se autenticado com sucesso, vá para a tela de dashboard
    goToDashboard();
  };

  return (
    <div className="login-form">
      <h2>Tela de Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>
        Não tem uma conta? <button onClick={goToRegistration}>Cadastre-se</button>
      </p>
      <p>
        Esqueceu sua senha? <button onClick={goToForgotPassword}>Recupere-a</button>
      </p>
    </div>
  );
}

// Componente da tela de cadastro
function RegistrationScreen({ goBack }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Lógica de cadastro do usuário

    // Após o cadastro, volte para a tela de login
    goBack();
  };

  return (
    <div className="registration-form">
      <h2>Tela de Cadastro</h2>
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <label>Last Name:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Cadastrar</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}

// Componente da tela de recuperação de senha
function ForgotPasswordScreen({ goBack }) {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Lógica de recuperação de senha

    // Após a recuperação, volte para a tela de login
    goBack();
  };

  return (
    <div className="forgot-password-form">
      <h2>Tela de Recuperação de Senha</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgotPassword}>Recuperar Senha</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}

// Componente da tela de dashboard
function DashboardScreen({ logout }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="dashboard">
      <h2>Tela do Compra de ingresso</h2>
      <div className="product">
        <img
          src="https://br.web.img3.acsta.net/pictures/23/04/27/15/20/2468619.jpg"
          alt="Product"
          className="productImage"
        />
        <div className="productDetails">
          <h2>Transformers: O Despertar das Feras</h2>
          <p>Transformers: O Despertar das Feras traz mais uma aventura épica pelo universo dos transformers. Ambientada nos anos 1990, o filme apresentará os Maximals, Predacons e Terrorcons à batalha existente na Terra entre Autobots e Decepticons.</p>
          <button className="buyButton" onClick={() => addToCart('Product Name')}>
            Buy
          </button>
        </div>
      </div>

      <div className="product">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/the-flash/08107f3d-d797-42e5-b582-aa70c499b28c.webp"
          alt="Product"
          className="productImage"
        />
        <div className="productDetails">
          <h2>The Flash</h2>
          <p>Mundos colidem em The Flash quando Barry usa seus superpoderes para viajar no tempo e mudar os eventos do passado. Mas quando tenta salvar sua família e acaba, sem querer, alterando o futuro, Barry fica preso em uma realidade na qual o General Zod está de volta, ameaçando colocar o mundo em risco, e não há super-heróis a quem recorrer. </p>
          <button className="buyButton" onClick={() => addToCart('Product Name')}>
            Buy
          </button>
        </div>
      </div>

      <div className="product">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/super-mario-bros/b7bd9bb8-f131-44dd-8082-667078bf2b22.jpg"
          alt="Product"
          className="productImage"
        />
        <div className="productDetails">
          <h2>Super Mario Bros.</h2>
          <p>Mario é um filme baseado na série de video games, Super Mario Bros, da Nintendo. Em Super Mario Bros.</p>
          <button className="buyButton" onClick={() => addToCart('Product Name')}>
            Buy
          </button>
        </div>
      </div>

      <button onClick={logout}>Sair</button>
    </div>
  );
}

// Componente principal do aplicativo
function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const goToRegistration = () => {
    setCurrentScreen('registration');
  };

  const goToForgotPassword = () => {
    setCurrentScreen('forgotPassword');
  };

  const goToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const goBack = () => {
    setCurrentScreen('login');
  };

  const logout = () => {
    setCurrentScreen('login');
  };

  let screenComponent;

  if (currentScreen === 'login') {
    screenComponent = (
      <LoginScreen
        goToRegistration={goToRegistration}
        goToForgotPassword={goToForgotPassword}
        goToDashboard={goToDashboard}
      />
    );
  } else if (currentScreen === 'registration') {
    screenComponent = <RegistrationScreen goBack={goBack} />;
  } else if (currentScreen === 'forgotPassword') {
    screenComponent = <ForgotPasswordScreen goBack={goBack} />;
  } else if (currentScreen === 'dashboard') {
    screenComponent = <DashboardScreen logout={logout} />;
  }

  return (
    <div className="container">
      <h1>Ingresso</h1>
      {screenComponent}
    </div>
  );
}

export default App;
