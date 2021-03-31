import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BeerContext } from "../Context";

export function MyVerticallyCenteredModal(props) {
  // eslint-disable-next-line no-unused-vars
  const { value1, value2 } = useContext(BeerContext);
  const [beer, setBeer] = value1;
  /* const [wishList, setWishList] = value2; */
  return (
    <div>
      {beer[props.id] && (
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} variant="outline-secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
