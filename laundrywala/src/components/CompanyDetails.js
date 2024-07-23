
// src/CompanyDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 2rem 2rem 2rem; /* Adjusted padding for better spacing */
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  text-align: justify;
`;

const Additional = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 1rem;
  text-align: justify;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

const ViewMapLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  font-size: 1rem;
  color: #0056b3;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #004494;
  }
`;

const ReviewsContainer = styled.div`
  margin-top: 3rem;
`;

const Review = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReviewAuthor = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #333;
`;

const ReviewText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const CompanyDetails = () => {
  const location = useLocation();
  const { company } = location.state;

  return (
    <Container>
      <Title>{company.name}</Title>
      <Description>{company.description}</Description>
      {company.additional && <Additional>{company.additional}</Additional>}

      <ContactInfo>
        <h3>Contact Information</h3>
        <p>Location: {company.location}</p>
        <ViewMapLink href={company.link} target="_blank" rel="noopener noreferrer">
          View on Map
        </ViewMapLink>
      </ContactInfo>

      <ReviewsContainer>
        <h3>Customer Reviews</h3>
        <Review>
          <ReviewAuthor>John Doe</ReviewAuthor>
          <ReviewText>Great service, highly recommend!</ReviewText>
        </Review>
        <Review>
          <ReviewAuthor>Jane Smith</ReviewAuthor>
          <ReviewText>Very professional and quick turnaround.</ReviewText>
        </Review>
        {/* Add more reviews as needed */}
      </ReviewsContainer>
    </Container>
  );
};

export default CompanyDetails;

