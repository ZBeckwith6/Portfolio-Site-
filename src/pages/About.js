import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/portrait2.jpg';
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
    font-size: 3.9rem;
    margin-bottom: 2rem;
    color: var(--white);
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 2.6rem;
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
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    color: var(--white);
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
                In the Spring of 2020 I decided that I wanted to pursue a career
                that was equally as rewarding as it was challenging, but most
                importantly a career I was passionate about. My love for tech
                and being a creator eventually led me to Web Development. The
                idea of creating websites and solving problems for both myself
                and for others immediately intrigued me and I knew this was my
                calling. Since I've started building web applications, my end
                goal is to make each site as responsive, user friendly and
                appealing as possible. On top of using HTML, CSS and JS I enjoy
                creating single page applications using React, which is what I
                used to create this site, along with React Native.
                <br />
                <br />
                Outside of Web Development I enjoy traveling, photography,
                playing guitar, going to concerts and being way too emotionally
                invested in my favorite sports teams. Go Cardinals, Blues and
                Liverpool!. If you want to know more and would like to discuss
                working together feel free to reach out!
              </PText>
            </div>
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
              items={[
                'Udemy | The Web Developer Bootcamp by Colt Steele | Spring 2020 - Fall 2020',
              ]}
            />
            <AboutInfoItem
              title="Bootcamp"
              items={[
                'NuCamp | Front End Web + Mobile Development Bootcamp | April 2021 - July 2021',
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="Front-End"
              items={['HTML | CSS | JavaScript | React']}
            />
            <AboutInfoItem
              title="Frameworks"
              items={['React Native | Bootstrap']}
            />
            <AboutInfoItem title="CMS Platforms" items={['WordPress']} />
            <AboutInfoItem title="Back-End" items={['NodeJS']} />
            <AboutInfoItem title="Version Control" items={['Git | GitHub']} />
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
