// src/components/ServicePage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5vh 0;
  min-height: 100vh;
`;

const DropdownCard = styled(Card)`
  width: 90%;
  max-width: 30rem;
  margin: auto;
  margin-top: 2vh;
`;

const DropdownCardTitle = styled(CardTitle)`
  font-size: 1.8em;
  font-weight: bold;
`;

const ServicePage = () => {
  const { service } = useParams(); // Get the service type from URL
  const [selectedBranch, setSelectedBranch] = useState('');
  const navigate = useNavigate();

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log all service names
    console.log('Service:', service);
    console.log('Selected Branch:', selectedBranch);

    if (selectedBranch) {
      switch(service) {
        case 'Wash & Iron':
          console.log('Navigating to /WashAndIron');
          navigate('/WashAndIron');
          break;
        case 'Wash & Steam':
          console.log('Navigating to /WashAndFold');
          navigate('/WashAndFold');
          break;
        case 'Iron & Fold':
          console.log('Navigating to /IronAndFold');
          navigate('/IronAndFold');
          break;
        case 'Dry Cleaning':
          console.log('Navigating to /DryCleaning');
          navigate('/DryCleaning');
          break;
        case 'Emergency Service':
          console.log('Navigating to /EmergencyService');
          navigate('/EmergencyService');
          break;
        default:
          console.error('Invalid service type');
          navigate('/');
      }
    } else {
      console.error('No branch selected');
    }
  };

  return (
    <Section>
      <Container>
        <DropdownCard>
          <CardBody>
            <DropdownCardTitle>{decodeURIComponent(service)}</DropdownCardTitle>
            <CardText>Please select a branch:</CardText>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="branchSelect">Select Branch</Label>
                <Input
                  type="select"
                  id="branchSelect"
                  name="branch"
                  value={selectedBranch}
                  onChange={handleBranchChange}
                >
                  <option value="">Select Branch</option>
                  <option value="Tumble Dry">Tumble Dry</option>
                  <option value="Laundrokart">Laundrokart</option>
                  <option value="Clean Genie Express">Clean Genie Express</option>
                  <option value="Coin Laundromart">Coin Laundromart</option>
                  <option value="One wash">One wash</option>
                  <option value="A1 laundry">A1 laundry</option>
                  <option value="Instawash">Instawash</option>
                </Input>
              </FormGroup>
              <Button type="submit" color="primary">Submit</Button>
            </form>
          </CardBody>
        </DropdownCard>
      </Container>
    </Section>
  );
};

export default ServicePage;
