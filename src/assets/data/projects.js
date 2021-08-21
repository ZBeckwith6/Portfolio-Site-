import { v4 as uuidv4 } from 'uuid';
import CodingImg from '../images/coding1.jpg';
import GrbcichRealty from '../images/sign3crop.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Grbcich Realty',
    desc: 'A Real Estate website for a friend of mine.',
    img: GrbcichRealty,
  },
  {
    id: uuidv4(),
    name: 'Project 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: CodingImg,
  },
  {
    id: uuidv4(),
    name: 'Project 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: CodingImg,
  },
];

export default projects;
