import React from 'react'
import {Container , Row , Col} from 'reactstrap';

import './services.css'
import serviceData from '../assets/data/serviceData'
import {motion} from 'framer-motion';
function Services() {
  return <section className="services">
    <Container>
        <Row>

             {
                serviceData.map((item,index) =>(
                    <Col lg='3' md='4' key={index}>
        
                    <motion.div className="service__item" 
                    whileHover={{scale:1.1}}
                    style={ {background:`${item.bg}`}}>
                        <span><i class={item.icon}></i></span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                 </Col>
                ))}
             


        </Row>
    </Container>
  </section>

}

export default Services
