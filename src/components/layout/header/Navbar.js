import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// import logo from '../../../Images/footer_logo.png'

export const links = [
    {
      id: 1,
      url: '/company',
      text: '회사소개',
    },
    {
      id: 2,
      url: '/rent',
      text: '렌트소개',
    },
    {
      id: 3,
      url: '/bike',
      text: '차량판매',
    },
    {
      id: 4,
      url: '/customer',
      text: '고객지원',
    },
    {
      id: 5,
      url: '/recruit',
      text: '채용',
    },
    {
      id: 6,
      url: '/blog',
      text: '블로그',
    }
  ]

const Navber = () => {
     // 메뉴버튼 
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    // const sublinksRef = useRef(null);
  
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        
        if (showLinks) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        }
        else {
          linksContainerRef.current.style.height = '0px';
        }

    }, [showLinks]);
      
    return ( 
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* <img src={logo} className='logo' alt='logo' /> */}
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          {/* 메뉴버튼 클릭시 목록 보이도록 */}
          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {/* data에서 Nav목록 가져오기 */}
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>          
          </div>
        </div>
      </nav>
    );
};

export default Navber;