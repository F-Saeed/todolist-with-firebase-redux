// Components
import TaskCard from './TaskCard';

// Bootstrap
import Container from 'react-bootstrap/Container';

const TaskList = ({ tasks }) => {
  return (
    <Container className='d-grid gap-4' style={{ maxWidth: '600px' }}>
      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} text={task.text} />
      ))}
    </Container>
  );
};

export default TaskList;
