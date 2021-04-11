import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

export default function CustomizedMenus() {
  const handleClick = (event) => {

  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{ boxShadow: "none" }}
        onClick={handleClick}
      >
        <Avatar
          style={{ width: "32px", height: "32px", marginRight: 5 }}
          src="/broken-image.jpg"
        />
        verify
      </Button>
    </div>
  );
}
