import { v4 as uuidv4 } from 'uuid';
import CodingImg from '../images/coding1.jpg';
import GrbcichRealty from '../images/sign3crop.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Grbcich Realty',
    desc:
      'A Real Estate website for an up and coming Real Estate Agent in Saint Louis. Languages Used: HTML, CSS and JavaScript',
    img: GrbcichRealty,
    link: 'http://willgrbcich.com/',
    button: 'Website',
  },
  {
    id: uuidv4(),
    name: 'NuCampsite - React',
    desc:
      'A NuCamp class project website for a make believe campsite. Language Used: ReactJS.',
    img: CodingImg,
    link: 'https://github.com/ZBeckwith6/nucampsite-react',
    button: 'Github Repository',
  },
  {
    id: uuidv4(),
    name: 'NuCampsite - Bootstrap',
    desc:
      'A NuCamp class project website for a make believe campsite. Languages Used: HTML, SCSS, JavaScript and Bootstrap.',
    img: CodingImg,
    link: 'https://github.com/ZBeckwith6/nuBootstrap',
    button: 'Github Repository',
  },
];

export default projects;
