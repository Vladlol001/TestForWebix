class TagList{
  constructor(hash = [], isReadOnly = true){
    this._hash = hash;
    this._isReadOnly = isReadOnly;
    localStorage.key('allTags') ==  null ? this._hash : this._hash = localStorage.getItem('allTags').split(',');
  }

  get hash(){
    return this._hash;
  }

  set hash(hash){
    this._hash = hash;
  }

  get isReadOnly(){
    return this._isReadOnly;
  }

  set isReadOnly(isReadOnly){
    this._isReadOnly = isReadOnly;
  }

  changereadOnly(isRead){
    this._isReadOnly = isRead;
  }

  addValue(key){
    if(key){
      let keyStr = key.toString().trim();
      this._hash = [...this._hash, keyStr];
      console.log('Добавлено');
      localStorage.setItem('allTags', this._hash)
    }else console.log('Данные не полученны');
  }

  getValue(key){
    for(el in this._hash)
      el == key ? console.log(`Tag name - ${key}`) : console.log('Данного напитка не существует');
  }

  deleteValue(key){
    let newArr = this._hash.filter( el => el != key ? el : console.log('Delete'));
    this._hash = newArr;
    localStorage.setItem('allTags', this._hash)
  }

  getKeys(){
    if(this._hash.length != 0){
      this._hash.forEach((el, index) => {
        console.log(`Name tag ${index + 1} - ${el}`);
      })
    }else console.log('Hash is empty');
  }
}

export default TagList;