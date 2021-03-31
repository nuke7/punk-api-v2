import { useContext, useState } from "react";
import { BeerContext } from "../Context";
import { MyVerticallyCenteredModal } from "./Modal";
import Zoom from "react-reveal/Zoom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Grid = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [beer, setBeer] = useContext(BeerContext);
  const [id, setId] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {beer.length !== 0
          ? beer.map((beer, index) => {
              return (
                <Zoom>
                  <Card
                    className="text-center"
                    style={{ width: "18rem", minWidth: "240px", margin: "0.5rem" }}>
                    <Card.Header>
                      <h5>{beer.name}</h5>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{beer.tagline}</Card.Title>
                      <Card.Text>
                        <img
                          src={
                            beer.image_url
                              ? `${beer.image_url}`
                              : "https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
                          }
                          alt="cover art"
                          style={{ width: "auto", margin: "auto", maxHeight: "20vh" }}
                        />
                      </Card.Text>
                      <Button
                        id={index}
                        onClick={(e) => {
                          setId(e.currentTarget.id);
                          console.log(id);
                          setModalShow(true);
                        }}
                        variant="outline-info">
                        Show More
                      </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      First Brewed: {beer.first_brewed}
                    </Card.Footer>
                  </Card>
                </Zoom>
              );
            })
          : "No such beer"}
      </div>
      <MyVerticallyCenteredModal
        beer={beer}
        id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
