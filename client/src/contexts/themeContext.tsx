import {useState, createContext} from "react";

export const ThemeContext = createContext({
    currentTheme: 'light',
    themeSwitchHandler: (themeType: string) => {
    },
});

const ThemeContextProvider = (props: any) => {
    const [currentTheme, setCurrentTheme] = useState(
        window.localStorage.getItem('theme') == null
            ? 'light'
            : window.localStorage.getItem('theme')
    );

    const themeSwitchHandler = (themeType: string) => {
        setCurrentTheme(themeType);
    };

    return (
        <ThemeContext.Provider value={{currentTheme: currentTheme, themeSwitchHandler: themeSwitchHandler}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
