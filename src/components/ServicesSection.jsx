import React from 'react';
import { Stack, Typography, Button, Container, Card } from '@mui/material';
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import "../../stylesheets/ServicesSection.scss";

const ServicesSection = () => {
  const services = [
    {
      title: 'Branding',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: TripOriginOutlinedIcon,
      color: '#F3C4CD'
    },
    {
      title: 'Web design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: WebhookOutlinedIcon,
      color: '#C9BFFF'
    },
    {
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: ReadMoreOutlinedIcon,
      color: '#D6F9DD'
    },
    {
      title: 'Graphic design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: LibraryBooksOutlinedIcon,
      color: '#FCE3C9'
    }
  ];

  return (
    <section className="services-container">
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="services-header">
          <h2 className='title'>
            Services we offer
          </h2>
          <div className="service-btn">
            <div className="btn-layer"></div>
            <Button className="all-services-btn">
              All services
            </Button>
          </div>
        </Stack>

        <Stack direction="row" spacing={3} className="services-list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card" style={{ backgroundColor: service.color }}>
                <Stack>
                  <div className="icon-wrapper">
                    <IconComponent />
                  </div>
                  <Typography variant="h5" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    {service.description}
                  </Typography>
                </Stack>
              </Card>
            );
          })}
        </Stack>
      </Container>
    </section>
  );
};

export default ServicesSection;
