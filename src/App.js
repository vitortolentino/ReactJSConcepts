import React, { useState, useEffect } from "react";
import api from './services/api';

import Repository from './components/Repository';
import RepositoryForm from './components/RepositoryForm';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [inputValues, setInputValues] = useState({
    url: '',
    title: '',
    techInput: '',
    techs: [],
  });

  useEffect(() => {
    api
      .get('repositories')
      .then(({ data }) => setRepositories(data));
  }, []);

  async function handleAddRepository(event) {
    event.preventDefault();
    const { data } = await api.post('repositories', inputValues);
    setRepositories([...repositories, data]);
    setInputValues({
      url: '',
      title: '',
      techInput: '',
      techs: [],
    });
  }

  function renderRepository({ id, title }) {
    return (
      <Repository
        key={id}
        id={id}
        title={title}
        repositories={repositories}
        setRepositories={setRepositories} />
    );
  }

  return (
    <div>
      <RepositoryForm
        inputValues={inputValues}
        setInputValues={setInputValues}
        handleAddRepository={handleAddRepository} />

      <hr />

      <h1>Repositories</h1>
      <ul data-testid="repository-list">
        {repositories.map(renderRepository)}
      </ul>
    </div>
  );
}

export default App;
