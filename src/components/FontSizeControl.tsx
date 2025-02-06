import React from "react";

interface FontSizeControlProps {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
}

const FontSizeControl: React.FC<FontSizeControlProps> = ({
  fontSize,
  onFontSizeChange,
}) => {
  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = Number(event.target.value);
    onFontSizeChange(size);
  };

  return (
    <div>
      <label>Font Size:</label>
      <input
        type="number"
        value={fontSize}
        onChange={handleFontSizeChange}
        min="12"
        max="24"
      />
    </div>
  );
};

export default FontSizeControl;
