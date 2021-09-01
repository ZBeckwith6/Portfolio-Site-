import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/portrait1.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__item {
    margin-top: 15rem;
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">Hello, I am Zach Beckwith...</p>
            <h2 className="about__heading">A Front-End Web Developer</h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Blandit turpis cursus in hac habitasse platea dictumst quisque
                sagittis. Quis viverra nibh cras pulvinar mattis nunc sed
                blandit libero. Mattis rhoncus urna neque viverra justo nec
                ultrices dui. Non odio euismod lacinia at quis risus. Turpis
                tincidunt id aliquet risus feugiat in ante metus dictum.
                Fringilla phasellus faucibus scelerisque eleifend donec pretium.
                Sit amet luctus venenatis lectus magna fringilla urna. Tempor
                commodo ullamcorper a lacus.
                <br />
                <br />
                Consequat nisl vel pretium lectus quam id leo in. Rhoncus mattis
                rhoncus urna neque viverra. Varius quam quisque id diam vel quam
                elementum pulvinar. Euismod nisi porta lorem mollis aliquam. Et
                netus et malesuada fames ac turpis egestas sed tempus. Sit amet
                tellus cras adipiscing enim eu turpis. Ultrices sagittis orci a
                scelerisque purus semper eget duis at. Euismod in pellentesque
                massa placerat. Rhoncus aenean vel elit scelerisque mauris.
                Interdum consectetur libero id faucibus nisl tincidunt eget
                nullam. Magna fermentum iaculis eu non diam. Sed cras ornare
                arcu dui vivamus. Ac tortor dignissim convallis aenean.
                Pellentesque pulvinar pellentesque habitant morbi tristique
                senectus et netus. Adipiscing at in tellus integer feugiat
                scelerisque varius.
              </PText>
            </div>
            <Button btnText="Download Resume" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Zach Beckwith Portrait" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="College"
              items={[
                'Westminster College | Bachelors Degree in Business Administration | 2010-2014',
              ]}
            />
            <AboutInfoItem
              title="Online Learning"
              items={['Udemy - The Web Developer Bootcamp by Colt Steele']}
            />
            <AboutInfoItem
              title="Bootcamp"
              items={['NuCamp - Front End Web + Mobile Development Bootcamp']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={[
                'HTML |',
                'CSS |',
                'JavaScript |',
                'React |',
                'React Native',
              ]}
            />
            <AboutInfoItem
              title="Version Control"
              items={['Git |', 'GitHub']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="Freelance Web Developer"
              items={['April 2021 - Present']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
