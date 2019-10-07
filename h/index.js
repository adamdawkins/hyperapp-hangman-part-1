const h = (tagName, children) => {
  const element = document.createElement(tagName);

  if (typeof children === 'string') {
    element.appendChild(document.createTextNode(children));
  } else {
    children.forEach(child => {
      element.appendChild(child);
    });
  }

  return element;
};

document.addEventListener('DOMContentLoaded', () => {
  const container = h('div', [
    h('h1', 'Hello, World!'),
    h('p', 'This is a paragraph about the app'),
  ]);

  const app = document.getElementById('app');

  app.appendChild(container);
});
