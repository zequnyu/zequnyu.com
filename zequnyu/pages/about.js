import React from 'react';

import 'bulma/css/bulma.min.css'
import '../styles/About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAddressBook,
    faBookOpen,
    faBriefcase,
    faCircle, faFolderOpen, faLaptopCode,
    faMapMarkerAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";


function About() {
    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-three-quarters about-left">
                            {/*Title*/}
                            <div className="level cv-title">
                                <div className="level-left">
                                    <div className="level-item">
                                        <figure className="image is-64x64">
                                            <img className="is-rounded" src="/static/cvimg.png"  alt="avatar" />
                                        </figure>
                                    </div>
                                    <div className="level-item cv-title-text">
                                        <div className="cv-title-text-up">
                                            Zequn Yu
                                        </div>
                                        <div className="cv-title-text-down">
                                            MSc Student at USC and RESL lab
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Profile*/}
                            <div className="level">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                        <span className="icon cv-section-subtitle-icon">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                        <span className="cv-section-subtitle-text">
                                            Profile
                                        </span>
                                    </div>
                                    <div className="cv-section-content">
                                        <div className="cv-section-content-record-title">
                                            I'm actively looking for <span id="text-bold">
                                            Software Engineering Intern</span> (Summer 2020). <br />
                                            Please download my resume <a href="/static/cv.pdf">here</a>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Education*/}
                            <div className="level">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                        <span className="icon cv-section-subtitle-icon">
                                            <FontAwesomeIcon icon={faBookOpen} />
                                        </span>
                                        <span className="cv-section-subtitle-text">
                                            Education
                                        </span>
                                    </div>
                                    <div className="cv-section-content">
                                        {/*Education 1*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title">
                                                MSc Computer Science, <span id="text-bold">
                                                University of Southern California (USC) </span>
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Los Angeles
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                January 2019 - Present
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Expected to graduate in <span id="text-bold">December 2020</span>
                                            </div>
                                        </div>
                                        {/*Education 2*/}
                                        <div className="cv-section-content-record" id="cv-section-content-record-last">
                                            <div className="cv-section-content-record-title">
                                                BSc Computer Science, <span id="text-bold">
                                                University of Nottingham (UoN) </span>
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Ningbo-Nottingham
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                June 2014 - September 2018
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                First Class Honours with GPA 3.93/4
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Advanced courses: Haskell, Machine Learning
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Working Experience*/}
                            <div className="level">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                        <span className="icon cv-section-subtitle-icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </span>
                                        <span className="cv-section-subtitle-text">
                                            Working Experience
                                        </span>
                                    </div>
                                    <div className="cv-section-content">
                                        {/*Working Experience 1*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                garage:  A Framework for Reproducible Reinforcement
                                                Learning (RL) Research
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                Student worker, USC Robotic Embedded Systems Lab&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Los Angeles
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                May 2019 - Present
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Refactoring and maintaining the open-sourced RL toolkit project
                                                garage, with emphasis on system/API design and implementation
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Participating in unit and integration coverage test and peer
                                                code review
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Experiencing various of state-of-art RL algorithms
                                            </div>
                                        </div>
                                        {/*Working Experience 2*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Data Mining of Chinese Student Applying for Foreign University
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                Software engineer, WorthNote Co., Ltd.&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Shanghai
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                June 2018 - November 2018
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Collected and performed 400,000+ graduate application data records
                                                using Python Scrapy, Pandas and MongoDB
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Developed and maintained GUI analysis tool for data cleaning
                                                using PyQt5
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Experienced hosting back-end server (REST API) using Flask,
                                                Gunicorn and Nginx
                                            </div>
                                        </div>
                                        {/*Working Experience 3*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Snowball: Facial Action Unit (AU) Detection using Caffe
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                Software intern, Chinese Academy of Sciences&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Beijing
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                August 2017 - October 2017
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Worked at Key Lab of Intelligent Information Processing
                                                with Prof. Shiguang Shan
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Implemented end-to-end code for AU detection with Large-scale
                                                unlabelled data in semi-supervised learning
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Studied source code of Caffe framework and experienced
                                                API in C++ and Python
                                            </div>
                                        </div>
                                        {/*Working Experience 4*/}
                                        <div className="cv-section-content-record" id="cv-section-content-record-last">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Web Crawling for "YeeSight" Project
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                Software intern, Global Tone Communication Tech Co., Ltd.&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Qingdao
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                July 2016 - September 2016
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Crawled 20+ websites and collected 2G+ bilingual text data
                                                in English-Chinese
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Experimented Python API, regular expression and web crawling
                                                libraries: bs4, requests and selenium
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Projects*/}
                            <div className="level">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                        <span className="icon cv-section-subtitle-icon">
                                            <FontAwesomeIcon icon={faFolderOpen} />
                                        </span>
                                        <span className="cv-section-subtitle-text">
                                            Projects
                                        </span>
                                    </div>
                                    <div className="cv-section-content">
                                        {/*Project 1*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                uRank: University Rankings Collection
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                Software developer, Personal project&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Los Angeles
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                Nov 2018 - June 2019
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Collected and cleaned 5 years QS/Times/ARWU/USNews ranking
                                                data by Python Scrapy, visualised in React website
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Experienced JavaScript ES6, Next.js, create-react-app,
                                                styled-components, Bulma and Chart.js
                                            </div>
                                        </div>
                                        {/*Project 2*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Workload and Facial Expression Linkage Analysis
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                Research intern, UoN Mixed Reality Lab&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Nottingham
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                October 2017 - May 2018
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Advisor: Dr. Max Wilson
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Undergraduate dissertation: Data Collection and Analysis
                                                of the Linkage between Mental Workload and Spontaneous
                                                Facial Expression on Pattern Recognition Task
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Used fNIRS brain scanner to evaluate different levels of
                                                workload
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Built PyQt5 software for HCI experience
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Benchmarked facial AUs using multiple Machine Learning
                                                models
                                            </div>
                                        </div>
                                        {/*Project 3*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Travel Dashboard
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                Software developer, UoN & Atos UK Limited&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Nottingham
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                September 2016 - May 2017
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Advisor: Prof. Natasa Milic-Frayling
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Built user management dashboard and Excel analysis tool
                                                for Atos UK
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Developed desktop GUI software using JavaFx and MySQL
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Achieved highest personal score (92) and won the ’Best Code
                                                Quality’ award of the year in CS school
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-quarter about-right">
                            {/*Contact*/}
                            <div className="level">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                            <span className="icon cv-section-subtitle-icon">
                                                <FontAwesomeIcon icon={faAddressBook} />
                                            </span>
                                        <span className="cv-section-subtitle-text">
                                                Contact
                                            </span>
                                    </div>
                                    <div className="cv-section-content">
                                        <div className="cv-section-content-record-main" id="left-align">
                                            RTH422 <br />
                                            3710 McClintock Ave <br />
                                            Los Angeles, CA 90089 <br />
                                            TEL: (626)-703-9018
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Skills*/}
                            <div className="level">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                            <span className="icon cv-section-subtitle-icon">
                                                <FontAwesomeIcon icon={faLaptopCode} />
                                            </span>
                                        <span className="cv-section-subtitle-text">
                                                Skills
                                            </span>
                                    </div>
                                    <div className="cv-section-content">
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Programming
                                            </div>
                                            <div className="cv-section-content-record-main" id="left-align">
                                                Python <br />
                                                Javascript <br />
                                                React <br />
                                                HTML5 / CSS <br />
                                                Java <br />
                                                C++ <br />
                                                Haskell <br />
                                                MongoDB <br />
                                                MySQL
                                            </div>
                                        </div>
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Others
                                            </div>
                                            <div className="cv-section-content-record-main" id="left-align">
                                                LaTeX<br />
                                                Markdown <br />
                                                Prezi <br />
                                                Pixelmator
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
