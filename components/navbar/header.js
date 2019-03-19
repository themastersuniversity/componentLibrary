import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Container } from "../styles";
import StyledMobileMenu from "./mobileMenu";
import logo from "../../images/TMU_HorzLogo.svg";

const Header = ({ siteTitle, className }) => (
  <div className={className}>
    <div className="navy">
      <Container>
        <div className="flex-row">
          <div className="nav-right">
            <a href="https://www.masters.edu/students">
              <span>Students</span>
            </a>
            <a href="https://www.masters.edu/faculty&staff">
              <span>Faculty/Staff</span>
            </a>
            <a href="https://www.masters.edu/faculty&staff">
              <span>Campus Links</span>
            </a>
            <a href="https://alumni.masters.edu/">
              <span>Alumni</span>
            </a>
            <a href="http://ue.masters.edu/">
              <span>Book Store</span>
            </a>
            <a to="/">
              <span>Thinking Biblically</span>
            </a>
            <a href="https://www.masters.edu/give">
              <span>Give</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
    <Container>
      <div className="flex-row">
        <div className="nav-left">
          <a href="https://www.masters.edu">
            <img src={logo} alt="The Master's Univeristy" />
          </a>
        </div>
        <div className="nav-right">
          <div className="dropdown">
            <span>
              <a href="https://www.masters.edu/about">About</a>
            </span>
            <div className="dropdown-content">
              <p>
                <a href="https://www.masters.edu/about/doctrinal-statement/">
                  Doctrinal Statement
                </a>
              </p>
            </div>
          </div>
          <div className="dropdown">
            <span>
              <a href="https://www.masters.edu/admissions/undergrad/">
                Admissions
              </a>
            </span>
            <div className="dropdown-content">
              <p>
                <a href="https://www.masters.edu/admissions/undergrad">
                  Undergraduate
                </a>
              </p>
              <p>
                <a href="https://www.masters.edu/admissions/#graduate">
                  Graduate
                </a>
              </p>
              <p>
                <a href="https://www.masters.edu/admissions/#online">Online</a>
              </p>
              <p>
                <a href="https://www.masters.edu/admissions/#dualenrollment">
                  Dual Enrollment
                </a>
              </p>
              <p>
                <a href="https://www.masters.edu/financial-aid">
                  Financial Aid
                </a>
              </p>
            </div>
          </div>
          <div className="dropdown">
            <span>
              <a href="https://www.masters.edu/academics">Academics</a>
            </span>
            <div className="dropdown-content">
              <p>
                <a href="https://www.masters.edu/academics/undergraduate">
                  Undergraduate
                </a>
              </p>
              <p>
                <a href="https://www.masters.edu/academics/teachingcredential">
                  Teaching Crednetial
                </a>
              </p>
              <p>
                <a href="https://www.masters.edu/academics/graduate">
                  Graduate
                </a>
              </p>
              <p>
                <a href="https://www.masters.edu/online/">Online</a>
              </p>
              <p>
                <a href="https://www.masters.edu/registrar">Registrar</a>
              </p>
              <p>
                <a href="https://www.masters.edu/academics#studyabroad">
                  Study Abroud
                </a>
              </p>
            </div>
          </div>
          <span>
            <a href="https://gomustangs.com/">Athletics</a>
          </span>
          <span>
            <a href="https://mastersuniversity.force.com/application/TX_CommunitiesSelfReg?startURL=%2Fapplication%2FTargetX_Base__Portal">
              Apply
            </a>
          </span>
          <span>
            <a
              className="btn"
              href="https://masters.secure.force.com/form/?formid=217728"
            >
              Request Info
            </a>
          </span>
          <StyledMobileMenu />
        </div>
      </div>
    </Container>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

const StyledHeader = styled(Header)`
   background: #fff;
   color: #0c2340;
   z-index: 200;
   position: fixed;
   width: 100%;
   box-shadow: 0 1px 4px rgba(0,0,0,0.16);

   .dropdown {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;

      .dropdown-content {
        display: none;
        align-self: flex-end;
        position: absolute;
        background: #fff;
        min-width: 160px;
        white-space: nowrap;
        z-index: 1;
        top: 87px;
        p {
          padding: 1em 12px;
          margin: 0;
          &:hover {
            background: rgba(0, 0, 0, 0.1);
          }
        }
      }
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        .dropdown-content {
          display: block;
        }
      }
   }

   .flex-row {
     display: flex;
     flex-direction: row;
   }

   .nav-left {
     flex: 1;
     display: flex;
     justify-content: flex-start;
     align-items: center;
   }

   .nav-right {
     flex 2;
     display: flex;
     justify-content: flex-end;
     align-items: center;
   }

   .navy {
     background: linear-gradient(to right, #0c2340, #243853);
     color: #fff;
     a:hover {
       color: #DEAA00;
     }
     .flex-row {
       height: 30px;
     }
     span {
       padding: 0px 10px 0 5px;
       font-size: 14px;
     }
   }

   span {
     padding: 0px 15px;
     a.btn {
       background: linear-gradient(to right, #0c2340, #243853);
       border-radius: 30px;
       height: 36px;
       line-height: 36px;
       padding: .5rem 1rem;
       text-align: center;
       text-transform: uppercase;
       color: #fff;
       font-size: 13px;
       box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
     }
   }

   img {
     max-width: 290px;
     width: 290px;
     padding: 5px 0;
   }

   a {
    text-decoration: none;
    color: inherit;
  }

   @media screen and (max-width: 992px) {
     .navy {
       display: none;
     }
     .nav-right span {
       display: none;
     }
     img {
       width: 200px;
     }
   }

`;

export default StyledHeader;
