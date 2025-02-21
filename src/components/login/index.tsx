import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

// React Hook Form => lib de gerenciamento de formulário
// Zod => lib de validação e transformação de dados
// React Hook Form + Zod => validação e transformação de dados

// Libs => validação de dados (Zod, Yup, Joi)

// Zod schema => conter a representação dos campos do nosso formulário, o tipo dos dados desses campos

const signInUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Informe um endereço de e-mail válido."),
  password: z
    .string()
    .nonempty("Campo obrigatório.")
    .min(6, "Verifique se a senha tem pelo menos 6 caracteres."),
});

type signInUserFormData = z.infer<typeof signInUserFormSchema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<signInUserFormData>({
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(signInUserFormSchema)
  })

  const { signIn } = useContext(AuthContext)

  // const { register: registerRegister, handleSubmit: handleSubmitRegister, formState: { errors: errorsRegister } } = useForm()

  const onSubmitLogin: SubmitHandler<signInUserFormData> = async (data) => {
    try {
        await signIn(data)
        reset()
    } catch (error) {
        console.error(error)
    }
  };

  // const onSubmitRegister: SubmitHandler<FormDataRegister> = (data) => {
  //     console.log(data);
  //     window.alert('Usuário cadastrado com sucesso.');
  //     return data;
  // };

  return (
    <Section>
      <h2 className="subtitle">Minha conta</h2>
      <FormsContainer>
        <form
          method="POST"
          className="form login"
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <h3>Entrar</h3>
          <label htmlFor="email">Nome de usuário ou e-mail</label>
          <input
            type="text"
            id="email"
            placeholder="e-mail@email.com"
            {...register("email")}
          />
          {errors?.email && (
            <ErrorFormMessage>
             {errors?.email?.message}
            </ErrorFormMessage>
          )}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
          />
          {errors?.password && (
            <ErrorFormMessage>{errors?.password?.message}</ErrorFormMessage>
          )}
          {/* <div className="checkbox-container">
            <label htmlFor="alwaysConnected">Manter conectado</label>
            <input
              type="checkbox"
              id="alwaysConnected"
              {...registerLogin("alwaysConnected")}
            />
          </div> */}
          <Link to="/login" className="forget-password">
            <span>Recupere sua senha</span>
          </Link>
          <button type="submit" className="btn login-btn" disabled={isSubmitting}>
            Entrar
          </button>
        </form>
        {/* <form method="POST" className="form register" onSubmit={handleSubmitRegister(onSubmitRegister)}>
                <h3>Cadastrar-se</h3>
                    <label htmlFor="emailRegister">Nome de usuário ou e-mail</label>
                    <input 
                    type="text"
                    id="emailRegister"
                    placeholder="e-mail@email.com"
                    {
                    ...registerRegister('emailRegister', {
                        required: true
                    })
                    }
                    />
                    {errorsRegister.emailRegister && <ErrorFormMessage>O campo de usuário ou email é obrigatório</ErrorFormMessage>}
                    <label htmlFor="passwordRegister">Senha</label>
                    <input 
                    type="password"
                    id="passwordRegister"
                    {
                        ...registerRegister('passwordRegister', {
                            required: true
                        })
                    }
                    />
                    {errorsRegister.passwordRegister && <ErrorFormMessage>O campo de senha é obrigatório</ErrorFormMessage>}    
                    <p className="warning-message">Seus dados pessoais serão usados para aprimorar sua experiência neste site, para gerenciar o acesso a sua conta e para outros propósitos, como descritos em nossa política de privacidade.</p>
                    <button type="submit" className="btn register-btn">Cadastrar-se</button>
                </form> */}
      </FormsContainer>
    </Section>
  );
};

const Section = styled.section`
  padding: 20px;
  margin: 60px 0 70px 0;
  .subtitle {
    text-align: center;
    font-weight: 500;
    margin-bottom: 60px;
  }

  @media (max-width: 550px) {
    margin: 60px 0 30px 0;
  }
`;

const FormsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8%;
  .form {
    width: 500px;
    display: flex;
    flex-direction: column;
  }
  .form h3 {
    font-weight: 500;
    font-size: 24px;
  }
  .form label {
    margin: 10px 0 2px 0;
  }
  .form input {
    background: var(--dark-purple);
    border: 1px solid var(--light-purple);
    padding: 15px;
    outline: none;
    color: white;
  }
  .form input::placeholder {
    color: var(--light-purple);
    font-size: 15px;
  }
  .form .checkbox-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 20px 0 15px 10px;
    cursor: pointer;
    width: fit-content;
  }
  .form .checkbox-container label {
    margin: 0px 0 0 12px;
    cursor: pointer;
  }
  .form .checkbox-container input {
    all: unset;
    border: none;
    cursor: pointer;
    outline: 2px solid var(--light-purple);
    background: var(--almost-black);
    width: 10px;
    height: 10px;
    transition: 0.1s ease-in;
  }
  .form .checkbox-container input:checked {
    background: var(--light-purple);
  }
  .form .forget-password {
    width: fit-content;
    padding: 5px 0 15px 0;
  }
  .form .forget-password span {
    color: var(--light-purple);
  }
  .form .btn {
    border: none;
    width: 100%;
    color: var(--white);
    background: var(--light-purple);
    padding: 15px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  .form.register .warning-message {
    font-weight: 400;
    margin: 20px 0;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
    .form {
      width: 100%;
      margin-bottom: 50px;
    }
  }
`;

const ErrorFormMessage = styled.p`
  font-size: 13px;
  color: red;
`;
