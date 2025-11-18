import { Button, Card} from "react-bootstrap";
import Rate from "./Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <div>
      <Card style={{ width: "18rem", height:"900px", margin:"4%"}}>
        <Card.Img variant="top" src={movie.posterUrl} height={450}/>
        <Card.Body>
          <Card.Title className="h-25 mt-1">{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Rate rate={movie.rate}  isRating={true}/>
            <Link to={`/movie/${movie.id}`} >
            <Button variant="danger" >Go somewhere</Button>
            </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
