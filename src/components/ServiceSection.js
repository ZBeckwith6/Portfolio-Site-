import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdPhonelinkSetup, MdCode } from 'react-icons/md';
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
            title="Web Development"
            desc="I create complete websites and applications for wide range of clients. If you have a vision for a site
            or an application I'll help make that vision come to life!"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Mobile Development"
            desc="I develop mobile applications that are both visually appealing and can take advantage of the
            advanced modern technology of mobile devices."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="UI/UX Design"
            desc="An exceptional user experience is essential for applications these days. It is my goal to create intuitive
            application designs that people of all technological competencies can use with ease."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
