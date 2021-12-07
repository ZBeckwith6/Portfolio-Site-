import { v4 as uuidv4 } from 'uuid';
import CampBootstrap from '../images/campBootstrap.PNG';
import CampReact from '../images/campReact.PNG';
import GrbcichRealty from '../images/sign3crop.jpg';
import PhotographySite from '../images/photographyPortfolio.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Grbcich Realty',
    desc:
      'A Real Estate website I created for an up and coming Real Estate Agent in Saint Louis. Languages Used: HTML, CSS and JavaScript',
    img: GrbcichRealty,
    link: 'http://willgrbcich.com/',
    button: 'Website',
  },
  {
    id: uuidv4(),
    name: 'Zach Beckwith Photography',
    desc:
      'A website I created for my freelance photography work using Wordpress/Elementor.',
    img: PhotographySite,
    link: 'http://zachbeckwithphotography.com/',
    button: 'Website',
  },
  {
    id: uuidv4(),
    name: 'NuCampsite - React',
    desc:
      'A NuCamp class project website for a make believe campsite. Language Used: ReactJS.',
    img: CampReact,
    link: 'https://github.com/ZBeckwith6/nucampsite-react',
    button: 'Github Repository',
  },
  {
    id: uuidv4(),
    name: 'NuCampsite - Bootstrap',
    desc:
      'A NuCamp class project website for a make believe campsite. Languages Used: HTML, SCSS, JavaScript and Bootstrap.',
    img: CampBootstrap,
    link: 'https://github.com/ZBeckwith6/nuBootstrap',
    button: 'Github Repository',
  },
];

export default projects;
