import React from 'react';
import styled from 'styled-components';
import projectImg from '../assets/images/coding1.jpg';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__link {
    background-color: var(--gray-2);
    border-radius: 12px;
    padding: 2rem 0rem;
    margin-top: 1rem;
    text-align: center;
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  href = 'http://willgrbcich.com/',
  button = 'Website',
}) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__desc">{desc}</p>
        <ul className="projectItem__link">
          <li>
            <a href={href} target="_blank" rel="noreferrer noopener">
              {button}
            </a>
          </li>
        </ul>
      </div>
    </ProjectItemStyles>
  );
}
