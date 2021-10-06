<template>
<div class="container-fluid" data-layout="container">
    <nav class="
        navbar navbar-light navbar-vertical navbar-expand-xl navbar-vibrant
      ">
        <div class="d-flex align-items-center">
            <div class="toggle-icon-wrapper me-2">
                <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation">
                    <span class="navbar-toggle-icon"><span class="toggle-line"></span></span>
                </button>
            </div>
            <a class="navbar-brand" href="index.html">
                <div class="d-flex align-items-center py-3">
                    <img class="me-2" src="../assets/img/landingpage-logo.png" alt="Bank Name" />
                </div>
            </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div class="navbar-vertical-content scrollbar">
                <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                    <li class="nav-item">
                        <!-- label-->
                        <div class="row navbar-vertical-label-wrapper mb-2">
                            <div class="col-auto navbar-vertical-label">Dashboard</div>
                            <div class="col ps-0">
                                <hr class="mb-0 navbar-vertical-divider" />
                            </div>
                        </div>
                        <router-link to="/Index">
                            <a class="nav-link active" role="button">
                                <div class="d-flex align-items-center">
                                    <span class="nav-link-icon"><span class="fas fa-home"></span></span><span class="nav-link-text ps-1">Home</span>
                                </div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <!-- label-->
                        <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                            <div class="col-auto navbar-vertical-label">
                                Main Navigation
                            </div>
                            <div class="col ps-0">
                                <hr class="mb-0 navbar-vertical-divider" />
                            </div>
                        </div>
                        <!-- parent pages-->
                        <a class="nav-link dropdown-indicator" href="#Payments" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="Payments">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><span class="fas fa-layer-group"></span></span><span class="nav-link-text ps-1">Payments</span></div>
                        </a>
                        <!-- inner pages-->
                        <ul class="nav collapse false" id="Payments">
                            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#PaymentInitiation" data-bs-toggle="collapse" aria-expanded="false" aria-controls="Payments">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Payment Initiation</span></div>
                                </a>
                                <!-- more inner pages-->
                                <!-- inner pages-->
                                <ul class="nav collapse false" id="PaymentInitiation">
                                    <li class="nav-item">
                                        <router-link to="/SingleTransaction">
                                            <a class="nav-link" role="button">
                                                <div class="d-flex align-items-center">
                                                    <span class="nav-link-text ps-1">Single Transaction</span>
                                                </div>
                                            </a>
                                        </router-link>
                                        <!-- more inner pages-->
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="#">
                                            <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Bulk Upload</span></div>
                                        </a><!-- more inner pages-->
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="#">
                                            <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Batch Initiation</span></div>
                                        </a><!-- more inner pages-->
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="Authorize-Single.html">
                                            <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Authorize - Single</span></div>
                                        </a><!-- more inner pages-->
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="#">
                                            <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Authorize - Bulk</span></div>
                                        </a><!-- more inner pages-->
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <!-- parent pages--><a class="nav-link dropdown-indicator" href="#ReportsandAnalytics" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="Reports">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><span class="far fa-file-alt"></span></span><span class="nav-link-text ps-1">Reports and Analytics</span>
                            </div>
                        </a><!-- inner pages-->
                        <ul class="nav collapse false" id="ReportsandAnalytics">
                            <li class="nav-item">
                                <a class="nav-link">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Sub Menu 1</span>
                                    </div>
                                </a><!-- more inner pages-->
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="content">
        <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand">
            <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation">
                <span class="navbar-toggle-icon"><span class="toggle-line"></span></span>
            </button>
            <a class="navbar-brand me-1 me-sm-3" href="index.html">
                <div class="d-flex align-items-center">
                    <img class="me-2" src="../assets/img/landingpage-logo.png" alt="Bank Name" />
                </div>
            </a>
            <ul class="navbar-nav align-items-center d-none d-lg-block">
                <li class="nav-item">
                    <div class="search-box" data-list='{"valueNames":["title"]}'>
                        <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
                            <input class="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search" />
                            <span class="fas fa-search search-box-icon"></span>
                        </form>
                        <button class="
                  btn-close
                  position-absolute
                  end-0
                  top-50
                  translate-middle
                  shadow-none
                  p-1
                  me-1
                  fs--2
                " type="button" data-bs-dismiss="search"></button>
                    </div>
                </li>
            </ul>
            <ul class="
            navbar-nav navbar-nav-icons
            ms-auto
            flex-row
            align-items-center
          ">
                <li class="nav-item">
                    <a class="nav-link">You are logged in :
                        <span class="text-primary" id="loggedInUserID"></span></a>
                </li>

                <li class="nav-item dropdown">
                    <a class="
                nav-link
                notification-indicator notification-indicator-primary
                px-0
                icon-indicator
              " id="A10" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px"></span></a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-card" aria-labelledby="navbarDropdownNotification">
                        <div class="card card-notification shadow-none" style="max-width: 5rem">
                            <div class="card-header">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-auto">
                                        <h6 class="card-header-title mb-0">Alerts</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="scrollbar-overlay" style="max-height: 19rem">
                                <div class="list-group list-group-flush fw-normal fs--1">
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title text-danger">No Alerts here...</strong>
                                                <p class="notification-item-text">
                                                    Check out what other makers are doing on Explore!...
                                                </p>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="
                nav-link
                notification-indicator notification-indicator-primary
                px-0
                icon-indicator
              " id="A11" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-envelope" data-fa-transform="shrink-6" style="font-size: 33px"></span><span class="notification-indicator-number">8</span></a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-card" aria-labelledby="navbarDropdownNotification">
                        <div class="card card-notification shadow-none" style="max-width: 5rem">
                            <div class="card-header">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-auto">
                                        <h6 class="card-header-title mb-0">Notifications</h6>
                                    </div>
                                    <div class="col-auto">
                                        <a class="card-link fw-normal" href="#">Mark all as read</a>
                                    </div>
                                </div>
                            </div>
                            <div class="scrollbar-overlay" style="max-height: 19rem">
                                <div class="list-group list-group-flush fw-normal fs--1">
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center border-top">
                                <a class="card-link d-block" href="app/social/notifications.html">View all</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link pe-0" id="A12" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="avatar avatar-xl">
                            <img class="rounded-circle" src="../assets/img/user-blank.jpg" alt="" />
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                        <div class="bg-white dark__bg-1000 rounded-2 py-2">
                            <a class="dropdown-item fw-bold text-primary" href="#!"><span class="fas fa-user me-1"></span><span>Superuser</span></a>
                            <a class="dropdown-item" href="#">
                                <small><b>Last login date</b> :
                                    <span id="Span1">27-04-2021 10:17:52 AM</span></small><br />
                                <small><b>Password expires</b> :
                                    <span id="Span2">08-08-2021 01:17:15 PM</span></small><br />
                                <small><b>Account expires</b> :
                                    <span id="Span3">08-08-2021 01:17:15 PM</span></small>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="user-profile.html"><i class="fa fa-book"></i> User Manual</a><a class="dropdown-item" href="email-application.html"><i class="fa fa-lock"></i> Change Password</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" v-on:click="logoutUser"><span class="fas fa-power-off"></span> Logout</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand-lg" style="display: none" data-move-target="#navbarVerticalNav" data-navbar-top="combo">
            <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation">
                <span class="navbar-toggle-icon"><span class="toggle-line"></span></span>
            </button>
            <a class="navbar-brand me-1 me-sm-3" href="index.html">
                <div class="d-flex align-items-center">
                    <img class="me-2" src="../assets/img/landingpage-logo.png" alt="Bank Name" />
                </div>
            </a>
            <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
                <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Payments</a>
                        <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="dashboard">
                            <div class="bg-white dark__bg-1000 rounded-3 py-2">
                                <a class="dropdown-item link-600 fw-medium">Payment Initiation</a>
                                <a class="dropdown-item link-600 fw-medium" href="SingleTransaction.html">Single Transaction</a>
                                <a class="dropdown-item link-600 fw-medium">Bulk Upload</a>
                                <a class="dropdown-item link-600 fw-medium">Batch Initiation</a>
                                <a class="dropdown-item link-600 fw-medium">Authorize - Single</a>
                                <a class="dropdown-item link-600 fw-medium">Authorize - Bulk</a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="A3">Reports and Analytics</a>
                        <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="dashboard">
                            <div class="bg-white dark__bg-1000 rounded-3 py-2">
                                <a class="dropdown-item link-600 fw-medium" href="#">Sub Menu 1</a>
                                <a class="dropdown-item link-600 fw-medium" href="#">Sub Menu 2</a>
                                <a class="dropdown-item link-600 fw-medium" href="#">Sub Menu 3</a>
                                <a class="dropdown-item link-600 fw-medium" href="#">Sub Menu 4</a>
                                <a class="dropdown-item link-600 fw-medium" href="#">Sub Menu 5</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="
            navbar-nav navbar-nav-icons
            ms-auto
            flex-row
            align-items-center
          ">
                <li class="nav-item">
                    <a class="nav-link">You are logged in :
                        <span class="text-primary">Bank Name Here</span></a>
                </li>

                <li class="nav-item dropdown">
                    <a class="
                nav-link
                notification-indicator notification-indicator-primary
                px-0
                icon-indicator
              " id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px"></span></a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-card" aria-labelledby="navbarDropdownNotification">
                        <div class="card card-notification shadow-none" style="max-width: 5rem">
                            <div class="card-header">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-auto">
                                        <h6 class="card-header-title mb-0">Alerts</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="scrollbar-overlay" style="max-height: 19rem">
                                <div class="list-group list-group-flush fw-normal fs--1">
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title text-danger">No Alerts here...</strong>
                                                <p class="notification-item-text">
                                                    Check out what other makers are doing on Explore!...
                                                </p>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="
                nav-link
                notification-indicator notification-indicator-primary
                px-0
                icon-indicator
              " id="A6" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-envelope" data-fa-transform="shrink-6" style="font-size: 33px"></span><span class="notification-indicator-number">8</span></a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-card" aria-labelledby="navbarDropdownNotification">
                        <div class="card card-notification shadow-none" style="max-width: 5rem">
                            <div class="card-header">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-auto">
                                        <h6 class="card-header-title mb-0">Notifications</h6>
                                    </div>
                                    <div class="col-auto">
                                        <a class="card-link fw-normal" href="#">Mark all as read</a>
                                    </div>
                                </div>
                            </div>
                            <div class="scrollbar-overlay" style="max-height: 19rem">
                                <div class="list-group list-group-flush fw-normal fs--1">
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="list-group-item">
                                        <a href="#" class="notification notification-flush">
                                            <span class="notification-item-body">
                                                <strong class="notification-item-title">New Notifications</strong>
                                                <p class="notification-item-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit...
                                                </p>
                                                <span class="notification-item-time"><span class="far fa-clock"></span> 12 minutes
                                                    ago</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center border-top">
                                <a class="card-link d-block" href="app/social/notifications.html">View all</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link pe-0" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="avatar avatar-xl">
                            <img class="rounded-circle" src="../assets/img/user-blank.jpg" alt="" />
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                        <div class="bg-white dark__bg-1000 rounded-2 py-2">
                            <a class="dropdown-item fw-bold text-primary" href="#!"><span class="fas fa-user me-1"></span><span>Superuser</span></a>
                            <a class="dropdown-item" href="#">
                                <small><b>Last login date</b> :
                                    <span id="Span6">27-04-2021 10:17:52 AM</span></small><br />
                                <small><b>Password expires</b> :
                                    <span id="Span7">08-08-2021 01:17:15 PM</span></small><br />
                                <small><b>Account expires</b> :
                                    <span id="Span8">08-08-2021 01:17:15 PM</span></small>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="user-profile.html"><i class="fa fa-book"></i> User Manual</a><a class="dropdown-item" href="email-application.html"><i class="fa fa-lock"></i> Change Password</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="login.html"><span class="fas fa-power-off"></span> Logout</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>

        <div class="row g-3 mb-3">
            <div class="col-sm-6 col-md-4">
                <div class="card overflow-hidden" style="min-width: 12rem">
                    <div class="bg-holder bg-card" style="
                background-image: url(../assets/img/illustrations/corner-1.png);
              "></div>
                    <!--/.bg-holder-->
                    <div class="card-body position-relative">
                        <h4>
                            To Approve
                            <i class="far fa-check-circle card-icon text-warning opacity-25"></i>
                        </h4>
                        <div class="
                  display-4
                  fs-4
                  mb-2
                  fw-normal
                  font-sans-serif
                  text-warning
                " data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>
                            {{ pendingCount }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="card overflow-hidden" style="min-width: 12rem">
                    <div class="bg-holder bg-card" style="
                background-image: url(../assets/img/illustrations/corner-2.png);
              "></div>
                    <!--/.bg-holder-->
                    <div class="card-body position-relative">
                        <h4>
                            My Initiated
                            <i class="far fa-clipboard card-icon text-info opacity-25"></i>
                        </h4>
                        <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-info" data-countup='{"endValue":23.434,"decimalPlaces":2,"suffix":"k"}'>
                            {{ pendingCount }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card overflow-hidden" style="min-width: 12rem">
                    <div class="bg-holder bg-card" style="
                background-image: url(../assets/img/illustrations/corner-3.png);
              "></div>
                    <!--/.bg-holder-->
                    <div class="card-body position-relative">
                        <h4>
                            Rejected
                            <i class="far fa-times-circle card-icon text-danger opacity-25"></i>
                        </h4>
                        <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif" data-countup='{"endValue":43594,"prefix":"$"}'>
                            {{ rejectedCount }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-12 mb-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="accordion" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <table class="table mb-0 table-sm border-none">
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="50%" />
                                            </colgroup>
                                            <thead>
                                                <th>
                                                    Rejected
                                                    <span class="badge badge-soft-danger rounded-pill">{{ rejectedCount }}</span>
                                                </th>
                                                <th>{{ rejectedAmount }} USD</th>
                                            </thead>
                                        </table>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body p-0">
                                        <div class="table-responsive scrollbar">
                                            <table class="table table-sm fs--1 mb-0 overflow-hidden">
                                                <thead class="bg-200 text-900">
                                                    <tr>
                                                        <th>Payment To</th>
                                                        <th>From</th>
                                                        <th>Received on</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="list" id="table-purchase-body">
                                                    <tr v-for="item in rejectedList" :key="item.paymentTo" class="btn-reveal-trigger">
                                                        <th>
                                                            <span class="text-primary fw-bold">{{
                                  item.paymentToAccName
                                }}</span>
                                                            <br />{{ item.paymentTo }}
                                                        </th>
                                                        <td>
                                                            {{ item.paymentFromAccName }} {{ item.from }}
                                                            <br /><span class="badge badge-soft-secondary">USD</span>
                                                            <span class="badge badge-soft-secondary">US</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <b>{{ item.amount }}</b>
                                                        </td>
                                                        <td>
                                                            <span data-bs-toggle="modal" data-bs-target="#TransactionDetailsForRejected"><a v-on:click="getRejectedData(item)" class="btn btn-info btn-sm me-1 mb-1" data-bs-toggle="tooltip" data-bs-placement="left" title="Transaction Details">
                                                                    <span class="fas fa-chevron-right me-1"></span> </a></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <table class="table mb-0 table-sm border-none">
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="50%" />
                                            </colgroup>
                                            <thead>
                                                <th>
                                                    Pending Approval
                                                    <span class="badge badge-soft-info rounded-pill">{{
                              pendingCount
                            }}</span>
                                                </th>
                                                <th>{{ pendingAmount }} USD</th>
                                            </thead>
                                        </table>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body p-0">
                                        <div class="table-responsive scrollbar">
                                            <table class="table table-sm fs--1 mb-0 overflow-hidden">
                                                <thead class="bg-200 text-900">
                                                    <tr>
                                                        <th>Payment To</th>
                                                        <th>From</th>
                                                        <th>Received on</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="list" id="Tbody1">
                                                    <tr v-for="item in pendingList" :key="item.paymentTo" class="btn-reveal-trigger">
                                                        <th>
                                                            <span class="text-primary fw-bold">{{
                                  item.paymentToAccName
                                }}</span>
                                                            <br />{{ item.paymentTo }}
                                                        </th>
                                                        <td>
                                                            {{ item.paymentFromAccName }} {{ item.from }}
                                                            <br /><span class="badge badge-soft-secondary">USD</span>
                                                            <span class="badge badge-soft-secondary">US</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <b>{{ item.amount }}</b>
                                                        </td>
                                                        <td>
                                                            <span data-bs-toggle="modal" data-bs-target="#TransactionDetailsForPending"><a v-on:click="getPendingData(item)" class="btn btn-info btn-sm me-1 mb-1" data-bs-toggle="tooltip" data-bs-placement="left" title="Transaction Details">
                                                                    <span class="fas fa-chevron-right me-1"></span> </a></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <table class="table mb-0 table-sm border-none">
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="50%" />
                                            </colgroup>
                                            <thead>
                                                <th>
                                                    Approved
                                                    <span class="badge badge-soft-info rounded-pill">{{
                              approvedCount
                            }}</span>
                                                </th>
                                                <th>{{ approvedAmount }} USD</th>
                                            </thead>
                                        </table>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body p-0">
                                        <div class="table-responsive scrollbar">
                                            <table class="table table-sm fs--1 mb-0 overflow-hidden">
                                                <thead class="bg-200 text-900">
                                                    <tr>
                                                        <th>Payment To</th>
                                                        <th>From</th>
                                                        <th>Received on</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="list" id="Tbody1">
                                                    <tr v-for="item in approvedList" :key="item.paymentTo" class="btn-reveal-trigger">
                                                        <th>
                                                            <span class="text-primary fw-bold">{{
                                  item.paymentToAccName
                                }}</span>
                                                            <br />{{ item.paymentTo }}
                                                        </th>
                                                        <td>
                                                            {{ item.paymentFromAccName }} {{ item.from }}
                                                            <br /><span class="badge badge-soft-secondary">USD</span>
                                                            <span class="badge badge-soft-secondary">US</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <b>{{ item.amount }}</b>
                                                        </td>
                                                        <td>
                                                            <span data-bs-toggle="modal" data-bs-target="#TransactionDetailsForApproved"><a v-on:click="getApprovedData(item)" class="btn btn-info btn-sm me-1 mb-1" data-bs-toggle="tooltip" data-bs-placement="left" title="Transaction Details">
                                                                    <span class="fas fa-chevron-right me-1"></span> </a></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFour">
                                    <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <table class="table mb-0 table-sm border-none">
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="50%" />
                                            </colgroup>
                                            <thead>
                                                <th>
                                                    Saved Draft
                                                    <span class="badge badge-soft-info rounded-pill"></span>
                                                </th>
                                                <th>USD</th>
                                            </thead>
                                        </table>
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body p-0">
                                        <div class="table-responsive scrollbar">
                                            <table class="table table-sm fs--1 mb-0 overflow-hidden">
                                                <thead class="bg-200 text-900">
                                                    <tr>
                                                        <th>Payment To</th>
                                                        <th>From</th>
                                                        <th>Received on</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="list" id="Tbody1">
                                                    <tr v-for="item in savedDraftList" :key="item.paymentTo" class="btn-reveal-trigger">
                                                        <th>
                                                            <span class="text-primary fw-bold">{{
                                  item.paymentToAccName
                                }}</span>
                                                            <br />{{ item.paymentTo }}
                                                        </th>
                                                        <td>
                                                            {{ item.paymentFromAccName }} {{ item.from }}
                                                            <br /><span class="badge badge-soft-secondary">USD</span>
                                                            <span class="badge badge-soft-secondary">US</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <b>{{ item.amount }}</b>
                                                        </td>
                                                        <td>
                                                            <span data-bs-toggle="modal" data-bs-target="#TransactionDetailsForSavedDraft"><a v-on:click="getSavedDraftData(item)" class="btn btn-info btn-sm me-1 mb-1" data-bs-toggle="tooltip" data-bs-placement="left" title="Transaction Details">
                                                                    <span class="fas fa-chevron-right me-1"></span> </a></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div class="row g-0 justify-content-between fs--1 mt-4 mb-3">
                    <div class="col-12 col-sm-auto text-center">
                        <p class="mb-0 text-600">
                            2021 &copy; Copyright
                            <a class="text-bold-800 grey darken-2" href="http://www.concertosoft.com/" target="_blank">Concerto Software &amp; Systems Pvt. Ltd.</a>
                        </p>
                    </div>
                    <div class="col-12 col-sm-auto text-center">
                    </div>
                </div>
            </footer>
        </div>
    </div>
</div>

<!--Transaction Details Modal For Rejected start here-->
<div class="modal fade" id="TransactionDetailsForRejected" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="TransactionDetailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg mt-6" role="document">
        <div class="modal-content border-0">
            <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                <button class="
              btn-close btn btn-sm btn-circle
              d-flex
              flex-center
              transition-base
            " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <div class="bg-light rounded-top-lg py-3 ps-4 pe-6">
                    <h5 class="mb-1" id="TransactionDetailsLabel">
                        <i class="fas fa-credit-card me-2"></i>Transaction Details
                    </h5>
                </div>
                <div class="p-4 pt-2 pb-0">
                    <div class="row g-0">
                        <div class="col-lg-3 col-xl-12 ps-lg-2 ps-xl-0 mb-3">
                            <div class="">
                                <h5>Payment Reference: {{ rejected.reference }}</h5>
                                <p class="fs--1">
                                    Payment was initiated by
                                    <b><i class="far fa-user-circle mr-1 ml-1"></i>{{ rejected.paymentInitBy }}
                                    </b>
                                    <i class="far fa-clock mr-1 ml-1"></i>{{ rejected.paymentInitTime }}
                                </p>
                                <div class="mb-3">
                                    <strong class="me-2">Status: </strong>
                                    <span class="badge badge rounded-pill badge-soft-warning"><span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span>{{ rejected.status }}
                                    </span>
                                </div>

                                <div class="col-12">
                                    <div class="bg-light p-2">
                                        <p class="mb-0"><b>Payment Details</b></p>
                                    </div>
                                </div>

                                <hr class="mt-0 mb-0" />

                                <table class="table table-striped table-sm">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Pay To</th>
                                            <td>
                                                <span class="text-primary fw-bold">{{ rejected.paymentTo }} </span>{{ rejected.companyName }}
                                            </td>
                                            <td class="text-end fw-bold">{{ rejected.amount }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">From</th>
                                            <td>
                                                <span class="text-primary fw-bold">{{ rejected.from }}
                                                </span>
                                            </td>
                                            <td class="text-end">{{ rejected.amount }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Send on</th>
                                            <td>{{ rejected.sendOn }}</td>
                                            <td class="text-end">-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total Charges</th>
                                            <td>Paid by us</td>
                                            <td class="text-end">{{ rejected.chargesPaidByUs }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Message</th>
                                            <td>{{ rejected.message }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Reason</th>
                                            <td>{{ rejected.paymentReason }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Rejection Reason</th>
                                            <td>{{ rejected.rejectReason }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Type</th>
                                            <td>{{ rejected.paymentType }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="row">
                                                <h5 class=""><span>Total Debit</span></h5>
                                            </th>
                                            <td></td>
                                            <td class="text-end">
                                                <h5>
                                                    <span>{{ rejected.totaldebit }}</span>
                                                </h5>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div class="col-12">
                                    <div class="bg-light p-2 mb-2">
                                        <p class="mb-0"><b>Commercial invoice informtion</b></p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-sm datatable">
                                            <thead>
                                                <tr>
                                                    <th>Invoice Number</th>
                                                    <th>Invoice Amount</th>
                                                    <th>Currency</th>
                                                    <th>Invoice Date</th>
                                                    <th>Discount Rate</th>
                                                    <th>Discount Amount</th>
                                                    <th>Tax Amount</th>
                                                    <th>Net Payable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in rejected.invoice" :key="item.invoiceNumber">
                                                    <th>{{ item.invoiceNumber }}</th>
                                                    <td>{{ item.invoiceAmount }}</td>
                                                    <td>{{ item.currency }}</td>
                                                    <td>{{ item.invoiceDate }}</td>
                                                    <td>{{ item.discountRate }}</td>
                                                    <td>{{ item.discountAmount }}</td>
                                                    <td>{{ item.taxAmount }}</td>
                                                    <td>{{ item.netPayable }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>

<!--Transaction Details Modal For Pending start here-->
<div class="modal fade" id="TransactionDetailsForPending" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="TransactionDetailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg mt-6" role="document">
        <div class="modal-content border-0">
            <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                <button class="
              btn-close btn btn-sm btn-circle
              d-flex
              flex-center
              transition-base
            " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <div class="bg-light rounded-top-lg py-3 ps-4 pe-6">
                    <h5 class="mb-1" id="TransactionDetailsLabel">
                        <i class="fas fa-credit-card me-2"></i>Transaction Details
                    </h5>
                </div>
                <div class="p-4 pt-2 pb-0">
                    <div class="row g-0">
                        <div class="col-lg-3 col-xl-12 ps-lg-2 ps-xl-0 mb-3">
                            <div class="">
                                <h5>Payment Reference: {{ pending.reference }}</h5>
                                <p class="fs--1">
                                    Payment was initiated by
                                    <b><i class="far fa-user-circle mr-1 ml-1"></i>
                                        {{ pending.paymentInitBy }}</b>
                                    <i class="far fa-clock mr-1 ml-1"></i>{{ pending.paymentInitTime }}
                                </p>
                                <div class="mb-3">
                                    <strong class="me-2">Status: </strong>
                                    <span class="badge badge rounded-pill badge-soft-warning"><span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span>
                                        {{ pending.status }}</span>
                                </div>

                                <div class="col-12">
                                    <div class="bg-light p-2">
                                        <p class="mb-0"><b>Payment Details</b></p>
                                    </div>
                                </div>

                                <hr class="mt-0 mb-0" />

                                <table class="table table-striped table-sm">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Pay To</th>
                                            <td>
                                                <span class="text-primary fw-bold">
                                                    {{ pending.paymentTo }}
                                                </span>
                                                {{ pending.companyName }}
                                            </td>
                                            <td class="text-end fw-bold">{{ pending.amount }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">From</th>
                                            <td>
                                                <span class="text-primary fw-bold">
                                                    {{ pending.from }}</span>
                                            </td>
                                            <td class="text-end">{{ pending.amount }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Send on</th>
                                            <td>{{ pending.sendOn }}</td>
                                            <td class="text-end">-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total Charges</th>
                                            <td>Paid by us</td>
                                            <td class="text-end">{{ pending.chargesPaidByUs }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Message</th>
                                            <td>{{ pending.message }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Reason</th>
                                            <td>{{ pending.paymentReason }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Type</th>
                                            <td>{{ pending.paymentType }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="row">
                                                <h5 class=""><span>Total Debit</span></h5>
                                            </th>
                                            <td></td>
                                            <td class="text-end">
                                                <h5>
                                                    <span> {{ pending.totaldebit }}</span>
                                                </h5>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div class="col-12">
                                    <div class="bg-light p-2 mb-2">
                                        <p class="mb-0"><b>Commercial invoice informtion</b></p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-sm datatable">
                                            <thead>
                                                <tr>
                                                    <th>Invoice Number</th>
                                                    <th>Invoice Amount</th>
                                                    <th>Currency</th>
                                                    <th>Invoice Date</th>
                                                    <th>Discount Rate</th>
                                                    <th>Discount Amount</th>
                                                    <th>Tax Amount</th>
                                                    <th>Net Payable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in pending.invoice" :key="item.invoiceNumber">
                                                    <th>{{ item.invoiceNumber }}</th>
                                                    <td>{{ item.invoiceAmount }}</td>
                                                    <td>{{ item.currency }}</td>
                                                    <td>{{ item.invoiceDate }}</td>
                                                    <td>{{ item.discountRate }}</td>
                                                    <td>{{ item.discountAmount }}</td>
                                                    <td>{{ item.taxAmount }}</td>
                                                    <td>{{ item.netPayable }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>

<!--Transaction Details Modal For Approved start here-->
<div class="modal fade" id="TransactionDetailsForApproved" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="TransactionDetailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg mt-6" role="document">
        <div class="modal-content border-0">
            <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                <button class="
              btn-close btn btn-sm btn-circle
              d-flex
              flex-center
              transition-base
            " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <div class="bg-light rounded-top-lg py-3 ps-4 pe-6">
                    <h5 class="mb-1" id="TransactionDetailsLabel">
                        <i class="fas fa-credit-card me-2"></i>Transaction Details
                    </h5>
                </div>
                <div class="p-4 pt-2 pb-0">
                    <div class="row g-0">
                        <div class="col-lg-3 col-xl-12 ps-lg-2 ps-xl-0 mb-3">
                            <div class="">
                                <h5>Payment Reference: {{ approved.reference }}</h5>
                                <p class="fs--1">
                                    Payment was initiated by
                                    <b><i class="far fa-user-circle mr-1 ml-1"></i>
                                        {{ approved.paymentInitBy }}</b>
                                    <i class="far fa-clock mr-1 ml-1"></i>{{ approved.paymentInitTime }}
                                </p>
                                <div class="mb-3">
                                    <strong class="me-2">Status: </strong>
                                    <span class="badge badge rounded-pill badge-soft-warning"><span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span>
                                        {{ approved.status }}</span>
                                </div>

                                <div class="col-12">
                                    <div class="bg-light p-2">
                                        <p class="mb-0"><b>Payment Details</b></p>
                                    </div>
                                </div>

                                <hr class="mt-0 mb-0" />

                                <table class="table table-striped table-sm">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Pay To</th>
                                            <td>
                                                <span class="text-primary fw-bold">
                                                    {{ approved.paymentTo }}
                                                </span>
                                                {{ approved.companyName }}
                                            </td>
                                            <td class="text-end fw-bold">{{ approved.amount }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">From</th>
                                            <td>
                                                <span class="text-primary fw-bold">
                                                    {{ approved.from }}</span>
                                            </td>
                                            <td class="text-end">{{ approved.amount }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Send on</th>
                                            <td>{{ approved.sendOn }}</td>
                                            <td class="text-end">-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total Charges</th>
                                            <td>Paid by us</td>
                                            <td class="text-end">{{ approved.chargesPaidByUs }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Message</th>
                                            <td>{{ approved.message }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Reason</th>
                                            <td>{{ approved.paymentReason }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Type</th>
                                            <td>{{ approved.paymentType }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="row">
                                                <h5 class=""><span>Total Debit</span></h5>
                                            </th>
                                            <td></td>
                                            <td class="text-end">
                                                <h5>
                                                    <span> {{ approved.totaldebit }}</span>
                                                </h5>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div class="col-12">
                                    <div class="bg-light p-2 mb-2">
                                        <p class="mb-0"><b>Commercial invoice informtion</b></p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-sm datatable">
                                            <thead>
                                                <tr>
                                                    <th>Invoice Number</th>
                                                    <th>Invoice Amount</th>
                                                    <th>Currency</th>
                                                    <th>Invoice Date</th>
                                                    <th>Discount Rate</th>
                                                    <th>Discount Amount</th>
                                                    <th>Tax Amount</th>
                                                    <th>Net Payable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in approved.invoice" :key="item.invoiceNumber">
                                                    <th>{{ item.invoiceNumber }}</th>
                                                    <td>{{ item.invoiceAmount }}</td>
                                                    <td>{{ item.currency }}</td>
                                                    <td>{{ item.invoiceDate }}</td>
                                                    <td>{{ item.discountRate }}</td>
                                                    <td>{{ item.discountAmount }}</td>
                                                    <td>{{ item.taxAmount }}</td>
                                                    <td>{{ item.netPayable }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>

<!--Transaction Details Modal For Saved Draft start here-->
<div class="modal fade" id="TransactionDetailsForSavedDraft" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="TransactionDetailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg mt-6" role="document">
        <div class="modal-content border-0">
            <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                <button class="
              btn-close btn btn-sm btn-circle
              d-flex
              flex-center
              transition-base
            " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <div class="bg-light rounded-top-lg py-3 ps-4 pe-6">
                    <h5 class="mb-1" id="TransactionDetailsLabel">
                        <i class="fas fa-credit-card me-2"></i>Transaction Details
                    </h5>
                </div>
                <div class="p-4 pt-2 pb-0">
                    <div class="row g-0">
                        <div class="col-lg-3 col-xl-12 ps-lg-2 ps-xl-0 mb-3">
                            <div class="">
                                <h5>Payment Reference: {{ savedDraft.reference }}</h5>
                                <p class="fs--1">
                                    Payment was initiated by
                                    <b><i class="far fa-user-circle mr-1 ml-1"></i>
                                        {{ savedDraft.paymentInitBy }}</b>
                                    <i class="far fa-clock mr-1 ml-1"></i>{{ savedDraft.paymentInitTime }}
                                </p>
                                <div class="mb-3">
                                    <strong class="me-2">Status: </strong>
                                    <span class="badge badge rounded-pill badge-soft-warning"><span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span>
                                        {{ savedDraft.status }}</span>
                                </div>

                                <div class="col-12">
                                    <div class="bg-light p-2">
                                        <p class="mb-0"><b>Payment Details</b></p>
                                    </div>
                                </div>

                                <hr class="mt-0 mb-0" />

                                <table class="table table-striped table-sm">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Pay To</th>
                                            <td>
                                                <span class="text-primary fw-bold">
                                                    {{ savedDraft.paymentTo }}
                                                </span>
                                                {{ savedDraft.companyName }}
                                            </td>
                                            <td class="text-end fw-bold">
                                                {{ savedDraft.amount }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">From</th>
                                            <td>
                                                <span class="text-primary fw-bold">
                                                    {{ savedDraft.from }}</span>
                                            </td>
                                            <td class="text-end">{{ savedDraft.amount }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Send on</th>
                                            <td>{{ savedDraft.sendOn }}</td>
                                            <td class="text-end">-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total Charges</th>
                                            <td>Paid by us</td>
                                            <td class="text-end">
                                                {{ savedDraft.chargesPaidByUs }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Message</th>
                                            <td>{{ savedDraft.message }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Reason</th>
                                            <td>{{ savedDraft.paymentReason }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Type</th>
                                            <td>{{ savedDraft.paymentType }}</td>
                                            <td class="text-end"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="row">
                                                <h5 class=""><span>Total Debit</span></h5>
                                            </th>
                                            <td></td>
                                            <td class="text-end">
                                                <h5>
                                                    <span> {{ savedDraft.totaldebit }}</span>
                                                </h5>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div class="col-12">
                                    <div class="bg-light p-2 mb-2">
                                        <p class="mb-0"><b>Commercial invoice informtion</b></p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-sm datatable">
                                            <thead>
                                                <tr>
                                                    <th>Invoice Number</th>
                                                    <th>Invoice Amount</th>
                                                    <th>Currency</th>
                                                    <th>Invoice Date</th>
                                                    <th>Discount Rate</th>
                                                    <th>Discount Amount</th>
                                                    <th>Tax Amount</th>
                                                    <th>Net Payable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in savedDraft.invoice" :key="item.invoiceNumber">
                                                    <th>{{ item.invoiceNumber }}</th>
                                                    <td>{{ item.invoiceAmount }}</td>
                                                    <td>{{ item.currency }}</td>
                                                    <td>{{ item.invoiceDate }}</td>
                                                    <td>{{ item.discountRate }}</td>
                                                    <td>{{ item.discountAmount }}</td>
                                                    <td>{{ item.taxAmount }}</td>
                                                    <td>{{ item.netPayable }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "Index",
    data() {
        return {
            approvedCount: "0",
            pendingCount: "0",
            rejectedCount: "0",
            approvedAmount: "0",
            pendingAmount: "0",
            rejectedAmount: "0",
            rejectedList: [],
            approvedList: [],
            pendingList: [],
            savedDraftList: [],
            rejected: Object,
            approved: Object,
            pending: Object,
            savedDraft: Object,
        };
    },
    methods: {
        getRejectedData(item) {
            this.rejectedList.filter((value) => {
                if (
                    value.paymentTo == item.paymentTo &&
                    value.from == item.from &&
                    value.companyName == item.companyName &&
                    value.receivedOn == item.receivedOn &&
                    value.amount == item.amount
                ) {
                    this.rejected = value;
                }
            });
        },
        getPendingData(item) {
            this.pendingList.filter((value) => {
                if (
                    value.paymentTo == item.paymentTo &&
                    value.from == item.from &&
                    value.companyName == item.companyName &&
                    value.receivedOn == item.receivedOn &&
                    value.amount == item.amount
                ) {
                    this.pending = value;
                }
            });
        },

        getApprovedData(item) {
            this.approvedList.filter((value) => {
                if (
                    value.paymentTo == item.paymentTo &&
                    value.from == item.from &&
                    value.companyName == item.companyName &&
                    value.receivedOn == item.receivedOn &&
                    value.amount == item.amount
                ) {
                    this.approved = value;
                }
            });
        },

        getSavedDraftData(item) {
            this.savedDraftList.filter((value) => {
                if (
                    value.paymentTo == item.paymentTo &&
                    value.from == item.from &&
                    value.companyName == item.companyName &&
                    value.receivedOn == item.receivedOn &&
                    value.amount == item.amount
                ) {
                    this.savedDraft = value;
                }
            });
        },

        myFunction() {
            document.getElementById("loggedInUserID").innerHTML =
                sessionStorage.getItem("userIDInput");
        },

        logoutUser() {
            this.$router.push({
                name: "Login"
            });
            sessionStorage.clear();
        },
    },
    async mounted() {
        let apiUrl = "http://10.10.10.198:3000/transact/";
        await axios
            .get(apiUrl + "gettrxnCount")
            .then((response) => {
                console.log(response.data[0].approved.amount);
                console.log(response);
                this.approvedCount = response.data[0].approved.count;
                this.approvedAmount = response.data[0].approved.amount;
                this.pendingCount = response.data[0].pending.count;
                this.pendingAmount = response.data[0].pending.amount;
                this.rejectedCount = response.data[0].rejected.count;
                this.rejectedAmount = response.data[0].rejected.amount;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "gettrxnlist?status=Rejected&date=")
            .then((response) => {
                console.log(response);
                this.rejectedList = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "gettrxnlist?status=Pending&date=")
            .then((response) => {
                console.log(response);
                this.pendingList = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "gettrxnlist?status=Approved&date=")
            .then((response) => {
                this.approvedList = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getdrafttrxnlist?username=JohnDoe")
            .then((response) => {
                this.savedDraftList = response.data;
            })
            .catch((error) => console.log(error));

        if (localStorage.getItem("userIDInput")) {
            try {
                this.userIDInput = JSON.parse(localStorage.getItem("userIDInput"));
            } catch (e) {
                localStorage.removeItem("userIDInput");
            }
        }

        this.myFunction();
    },
};
</script>
