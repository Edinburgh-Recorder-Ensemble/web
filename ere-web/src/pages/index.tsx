import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from "react";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  var Svg = require('@site/static/img/undraw_docusaurus_mountain.svg').default;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Edinburgh Recorder Ensemble">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--8')}>
                <div className="text--center">
                  <Svg className={styles.featureSvg} role="img"/>
                </div>
                <div className="padding-horiz--md">
                  <Heading as="h3">About ERE</Heading>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                    posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros
                    quis urna.</p>
                  <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
                    pharetra nonummy pede. Mauris et orci.</p>
                  <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.</p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <Svg className={styles.featureSvg} role="img"/>
                </div>
                <div className="padding-horiz--md">
                  <Heading as="h3">Events</Heading>
                  <p>
                    Details on upcoming <a href="/blog/tags/concert">concerts</a> and <a href="/blog/tags/rehearsal">rehearsal dates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
