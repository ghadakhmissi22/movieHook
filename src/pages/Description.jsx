import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import { Container, Row, Col, Button } from 'react-bootstrap';
//import moviesData from '../moviesData';

const Description = () => {
    // Récupérer l'ID du film depuis les paramètres de l'URL
  const { id } = useParams();

  const navigate = useNavigate();
  const { movies } = useMovies();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log('movies from context', movies);
    if (!movies || movies.length === 0) {
      setMovie(null);
      return;
    }
    const found = movies.find(m => String(m.id) === String(id));
    console.log('looking for id', id, 'found', found);
    setMovie(found || null);
  }, [id, movies]);

  if (!movie) {
    return (
      <div style={{ minHeight: "100vh", textAlign: "center" }}>
        <h2>Movie not found or loading...</h2>
        <Button variant="dark" onClick={() => navigate('/')}>Go Back</Button>
      </div>
    );
  }

  return (

    <div style={{ minHeight: "100vh", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <Container>
        
        <Row style={{ marginTop: "5%", backgroundColor: "Highlight", padding: "2%" }}>
          <Col md={8} style={{ margin: "auto" }}>{movie.description}</Col>
          <Button variant="dark" onClick={() => navigate('/')}>Go Back</Button>
          <Col md={4}>
            <iframe src={movie.trailer} title={movie.title} width="100%" height="315" allowFullScreen></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;