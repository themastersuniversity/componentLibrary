import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import StyledMobileDropdown from './mobileDropdown'

const listItems = [
  {
    title: 'About',
    link: 'https://www.masters.edu/about',
  },
  {
    title: 'Admissons',
    dropdown: [
      {
        title: 'Undergraduate',
        link: 'https://www.masters.edu/admissions/undergrad/',
      },
      {
        title: 'Graduate',
        link: 'https://www.masters.edu/admissions/#graduate',
      },
      {
        title: 'Online',
        link: 'https://www.masters.edu/admissions/#online',
      },
      {
        title: 'Dual Enrollment',
        link: 'https://www.masters.edu/admissions/#dualenrollment',
      },
    ],
  },
  {
    title: 'Financial Aid',
    link: 'https://www.masters.edu/financial-aid',
  },
  {
    title: 'Academics',
    link: 'https://www.masters.edu/academics',
  },
  {
    title: 'Athletics',
    link: 'https://gomustangs.com/',
  },
  {
    title: 'Performing Arts',
    link: 'https://www.masters.edu/performingarts',
  },
  {
    title: 'Online',
    link: 'https://www.masters.edu/online/',
  },
  {
    title: 'Students',
    link: 'https://www.masters.edu/students',
  },
  {
    title: 'Faculty / Staff',
    link: 'https://www.masters.edu/faculty&staff',
  },
  {
    title: 'Alumni',
    link: 'https://www.masters.edu/alumni',
  },
  {
    title: 'Give',
    link: 'https://www.masters.edu/give',
  },
  {
    title: 'Bookstore',
    link: 'http://ue.masters.edu/',
  },
  {
    title: 'Fitness Center',
    link: 'https://www.masters.edu/fitness-center',
  },
]

const MobileMenu = ({ className }) => {
  const [visible, setVisible] = useState(false)

  function toggleMenu() {
    setVisible(!visible)
  }

  useEffect(() => {}, [])

  return (
    <div className={`${className} ${visible ? 'show' : ''}`}>
      <div className="menu" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <div className="mobile-side-menu">
        <ul>
          {listItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <StyledMobileDropdown
                  title={item.title}
                  items={item.dropdown}
                />
              )
            } else {
              return (
                <li key={index + item}>
                  <a href={item.link}>{item.title}</a>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

const StyledMobileMenu = styled(MobileMenu)`
  display: none;
  position: relative;

  .bar {
    width: 20px;
    height: 3px;
    background: #0c2340;
    margin: 3px 0;
    transition: all 0.3s;
  }

  .mobile-side-menu {
    position: fixed;
    overflow-y: auto;
    overflow-x: auto;
    background: #fff;
    display: none;
    height: 100%;
    width: 100vw;
    z-index: -1;
    padding-top: 60px;
    top: 0;
    right: -100vw;
    transition: right 0.3s;

    ul {
      list-style: none;
      li {
        font-size: 18px;
        font-weight: bold;
        color: #0c2340;
        margin-bottom: 20px;
      }
    }
  }
  ${'' /* make menu visible and turn menu icon into an X */}
  &.show {
    .mobile-side-menu {
      right: 0px;
    }
    .bar:first-child {
      transform: translateY(6px) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:last-child {
      transform: translateY(-6px) rotate(-45deg);
    }
  }

  @media screen and (max-width: 992px) {
    display: block;
    .mobile-side-menu {
      display: block;
    }
  }
`

export default StyledMobileMenu
