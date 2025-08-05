<template>
  <div class="navbar-area">
    <div class="container">
     <div class="head">
       <!-- <nav class="navbar navbar-expand-lg" :class="{ 'fixed': isSticky }" ref="navbar"> -->
        <nav class="navbar navbar-expand-lg">
            <!-- Hamburger -->
            <button @click="toggleMenu" class="navbar-toggler" type="button" aria-label="Toggle navigation">
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <!-- Menu -->
            <div :class="['sub-menu-bar', 'navbar-collapse', { open: isOpen }]" style="justify-content:center;">
              <ul id="nav" class="navbar-nav">
                <li class="nav-item">
                  <router-link :to="{ path: '/', hash: '#home' }">
                    <img src="../assets/images/menu-home1.png" alt="">
                    Home
                  </router-link>
                 
                </li>
                <li class="nav-item">
                  <router-link :to="{ path: '/', hash: '#about' }">
                
                     <img src="../assets/images/menu-about1.png" alt="">
                    About
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ path: '/', hash: '#portfolio' }">
                
                     <img src="../assets/images/menu-portfolio1.png" alt="">
                    Portfolio
                    </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ path: '/', hash: '#skill' }">
                
                     <img src="../assets/images/menu-skill1.png" alt="">
                    Skills
                    </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ path: '/', hash: '#contact' }">
                
                     <img src="../assets/images/menu-contact1.png" alt="">
                    Hire Me
                    </router-link>
                </li>
                
              </ul>
            </div>
          </nav>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isSticky: false
    };
  },
mounted() {
window.addEventListener('scroll', this.handleScroll)
},
beforeUnmount() {
  window.removeEventListener('scroll', this.handleScroll)
},
methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    // handleScroll() {
    //   const scrollY = window.scrollY
    //   this.isSticky = scrollY > 100 // change threshold as needed
    // }
  }
}

</script>

<style>
.head{
  align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 8px;
    height: min-content;
    justify-content: center;
    overflow: visible;
    padding: 0px 32px;
    position: relative;
    width: 100%;
    opacity: 1;
    background-color: transparent;
    .navbar{
      width: 69%;
      max-width: unset;
      scrollbar-width: none;
    }
}
 .navbar-nav .nav-item{
      margin-right:0;
      padding-right:25px;
   }
    .navbar-nav .nav-item:last-child{
      padding-right:0px;
   }

   .fixed{
    /* max-width: unset;
    width: 69%; */
  position: fixed;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* optional */
  scrollbar-width: none;
  padding-top: 16px;
}

a.logo{
    font-size: 20px;
    color: #000;
    font-weight: 700;
}

a.logo > img{
    width: 40px;
}
.navbar-area {
    top:20px;
    background-color: transparent;
}
.navbar{
    border: 3px solid #000;
    background-color: #ffffffba;
    border-radius: 0;
    padding: 0 30px;
}
.little-box{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
right:-6px;
top:-6px;
position:absolute;
}
.little-box-l{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
left:-6px;
top:-6px;
position:absolute;
}
.little-box-b-l{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
left:-6px;
bottom:-6px;
position:absolute;
}
.little-box-b-r{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
right:-6px;
bottom:-6px;
position:absolute;
}
/* Toggle menu on small screens */
.sub-menu-bar {
  display: flex;
}

@media (max-width: 991px) {
  .sub-menu-bar {
    display: none;
    flex-direction: column;
  }

  .sub-menu-bar.open {
    display: block;
  }
}

/* Hamburger styling if needed */
.navbar-toggler {
  border: none;
  background: none;
}
.toggler-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 4px 0;
}

.navbar{
  background-color: #2a2c32 !important;
  border-radius: 99px !important;
  border:none !important;
}

@media only screen and (max-width: 767px){
  .navbar-area{top:0;}
    .navbar{
      width: 100% !important;
      background-color: unset !important;
      padding: 0 !important;
      border-radius: 10px !important;
      display: flex;
      justify-content: center;
   }
   .navbar-toggler{
    background-color: #e6e8ec !important;
    padding: 11px 14px !important;
   }
}
</style>