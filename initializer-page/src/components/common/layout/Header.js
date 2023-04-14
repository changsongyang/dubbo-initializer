import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ children }) => (
  <div className='header'>
    <h1 className='logo'>
      <a href='/bootstrap.html'>
        <span className='title'>
          <img style='max-width:260px;' src='/images/dubbo_apache_colorful.png'  alt='dubbo-apache-colorful-logo'/>
        </span>
        {/*<span className='description'>快速创建 Dubbo 应用</span>*/}
      </a>
    </h1>
    {children}
  </div>
)

Header.defaultProps = {
  children: null,
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header
