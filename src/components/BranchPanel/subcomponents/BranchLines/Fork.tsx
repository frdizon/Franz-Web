import { FC } from "react";

interface TForkProps {
  id: string;
  stroke: string;
}

const Fork: FC<TForkProps> = ({ id }) => (
  <svg id={id} width="100" height="350" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <g id={`arc-${id}`} fill="none">
        {/* <path d="M 0 50 Q 00 75 50 100" stroke={stroke} fill="transparent"/>
                <path d="M 50 100 Q 100 125 100 150" stroke={stroke} fill="transparent"/>
                <path d="M 100 150 L 100 190" stroke={stroke} fill="transparent"/> */}

        {/* <mask
          id="heart_svg__a"
          mask-type="alpha"
          x="0"
          y="0"
          width="100"
          height="350"
          fill="red"
          stroke="red"
        >
          <path d="M 0 0 Q 00 25 50 50" fill="red" stroke="red" />
        </mask> */}
        <path d="M 0 0 Q 00 25 50 50" />
        <path d="M 50 50 Q 100 75 100 100" />
        <path d="M 100 100 L 100 140" />
      </g>
    </defs>
    <path d="M 0 0 L 0 350" />
    {/* <use xlinkHref="#arcs" /> */}
    <use xlinkHref={`#arc-${id}`} />
    <use xlinkHref={`#arc-${id}`} transform="translate(0,350) scale(1, -1) " />
  </svg>
);

export default Fork;
