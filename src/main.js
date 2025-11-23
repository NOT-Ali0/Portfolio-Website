import { mount } from 'svelte'
import './app.css'
import './styleFolder/hero.css'
import './styleFolder/Form.css'
import './styleFolder/AboutMe.css'
import './styleFolder/Projects.css'
import './styleFolder/Skills.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
