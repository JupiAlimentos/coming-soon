import React from 'react'

import Icons from './Icons'
import links from './data'

import { SocialLink, SocialLinkIcon, SocielLinksWrapper } from './style'

const SocialLinks = () => (
  <SocielLinksWrapper>
    {links.map((link, i) => {
      const Icon = Icons[link.label]

      return (
        <SocialLink
          key={i}
          href={link.url}
          title={link.label}
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialLinkIcon>
            <Icon />
          </SocialLinkIcon>
        </SocialLink>
      )
    })}
  </SocielLinksWrapper>
)

export default SocialLinks
