import { useContext, useState, useEffect } from "react";
import { BeerContext } from "../Context";
import { MyVerticallyCenteredModal } from "./Modal";
import Zoom from "react-reveal/Zoom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const WishList = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { value1, value2 } = useContext(BeerContext);
  const [beer, setBeer] = value1;
  const [wishList, setWishList] = value2;
  const [stateId, setStateId] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [localList, setLocalList] = useState([]);

  const loadFromLocalStorage = () => {
    const data = localStorage.getItem("wishes");
    if (data === null || data.length === 0) {
      return [];
    } else {
      return JSON.parse(data);
    }
  };

  useEffect(() => {
    setLocalList(loadFromLocalStorage());
  }, []);

  return (
    <div>
      <div
        style={{
          marginTop: "4rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        {localList.length !== 0
          ? localList.map((beer, index) => {
              return (
                <Zoom>
                  <Card
                    key={beer.id}
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
                          setStateId(e.currentTarget.id);
                          console.log(stateId);
                          setModalShow(true);
                        }}
                        variant="outline-secondary">
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
        id={stateId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
