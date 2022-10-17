import React, { useState, useEffect, createContext, useContext } from "react";
import { darkTheme, lightTheme } from "@/styles/Themes";
import { ThemeProvider } from "@mui/material";

export const ThemeContext = createContext({});

const listaTemas = {
  light: lightTheme,
  dark: darkTheme,
};

export default function SettingsProvider({ children }) {
  const [themePallete, setTheme] = useState(lightTheme); //Estado para armazenar o tema default da aplicação, caso não exista algum salvo no localStorage

  //Carregar o tema no início da aplicação
  useEffect(() => {
    // setTheme(listaTemas[user.theme] ?? listaTemas[cookies["@atomus:token"].theme] ?? redTheme);
  }, []);

  //Função para alterar o tema
  function changeThemePallete(newTheme) {
    setTheme(listaTemas[newTheme]);
    console.log("Alterar tema da aplicação");
  }

  return (
    <ThemeContext.Provider value={{ changeThemePallete }}>
      <ThemeProvider theme={themePallete}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
