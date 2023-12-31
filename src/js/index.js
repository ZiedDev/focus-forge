import { setTheme, switchTheme } from './theme.js'

import '../css/style.css'
import '../css/navBar.css'
import '../css/main.css'

// Theme Changer
const themeSwitch = document.getElementById('theme-switch')
setTheme(themeSwitch, sun, moon)
themeSwitch.addEventListener('change', (e) => { switchTheme(e.target, sun, moon) })

// rest of the logic
console.log('It is working :)')