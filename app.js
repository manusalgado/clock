
const app = document.getElementById('app');
function clock() {
  let now = new Date().toLocaleTimeString()
  const el = <span>{now}</span>;

  ReactDOM.render(el, app);
}

setInterval(clock, 1000);
