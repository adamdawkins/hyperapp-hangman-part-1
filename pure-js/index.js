// import {h, app} from 'hyperapp';

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  div.classList = 'pure-javascript';
  const h1 = document.createElement('h1');

  h1.appendChild(
    document.createTextNode(
      'This was added with pure javascript, check me out!',
    ),
  );

  div.appendChild(h1);

  const app = document.getElementById('app');

  app.appendChild(div);
});
