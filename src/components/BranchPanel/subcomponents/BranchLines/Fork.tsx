import { FC } from 'react';

interface TForkProps {
    stroke: string;
}

const Fork: FC<TForkProps> = ({stroke}) => (
    <svg width="100" height="500" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <g id="arcs" fill="none">
                <path d="M 0 50 Q 00 75 50 100" stroke={stroke} fill="transparent"/>
                <path d="M 50 100 Q 100 125 100 150" stroke={stroke} fill="transparent"/>
                <path d="M 100 150 L 100 190" stroke={stroke} fill="transparent"/>
            </g>
        </defs>
        <path d="M 0 0 L 0 400" stroke={stroke} fill="transparent"/>
        <use xlinkHref="#arcs" />
        <use xlinkHref="#arcs" transform="translate(0,450) scale(1, -1) "/>
    </svg>
)

export default Fork;