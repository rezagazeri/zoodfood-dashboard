import React from "react";
import FormInput from "./../../../components/FormInput/FormInput";
import { Button, Card, CardBody, Col, Container, Form, Row } from "reactstrap";

const SiginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div className="app flex-row align-items-center login-background">
      <Container>
        <Row className="justify-content-center">
          <Col md="5">
            <Card className="p-4">
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h1 className="signin-header">ورود به زودفود </h1>
                  <p className="text-muted signin-title">
                    با رمز ورود و پسورد وارد شوید
                  </p>
                  <FormInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    type="text"
                    name="username"
                    value={values.username}
                    lable="نام کاربری"
                    placeholder="نام کاربری خود را وارد نمایید"
                    icon="icon-user"
                    errorShow={
                      errors.username && touched.username ? errors.username : null
                    }
                    required
                  />
                  <FormInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    type="password"
                    name="password"
                    value={values.password}
                    lable="رمز عبور"
                    placeholder="رمز عبور خود را وارد نمایید"
                    icon="icon-lock"
                    required
                    errorShow={
                      errors.password && touched.password ? errors.password : null
                    }
                  />
                  <Row>
                    <Col xs="12 ">
                      <Button type ="submit" color="primary" className="btn-block">
                        ورود
                      </Button>
                    </Col>
                    <Col xs="12" className="text-center">
                      <Button color="link" className="px-0 mt-2">
                        رمز عبور خود را فراموش کرده‌اید؟
                      </Button>
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
};
export default SiginForm;
