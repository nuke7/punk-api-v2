import { useContext, useState, useEffect } from "react";
import { BeerContext } from "../Context";
import { MyVerticallyCenteredModal } from "./Modal";
import Zoom from "react-reveal/Zoom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Grid = () => {
  // eslint-disable-next-line no-unused-vars
  const { value1, value2, value3 } = useContext(BeerContext);
  // eslint-disable-next-line no-unused-vars
  const [beer, setBeer] = value1;
  const [wishList, setWishList] = value2;
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = value3;
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          alignContent: "stretch",
        }}>
        {beer.length !== 0
          ? beer.map((beer, index) => {
              return (
                <Zoom key={beer.id}>
                  <Card
                    className="text-center"
                    style={{
                      width: "18rem",
                      minWidth: "240px",
                      margin: "0.5rem",

                      height: "95%",
                    }}>
                    <Card.Header>
                      <h5>{beer.name}</h5>
                    </Card.Header>
                    <Card.Body
                      style={{
                        display: "flex",
                        /* flexWrap: "wrap", */
                        flexDirection: "column",
                        justifyContent: "end",
                      }}>
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
                        style={{ display: "block", margin: "1rem auto" }}
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
          : search.length !== 0
          ? "No such beer, yet"
          : "search for something first..."}
      </div>
      <MyVerticallyCenteredModal
        id={stateId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
