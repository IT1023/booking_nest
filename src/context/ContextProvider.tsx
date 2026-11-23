import { CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material";
import { UIContext } from "./MiniContext";
import useTheme from "../features/theme/useTheme";
import useLanguage from "../features/languages/changeLanguage";

interface ContextProviderProps {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const { bookingNestTheme, changeTheme, currentTheme } = useTheme({
    cooldown: 100,
  });
  const { changeLanguage } = useLanguage({ cooldown: 250 });
  return (
    <ThemeProvider theme={bookingNestTheme}>
      <UIContext.Provider value={{ changeTheme, changeLanguage, currentTheme }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*": {
              transition: "background-color 0.2s ease, color 0.3s ease",
            },
          }}
        />
        {children}
      </UIContext.Provider>
    </ThemeProvider>
  );
}
