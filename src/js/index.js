import { setTheme, switchTheme } from './theme.js'

import '../css/style.css'
import '../css/navBar.css'

const themeSwitch = document.getElementById('theme-switch');

console.log('It is working :)')

setTheme(themeSwitch, sun, moon);

themeSwitch.addEventListener('change', () => { switchTheme(themeSwitch, sun, moon) })