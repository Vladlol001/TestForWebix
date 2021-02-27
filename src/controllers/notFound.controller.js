import view from '../view/NotFound';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();
  return divElement;
}