// const styles = require('./assets/styles/style.css');
import styles from './assets/styles/style.css'
import { router } from './router/index.routes'

const app = document.querySelector('.app-content');
app.innerHTML = router(window.location.hash);

window.addEventListener('hashchange', () => {
  app.innerHTML = router(window.location.hash);
});