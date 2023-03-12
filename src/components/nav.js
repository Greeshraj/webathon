import React from 'react'

function nav() {
  return (
  <>
   <header class="rbt-header rbt-header-10">
        <div class="rbt-sticky-placeholder"></div>
        <div class="rbt-header-wrapper header-space-betwween header-transparent header-sticky">
            <div class="container-fluid">
                <div class="mainbar-row rbt-navigation-start align-items-center">
                    <div class="header-left rbt-header-content">
                        <div class="header-info">
                            <div class="logo">
                                <a href="/">
                                   <h2> KgpEdu </h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="rbt-main-navigation d-none d-xl-block">
                        <nav class="mainmenu-nav">
                            <ul class="mainmenu">
                                <li >
                                    <a href="/">Home  </a>
                
                                </li>
                                <li class="with-megamenu has-menu-child-item position-static">
                                    <a href="/demo">Demo</a>
                                   
                                </li>
                                <li class="with-megamenu has-menu-child-item position-static">
                                    <a href="/courses">Courses</a>
                                      
                                     
                               
                                      
                                </li>

                                <li class="has-dropdown has-menu-child-item">
                                    <a href="/dashboard">Dashboard
                                        
                                    </a>
                                     
                                </li>

                                

                                <li class="with-megamenu has-menu-child-item position-static">
                                    <a href="/reviews">Reviews</a>
                                   
                                </li>

                              
                                <li class="with-megamenu has-menu-child-item position-static">
                                    <a href="/faq">FAQ </a>
                                     
                                </li>
                            </ul>
                        </nav>
                    </div>
                  
                </div>
            </div>
        </div>
    </header>
  </>
  )
}

export default nav
