import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import HomeView from "../HomeView";

describe("<HomeView />", () => {
  it("should work as expected", () => {
    const dummyComponentProps = {
      isAuthenticated: false,
      email: 'lorem'
    };
    const handleLoginSuccess = () => {
      console.log('da')
    }
    const handleLoginFailure = () => {
      console.log('da')
    }
    const handleClick = () => {
      console.log('da')
    }

    // when
    render(<HomeView 
      {...dummyComponentProps}
      handleLoginSuccess={handleLoginSuccess}
      handleLoginFailure={handleLoginFailure}
      handleClick={handleClick}
       />);
  });
});