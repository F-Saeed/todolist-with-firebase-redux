// React
import { useRef, useState } from 'react';

// Redux
import createTask from '../redux/actions/tasksActions';
import { useDispatch } from 'react-redux';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddTask = () => {
  const [show, setShow] = useState(false);

  const titleRef = useRef();
  const textRef = useRef();
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    titleRef.current.value = null;
    textRef.current.value = null;
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createTask({ title: titleRef.current.value, text: textRef.current.value })
    );
    handleClose();
  };

  return (
    <Container className='text-center' style={{ maxWidth: '1000px' }}>
      <Button
        type='button'
        className=' shadow-none m-5'
        variant='outline-primary'
        onClick={handleShow}
      >
        <i className='bi bi-plus-circle'></i> Add Task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='task-form' onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter task title'
                ref={titleRef}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Task Details</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter task details'
                ref={textRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button form='task-form' type='submit' variant='primary'>
            Add
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddTask;
