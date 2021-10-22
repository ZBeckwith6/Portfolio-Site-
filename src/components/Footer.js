import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .createdBy {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Zach Beckwith</h1>
          <PText>
            I am a Front-End Web Developer from Saint Louis, Missouri. I create
            professional websites and applications. My journey as a developer
            started over a year ago and I'm excited to continue learning by
            working on new projects!
          </PText>
        </div>
        <div className="footer_col2">
          <FooterCol
            heading="Site Links"
            Links={[
              { title: 'Home', path: '/', type: 'Link' },
              { title: 'About', path: '/about', type: 'Link' },
              { title: 'Projects', path: '/projects', type: 'Link' },
              { title: 'Contact', path: '/contact', type: 'Link' },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                title: '+6363228154',
                path: 'tel:+3143228154',
              },
              {
                title: 'zbeckwith6@gmail.com',
                path: 'mailto:zbeckwith6@gmail.com',
              },
              {
                title: 'Saint Louis, Missouri 63123',
                path: 'https://www.google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <FooterCol
            heading="Social Links"
            Links={[
              {
                title: 'Github',
                path: 'https://github.com/ZBeckwith6',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/zachary-beckwith-0152a541/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/zach.beckwith.photography/',
              },
            ]}
          />
        </div>
      </div>
      <div className="createdBy">
        <div className="container">
          <PText>Created By: Zach Beckwith</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
