import { useContext, useState, useEffect } from "react";
import { BeerContext } from "../Context";
import { MyVerticallyCenteredModal } from "./Modal";
import Zoom from "react-reveal/Zoom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const WishList = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { value1, value2 } = useContext(BeerContext);
  /*   const [beer, setBeer] = value1; */
  const [wishList, setWishList] = value2;
  const [stateId, setStateId] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [localList, setLocalList] = useState([]);
  // eslint-disable-next-line no-unused-vars

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
  }, [wishList]);

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
                <Zoom key={beer.id}>
                  <Card
                    className="text-center"
                    style={{
                      width: "18rem",
                      minWidth: "240px",
                      margin: "0.5rem",
                      alignSelf: "stretch",
                      height: "95%",
                    }}>
                    <Card.Header>
                      <h4>{beer.name}</h4>
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
                        style={{ margin: "1rem auto", minWidth: "180px" }}
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
                        style={{ margin: "1rem auto", minWidth: "180px" }}
                        id={index}
                        onClick={(e) => {
                          localStorage.setItem(
                            "wishes",
                            JSON.stringify(
                              wishList.filter((val) => {
                                return val.id !== wishList[e.currentTarget.id].id;
                              })
                            )
                          );
                          setWishList(() =>
                            wishList.filter((val) => {
                              return val.id !== wishList[e.currentTarget.id].id;
                            })
                          );
                        }}
                        variant="outline-danger">
                        Remove from Wishlist
                      </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      First Brewed: {beer.first_brewed}
                    </Card.Footer>
                  </Card>
                </Zoom>
              );
            })
          : "No such beer, yet"}
      </div>
      <MyVerticallyCenteredModal
        iswish={true}
        id={stateId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
