import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: 'Great'
  },
  {
    value: 25,
    label: 'Good'
  },
  {
    value: 50,
    label: 'Ok'
  },
  {
    value: 75,
    label: 'Bad'
  },
  {
    value: 100,
    label: 'Terrible'
  }
];

function valuetext(value) {
  return `${value}`;
}

export default function ToleranceSlider({ text, value, onChange }) {
  return (
    <Box sx={{ width: 225 }}>
      <div className="slider-title">{text}</div>
      <Slider
        aria-label="Custom marks"
        defaultValue={25}
        getAriaValueText={valuetext}
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
        value={value}
        onChange={(_, value) => onChange(value)}
      />
    </Box>
  );
}
