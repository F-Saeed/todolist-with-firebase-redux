import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TaskCard = ({ title, text }) => {
  return (
    <Card className='text-center'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Button variant='danger'>
          <i className='bi bi-trash-fill'></i> Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
