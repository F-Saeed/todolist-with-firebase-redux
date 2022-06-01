// Firebase
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// Redux
import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  /* auth: authReducer, */
  tasks: tasksReducer,
});

export default rootReducer;
