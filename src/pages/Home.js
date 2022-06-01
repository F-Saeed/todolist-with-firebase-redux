// Redux
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

// Components
import Navigation from '../components/Navigation';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';

const Home = () => {
  useFirestoreConnect(['tasks']);

  const tasks = useSelector((state) => {
    console.log(state.fires);
    return state.firestore.data.tasks;
  });

  return (
    <>
      <Navigation />
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Home;
