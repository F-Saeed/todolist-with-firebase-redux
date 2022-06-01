// Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Redux
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { createFirestoreInstance } from 'redux-firestore';

// Reducers
import rootReducer from './reducers/rootReducer';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOka0NyhrtvdX3hQihX0yVgHQ3m9f6Alg',
  authDomain: 'todo-list-720.firebaseapp.com',
  projectId: 'todo-list-720',
  storageBucket: 'todo-list-720.appspot.com',
  messagingSenderId: '770009943120',
  appId: '1:770009943120:web:02fbc5adb060ee2cbc9555',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
firebase.firestore();

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, rrfProps };
