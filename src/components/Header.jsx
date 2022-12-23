import React, { useRef } from 'react'
import { links } from '../links_data/Links';

export default function Header() {

  const menuRef = useRef()

  const openBar = () => {
    menuRef.current.classList.toggle('active')
  }
  const remove = () => {
    menuRef.current.classList.remove('active')
  }

  return (
    <header className='header' id='header'>
      <div className="header-container">
        <div className="header-row">
          <div className="header-left">
            <span className="logo"> <img src="../images/logo.png" alt="logo" /> Secret <span>Santa</span> </span>
          </div>
          <div className="header-right">
            <nav>
              <ul>
                {
                  links.map((val, idx) => {
                    return (
                      <li key={idx}> <a onClick={remove} href={val.url}> {val.txt} </a> </li>
                    )
                  })
                }
              </ul>
            </nav>
          </div>
        </div>

        <div onClick={openBar} className="open-btn">
          <img style={{ width: '45px' }} src="https://www.clipartmax.com/png/full/303-3035828_menu-bar-menu-comments-menu-bar-icon-png.png" alt="" />
        </div>

      </div>

      <div ref={menuRef} className="menu">
        <ul>
          {
            links.map((val, idx) => {
              return (
                <li key={idx}> <a onClick={remove} href={val.url}> {val.txt} </a> </li>
              )
            })
          }
        </ul>
      </div>

    </header>
  )
}
