import React from 'react';
import styles from './styles.module.css';

export default function HomepageTarget() {

    const CourseList = [
        {
            title: '开源免费教程',
            imgUrl: require('@site/static/img/home_target1.png').default,
        },
        {
            title: 'web3新闻资讯和英语学习',
            imgUrl: require('@site/static/img/home_target2.png').default,
        },
        {
            title: '实际项目分析',
            imgUrl: require('@site/static/img/home_target3.png').default,
        },
        {
            title: '社区共同学习',
            imgUrl: require('@site/static/img/home_target4.png').default,
        },
    ];

    function Course({imgUrl, title}) {
        return (
            <li className={styles.learningCenterItem}>
                <div className="learning-center-inner">
                    <img src={imgUrl} />
                </div>
                <p className={styles.learningCenterListItemDesc}>{title}</p>
            </li>
        );
    }

    return (
        <div className={styles.learningCenterContent}>
            <p className={styles.learningCenterTitle}>目标</p>
            <span className={styles.learningCenterDesc}>拨开Web3 Buzzword迷雾,培养10000 web3开发人员
            </span>
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
