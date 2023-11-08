localStorage.getItem('theme')

const setTheme = (theme, setDarkMode) => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    setDarkMode(theme === 'dark')
}

const initiallySetDarkMode = (setDarkMode) => {
    const theme = localStorage.getItem('theme') || 'dark'
    setTheme(theme, setDarkMode)
}

const toggleDarkMode = (setDarkMode) => {
    const theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
    setTheme(theme, setDarkMode)
}

export { initiallySetDarkMode, toggleDarkMode }
