import React, { createContext, useState, useEffect, useCallback } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

// NOOKIES => salvar o token em um cookie
// Cookie, localStorage (cache)
// null => nulo, é a ausência de valor "proposital"
// undefined => indefinido, ainda vai ser definido

// ! => "falsy" => null, undefined, 0, false, '' string vazia // true
// !! => "truthy" => inverte novamente esse valor, retornando um valor booleano ORIGINAL (true ou false)
// isAuthenticated => vai ser true se o "user" tiver um valor "truthy" (objeto, string não vazia, um número diferente de 0)
// isAuthenticated => vai ser false se o "user" tiver um valor "falsy" (null, undefined, 0, string vazia)

type FormData = {
  email: string;
  password: string;
};

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

type AuthContextType = {
    isAuthenticated: boolean
    user: User | null
    signIn: (data: FormData) => Promise<void>
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user)

  const isAuthenticated = !!user

  useEffect(() => {
    const { "devemdobro.token": token } = parseCookies();

    if (token) {
      fetch("http://localhost:3333/users", {
        headers: {
         'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((userData) => setUser(userData))
        .catch((error) => {
          console.error("Error during user data:", error);
        });
    }
  }, []);

  const signIn = async ({ email, password }: FormData) => {
    const url = "http://localhost:3333/users/login";

    console.log(email, password)

    try {
        const request = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (!request.ok) {
          const error = await request.json();
          throw new Error(error);
        }
    
        const response = await request.json();
    
        setCookie(response, "devemdobro.token", response.token, {
          maxAge: 60 * 60 * 1, // 1h
        });
    
        setUser(response.user);
    
        window.location.reload()
    } catch (error) {
        console.error(error)
    }
  };

  const signOut = useCallback(() => {
    destroyCookie(null, 'devemdobro.token')
    setUser(null)

    window.location.reload()
  }, [])

  return <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>{children}</AuthContext.Provider>;
};
