const toggleDarkMode = (darkMode, setDarkMode) => {
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    setDarkMode(!darkMode)
}

export { toggleDarkMode }