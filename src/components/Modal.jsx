/* eslint-disable no-unused-vars */
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BeerContext } from "../Context";

export function MyVerticallyCenteredModal(props) {
  // eslint-disable-next-line no-unused-vars
  const { value1, value2 } = useContext(BeerContext);
  const [beer, setBeer] = value1;
  const [wishList, setWishList] = value2;
  return (
    <div>
      {!props.iswish && beer[props.id] ? (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {beer[props.id] ? beer[props.id].name : ""}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: "center" }}>
            <h4>{beer[props.id] ? beer[props.id].tagline : ""}</h4>
            <img
              src={
                beer[props.id].image_url
                  ? `${beer[props.id].image_url}`
                  : "https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
              }
              alt="cover art"
              style={{ width: "auto", margin: "auto", maxHeight: "20vh" }}
            />
            <p>{beer[props.id] ? beer[props.id].description : ""}</p>
            <p>{beer[props.id] ? <em>ABV: {beer[props.id].abv} </em> : ""}</p>
            <p>{beer[props.id] ? <em>IBU: {beer[props.id].ibu} </em> : ""}</p>
            <p>{beer[props.id] ? <em>PH: {beer[props.id].ph} </em> : ""}</p>
            <h5>Goes well with:</h5>
            {beer[props.id]
              ? beer[props.id].food_pairing.map((food, index) => {
                  return <p key={index}>{food}</p>;
                })
              : ""}
            <h5>Brewers' tips:</h5>
            <p>{beer[props.id] ? beer[props.id].brewers_tips : ""}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} variant="outline-secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        wishList[props.id] && (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {wishList[props.id] ? wishList[props.id].name : ""}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
              <h4>{wishList[props.id] ? wishList[props.id].tagline : ""}</h4>
              <img
                src={
                  wishList[props.id].image_url
                    ? `${wishList[props.id].image_url}`
                    : "https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
                }
                alt="cover art"
                style={{ width: "auto", margin: "auto", maxHeight: "20vh" }}
              />
              <p>{wishList[props.id] ? wishList[props.id].description : ""}</p>
              <p>{wishList[props.id] ? <em>ABV: {wishList[props.id].abv} </em> : ""}</p>
              <p>{wishList[props.id] ? <em>IBU: {wishList[props.id].ibu} </em> : ""}</p>
              <p>{wishList[props.id] ? <em>PH: {wishList[props.id].ph} </em> : ""}</p>
              <h5>Goes well with:</h5>
              {wishList[props.id]
                ? wishList[props.id].food_pairing.map((food, index) => {
                    return <p key={index}>{food}</p>;
                  })
                : ""}
              <h5>Brewers' tips:</h5>
              <p>{wishList[props.id] ? wishList[props.id].brewers_tips : ""}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide} variant="outline-secondary">
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
      )}
    </div>
  );
}
