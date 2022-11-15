import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export const CourseList = [
  // {
  //   title: 'Solidity 开发常用工具',
  //   imgUrl: require('@site/static/img/course_solidity_start.jpg').default,
  //   linkUrl: '/solidity-start/',
  //   description: (
  //     <>
  //       学习solidity开发环境搭建
  //     </>
  //   ),
  // },
  {
    title: 'Solidity 入门',
    imgUrl: require('@site/static/img/course_solidity_start.jpg').default,
    linkUrl: '/solidity-start/',
    description: (
      <>
        学习solidity基础
      </>
    ),
  },
  {
    title: 'Solidity 进阶',
    imgUrl: require('@site/static/img/course_solidity_advanced.jpg').default,
    linkUrl: '/solidity-advanced/',
    description: (
      <>
        学习solidity进阶内容
      </>
    ),
  },
  {
    title: '全栈web3 应用开发入门',
    imgUrl: require('@site/static/img/course_ethers_start.jpg').default,
    linkUrl: '/ether-start/',
    description: (
      <>
        全栈web3 应用开发入门
      </>
    ),
  },
  // {
  //   title: 'golang web3后端开发入门',
  //   imgUrl: require('@site/static/img/course_ethers_start.jpg').default,
  //   linkUrl: '/ether-start/',
  //   description: (
  //     <>
  //       学习golang开发web3后端开发基础
  //     </>
  //   ),
  // },
];

export function Course({imgUrl, linkUrl, title, description}) {
  return (
    <li className={styles.learningCenterItem}>
      <Link to={linkUrl}>
        <img className={styles.learningCenterImage} src={imgUrl}/>
        <p className={styles.learningCenterListItemTitle}>{title}</p>
        <p className={styles.learningCenterListItemDesc}>{description}</p>
      </Link>
    </li>
  );
}

export default function HomepageLearningCenter() {
  return (
    <div className={styles.learningCenterContent}>
      <p className={styles.learningCenterTitle}>学习中心</p>
      <div className={styles.learningCenterListBox}>
        <ul className={styles.learningCenterList}>
          {CourseList.map((props, idx) => (
            <Course key={idx} {...props} />
          ))}
        </ul>
      </div>
    </div>
  );
}
