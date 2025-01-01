import { createContext, useContext, useState } from 'react'

// Create the ThemeContext
const ThemeContext = createContext()

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Custom hook for using ThemeContext
export const useTheme = () => useContext(ThemeContext)
