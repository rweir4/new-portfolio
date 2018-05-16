import React from 'react'
import Link from 'gatsby-link'

const Header = ({ id, className, siteTitle }) => (
    <h1 id={id} className={className}>
        {siteTitle}
    </h1>
);

export default Header;
