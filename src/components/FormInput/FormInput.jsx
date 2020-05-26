import React, { Fragment } from "react";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  FormGroup,
} from "reactstrap";

const FormInput = ({
  handleChange,
  handleBlur,
  lable,
  icon,
  errorShow,
  ...otherprops
}) => {
  return (
    <Fragment>
      <FormGroup>
        {lable ? <Label className="form-lable">{lable}</Label> : null}
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={`${icon}`}></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input onChange={handleChange} onBlur={handleBlur} {...otherprops} />
          {errorShow ? <div className="has-error">{errorShow}</div> : null}
        </InputGroup>
      </FormGroup>
    </Fragment>
  );
};
export default FormInput;
