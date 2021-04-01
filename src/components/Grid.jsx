import { useContext, useState, useEffect } from "react";
import { BeerContext } from "../Context";
import { MyVerticallyCenteredModal } from "./Modal";
import Zoom from "react-reveal/Zoom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Grid = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { value1, value2 } = useContext(BeerContext);
  const [beer, setBeer] = value1;
  const [wishList, setWishList] = value2;
  const [stateId, setStateId] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState();

  const addToWishlist = () => {
    localStorage.setItem("wishes", JSON.stringify(wishList));
  };

  useEffect(() => {
    addToWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {beer.length !== 0
          ? beer.map((beer, index) => {
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
                      <Button
                        disabled={wishList.includes(beer)}
                        style={{ display: "block", margin: "1rem auto" }}
                        onClick={() => {
                          setItem(beer);
                          setWishList((prevState) => [...prevState, beer]);
                          console.log(wishList);
                        }}
                        variant="outline-info">
                        Add to Wishlist
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
