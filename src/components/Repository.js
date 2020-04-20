import React from 'react';
import api from '../services/api';

const Repository = ({ id, title, repositories, setRepositories }) => {

  async function handleRemoveRepository(receivedId) {
    try {

      await api.delete(`repositories/${receivedId}`);

      const filteredRepositories = repositories.filter(({ id }) => id !== receivedId);
      setRepositories(filteredRepositories);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    < li key={id} >
      {title}
      < button onClick={() => handleRemoveRepository(id)}>
        Remover
      </button >
    </li >
  );
};

export default Repository;