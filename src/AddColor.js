import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color };
  // const colors =["teal","orange","lavender"];
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div>
      <div className="add-color-form">
        <TextField
          value={color}
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          id="standard-basic"
          label="enter a color"
          variant="standard"
        />
        <Button
          onClick={() => setColors([...colors, color])}
          variant="outlined"
        >
          Add color
        </Button>
      </div>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "242px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
