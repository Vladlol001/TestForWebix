const MainPage = () => {
  const view = `
    <div class='main__section'>
      <div class='buttons'>
        <input id='input' type='text' placeholder='Input tag'>
        <input id='btn' type='button' value='Add'>
      </div>
      <div class='readonly'>
        <input id='checkbox' type='checkbox'>
        <span>ReadOnly</span>
      </div>
      <div class='tags__area'></div>
      <div>
        <input id='getInfo' type='button' value='Get all tags(check console)'/>
      </div>
    </div>
  `;
  return view;
}

export default MainPage;