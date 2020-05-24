import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import './login.scss';

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1 className="signin-header">ورود به زودفود </h1>
                      <p className="text-muted signin-title">با رمز ورود و پسورد وارد شوید</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="نام کاربری" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="رمز ورود" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="12 " >
                          <Button color="primary" className="btn-block">ورود</Button>
                        </Col>
                        <Col xs="12" className="text-center">
                          <Button color="link" className="px-0 mt-2">رمز عبور خود را فراموش کرده‌اید؟</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
