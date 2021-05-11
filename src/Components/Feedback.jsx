import React, { useState } from "react";
import Stars from "./Stars";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
  CustomInput
} from "reactstrap";
import roles from "./roles.js";
import experience from "./experience.js";
import hobbies from "./hobbies.js";
const Feedback = () => {
  const [errMsg, setErrMsg] = useState({
    fNameErr: " ",
    mNameErr: "",
    lNameErr: "",
    emailErr: "",
    dobErr: "",
    currentAddrErr: "",
    stateErr: "",
    cityErr: "",
    zipErr: "",
    genderErr: "",
    hobbieClickErr: "",
    roleErr: "",
    experienceErr: "",
    imgErr: ""
  });
  const [details, setDetails] = useState({
    fName: "",
    mName: "",
    lName: "",
    email: "",
    dob: "",
    currentAdr: "",
    permanentAdr: "",
    state: "",
    city: "",
    zip: "",
    gender: "",
    hobbies: {
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: ""
    },
    otherHobbie: "",
    radio: {
      roles: "",
      experience: ""
    },
    feedback: "",
    imgFile: null,
    rating: { ui: 0, ux: 0, dg: 0, or: 0 }
  });
  const [others, setOthers] = useState(false);
  const [display, setDisplay] = useState(false); // for toggling experience section (after users click on roles it will display experience section)
  const [hobbieCount, setHobbieCount] = useState(0); //used for counting hobbies checked out of 6 options.
  const [submitMsg, setSubmitMsg] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const validate = () => {
    let fNameError = "";
    let mNameError = "";
    let lNameError = "";
    let emailError = "";
    let dobError = "";
    let currentAddrError = "";
    let stateError = "";
    let cityError = "";
    let zipError = "";
    let genderError = "";
    let imgError = "";
    let today = new Date().toISOString().slice(0, 10);
    let numbers = /^[0-9]+$/;
    let hobbieClickError = "";
    let roleError = "";
    let experienceError = "";
    if (
      !details.fName ||
      details.fName.length < 3 ||
      details.fName.length > 30
    ) {
      fNameError = "required, min 3, max 30 char";
    }
    if (
      !details.mName ||
      details.mName.length < 3 ||
      details.mName.length > 30
    ) {
      mNameError = "required, min 3, max 30 char";
    }
    if (
      !details.lName ||
      details.lName.length < 3 ||
      details.lName.length > 30
    ) {
      lNameError = "required, min 3, max 30 char";
    }
    if (!details.email || !details.email.includes("@")) {
      emailError = "required, an Email address";
    }
    if (!details.dob || details.dob > today) {
      dobError = "required, DOB should not exceed " + today;
    }
    if (!details.currentAdr) {
      currentAddrError = "required";
    }
    if (!details.state) {
      stateError = "required";
    }
    if (!details.city) {
      cityError = "required";
    }
    if (!details.zip || !details.zip.match(numbers)) {
      zipError = "required, please enter a valid pincode";
    }
    if (!details.gender) {
      genderError = "required, select your respective gender";
    }
    if (!details.imgFile) {
      imgError = "required";
    }
    if (hobbieCount === 0 || hobbieCount < 2) {
      hobbieClickError = "required, atleast 2 hobbies";
    }
    if (!details.radio.roles) {
      roleError = "required";
    }
    if (!details.radio.experience && details.radio.roles !== "") {
      experienceError = "required";
    }
    if (
      fNameError ||
      mNameError ||
      lNameError ||
      emailError ||
      dobError ||
      currentAddrError ||
      stateError ||
      cityError ||
      zipError ||
      genderError ||
      imgError ||
      hobbieClickError ||
      roleError ||
      experienceError
    ) {
      setErrMsg({
        fNameErr: fNameError,
        mNameErr: mNameError,
        lNameErr: lNameError,
        emailErr: emailError,
        dobErr: dobError,
        currentAddrErr: currentAddrError,
        stateErr: stateError,
        cityErr: cityError,
        zipErr: zipError,
        genderErr: genderError,
        imgErr: imgError,
        hobbieClickErr: hobbieClickError,
        roleErr: roleError,
        experienceErr: experienceError
      });
      fNameError = "";
      mNameError = "";
      lNameError = "";
      emailError = "";
      dobError = "";
      currentAddrError = "";
      stateError = "";
      cityError = "";
      zipError = "";
      genderError = "";
      imgError = "";
      hobbieClickError = "";
      roleError = "";
      experienceError = "";
      return false;
    } else {
      setErrMsg({
        fNameErr: "",
        mNameErr: "",
        lNameErr: "",
        emailErr: "",
        dobErr: "",
        currentAddrErr: "",
        stateErr: "",
        cityErr: "",
        zipErr: "",
        genderErr: "",
        imgErr: "",
        hobbieClickErr: "",
        roleErr: "",
        experienceErr: ""
      });
      return true;
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(JSON.stringify(details));
      setSubmitMsg((prev) => !prev);
    } else {
      console.log(JSON.stringify(errMsg));
    }
  };
  const handleAddressClick = (event) => {
    const checked = event.target.checked;
    const currentAddr = details.currentAdr;
    setDetails((prevValue) => {
      if (checked === true) {
        return { ...prevValue, permanentAdr: currentAddr };
      } else {
        return { ...prevValue, permanentAdr: "" };
      }
    });
  };
  const handleHobbieClick = (event) => {
    const { value, name, checked } = event.target;
    if (checked === true) {
      setHobbieCount(hobbieCount + 1);
      setDetails((prevValue) => {
        return {
          ...prevValue,
          hobbies: { ...prevValue.hobbies, [name]: value }
        };
      });
    } else {
      setHobbieCount(hobbieCount - 1);
      setDetails((prevValue) => {
        return {
          ...prevValue,
          hobbies: { ...prevValue.hobbies, [name]: "" }
        };
      });
    }
  };
  const handleOtherClick = () => {
    setOthers((prev) => !prev);
    if (others === true) {
      setHobbieCount(hobbieCount - 1);
      setDetails((prev) => {
        return { ...prev, otherHobbie: " " };
      });
    } else {
      setHobbieCount(hobbieCount + 1);
    }
  };
  const handleAnotherChange = (event) => {
    const { value, name } = event.target;
    setDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const handleRadioClick = (event) => {
    const { name, value } = event.target;
    if (name === "roles") {
      setDisplay(true);
    }
    setDetails((prev) => {
      return { ...prev, radio: { ...prev.radio, [name]: value } };
    });
  };
  const handlePreviewChange = (event) => {
    const photo = event.target.files[0];
    setDetails((prevValue) => {
      return { ...prevValue, imgFile: photo };
    });
  };
  const handleRating = (value, name) => {
    setDetails((prevValue) => {
      return { ...prevValue, rating: { ...prevValue.rating, [name]: value } };
    });
  };
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      const form = event.target.form;
      console.log(form);
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
      console.log(index);
    }
  };
  return (
    <div
      className="bg-light h-100"
      style={{ overflow: submitMsg && "hidden " }}
    >
      {submitMsg ? (
        <div className="bg-light vh-100 text-left mx-5 px-5">
          <h1 className="my-5 pt-5">Thanks! for your feedback.</h1>
          <a href="/Contacts">Give another Feedback.</a>
        </div>
      ) : (
        <Form className="container py-3 w-75 p-0" onSubmit={handleClick}>
          <h1
            className="h1-border my-4 font-weight-light text-uppercase"
            style={{ fontSize: "50px" }}
          >
            Feedback Form
          </h1>
          <Row form>
            <Col lg={4} md={4} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="firstName"
                  className="font-weight-bolder text-secondary"
                  style={{ fontSize: "18px" }}
                >
                  First Name
                </Label>
                <Input
                  type="text"
                  name="fName"
                  id="firstName"
                  value={details.fName}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  placeholder="First Name"
                />
                {!errMsg.fNameErr ? null : (
                  <span className="errMsg">{errMsg.fNameErr}</span>
                )}
              </FormGroup>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="middileName"
                  className="font-weight-bolder text-secondary"
                  style={{ fontSize: "18px" }}
                >
                  Middile Name
                </Label>
                <Input
                  type="text"
                  name="mName"
                  value={details.mName}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  id="middileName"
                  placeholder="Middile Name"
                />
                {!errMsg.mNameErr ? null : (
                  <span className="errMsg">{errMsg.mNameErr}</span>
                )}
              </FormGroup>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="lastName"
                  className="font-weight-bolder text-secondary"
                  style={{ fontSize: "18px" }}
                >
                  Last Name
                </Label>
                <Input
                  type="text"
                  name="lName"
                  value={details.lName}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  id="lastName"
                  placeholder="Last Name"
                />
                {!errMsg.lNameErr ? null : (
                  <span className="errMsg">{errMsg.lNameErr}</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col lg={6} md={6} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="exampleEmail"
                  className="font-weight-bolder text-secondary"
                  style={{ fontSize: "18px" }}
                >
                  Email Address
                </Label>
                <Input
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  id="exampleEmail"
                  placeholder="Email Address"
                />
                {!errMsg.emailErr ? null : (
                  <span className="errMsg">{errMsg.emailErr}</span>
                )}
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="exampleDate"
                  className="font-weight-bolder text-secondary"
                  style={{ fontSize: "18px" }}
                >
                  DOB
                </Label>
                <Input
                  type="date"
                  name="dob"
                  value={details.dob}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  id="exampleDate"
                  placeholder="Date Of Birth"
                />
                {!errMsg.dobErr ? null : (
                  <span className="errMsg">{errMsg.dobErr}</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="text-left mx-2 mt-2">
            <Label
              for="exampleCurrentAddress"
              className="font-weight-bolder text-secondary"
              style={{ fontSize: "18px" }}
            >
              Current Address
            </Label>
            <Input
              type="text"
              name="currentAdr"
              value={details.currentAdr}
              onChange={handleChange}
              onKeyDown={handleEnter}
              id="exampleCurrentAddress"
              placeholder="Current Address"
            />
            {!errMsg.currentAddrErr ? null : (
              <span className="errMsg">{errMsg.currentAddrErr}</span>
            )}
          </FormGroup>
          <FormGroup className="text-left mx-2 mt-2">
            <Label
              for="examplePermanentAddress"
              className="font-weight-bolder text-secondary d-inline-block"
              style={{ fontSize: "18px" }}
            >
              Permanent Address
            </Label>
            <div className="d-inline-block mx-5 px-3">
              <CustomInput
                type="checkbox"
                onClick={handleAddressClick}
                id="exampleCustomCheckbox"
                label="Same as Current Address"
              />
            </div>
            <Input
              type="text"
              name="permanentAdr"
              value={details.permanentAdr}
              onChange={handleChange}
              onKeyDown={handleEnter}
              id="examplePermanentAddress"
              placeholder="Permanent Address"
            />
          </FormGroup>
          <Row form>
            <Col lg={4} md={6} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="State"
                  className="font-weight-bolder text-secondary d-inline-block"
                  style={{ fontSize: "18px" }}
                >
                  State
                </Label>
                <Input
                  type="text"
                  name="state"
                  value={details.state}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  id="State"
                  placeholder="State"
                />
                {!errMsg.stateErr ? null : (
                  <span className="errMsg">{errMsg.stateErr}</span>
                )}
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="City"
                  className="font-weight-bolder text-secondary d-inline-block"
                  style={{ fontSize: "18px" }}
                >
                  City
                </Label>
                <Input
                  type="text"
                  name="city"
                  value={details.city}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  id="City"
                  placeholder="City"
                />
                {!errMsg.cityErr ? null : (
                  <span className="errMsg">{errMsg.cityErr}</span>
                )}
              </FormGroup>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="Zip"
                  className="font-weight-bolder text-secondary d-inline-block"
                  style={{ fontSize: "18px" }}
                >
                  Pin Code
                </Label>
                <Input
                  type="number"
                  name="zip"
                  value={details.zip}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  id="Zip"
                  placeholder="Pin Code"
                />
                {!errMsg.zipErr ? null : (
                  <span className="errMsg">{errMsg.zipErr}</span>
                )}
              </FormGroup>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <FormGroup className="text-left mx-2 mt-2">
                <Label
                  for="exampleCustomSelect"
                  className="font-weight-bolder text-secondary d-inline-block"
                  style={{ fontSize: "18px" }}
                >
                  Gender
                </Label>
                <CustomInput
                  type="select"
                  id="exampleCustomSelect"
                  name="gender"
                  value={details.gender}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Transgender</option>
                  <option>Prefer not to Say</option>
                </CustomInput>
                {!errMsg.genderErr ? null : (
                  <span className="errMsg">{errMsg.genderErr}</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="text-left mx-2 mt-2">
            <Label
              for="exampleCheckbox"
              className="font-weight-bolder text-secondary d-block"
              style={{ fontSize: "18px" }}
            >
              Hobbies
            </Label>
            {hobbies.map((hobbie) => {
              return (
                <CustomInput
                  key={hobbie.key}
                  id={hobbie.id}
                  className="mx-3"
                  type="checkbox"
                  name={hobbie.name}
                  value={hobbie.value}
                  onClick={handleHobbieClick}
                  label={hobbie.label}
                  inline
                />
              );
            })}
            <CustomInput
              id="exampleCustomInline6"
              className="mx-3"
              type="checkbox"
              onClick={handleOtherClick}
              label="Others"
              inline
            />
            {others && (
              <Input
                className="w-25 mt-3"
                type="text"
                name="otherHobbie"
                value={details.otherHobbie}
                onChange={handleAnotherChange}
                placeholder="Others"
              />
            )}
            {!errMsg.hobbieClickErr ? null : (
              <span className="errMsg d-block">{errMsg.hobbieClickErr}</span>
            )}
          </FormGroup>
          <Row form>
            <Col lg={display ? 6 : 12} md={display ? 6 : 12} sm={12}>
              <FormGroup
                className="mx-2 mt-2"
                style={{ textAlign: display ? "left" : "center" }}
              >
                <Label
                  for="exampleCheckbox"
                  className="font-weight-bolder text-secondary"
                  style={{ fontSize: "18px" }}
                >
                  Roles
                </Label>
                {!errMsg.roleErr ? null : (
                  <span className="errMsg ml-3">{errMsg.roleErr}</span>
                )}
                {roles.map((role) => {
                  return (
                    <div key={role.key}>
                      <CustomInput
                        type="radio"
                        name="roles"
                        id={role.id}
                        value={role.value}
                        label={role.label}
                        onClick={handleRadioClick}
                      />
                      <br />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
            {display && (
              <Col lg={6} md={6} sm={12}>
                <FormGroup className="text-left mx-2 mt-2">
                  <Label
                    for="exampleCheckbox"
                    className="font-weight-bolder text-secondary"
                    style={{ fontSize: "18px" }}
                  >
                    Experience
                  </Label>
                  {!errMsg.experienceErr ? null : (
                    <span className="errMsg ml-3">{errMsg.experienceErr}</span>
                  )}
                  {experience.map((exp) => {
                    return (
                      <div key={exp.key}>
                        <CustomInput
                          type="radio"
                          name="experience"
                          id={exp.id}
                          value={exp.value}
                          label={exp.label}
                          onClick={handleRadioClick}
                        />
                        <br />
                      </div>
                    );
                  })}
                </FormGroup>
              </Col>
            )}
          </Row>
          <h3
            className="text-left my-2 font-weight-bolder text-secondary d-block"
            style={{ fontSize: "18px" }}
          >
            Rate this website
          </h3>
          <Row form>
            <Col
              lg={3}
              md={6}
              sm={6}
              className="px-0 d-flex flex-row justify-content-center align-items-center"
            >
              <span className="mx-2">User Interface</span>
              <Stars
                value={details.rating.ui}
                onRating={handleRating}
                name="ui"
              />
            </Col>
            <Col
              lg={3}
              md={6}
              sm={6}
              className="px-0 w-100 d-flex flex-row justify-content-center align-items-center"
            >
              <span className="mx-2">User Experience</span>
              <Stars
                value={details.rating.ux}
                onRating={handleRating}
                name="ux"
              />
            </Col>
            <Col
              lg={3}
              md={6}
              sm={6}
              className="px-0 d-flex flex-row justify-content-center align-items-center"
            >
              <span className="mx-2">Designing</span>
              <Stars
                value={details.rating.dg}
                onRating={handleRating}
                name="dg"
              />
            </Col>
            <Col
              lg={3}
              md={6}
              sm={6}
              className="px-0 d-flex flex-row justify-content-center align-items-center"
            >
              <span className="mx-2">Overall Rating</span>
              <Stars
                value={details.rating.or}
                onRating={handleRating}
                name="or"
              />
            </Col>
          </Row>
          <FormGroup>
            <Input
              name="feedback"
              value={details.feedback}
              onChange={handleChange}
              type="textarea"
              placeholder="Give us a feedback"
            />
          </FormGroup>
          <FormGroup className="text-left mx-2 my-2">
            <Label
              for="exampleFile"
              className="font-weight-bolder text-secondary"
              style={{ fontSize: "18px" }}
            >
              Upload Image
            </Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              accept=".jpg,.jpeg,.png"
              onChange={handlePreviewChange}
            />
            <img
              width="100px"
              height="100px"
              src={
                details.imgFile ? URL.createObjectURL(details.imgFile) : null
              }
              alt={details.imgFile ? details.imgFile.name : null}
              style={{ display: details.imgFile ? "inline" : "none" }}
            />
            {!errMsg.imgErr ? null : (
              <span className="errMsg">{errMsg.imgErr}</span>
            )}
          </FormGroup>
          <Button type="submit" className="bg-success text-uppercase">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};
export default Feedback;
