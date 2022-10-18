
import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";

const Footer = () => {
  return (
    <CDBFooter className="shadow my-5">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="Orden Pizza"
              src="https://cdn-icons-png.flaticon.com/512/6413/6413328.png"
              width="80px"
              className="mx-3"
                      />
            <span className="ml-2 h5 mb-0 font-weight-bold span-color">Pizzería Mamma Mía-app</span>
          </a> 
          <small className="ml-5 small-color">
            &copy; María Paz Labbé, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;