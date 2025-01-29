import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';
import IntroduceSection from '../components/introduce-section';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects, introduce } = about;
  return (
    <Layout>
      <Seo title="소개 | JAEYOUNG TECH" />
      <Bio author={author} language={language} />
      <IntroduceSection title="자기소개 👋🏻" descriptions={introduce} />
      <TimeStampSection title="학력 및 경력 사항 👔" timestamps={timestamps} />
      <ProjectSection title="팀 프로젝트 🚀" projects={projects} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          introduce

          timestamps {
            activity
            activityDescription
            job
            jobDescriptions
            date
            link
          }

          projects {
            title
            subTitle
            affiliation
            descriptions
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
