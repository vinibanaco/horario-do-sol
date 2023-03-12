type Props = {
  value: number;
  onChange: (newValue: number) => void;
  style: React.CSSProperties;
};
function DegreeSlider({ value, onChange, style }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        ...style,
      }}
    >
      <input
        type="range"
        min="0"
        max="180"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span style={{ position: 'absolute', right: 0 }}>{value}°</span>
    </div>
  );
}

export default DegreeSlider;
