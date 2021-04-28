import React from "react"
import useStyles from "../styles/HomeHeroStyles"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import logo from "../assets/imgs/logo.svg"
import calander from "../assets/imgs/calander.svg"

const LatestArticles = graphql`
  query {
    allWpPost {
      edges {
        node {
          slug
          title
          excerpt
          content
          date
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`

const HomeHero = () => {
  const latestArticles = useStaticQuery(LatestArticles)
  const featuredArticle = latestArticles.allWpPost.edges[1]
  const topLeftArticle = latestArticles.allWpPost.edges[470]
  const bottomLeftArticle = latestArticles.allWpPost.edges[469]
  const topRightArticle = latestArticles.allWpPost.edges[468]
  const bottomRightArticle = latestArticles.allWpPost.edges[467]
  const featuredArticleSubTitle = featuredArticle.node.excerpt
  const subTitle = featuredArticleSubTitle.substring(3, 81)
  const topLeftArticleSubTitle = topLeftArticle.node.excerpt
  const topLeftSubTitle = topLeftArticleSubTitle.substring(3, 78)
  const bottomLeftArticleSubTitle = bottomLeftArticle.node.excerpt
  const bottomLeftSubTitle = bottomLeftArticleSubTitle.substring(3, 71)
  const topRightArticleSubTitle = topRightArticle.node.excerpt
  const topRightSubTitle = topRightArticleSubTitle.substring(3, 60)
  const bottomRightArticleSubTitle = bottomRightArticle.node.excerpt
  const bottomRightSubTitle = bottomRightArticleSubTitle.substring(3, 55)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />

      <div className={classes.textContainer}>
        <div className={classes.line} />
        <div className={classes.text}>The Latest Articles</div>
        <div className={classes.line} />
      </div>

      <div className={classes.articles}>
        <div className={classes.articleContainer}>
          <div className={classes.flexCol}>
            <img
              src={topLeftArticle.node.featuredImage.node.mediaItemUrl}
              alt="ar1"
              className={classes.img}
            />
            <div className={classes.flexRow}>
              <div className={classes.tag}>Hotels</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(topLeftArticle.node.date).format("MMMM DD, YYYY")}
              </div>
            </div>
            <div className={classes.heading}>{topLeftArticle.node.title}</div>
            <div className={classes.content}>{topLeftSubTitle}</div>
          </div>
          <div className={classes.flexCol}>
            <img
              src={bottomLeftArticle.node.featuredImage.node.mediaItemUrl}
              alt="ar2"
              className={classes.img}
            />
            <div className={classes.flexRow}>
              <div className={classes.tag}>Shopping</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(bottomLeftArticle.node.date).format("MMMM DD, YYYY")}
              </div>
            </div>
            <div className={classes.heading}>
              {bottomLeftArticle.node.title}
            </div>
            <div className={classes.content}>{bottomLeftSubTitle}</div>
          </div>
        </div>
        <div className={classes.articleMiddleContainer}>
          <div className={classes.flexColLg}>
            <img
              src={featuredArticle.node.featuredImage.node.mediaItemUrl}
              alt="ar5"
              className={classes.imgLg}
            />
            <div className={classes.flexRow + " " + classes.mLeftNegative}>
              <div className={classes.tag}>Bars & Restaurants</div>
              <div className={classes.tag}>Hotels</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(featuredArticle.node.date).format("MMMM DD, YYYY")}
              </div>
            </div>
            <div className={classes.headingLg}>
              {featuredArticle.node.title}
            </div>
            <div className={classes.contentLg}>{subTitle}</div>
          </div>
        </div>

        <div className={classes.articleContainer}>
          <div className={classes.flexCol}>
            <img
              src={topRightArticle.node.featuredImage.node.mediaItemUrl}
              alt="ar4"
              className={classes.img}
            />
            <div className={classes.flexRow}>
              <div className={classes.tag}>Bars & Restaurants</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(topRightArticle.node.date).format("MMMM DD, YYYY")}
              </div>
            </div>
            <div className={classes.heading}>{topRightArticle.node.title}</div>
            <div className={classes.content}>{topRightSubTitle}</div>
          </div>
          <div className={classes.flexCol}>
            <img
              src={bottomRightArticle.node.featuredImage.node.mediaItemUrl}
              alt="ar5"
              className={classes.img}
            />
            <div className={classes.flexRow + " " + classes.mLeftNegative}>
              <div className={classes.tag}>Bars & Restaurants</div>
              <div className={classes.tag}>Hotels</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(bottomRightArticle.node.date).format("MMMM DD, YYYY")}
              </div>
            </div>
            <div className={classes.heading}>
              {bottomRightArticle.node.title}
            </div>
            <div className={classes.content}>{bottomRightSubTitle}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeHero
