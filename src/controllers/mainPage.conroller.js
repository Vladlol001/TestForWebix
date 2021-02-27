import view from '../view/MainPage.js';
import TagList from '../scripts/MainClass';

// Объявление класса
let tagList = new TagList();

// Для добавления элемента в контейнер тегов
const newElement = (element) => {  
  let newDiv = document.createElement('div');
  newDiv.innerHTML = `
    <span>${element.trim()}</span>
    <i class="far fa-times-circle"></i>
  `;
  newDiv.className = 'tag';
  return newDiv
}

//  Добавления элемента в контейнер тегов
const addTag = () => { 
  isRead();
  if(tagList.isReadOnly){
    let takeValue = document.querySelector('#input').value;
    let tagsArea = document.querySelector('.tags__area');

    if(takeValue.trim() != ''){
      tagsArea.appendChild(newElement(takeValue));
      tagList.addValue(takeValue.trim());
      document.querySelector('#input').value = '';
    }else{
      document.querySelector('#input').placeholder = 'Input Smt!'
    }
  }
};

// Для добавления в LocalStorage 
const showStorage = () => {  
  let tagsFromStorage = localStorage.getItem('allTags').split(',');
  let tagsArea = document.querySelector('.tags__area');

  tagsFromStorage.forEach(el => {
    tagsArea.appendChild(newElement(el));
  })
}

// Удаление тегов из контейнера тегов
const deleteTag = () => {
  isRead();
    let deleteTag = document.querySelectorAll('.far');
    deleteTag.forEach(el => {
      el.addEventListener('click', () => {
        if(tagList.isReadOnly){
          tagList.deleteValue(el.previousElementSibling.innerText);
          el.parentElement.remove();
        }
      })
    })
};

// ReadOnly
const isRead = () => {
  let read = document.querySelector('#checkbox');
  read.checked ? tagList.changereadOnly(false) : tagList.changereadOnly(true);
}

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();
  
  let addBtn = divElement.querySelector('#btn');
  let getInfo = divElement.querySelector('#getInfo');
  let readOnly = divElement.querySelector('#checkbox');

  addBtn.addEventListener('click', () => {
    addTag()
    deleteTag();
  });
  getInfo.addEventListener('click', () => {
    isRead();
    if(tagList.isReadOnly)
      tagList.getKeys();
  });
  
  readOnly.addEventListener('click', isRead)
  
  setTimeout(() => {
    if(localStorage.key('allTags') != null) 
      showStorage();
      deleteTag();
  }, 100);

  return divElement;
}