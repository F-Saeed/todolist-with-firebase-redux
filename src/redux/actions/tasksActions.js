const createTask = (task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to db
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    firestore
      .collection('tasks')
      .add({
        ...task,
        id: 123,
      })
      .then(() => dispatch({ type: 'CREATE_TASK', task }))
      .catch((error) => dispatch({ type: 'CREATE_TASK_ERROR', error }));
  };
};

export default createTask;
