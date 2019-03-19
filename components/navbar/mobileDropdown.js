import React, {useState} from 'react'
import styled from 'styled-components'


const MobileDropdown = ({title, items, className}) => {
  const [show, setShow] = useState(false)

  function toggleShow() {
    setShow(!show)
  }

  return (
    <li className={className} onClick={toggleShow}>
    {title}
        <ul className={show ? 'show' : ''}>
          {items.map((item, index) => (
            <li key={index}><a href={item.link}>{item.title}</a></li>
          ))}
        </ul>
    </li>
  )
}

const StyledMobileDropdown = styled(MobileDropdown)`
  
  ul {
    display: none;
    margin-top: 20px;
    transition: all 4s;
  }
  ul.show {
    display: block;
  }
`
export default StyledMobileDropdown