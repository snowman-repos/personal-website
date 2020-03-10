import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({
  description,
  lang,
  meta,
  title,
}: {
  description: string
  lang: string
  meta: any
  title: string
}): React.ReactElement {
  const { site, placeholderImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            email
            telephone
          }
        }
        placeholderImage: file(relativePath: { eq: "darryl-snow--profile.jpeg" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "${site.siteMetadata.title}",
            "email": "${site.siteMetadata.email}",
            "url": "${site.siteMetadata.url}",
            "telephone": "${site.siteMetadata.telephone}",
            "image": "https://darrylsnow.com${placeholderImage.childImageSharp.fixed.src}",
            "jobTitle": "Senior Product Manager",
            "worksFor": "Pivotal",
            "workLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Singapore",
                "streetAddress": "109 North Bridge Rd, Level 6 WeWork Funan",
                "postalCode": "179097"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "1.2913416",
                "longitude": "103.8481462"
              },
              "logo": "https://d1fto35gcfffzn.cloudfront.net/tanzu/labs-logo-tanzu-style.svg",
              "telephone": "+65 6817 5030"
            },
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Digital Product Manager",
              "description": "Solving unseen problems. Overseeing the entire life cycle of a product, from discovery through inception to delivery and optimization.",
              "qualifications": "A-CSPO",
              "estimatedSalary": {
                "@type": "MonetaryAmountDistribution",
                "name": "base",
                "currency": "USD",
                "unitText": "YEAR",
                "percentile10": "65000",
                "percentile25": "86000",
                "median": "107000",
                "percentile75": "128000",
                "percentile90": "150000"
              },
              "occupationLocation": [
              {
                  "@type": "City",
                  "name": "Mountain View"
                }
              ],
              "responsibilities": [
                "product strategy",
                "prioritization",
                "facilitation",
                "stakeholder management",
                "lean planning",
                "data analysis",
                "reporting"
              ],
              "skills": [
                "product mindset",
                "problem solving",
                "leadership",
                "communication",
                "decisiveness",
                "technical understanding",
                "marketing",
                "prioritization",
                "proactivity",
                "conflict mediation",
                "agile",
                "business acumen",
                "persuasion",
                "negotiation"
              ]
            },
            "alumniOf": "University of Manchester",
            "gender": "male",
            "sameAs": [
              "https://www.linkedin.com/in/darrylsnow/",
              "https://github.com/darryl-snow/",
              "https://twitter.com/dazsnow/"
            ],
            "knowsLanguage": [
              {
                "@type": "Language",
                "name": "English",
                "alternateName": "en"
              },
              {
                "@type": "Language",
                "name": "Chinese",
                "alternateName": "zh"
              }
            ],
            "knowsAbout": [
              "Web technology",
              "Web apps",
              "PWA",
              "Progressive Web Apps",
              "Product Management",
              "Product Strategy",
              "Beer",
              "Brewing",
              "Cooking",
              "China",
              "Sichuan food",
              "Investing"
            ]
          }
        `}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
