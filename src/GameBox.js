
export function GameBox({ onPlayerClick, val }) {
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );
}
