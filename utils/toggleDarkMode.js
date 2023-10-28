const toggleDarkMode = (setDarkMode) => {

    // if there is no dark mode, set it to dark mode
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('data-theme', 'dark')
        setDarkMode(true)
        return
    }

    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute('data-theme', 'light')
        setDarkMode(false)
        return
    }

    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('data-theme', 'dark')
        setDarkMode(true)
        return
    }
}

export { toggleDarkMode }