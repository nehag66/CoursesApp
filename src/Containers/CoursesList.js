import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const CoursesList = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  let history = useHistory();
  return (
    <div>
      <header className="App-header">
        COURSES
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>CHOOSE A COURSE</DropdownToggle>

          <div className="courses">
            <DropdownMenu>
              <DropdownItem onClick={() => history.push(`/bca`)}>
                BCA
              </DropdownItem>
              <DropdownItem onClick={() => history.push(`/bba`)}>
                BBA
              </DropdownItem>
              <DropdownItem onClick={() => history.push(`/pgdm`)}>
                PGDM
              </DropdownItem>
              <DropdownItem onClick={() => history.push(`/mca`)}>
                MCA
              </DropdownItem>
            </DropdownMenu>
          </div>
        </ButtonDropdown>
      </header>
    </div>
  );
};

export default CoursesList;
