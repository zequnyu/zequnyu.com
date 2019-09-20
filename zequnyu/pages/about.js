import React from 'react';

import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'
import '../styles/About.css'
import '../styles/tags.css'

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
                            <div className="level cv-title animated fadeIn">
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
                            {/*Update*/}
                            <div className="level animated fadeIn">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                        <span className="icon cv-section-subtitle-icon">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                        <span className="cv-section-subtitle-text">
                                            Update
                                        </span>
                                    </div>
                                    <div className="cv-section-content">
                                        <div className="cv-section-content-record-title">
                                            I'm actively looking for <span id="text-bold">
                                            Software Engineering Intern</span> (Summer 2020). <br />
                                            Please download my resume <a href="/static/ZequnYu.pdf">here</a>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Education*/}
                            <div className="level education-section animated fadeIn">
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
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                University of Southern California (USC)
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                MSc Computer Science&nbsp;
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
                                                Expected to graduate in <span id="text-bold">January 2021</span>
                                            </div>
                                        </div>
                                        {/*Education 2*/}
                                        <div className="cv-section-content-record" id="cv-section-content-record-last">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                University of Nottingham (UoN)
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                BSc Computer Science&nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    id="icon-location"
                                                /> Ningbo-Nottingham
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                September 2014 - June 2018
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                First Class Honours with GPA 3.93/4
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Advanced courses: Functional Programming (Haskell), Machine Learning
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Work Experience*/}
                            <div className="level work-section animated fadeIn">
                                <div className="cv-section">
                                    <div className="cv-section-title">
                                        <span className="icon cv-section-subtitle-icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </span>
                                        <span className="cv-section-subtitle-text">
                                            Employment
                                        </span>
                                    </div>
                                    <div className="cv-section-content">
                                        {/*Work Experience 1*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title">
                                                SDE student worker,&nbsp;
                                                <span id="text-bold">USC Robotic Embedded Systems Lab&nbsp;</span>
                                                <span id="text-shrink">
                                                   <FontAwesomeIcon
                                                       icon={faMapMarkerAlt}
                                                       id="icon-location"
                                                   /> Los Angeles
                                                </span>
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                <span className="tag" id="python">Python</span>&nbsp;
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                May 2019 - Present
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Maintain the open-sourced reinforcement learning project&nbsp;
                                                <a href="https://github.com/rlworkgroup/garage" target="_blank"
                                                   rel="noopener noreferrer" id="text-bold">garage</a>,
                                                with emphasis on system and API design (20+ commits
                                                to master branch, 10,000+ lines change)
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Refactor the core of garage: LocalRunner and
                                                experiment API
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Contribute to Travis CI test (improved codebase coverage
                                                by 2%) and peer code review (reviewed 10+ Pull Request)
                                            </div>
                                        </div>
                                        {/*Work Experience 2*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title">
                                                Full stack software engineer,&nbsp;
                                                <span id="text-bold">WorthNote Co., Ltd.&nbsp;</span>
                                                <span id="text-shrink">
                                                   <FontAwesomeIcon
                                                       icon={faMapMarkerAlt}
                                                       id="icon-location"
                                                   /> Shanghai
                                                </span>
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                <span className="tag" id="javascript">Javascript</span>&nbsp;
                                                <span className="tag" id="react">React</span>&nbsp;
                                                <span className="tag" id="htmlcss">HTML / CSS</span>&nbsp;
                                                <span className="tag" id="python">Python</span>&nbsp;
                                                <span className="tag" id="flask">Flask</span>&nbsp;
                                                <span className="tag" id="mongodb">MongoDB</span>
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                June 2018 - November 2018
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Refactored company website (<a href="https://worthnote.netlify.com"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">mirror</a>)
                                                using Javascript and React (Reduced loading time by 50%)
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Experienced hosting back-end server (REST API) using Flask,
                                                Gunicorn and Nginx
                                            </div>

                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Collected and performed 400,000+ graduate application data records
                                                using Python Scrapy, Pandas and MongoDB
                                            </div>
                                        </div>
                                        {/*Work Experience 3*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title">
                                                SDE + Research intern,&nbsp;
                                                <span id="text-bold">Chinese Academy of Sciences&nbsp;</span>
                                                <span id="text-shrink">
                                                   <FontAwesomeIcon
                                                       icon={faMapMarkerAlt}
                                                       id="icon-location"
                                                   /> Beijing
                                                </span>
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                <span className="tag" id="cpp">C++</span>&nbsp;
                                                <span className="tag" id="python">Python</span>&nbsp;
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                July 2017 - October 2017
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Worked at Key Lab of Intelligent Information Processing
                                                supervised by Prof. Shiguang Shan
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Studied source code of Caffe framework and experienced its
                                                API in C++ and Python
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Implemented end-to-end code for facial Action Unit detection
                                                with Large-scale unlabelled data in semi-supervised learning
                                            </div>
                                        </div>
                                        {/*Work Experience 4*/}
                                        <div className="cv-section-content-record" id="cv-section-content-record-last">
                                            <div className="cv-section-content-record-title">
                                                SDE + Test intern,&nbsp;
                                                <span id="text-bold">Global Tone Communication
                                                    Tech Co., Ltd.&nbsp;</span>
                                                <span id="text-shrink">
                                                   <FontAwesomeIcon
                                                       icon={faMapMarkerAlt}
                                                       id="icon-location"
                                                   /> Qingdao
                                                </span>
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                <span className="tag" id="python">Python</span>&nbsp;
                                                <span className="tag" id="java">Java</span>&nbsp;
                                                <span className="tag" id="htmlcss">HTML / CSS</span>
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                June 2016 - September 2016
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Crawled 20+ websites and collected 2G+ bilingual text
                                                data in English-Chinese for YeeSight project using Python
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Experienced web crawling libraries: beautifulsoup4,
                                                requests and selenium
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Responsible for performance and integration test of
                                                translation API using JUnit in Java
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Projects*/}
                            <div className="level project-section animated fadeIn">
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
                                            <div className="cv-section-content-record-title">
                                                <span id="text-bold">uRank: University Rankings Collection&nbsp;</span>
                                                <span id="text-shrink">
                                                   <FontAwesomeIcon
                                                       icon={faMapMarkerAlt}
                                                       id="icon-location"
                                                   /> Los Angeles
                                                </span>
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                <span className="tag" id="javascript">Javascript</span>&nbsp;
                                                <span className="tag" id="htmlcss">HTML / CSS</span>&nbsp;
                                                <span className="tag" id="react">React</span>&nbsp;
                                                <span className="tag" id="python">Python</span>&nbsp;
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                Nov 2018 - April 2019
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Collected and performed 5 years QS/Times/ARWU/USNews
                                                ranking data using Python Scrapy
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Built React website for data visualization, and deployed
                                                with Netlify continuous integration
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Experienced JavaScript ES6, create-react-app, Next.js,
                                                Bulma, styled-components and Chart.js
                                            </div>

                                        </div>
                                        {/*Project 2*/}
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title">
                                                <span id="text-bold">
                                                    Workload and Facial Expression Linkage Analysis&nbsp;
                                                </span>
                                                <span id="text-shrink">
                                                   <FontAwesomeIcon
                                                       icon={faMapMarkerAlt}
                                                       id="icon-location"
                                                   /> Nottingham
                                                </span>
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                <span className="tag" id="matlab">MATLAB</span>&nbsp;
                                                <span className="tag" id="python">Python</span>
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                October 2017 - May 2018
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                <span id="text-bold">UoN Mixed Reality Lab</span>&nbsp;
                                                | Advisor: Dr. Max Wilson
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Undergraduate dissertation: Data Collection and Analysis
                                                of the Linkage between Mental Workload and Spontaneous
                                                Facial Expression on Pattern Recognition Task
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Recruited 20 participants for facial and brain workload data collection
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
                                                Benchmarked facial AUs and fNIRS by multiple ML models such as
                                                SVM, ANN using MATLAB
                                            </div>
                                        </div>
                                        {/*Project 3*/}
                                        <div className="cv-section-content-record" id="cv-section-content-record-last">
                                            <div className="cv-section-content-record-title">
                                                <span id="text-bold">
                                                    Travel Dashboard: Travel Expense Track and Analysis&nbsp;
                                                </span>
                                                <span id="text-shrink">
                                                   <FontAwesomeIcon
                                                       icon={faMapMarkerAlt}
                                                       id="icon-location"
                                                   /> Nottingham
                                                </span>
                                            </div>
                                            <div className="cv-section-content-record-main"
                                                 id="left-align">
                                                <span className="tag" id="java">Java</span>&nbsp;
                                                <span className="tag" id="mysql">MySQL</span>
                                            </div>
                                            <div className="cv-section-content-record-time">
                                                September 2016 - May 2017
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                <span id="text-bold">UoN & Atos UK Limited</span>&nbsp;
                                                | Advisor: Prof. Natasa Milic-Frayling
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Developed JavaFx desktop GUI software to support travel
                                                expense track from Excel raw data input to PDF report generation
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Built user system using MySQL
                                            </div>
                                            <div className="cv-section-content-record-main">
                                                <FontAwesomeIcon icon={faCircle} id="icon-interpunct" />
                                                Coordinated with Atos UK’s engineers and experienced
                                                agile development
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
                            <div className="level animated fadeIn">
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
                                            Ronald Tutor Hall <br />
                                            3710 McClintock Ave <br />
                                            Los Angeles, CA 90089 <br />
                                            TEL: (626)-703-9018
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Skills*/}
                            <div className="level skills-section animated fadeIn">
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
                                                <span className="tag" id="python">Python</span><br />
                                                <span className="tag" id="javascript">Javascript</span><br />
                                                <span className="tag" id="java">Java</span><br />
                                                <span className="tag" id="cpp">C++</span><br />
                                                <span className="tag" id="swift">Swift</span><br />
                                                <span className="tag" id="matlab">MATLAB</span><br />
                                                <span className="tag" id="htmlcss">HTML / CSS</span><br />
                                                <span className="tag" id="haskell">Haskell</span><br />
                                                <span className="tag" id="mongodb">MongoDB</span><br />
                                                <span className="tag" id="mysql">MySQL</span>
                                            </div>
                                        </div>
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Frameworks
                                            </div>
                                            <div className="cv-section-content-record-main" id="left-align">
                                                <span className="tag" id="react">React</span><br />
                                                <span className="tag" id="flask">Flask</span><br />
                                                Scrapy <br />
                                                Pandas <br />
                                                PyQt5 <br />
                                                Node.js <br />
                                                Express <br />
                                                Next.js <br />
                                                Bulma <br />
                                                Caffe <br />
                                            </div>
                                        </div>
                                        <div className="cv-section-content-record">
                                            <div className="cv-section-content-record-title" id="text-bold">
                                                Tools
                                            </div>
                                            <div className="cv-section-content-record-main" id="left-align">
                                                Git <br />
                                                Travis CI <br />
                                                Netlify <br />
                                                LaTeX <br />
                                                Vim <br />
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
