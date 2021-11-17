import { useState } from "react";
import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";
export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);


  
  return (
    <div className="counter-container">
      <IconButton
        className="likes-dislikes"
        onClick={incrementLike}
        aria-label="like"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        className="likes-dislikes "
        onClick={() => {
          setDisLike(disLike + 1);
        }}
        aria-label="dislike"
        color="error"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
