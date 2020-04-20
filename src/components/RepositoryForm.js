import React from 'react';

const RepositoryForm = ({ setInputValues, inputValues, handleAddRepository }) => {

  const {
    url, title, techs, techInput
  } = inputValues;

  function handleInputChange({ target }) {
    const { value, name } = target;
    setInputValues((oldInputValues) => ({
      ...oldInputValues,
      [name]: value,
    }));
  }

  function addTech(event) {
    event.preventDefault();
    if (!techInput) return;

    setInputValues((oldInputValues) => ({
      ...oldInputValues,
      techInput: '',
      techs: [...oldInputValues.techs, techInput]
    }));
  }

  return (
    <form>
      <div className="inputs-box">
        <div>
          <label>URL</label>
          <input type="text" value={url} name="url" onChange={handleInputChange} />
        </div>
        <div>
          <label>Title</label>
          <input type="text" value={title} name="title" onChange={handleInputChange} />
        </div>
        <div>
          <label>Techs</label>
          <input type="text" value={techInput} name="techInput" onChange={handleInputChange} />
          <button className="add-button" onClick={addTech}>+</button>
          <ul>
            {techs.map(tech => <li>{tech}</li>)}
          </ul>
        </div>
      </div>

      <button onClick={handleAddRepository}>Adicionar</button>
    </form>
  )
};

export default RepositoryForm;