<template>
   <Header></Header>
   <!-- banner -->
   <section class="hero-area mt-0" id="home">
      <div class="hero-inner">
         <div class="container ">
            <div class="row d-flex align-items-center" style="margin-top:50px;">
               <div class="col-lg-8 co-12">
                  <div class="home-slider">
                     <div class="hero-text">
                        <div class="lui-subtitle">
                           <span>
                              Hello,
                              <b>my name is YU WAH</b>
                           </span>
                        </div>
                        <div class="label lui-subtitle d-flex align-items-center">
                           <div class="pt-2">I'm a</div>
                           <strong>
                              <div class="text" ref="typedElement"></div>
                           </strong>
                        </div>
                        <p>
                           I create beautiful, functional and user-centered
                           digital experiences. With 8+ years of experience in web development, I bring idea to life
                           through
                           clean code and thougthful design.
                        </p>
                        <div class="bts">
                           <a target="_blank"
                              href="https://drive.google.com/drive/folders/1ZQRhtO94h1UWK-l1_bVPycd6mWTEcozP?usp=drive_link"
                              class="btn">
                              <span>Download CV</span>
                           </a>
                           <a href="#" class="btn-lnk">
                              My Skills
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-12">
                  <div class="info-list">
                     <div class="">
                        <!-- <img src="../assets/images/heroimage2.jpg" alt="Background Image" class="bg-image" /> -->
                        <img src="../assets/images/heroimage1_.jpg" alt="my portfolio"
                           class="" style="width: 100%; border-radius: 20px;margin-top:60px;padding-top:60px;margin-bottom:60px;padding-bottom:60px;"/>
                     </div>

                     <!-- <ul>
                        <li>
                           <span class="num">
                              8
                              <strong>+</strong>
                           </span>
                           <span class="value">
                              Years of
                              <strong>Experience</strong>
                           </span>
                        </li>
                        <li>
                           <span class="num">50+</span>
                           <span class="value">
                              Completed
                              <strong>Projects</strong>
                           </span>
                        </li>
                     </ul> -->
                     <!-- <span class="circle">
                        <img src="../assets/images/pat-2.png" alt="" />
                     </span> -->
                     <!-- <span class="circle2">
                        <img src="../assets/images/pat-2.png" alt="" />
                     </span> -->
                  </div>
               </div>
            </div>

            <div class="lui-bgtitle" style="top: -84px">
               <span>Web Developer</span>
            </div>
         </div>
      </div>

      <div class="skill" style="margin-top: -41px">
         <div class="relative">
            <div class="bg-gradient-to-r"></div>
            <div class="bg-gradient-to-l"></div>
            <div class="d-flex animate-scroll gap-5">
               <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                  <img src="../assets/images/HTML5.svg" alt="html5" class="transition-transform opacity-60" width="30"
                     height="30" loading="lazy" />
                  <span class="text-lg">HTML5</span>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/CSS3.svg" alt="css3" class="transition-transform opacity-60" width="30"
                        height="30" loading="lazy" />
                     <span class="text-lg">CSS3</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/tailwindcss.svg" alt="tailwind" class="transition-transform opacity-60"
                        width="30" height="30" loading="lazy" />
                     <span class="text-lg">Tailwind</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/javaScript.svg" alt="javascript" class="transition-transform opacity-60"
                        width="30" height="30" loading="lazy" />
                     <span class="text-lg">JS</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/Figma.svg" alt="figma" class="transition-transform opacity-60"
                        width="30" height="30" loading="lazy" />
                     <span class="text-lg">Figma</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/typeScript.svg" alt="typescript" class="transition-transform opacity-60"
                        width="30" height="30" loading="lazy" />
                     <span class="text-lg">Typescript</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/vue.svg" alt="vue" class="transition-transform opacity-60" width="30"
                        height="30" loading="lazy" />
                     <span class="text-lg">VUE</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/angular-icon.svg" alt="angular" class="transition-transform opacity-60"
                        width="30" height="30" loading="lazy" />
                     <span class="text-lg">Angular</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/adobe-photoshop.svg" alt="adobe-photoshop"
                        class="transition-transform opacity-60" width="30" height="30" loading="lazy" />
                     <span class="text-lg">Photoshop</span>
                  </div>
               </div>
               <div class="d-flex animate-scroll">
                  <div class="d-flex align-items-center gap-2 group transition-all duration-300">
                     <img src="../assets/images/git.svg" alt="git" class="transition-transform opacity-60" width="30"
                        height="30" loading="lazy" />
                     <span class="text-lg">Git</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- about my story -->
   <section class="skill" id="about">
      <div class="heading text-center my-element">
         <h3>ABOUT</h3>
         <h4>
            <span class="my">MY</span>
            <span class="talent">Story</span>
         </h4>
      </div>
      <div class="aboutme">
         <div class="row d-flex align-items-center">
            <div class="col-md-7">
               <p>
                  Hello There! I'm Yu Wah, a passionate Frontend Developer with 8+
                  years of experience specializing in Reactjs, Angular, Vue and CMS Framework (wordpress)
                  with a solid foundation in UI/UX design. I've worked on a
                  range of projects, including admin dashboards, e-commerce
                  platforms, different kinds of websites, and job seeker site. I
                  specialize in building responsive, user-friendly websites
                  using Reactjs, Angular, Vue, Wordpress and frontend frameworks like
                  Tailwind CSS, Bootstrap.
               </p>
               <div class="aboutsection row">
                  <div class="col-md-6">
                     <div class="about">
                        <div class="icon">
                           <img src="../assets/images/account.png" alt="myportfolio" />
                        </div>
                        <div>
                           <p>Name</p>
                           <p class="text-faded">Yu Wah Htet Aung</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="about">
                        <div class="icon">
                           <img src="../assets/images/locator.png" alt="myportfolio" />
                        </div>
                        <div>
                           <p>Location</p>
                           <p class="text-faded">61/1 Ramkhamhaeng 50, Hua Mak, Bang Kapi, Bangkok 10240</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="about">
                        <div class="icon">
                           <img src="../assets/images/address.png" alt="myportfolio" />
                        </div>
                        <div>
                           <p>Email</p>
                           <p class="text-faded">yuwahhtetaung6@gmail.com</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="about">
                        <div class="icon">
                           <img src="../assets/images/verified-user.png" alt="myportfolio" />
                        </div>
                        <div>
                           <p>Status</p>
                           <p class="text-faded">Available for work</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-5">
               <div style="width: 100%; height: 400px">
                  <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                     src="https://lottie.host/5868ed33-79aa-492f-a361-88243200df70/f8DSq1Zgi0.lottie" />
               </div>
            </div>
         </div>
      </div>
      <div class="lui-bgtitle" style="top: -130px">
         <span>My Story</span>
      </div>
   </section>

   <!-- portfolio -->
   <section class="skill" id="portfolio">
      <div class="heading text-center">
         <h3>PORTFOLIO</h3>
         <h4>
            <span class="my">MY</span>
            <span class="talent">Cases</span>
         </h4>
      </div>
      <div class="prj">
         <div class="row">
            <div class="col-md-4">
               <div class="prj-item">
                  <div class="zoomin">
                     <img src="../assets/images/portfolio1.jpg" />
                  </div>
                  <div class="d-flex justify-content-between align-items-center prj-content">
                     <h3>Job Search Portal</h3>
                     <div>
                        <a href="https://www.jobclick.com.mm" target="_blank">
                           <img src="../assets/images/goto.png" alt="Job Click" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="prj-item">
                  <div class="zoomin">
                     <img src="../assets/images/portfolio2.jpg" alt="myportfolio"/>
                  </div>
                  <div class="d-flex justify-content-between align-items-center prj-content">
                     <h3>Learning Online Portal</h3>
                     <div>
                        <a href="https://kudostoyou.com.mm" target="_blank">
                           <img src="../assets/images/goto.png" alt="Kudos To You" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="prj-item">
                  <div class="zoomin">
                     <img src="../assets/images/portfolio3.jpg" alt="myportfolio"/>
                  </div>
                  <div class="d-flex justify-content-between align-items-center prj-content">
                     <h3>Real Estate Portal</h3>
                     <div>
                        <a href="https://soesanrealestate.com.mm/" target="_blank">
                           <img src="../assets/images/goto.png" alt="Soe San Lynn Real Estate" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="prj-item">
                  <div class="zoomin">
                     <img src="../assets/images/portfolio4.jpg" alt="myportfolio"/>
                  </div>
                  <div class="d-flex justify-content-between align-items-center prj-content">
                     <h3>Air Ticketing</h3>
                     <div>
                        <a href="https://ticket.com.mm/" target="_blank">
                           <img src="../assets/images/goto.png" alt="Columbus Air Ticket" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="prj-item">
                  <div class="zoomin">
                     <img src="../assets/images/portfolio6.png" />
                  </div>
                  <div class="d-flex justify-content-between align-items-center prj-content">
                     <h3>ERP Product</h3>
                     <div>
                        <a href="#" target="_blank">
                           <img src="../assets/images/goto.png" alt="Smart ERP" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="prj-item">
                  <div class="zoomin">
                     <img src="../assets/images/portfolio5.jpg" />
                  </div>
                  <div class="d-flex justify-content-between align-items-center prj-content">
                     <h3>Gaullac Website</h3>
                     <div>
                        <a href="https://gaullacmommyanmar.com/" target="_blank">
                           <img src="../assets/images/goto.png" alt="Gaullac" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="load-more-link" @click="scrollToPortfolio">
            <a target="_blank" href="#" class="btn" @click="goToAbout">
               <span>VIEW MORE</span>
            </a>
         </div>
      </div>
   </section>

   <!-- Experience -->
   <section class="experience">
      <div class="container">
         <div class="heading text-center mb-5">
            <h3>RESUME</h3>
            <h4>
               <span class="my">MY</span>
               <span class="talent">Experience</span>
            </h4>
         </div>

         <div class="row">
            <div class="col-md-6">
               <div class="">
                  <div class="d-flex align-items-center etitle">
                     <div class="icon">
                        <i class="lni lni-briefcase"></i>
                     </div>
                     <div class="etitle_">
                        <span>Experience</span>
                     </div>
                  </div>
                  <div class="timeline">
                     <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                           <p class="timeline-date">2021 - Present</p>
                           <p class="timeline-position">
                              Senior Front End/ Wordpress Developer
                           </p>
                           <p class="timeline-copy sqsrte-large">
                           <ul>
                              <li>
                                 Built responsive, SEO-friendly UIs with React.js and Tailwind, increasing page speed by
                                 25%.
                              </li>
                              <li>
                                 Integrated REST APIs and managed global state using Redux.
                              </li>
                              <li>
                                 Collaborated with UI/UX designers to turn Figma mockups into pixel-perfect components.
                              </li>
                              <li>
                                 Refactored legacy JavaScript code into modular React components, improving
                                 maintainability.
                              </li>
                           </ul>
                           </p>
                        </div>
                     </div>
                     <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                           <p class="timeline-date">2019 - 2021</p>
                           <p class="timeline-position">Junior Frontend Developer</p>
                           <p class="timeline-copy sqsrte-large">
                           <ul>
                              <li>
                                 Assisted in developing a dashboard for internal data tracking with Angular. </li>
                              <li>Optimized website performance by lazy-loading components and compressing assets.</li>
                              <li>Maintained version control and collaborated via Git on a team of 4 developers.</li>

                           </ul>
                           </p>
                        </div>
                     </div>
                     <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                           <p class="timeline-date">2017 - 2018</p>
                           <p class="timeline-position">
                              Web Designer
                           </p>
                           <p class="timeline-copy sqsrte-large">
                           <ul>
                              <li> Design and develop visually appealing,
                                 user-friendly websites.</li>
                              <li>Create wireframes,
                                 prototypes, and mockups using tools like Adobe XD
                                 or Photoshop.</li>
                              <li>Ensure websites are responsive,
                                 mobile-friendly, and optimized for all devices.</li>
                           </ul>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-6">
               <div class="">
                  <div class="d-flex align-items-center etitle">
                     <div class="icon">
                        <i class="lni lni-graduation"></i>
                     </div>
                     <div class="etitle_">
                        <span>Education</span>
                     </div>
                  </div>
                  <div class="timeline">
                     <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                           <p class="timeline-date">2018</p>
                           <p class="timeline-position">
                              Bachelor of Engineering
                           </p>
                           <p class="timeline-copy sqsrte-large">
                              West Yangon Technogical University
                           </p>
                        </div>
                     </div>
                     <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                           <p class="timeline-date">2016</p>
                           <p class="timeline-position">
                              Bachelor of Technology
                           </p>
                           <p class="timeline-copy sqsrte-large">
                              West Yangon Technological University
                           </p>
                        </div>
                     </div>
                     <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                           <p class="timeline-date">2020</p>
                           <p class="timeline-position">
                              Responsive Web Design
                           </p>
                           <p class="timeline-copy sqsrte-large">
                           <ul>
                              <li>Fronted Development certification program offers a
                                 comprehensive curriculum covering HTML, CSS,
                                 JavaScript, and react, ensuring students are well
                                 prepared for employment in fronted development
                                 roles.</li>
                              <li>with a focus on practical skills and
                                 real-world projects, students acquire the
                                 expertise needed to succeed in the industry upon
                                 completion of the program.</li>
                           </ul>
                           </p>
                        </div>
                     </div>
                     <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                           <p class="timeline-date">2021</p>
                           <p class="timeline-position">
                              Frontend Web Development (Certification)
                           </p>
                           <p class="timeline-copy sqsrte-large">
                           <ul>
                              <li>
                                 Completed a comprehensive course covering the fundamentals of responsive web design.
                              </li>
                              <li>Gained hands-on experience with HTML5 and CSS3, including Flexbox, Grid, media
                                 queries, and mobile-first design principles. </li>

                           </ul>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <!-- Skills -->
   <section class="skill" id="skill" >
      <div class="container">
         <div class="heading text-center">
            <h3>SKILLS</h3>
            <h4>
               <span class="my">MY</span>
               <span class="talent">Professional</span>
            </h4>

         </div>
         <div class="skill-tabs">

            <p class="body">
               I provide a full range of frontend development services focused
               on delivering functional and aesthetically pleasing websites.
            </p>
            <!-- Static Tab Buttons -->
            <ul class="nav nav-tabs justify-content-center">
               <li class="nav-item">
                  <button class="nav-link" :class="{ active: activeTab === 'overview' }"
                     @click="activeTab = 'overview'">
                     TECHNICAL
                  </button>
               </li>
               <li class="nav-item">
                  <button class="nav-link" :class="{ active: activeTab === 'profile' }" @click="activeTab = 'profile'">
                     LANGUAGE
                  </button>
               </li>
               <li class="nav-item">
                  <button class="nav-link" :class="{ active: activeTab === 'settings' }"
                     @click="activeTab = 'settings'">
                     SOFT SKILLS
                  </button>
               </li>
            </ul>

            <!-- Tab Content -->
            <div class="row">
               <div class="col-md-12">
                  <div class="tab-content">
                     <transition name="fade" mode="out-in">
                        <div :key="activeTab">
                           <div v-if="activeTab === 'overview'" class="tab-pane active show">
                              <div class="dashboard_">
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-1" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>HTML5</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-2" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>CSS3</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-3" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>JavaScript (ES6+)</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-4" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Typescript</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-5" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Angular</h4>
                                 </div>
                              </div>
                              <div class="dashboard_ mt-3">
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-6" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Wordpress</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-7" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Git</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-8" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Figma/Adobe Xd</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-9" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Photoshop</h4>
                                 </div>
                              </div>
                           </div>
                           <div v-else-if="activeTab === 'profile'" class="tab-pane active show">
                              <div class="dashboard d-flex justify-content-center mt-3">
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-10" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>English</h4>
                                 </div>
                              
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-12" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Korean</h4>
                                 </div>
                              </div>
                           </div>
                           <div v-else-if="activeTab === 'settings'" class="tab-pane active show">
                              <div class="dashboard d-flex justify-content-center mt-3">
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-13" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Problem Solving</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-14" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Communication</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-15" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Documentation Writing</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-16" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Code Reviews</h4>
                                 </div>
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-17" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Collaboration</h4>
                                 </div>
                              </div>
                              <div class="dashboard d-flex justify-content-center mt-3">
                                 <div class="skilltab text-center">
                                    <svg>
                                       <circle class="bg" cx="40" cy="40" r="32" />
                                       <circle class="meter-18" cx="40" cy="40" r="32" />
                                    </svg>
                                    <h4>Critical Thinking</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </transition>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </section>

   <!-- contact -->
   <section class="skill" id="contact">
      <div class="heading text-center">
         <h3>GET IN TOUCH</h3>
         <h4>
            <span class="my">Let's</span>
            <span class="talent">Talk About Ideas</span>
         </h4>
      </div>
      <div class="row" style="margin-top: 50px">
         <div class="col-md-4">
            <div class="numbers-item">
               <div class="icon">
                  <i class="lni lni-map"></i>
               </div>
               <div class="atitle">
                  <span>Address</span>
               </div>
               <div class="lui-text">
                  <span>61/1 Ramkhamhaeng 50, Hua Mak, Bang Kapi, Bangkok 10240</span>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="numbers-item">
               <div class="icon">
                  <i class="lni lni-envelope"></i>
               </div>
               <div class="atitle">
                  <span>Email</span>
               </div>
               <div class="lui-text">
                  <span>yuwah.sm@gmail.com</span>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="numbers-item">
               <div class="icon">
                  <i class="lni lni-phone"></i>
               </div>
               <div class="atitle">
                  <span>Phone</span>
               </div>
               <div class="lui-text">
                  <span>+66 50202572</span>
               </div>
            </div>
         </div>
      </div>
      <div class="lui-bgtitle" style="top: 0">
         <span>Contact Me</span>
      </div>
   </section>
</template>
<script>
import { ref } from "vue"
import Typed from "typed.js"
import Header from "../components/Header"
import { DotLottieVue } from "@lottiefiles/dotlottie-vue"
export default {
   setup() {
      const activeTab = ref("overview")
      return { activeTab }
   },
   components: {
      Header,
      DotLottieVue,
   },
   name: "TypingEffect",
   methods: {
      goToAbout() {
         this.$router.push('/allprojects');
      },
      scrollToPortfolio() {
         const el = document.getElementById("portfolio");
         if (el) {
            el.scrollIntoView({ behavior: "smooth" });
         }
      }
   },
   mounted() {
     
      const options = {
         strings: [
            "",
            "Web/Graphic Designer",
            "Wordpress Developer",
            "Frontend Developer",
         ],
         typeSpeed: 100,
         backSpeed: 40,
         loop: true,
      }

      this.typed = new Typed(this.$refs.typedElement, options)
   },
   beforeUnmount() {
      // Clean up the Typed instance
      if (this.typed) this.typed.destroy()
   },
}
</script>
<style>
.body {
   font-size: 14px;
   margin-bottom: 35px;
   text-align: center;
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}

.prj-item>.zoomin>img {

   height: 230px;
   object-fit: cover;

}

a.btn {
   transition: all 0.2s ease-in-out;
   border-radius: 15px;
}

a.btn:hover {
   background-color: #0a0a0a;
   color: #fff !important;
}

@keyframes floating {
   0% {
      transform: translatey(0px);
   }

   50% {
      transform: translatey(-10px);
   }

   100% {
      transform: translatey(0px);
   }
}

@keyframes shadow {
   0% {
      width: 180px;
      box-shadow: 0px 10px 8px rgba(0, 0, 0, .8);
   }

   50% {
      width: 150px;
      box-shadow: 0px 10px 8px rgba(0, 0, 0, .5);
   }

   100% {
      width: 180px;
      box-shadow: 0px 10px 8px rgba(0, 0, 0, .8);
   }
}

@media only screen and (max-width: 767px) {
   .dashboard_ {
      display: unset;
   }

 
}
</style>
