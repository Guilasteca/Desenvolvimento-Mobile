import React, { useState } from 'react';
import './src/styles.css';
import productImage1 from './src/img/biggorons_sword.webp';
import productImage2 from './src/img/deku_shield.webp';
import productImage3 from './src/img/giants_knife.webp';
import productImage4 from './src/img/quiver.webp';
import productImage5 from './src/img/zora_tunic.webp';

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
      <h2>Tela do Dashboard</h2>
      <div className="product">
        <img src={productImage1} alt="Product" className="productImage" />
        <div className="productDetails">
          <h2>Biggoron’s Sword</h2>
          <p>Uso de duas mãos.</p>
          <p>Ataque: 4</p>          
          <p>Peso: Indefinido.</p>
          <p>Preço: ₹ 4000 </p>

        </div>
        <button className="buyButton" onClick={() => addToCart('Product Name')}>
          Buy
        </button>
      </div>

      <div className="product">
        <img src={productImage2} alt="Product" className="productImage" />
        <div className="productDetails">
          <h2>Deku Shield</h2>
          <p>Habilidade: Repele Deku Nut</p>
          <p>Defesa: 100% menos fogo e pedras.</p>
          <p>Peso: Indefinido.</p>
          <p>Preço: ₹ 40 </p>

        </div>
        <button className="buyButton" onClick={() => addToCart('Product Name')}>
          Buy
        </button>
      </div>

      <div className="product">
        <img src={productImage3} alt="Product" className="productImage" />
        <div className="productDetails">
          <h2>Giant’s Knife</h2>
          <p>Ataque: 2000</p>
          <p>Defesa: 0</p>
          <p>Peso: Indefinido.</p>
          <p>Preço: ₹ 200 </p>

        </div>
        <button className="buyButton" onClick={() => addToCart('Product Name')}>
          Buy
        </button>      </div>

      <div className="product">
        <img src={productImage4} alt="Product" className="productImage" />
        <div className="productDetails">
          <h2>Quiver</h2>
          <p>Estoque: 50 flechas</p>
          <p>Defesa: 0</p>
          <p>Peso: Indefinido.</p>
          <p>Preço: ₹ 30 por 15 unidades. </p>

        </div>
        <button className="buyButton" onClick={() => addToCart('Product Name')}>
          Buy
        </button>      </div>

      <div className="product">
        <img src={productImage5} alt="Product" className="productImage" />
        <div className="productDetails">
          <h2>Zora tunic</h2>
          <p>Habilidade: Nadar melhor</p>
          <p>Defesa: Indefinido.</p>
          <p>Peso: Indefinido.</p>
          <p>Preço: ₹ 300 </p>

        </div>
        <button className="buyButton" onClick={() => addToCart('Product Name')}>
          Buy
        </button>      </div>

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
      <h1>Meu Aplicativo</h1>
      {screenComponent}
    </div>
  );
}

export default App;
