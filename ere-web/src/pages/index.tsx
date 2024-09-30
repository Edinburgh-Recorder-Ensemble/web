import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
        <p className="hero__subtitle">Next Concert: {siteConfig.tagline}</p>
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
                  <p>Edinburgh Recorder Ensemble is a chamber orchestra of intermediate-advanced players drawn from
                    across the east coast of Scotland.</p>
                  <p>Founded in 2013 by Dorothy Thomas and Michael Graham, ERE enjoy playing a varied repertoire of
                    historical and contemporary works using the full family of mdern recorders - from sopranino and
                    soprano, through alto, tenor and bass, down to larger great bass and contrabass instruments.</p>
                  <p>One-to-a-part playing is strongly encouraged and, with frequent swapping between instruments and
                    fingerings, players must be confident playing a range of fingerings and clefs.</p>
                  <p>
                    Rehearsals are usually held monthly on a Sunday with a charity concert held in June every year. Player vacancies are rare, but we maintain contact with local recorder players to occasionally support us as guests.
                  </p>
                  <p>
                    Edinburgh Recorder Ensemble is an affiliated ensemble of the <a href="https://www.srp.org.uk/" target="_blank">Society of Recorder Players</a>.
                    Many of our players are also members of <a href="https://www.srp.org.uk/edinburgh" target="_blank">Edinburgh SRP Branch</a>,
                    the <a href="https://www.sro.org.uk/" target="_blank">Scottish Recorder Orchestra</a>,
                    and the <a href="https://www.emfscotland.org.uk/" target="_blank">Early Music Forum of Scotland</a>
                  </p>
                  <p>
                    Details on upcoming <a href="/blog/tags/concert">concerts</a> and <a href="/blog/tags/rehearsal">rehearsal
                    dates</a>
                  </p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <Svg className={styles.featureSvg} role="img"/>
                </div>
                <div className="padding-horiz--md">
                  <Heading as="h3">Current Repertoire</Heading>
                  <p>
                    <ul>
                      <li><strong>Marg Hall</strong> - Symphony No. 1</li>
                      <li><strong>Michael Graham</strong> - Surreynade</li>
                      <li><strong>Soren Sieg</strong> - Insumantsumane (The Secret)</li>
                      <li><strong>Giovani Gabrielli</strong> - Canzon Quarti Toni a 15</li>
                      <li><strong>Tiburto Massaino</strong> - Canzon trigesimaquinta a 16</li>
                      <li><strong>Victor Eijkhout</strong> - Scherzo for 4 Recorder Quartets</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className={clsx('col col--8')}>
                <div className="text--center">
                  <Svg className={styles.featureSvg} role="img"/>
                </div>
                <div className="padding-horiz--md">
                  <Heading as="h3">Musical Director</Heading>
                  <p>
                    Michael Graham is a conductor and composer based in Edinburgh. He is musical director of several ensembles across Scotland’s central belt including the Falkirk Tryst Orchestra, St Andrew Orchestra, Edinburgh Mandolin and Guitar Orchestra, and Edinburgh’s world infamous Really Terrible Orchestra.
                  </p>
                  <p>
                    Michael was introduced to therecorder world in 2011 when he was invited to become a regular conductor of the Edinburgh Branch of The Society of Recorder Players. Michael then served as their Musical Director between 2013 and 2017.
                  </p>
                  <p>
                    He co-founded Edinburgh Recorder Ensemble to help promote the wide range of music being written for recorder orchestra. Michael remains a popular Visiting Conductor with the SRP leading playing days and festival sessions around the UK.
                  </p>
                  <p>More information from his <a href="https://www.mhgconductor.com" target="_blank">website</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
