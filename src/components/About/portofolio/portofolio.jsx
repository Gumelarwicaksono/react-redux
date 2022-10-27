import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import './styleing/style.css';
import Facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twiter from './img/twitter.png';
import whatsapp from './img/whatsapp.png';
import forger from './img/forger.png';

export default class Porto extends React.Component {
  redirect() {
    window.location.href = 'https://github.com/Gumelarwicaksono/gumelar-portofolio';
  }
  render() {
    return (
      <>
        <div className="view-page">
          <Row className="row m-auto">
            <Col>
              <div className="text-center description">
                <h4 className="display-6 fw-bold text-success">GUMELAR WICAKSONO</h4>
                <p>I am a junior programmer, I graduated from eduwork.id</p>
                <Button variant="outline-success" onClick={this.redirect}>
                  start see github !
                </Button>
                <div className="medsos">
                  <a href="https://web.facebook.com/gumelar.wicaksono.12">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="https://www.instagram.com/gumelar_wicaksono/">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="https://twitter.com/gumelar_ica">
                    <img src={twiter} alt="" />
                  </a>
                  <a href="https://wa.me/6282122394638/">
                    <img src={whatsapp} alt="" />
                  </a>
                </div>
                <br />
              </div>
            </Col>
            <Col>
              {' '}
              <div className=" d-flex justify-content-center">
                <img src={forger} alt="" />
              </div>
            </Col>
          </Row>
          <footer className="text-center mt-4"> 2022_&#169;_gumelarw wicaksono</footer>
        </div>
      </>
    );
  }
}
