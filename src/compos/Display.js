import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const Display = () => {
  const { data, loading, error } = useSelector((state) => state.shoot);
  const navigateToBack = useNavigate();

  if (loading) {
    return <div style={{textAlign:"center",fontSize:"50px"}}>loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleToBack = () => {
    navigateToBack("/");
  };

  return (
    <div className="photo-gallery-container">
      {data.photos?.map((per) => (
        <div key={per.id} className="card-container">
          <Card className="h-100 allOver">
            <Card.Img variant="top" src={per.url} />
            <Card.Body>
              <Card.Title>{per.title}</Card.Title>
              <Card.Text> {per.description} </Card.Text>
              <Button
                className="btnButton"
                onClick={handleToBack}
                variant="primary"
              >
                Back to home
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Display;
