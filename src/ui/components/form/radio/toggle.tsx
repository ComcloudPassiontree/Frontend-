import { ToggleSlider } from "react-toggle-slider";

interface Props {}

function Toggle(props: Props) {
  const {} = props;

  return (
    <div style={{ transform: "scale(0.8)" }}>
      <ToggleSlider
        handleBackgroundColor={"#000000"}
        barBackgroundColorActive={"#B69BFC"}
        barBackgroundColor={"#FAF2E8"}
        barStyles={{ border: "1.6px solid #000" }}
        draggable={false}
      />
    </div>
  );
}

export default Toggle;
