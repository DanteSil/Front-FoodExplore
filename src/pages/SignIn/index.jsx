import { Container } from "./styles";

import imgLogo from '../../assets/Logo.svg';

import {OrderButton} from '../../components/OrderButton';

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  async function handleSignIn(){
    await signIn({email, password});
  };

  return (
    <Container>
      <div className="logo">
        <img src={imgLogo} alt="" />
        <p>food explorer</p>
      </div>

      <form>
        <h2>Faça login</h2>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input 
            type="text" name="email" 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            name="password" placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <OrderButton 
          add
          title="Entrar"
          onClick={handleSignIn}
        />

        <a href="/register">Criar uma conta</a>
      </form>
    </Container>
  );
};