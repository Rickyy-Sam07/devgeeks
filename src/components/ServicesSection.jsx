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
      title: 'Website Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      icon: TripOriginOutlinedIcon,
      color: '#F3C4CD'
    },
    {
      title: 'AI/ML Solutions',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      icon: WebhookOutlinedIcon,
      color: '#C9BFFF'
    },
    {
      title: 'DevOps Services',
      description: 'Streamlined deployment, monitoring, and infrastructure management.',
      icon: ReadMoreOutlinedIcon,
      color: '#D6F9DD'
    },
    {
      title: 'Blockchain Development',
      description: 'Decentralized applications and smart contract development.',
      icon: LibraryBooksOutlinedIcon,
      color: '#FCE3C9'
    },
    {
      title: 'App Development',
      description: 'Mobile and desktop applications for iOS, Android, and cross-platform.',
      icon: TripOriginOutlinedIcon,
      color: '#F8E4A6'
    },
    {
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: WebhookOutlinedIcon,
      color: '#E4C7F1'
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
