const { useState } = React;

export const ColorPicker = () => {
  const [pickedColor, setPickedColor] = useState("#ffffff");

  const changeColor = (e) => {
    const color = e.target.value;
    setPickedColor(color);
  }

  return (
    <div id="color-picker-container" style={{ backgroundColor: pickedColor }}>
      <input value={pickedColor} type="color" id="color-input" onChange={changeColor}/>
    </div>
  )
};