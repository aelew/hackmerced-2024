import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
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

export default function DiscreteSliderMarks({ text }) {
  return (
    <Box sx={{ width: 200 }}>
      <div className="slider-title">{text}</div>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
