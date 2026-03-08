import { siGithub, siGitlab, siHackerrank } from 'simple-icons'

interface SocialLink {
  href: string;
  iconSvgPath: string;
  brandHex: string;
  label: string;
}

export default function HomePage() {
  const links: SocialLink[] = [
    {
      href: 'https://github.com/egjimenezg',
      iconSvgPath: siGithub.path,
      brandHex: siGithub.hex,
      label: 'GitHub'
    },
    {
      href: 'https://gitlab.com/egjimenezg',
      iconSvgPath: siGitlab.path,
      brandHex: siGitlab.hex,
      label: 'GitLab'
    },
    {
      href: 'https://www.hackerrank.com/profile/egjimenezg',
      iconSvgPath: siHackerrank.path,
      brandHex: siHackerrank.hex,
      label: 'HackerRank'
    }
  ];

  return (
    <>
      <h1 className="home-name">Gamaliel Jiménez</h1>
      <p className="home-subtitle">Software Engineer</p>
      <ul className="social-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
              data-label={link.label}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={link.iconSvgPath} fill={`#${link.brandHex}`} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
