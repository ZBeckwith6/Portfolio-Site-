import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What Services I Provide" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Development"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="App Dev"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
