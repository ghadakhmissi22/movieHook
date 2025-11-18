import { Button, Form, Modal } from "react-bootstrap";
import "./addMovie.css";
import { useState } from "react";
const AddMovie = ({ movieAdd }) => {
  // ----------------------------React Bootstrap----------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // --------------------------------------------------------
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [trailer, setTrailer] = useState("");
  // console.log({ title, description, rate, posterUrl });
  const handleSubmit = (e) => {
    e.preventDefault();
    movieAdd({ id: Date.now(), title, description, rate, posterUrl });
    setTitle("");
    setDescription("");
    setRate("");
    setPosterUrl("");
    setTrailer("");
    handleClose();

  };
  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favorite movie....</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex:Titanic..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                value={rate}
                max={5}
                min={1}
                maxLength={1}
                step={1}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3">
              <Form.Label>Poster Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="ex:https://exemple.png"
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>trailer Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="ex:https://exemple.png"
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
              
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={
                !title.trim() ||
                !description.trim() ||
                !rate.trim() ||
                !posterUrl.trim()
              }
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AddMovie;
