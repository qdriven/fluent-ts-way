import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageLearningCenter from '@site/src/components/HomepageLearningCenter';
import HomepageTarget from '@site/src/components/HomepageTarget';
import { Contributor } from '../components/Contributor/index';

import styles from './index.module.css';


function HomepageHeader() {
  //TODO: Change Images
  const {siteConfig} = useDocusaurusContext();
  const bannerTitleImg = require('@site/static/img/home_banner_title.png').default;
  const bannerBgImg = require('@site/static/img/home_banner.jpg').default;
  const discordLogoImg = require('@site/static/img/discordlogo.svg').default;


  return (
    <header>
      <div className={styles.wtfBanner}>
        <div className={styles.wtfBannerTitle}>
          <div className={styles.wtfBannerMainName}>
            {/*<img src={bannerTitleImg} />*/}
            <span className={styles.wtfBannerMainText}>SpecBiz-Web3</span>
          </div>
          <h2 className={styles.wtfTitle}>面向好奇者的Web3开源学院</h2>
          <h4 className={styles.wtfDesc}>学习，贡献，了解一个不同的世界</h4>
          <div className={styles.wtfBannerBtnBox}>
            <Link to="/learning-center">
              <div className={styles.wtfBannerBtn}>
                  <span>开始学习</span>
              </div>
            </Link>
            {/*<Link to="https://discord.com/invite/5akcruXrsk">*/}
            {/*  <div className={styles.discordBtn}>*/}
            {/*    <span><img src={discordLogoImg} />*/}
            {/*      <discordLogoImg src={discordLogoImg} role="img" />*/}
            {/*    加入社区</span>*/}
            {/*  </div>*/}
            {/*</Link>*/}
          </div>
        </div>
        <div className={styles.wtfBannerImg}>
          <img src={bannerBgImg} />
        </div>
      </div>

    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}, Web3 Open University`}
      description="SpecBiz@Web3 is Web3 Open University, we create open-source tutorials for Web3 Application,Smart Contract, and more.">
      <HomepageHeader />
      <main>
        <HomepageLearningCenter />
        <HomepageTarget />
        <Contributor />
      </main>
    </Layout>
  );
}
