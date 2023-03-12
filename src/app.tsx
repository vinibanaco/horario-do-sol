import { useState } from 'react';

import DegreeSlider from './degree-slider';

import './styles.css';

function Ticks() {
  // `stroke-dasharray` is really weird when using percentages, the base for them is a
  // calculation involving the current viewport. For more info check the docs:
  // https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty
  const equivalentPercentageTo100p = 307.71;
  const numberOfTicks = 48; // 1 each 30 minutes

  const lineAndGapSizes = equivalentPercentageTo100p / numberOfTicks;
  const lineSize = lineAndGapSizes / 8;
  const gapSize = lineAndGapSizes - lineSize;

  return (
    <div>
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMin slice" // crop half the circle
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ticks"
        aria-hidden
      >
        <circle
          cx="50%"
          cy="50%"
          // unfortunately stroke's width are not considered for svg element's size, neither is
          // possible to configure its position, therefore the only solution is to decrease the
          // circle size via its radius
          r="49%"
          stroke="#F6C833"
          strokeWidth="3"
          strokeDasharray={`${lineSize}% ${gapSize}%`}
          strokeDashoffset={`${lineSize / 2}%`}
        />
      </svg>
    </div>
  );
}

function Sun({ angleInDegrees = 0 }) {
  return (
    <div
      className="sun"
      style={{
        transform: `rotate(${angleInDegrees}deg)`,
      }}
    />
  );
}

function getCosFromDegrees(degrees: number) {
  return Math.cos((degrees * Math.PI) / 180);
}

function covertCosToZeroToOneRange(cos: number) {
  // Input: from 1 to -1
  // Output: from 0 to 1

  const invertedCos = cos * -1;
  const cosInZeroToOneRange = (invertedCos + 1) / 2; // 2 is the new maximum cos after the sum
  return cosInZeroToOneRange;
}

function Sunlight({ angleInDegrees = 0 }) {
  const cos = getCosFromDegrees(angleInDegrees);
  const widthPercentage = 100 * covertCosToZeroToOneRange(cos);

  return (
    <div className="sunlightContainer">
      <div
        className="sunlight"
        style={{
          width: `${widthPercentage}%`,
        }}
      />
    </div>
  );
}

export default function App() {
  const [sunAngle, setSunAngle] = useState(0);

  return (
    <div>
      <DegreeSlider value={sunAngle} onChange={setSunAngle} style={{ marginBottom: '15px' }} />

      <section className="container">
        <h1 className="title">Horário do sol</h1>

        <div className="sunclockContainer">
          <div className="sunclock">
            <Ticks />
            <Sun angleInDegrees={sunAngle} />
            <Sunlight angleInDegrees={sunAngle} />
          </div>
        </div>
      </section>
    </div>
  );
}
