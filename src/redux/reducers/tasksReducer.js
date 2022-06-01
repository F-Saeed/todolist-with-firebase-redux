const initState = {
  tasks: [
    { id: 1, title: 'help me', text: 'No' },
    { id: 2, title: 'help me not', text: 'No not yet' },
    { id: 3, title: 'help me not here', text: 'No not yet here ok' },
  ],
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      console.log('Created Task: ', action.task);
      return state;

    case 'CREATE_PROJECT_ERROR':
      console.log('Error: ', action.error);
      return state;

    default:
      return state;
  }
};

export default tasksReducer;
