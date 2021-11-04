import React from 'react';
import styled from 'styled-components';
import Portrait from '../assets/images/portrait.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 10vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    bottom: 30px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 25px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.8rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: normal.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 75px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    max-height: 90px;
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.8rem;
        transform: rotate(90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    .hero__social__indicator,
    .hero__scrollDown {
      width: 50px;
      p {
        font-size: 2.2rem;
        transform: translateY(-70px) rotate(90deg);
        letter-spacing: normal.7rem;
        text-transform: uppercase;
      }
      img {
        max-height: 105px;
        width: 16px;
        margin: 0 auto;
        object-fit: contain;
      }
    }
    .hero__social {
      left: 10px;
      bottom: 2%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.8rem;
        }
        img {
          max-height: 52px;
        }
      }
      .her__social__text {
        ul {
          li {
            a {
              font-size: 1.8rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 2%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.6rem;
        }
        img {
          max-height: 22px;
        }
      }
      .her__social__text {
        ul {
          li {
            a {
              font-size: 1.6rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      bottom: 20%;
      gap: 1rem;
      P {
        font-size: 1.6rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, my name is...</span>
            <span className="hero__name">Zach Beckwith</span>
          </h1>
          <div className="hero__img">
            <img src={Portrait} alt="" />
          </div>
          <div className="hero__info">
            <Button btnLink="/projects" btnText="see my projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/ZBeckwith6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zachary-beckwith-0152a541/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zach.beckwith.photography/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scroll down arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
