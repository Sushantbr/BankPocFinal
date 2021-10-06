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
                        <!-- parent pages-->
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
                                <span class="nav-link-icon"><span class="fas fa-layer-group"></span></span><span class="nav-link-text ps-1">Payments</span>
                            </div>
                        </a>
                        <!-- inner pages-->
                        <ul class="nav collapse false" id="Payments">
                            <li class="nav-item">
                                <a class="nav-link dropdown-indicator" href="#PaymentInitiation" data-bs-toggle="collapse" aria-expanded="false" aria-controls="Payments">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Payment Initiation</span>
                                    </div>
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
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">Bulk Upload</span>
                                            </div>
                                        </a><!-- more inner pages-->
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">Batch Initiation</span>
                                            </div>
                                        </a><!-- more inner pages-->
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="Authorize-Single.html">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">Authorize - Single</span>
                                            </div>
                                        </a><!-- more inner pages-->
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">Authorize - Bulk</span>
                                            </div>
                                        </a><!-- more inner pages-->
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <!-- parent pages-->
                        <a class="nav-link dropdown-indicator" href="#ReportsandAnalytics" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="Reports">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><span class="far fa-file-alt"></span></span><span class="nav-link-text ps-1">Reports and Analytics</span>
                            </div>
                        </a>
                        <!-- inner pages-->
                        <ul class="nav collapse false" id="ReportsandAnalytics">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Sub Menu 1</span>
                                    </div>
                                </a><!-- more inner pages-->
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Sub Menu 2</span>
                                    </div>
                                </a><!-- more inner pages-->
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Sub Menu 3</span>
                                    </div>
                                </a><!-- more inner pages-->
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Sub Menu 4</span>
                                    </div>
                                </a><!-- more inner pages-->
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">Sub Menu 5</span>
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
                    <a class="nav-link" href="#">You are logged in :
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
                            <div class="card-footer text-center border-top"></div>
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
        <div class="row pt-0">
            <nav class="mb-2" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Single Transaction</li>
                </ol>
            </nav>

            <div class="col-xl-8 pe-xl-2">
                <div class="card mb-3">
                    <div class="card-header bg-light">
                        <div class="row flex-between-center">
                            <div class="col-sm-auto">
                                <h5 class="mb-2 mb-sm-0">Single Transaction</h5>
                            </div>
                            <div class="col-sm-auto">
                                <button class="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i class="fas fa-plus me-2"></i>Add New Account
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 mx-0">
                                <form id="msform" class="needs-validation" novalidate="novalidate">
                                    <!-- progressbar -->
                                    <ul class="justify-content-between p-0" id="progressbar">
                                        <li class="active" id="PayWhat">
                                            <span class="fas fa-credit-card fa-2x"></span><span class="d-none d-md-block mt-1 fs--1">Pay What</span>
                                        </li>
                                        <li id="PayHow">
                                            <span class="fas fa-hand-holding-usd fa-2x"></span><span class="d-none d-md-block mt-1 fs--1">Pay How</span>
                                        </li>
                                        <li id="AdditionalDetails">
                                            <span class="fas fa-list-alt fa-2x"></span><span class="d-none d-md-block mt-1 fs--1">Additional Details</span>
                                        </li>
                                        <li id="Review">
                                            <span class="fas fa-thumbs-up fa-2x"></span><span class="d-none d-md-block mt-1 fs--1">Review</span>
                                        </li>
                                        <div class="clearfix"></div>
                                    </ul>
                                    <!-- fieldsets -->
                                    <fieldset>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="PayTo" id="PayTo">Pay To <span class="text-danger">*</span></label><select v-model="payToAcc" class="form-select" name="" id="PayToInput" required="required" v-on:change="hideLabel('lblPayTo', 'PayToInput')">
                                                        <option value="Select Account ..." selected>
                                                            Select Account ...
                                                        </option>
                                                        <option v-for="item in toAccount" :key="item">
                                                            {{ item }}
                                                        </option>
                                                    </select>
                                                    <label id="lblPayTo" class="text-danger" hidden>Please select Account</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="From" id="From">From <span class="text-danger">*</span></label><select v-model="payFromAccNumber" class="form-select" name="" id="FromInput" required="required" v-on:change="hideLabel('lblFrom', 'FromInput')">
                                                        <option selected disabled>
                                                            Select Your Account ...
                                                        </option>
                                                        <option v-for="item in fromAccount" :key="item">
                                                            {{ item }}
                                                        </option>
                                                    </select>
                                                    <label id="lblFrom" class="text-danger" hidden>Please select Account</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="bootstrap-wizard-wizard-email" id="Amount">Amount <span class="text-danger">*</span></label><input v-model="amountAcc" class="form-control" type="number" name="Amount" placeholder="Enter Amount" required="required" id="AmountInput" data-wizard-validate-email="true" max="17" v-on:change="
                                hideLabel('lblAmount', 'AmountInput')
                              " />
                                                    <label id="lblAmount" class="text-danger" hidden>Please Enter Amount</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="Currency" id="Currency">Currency
                                                        <span class="text-danger">*</span></label><select v-model="currencyAcc" class="form-select" name="customSelectCountry" id="CurrencyInput" required="required" v-on:change="
                                hideLabel('lblCurrency', 'CurrencyInput')
                              ">
                                                        <option value="" selected disabled>
                                                            Select Currency ...
                                                        </option>
                                                        <option v-for="item in currencies" :key="item">
                                                            {{ item }}
                                                        </option>
                                                    </select>
                                                    <label id="lblCurrency" class="text-danger" hidden>Please Select Currency</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="datepicker" id="Datepicker">Select Date
                                                        <span class="text-danger">*</span></label><input class="form-control datepicker" type="datepicker" name="password" placeholder="DD/MM/YYYY" required="required" id="DateInput" data-wizard-validate-password="true" data-options='{"disableMobile":true}' v-on:change="
                                hideLabel('lblDatepicker', 'DateInput')
                              " autocomplete="off" />
                                                    <label id="lblDatepicker" class="text-danger" hidden>Please select Date</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="bootstrap-wizard-wizard-confirm-password" id="PaymentPurpose">Payment Purpose</label>
                                                    <select v-model="payPurposeAcc" class="form-select" name="" id="bootstrap-wizard-wizard-confirm-password">
                                                        <option value="" selected disabled>
                                                            Select Payment Reason ...
                                                        </option>
                                                        <option v-for="item in paymentReason" :key="item">
                                                            {{ item }}
                                                        </option>
                                                    </select>
                                                    <label id="lblPaymentPurpose" class="text-danger" hidden>Please Select Payment Reason</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" name="next" class="
                          next
                          action-button
                          btn btn-primary
                          px-5 px-sm-6
                          float-end float-end
                          mt-2
                        " value="Next Step" v-on:click="getAccNames">
                                            Next
                                        </button>
                                    </fieldset>
                                    <fieldset>
                                        <div class="mb-2">
                                            <label class="form-label mb-0" for="bootstrap-wizard-gender">Select Payment Method from the below suggested
                                                options OR choose your preferred method </label><select v-on:change="payMethSelect" v-model="paymethodAcc" class="form-select" name="gender" id="PaymentMethodTypeInput">
                                                <option value="">Select Payment Method ...</option>
                                                <option v-for="item in paymentMethods" :key="item">
                                                    {{ item }}
                                                </option>
                                            </select>
                                        </div>
                                        <table class="
                          table table-striped table-sm
                          fs--1
                          mb-0
                          datatable
                        ">
                                            <thead class="bg-200 text-900">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Options</th>
                                                    <th>Credit By</th>
                                                    <th>Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr id="paymentMethodRadioInput">
                                                    <th>
                                                        <div class="
                                  form-check
                                  mb-0
                                  d-flex
                                  align-items-center
                                ">
                                                            <input class="form-check-input PromtPayContent" type="radio" id="paymentMethodInputRadio" name="paymentMethodType" data-bulk-select-row="data-bulk-select-row" required="required" />
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <span id="PaymentMethodName" class="text-secondary"></span>
                                                        <br /><a class="PromtPayContent" id="paymentmethodInfoLink" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"><span class="text-primary" id="paymentmethodLinkOption"></span></a>
                                                    </td>
                                                    <td>
                                                        <span id="paymentMethodCreditBy" class="text-secondary"></span>
                                                    </td>
                                                    <td>
                                                        <span id="paymentMethodCost" class="text-secondary"></span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button type="button" name="next" class="
                          next
                          action-button
                          btn btn-primary
                          px-5 px-sm-6
                          float-end
                          mt-2
                        " value="Next Step">
                                            Next
                                        </button>
                                    </fieldset>
                                    <fieldset>
                                        <div class="mb-2">
                                            <label class="form-label mb-0" for="">Additional Information Type </label><select class="form-select" name="customSelectCountry" id="">
                                                <option value="">Select ...</option>
                                                <option>Invoice</option>
                                                <option>Tax</option>
                                                <option>Payroll</option>
                                            </select>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="bg-white dark__bg-1000 rounded-2 py-2">
                                                    <a class="dropdown-item fw-bold text-black"><i class="fa fa-list-alt me-1" aria-hidden="true"></i>
                                                        Invoice Details</a>
                                                    <div class="dropdown-divider"></div>
                                                </div>
                                            </div>
                                            <label id="lblNetPayVerify" class="text-danger" hidden>Total Invoice amount does not match with the
                                                Transaction amount</label>
                                        </div>

                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="">Invoice Number
                                                        <span class="text-danger">*</span></label><input v-model="invoiceNumberAcc" class="form-control" placeholder="Enter Invoice Number" name="" type="text" id="invoiceNumberInput" maxlength="15" v-on:change="
                                hideLabel(
                                  'lblInvoiceNumber',
                                  'invoiceNumberInput'
                                )
                              " autocomplete="off" />

                                                    <label id="lblInvoiceNumber" class="text-danger" hidden>Please Enter Invoice Number</label>

                                                    <label id="lblDuplicateInvoiceNumber" class="text-danger" hidden>This Invoice Number has Taken Already</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="invoiceDateInput">Invoice Date
                                                        <span class="text-danger">*</span></label><input class="form-control" type="text" name="password" placeholder="DD/MM/YYYY" required="required" id="invoiceDateInput" data-wizard-validate-password="true" data-options='{"disableMobile":true}' v-on:change="
                                hideLabel('lblInvoiceDate', 'invoiceDateInput')
                              " autocomplete="off" />
                                                    <label id="lblInvoiceDate" class="text-danger" hidden>Please select date</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="">Invoice Amount
                                                        <span class="text-danger">*</span></label><input v-model="invoiceAmountAcc" class="form-control" placeholder="Enter Invoice Amount" name="" type="Number" id="invoiceAmountInput" max="17" v-on:change="
                                hideLabel(
                                  'lblInvoiceAmount',
                                  'invoiceAmountInput'
                                )
                              " />
                                                    <label id="lblInvoiceAmount" class="text-danger" hidden>Please Enter Invoice Amount</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="Currency">Currency
                                                        <span class="text-danger">*</span></label><select v-model="incurrrModel" class="form-select" name="customSelectCountry" id="currencyTypeInput" required="required" v-on:change="
                                hideLabel(
                                  'lblCurrencyType',
                                  'currencyTypeInput'
                                )
                              ">
                                                        <option value="" selected disabled>
                                                            Select Currency ...
                                                        </option>
                                                        <option v-for="item in currencies" :key="item">
                                                            {{ item }}
                                                        </option>
                                                    </select>
                                                    <label id="lblCurrencyType" class="text-danger" hidden>Please Select Currency</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="">Discount Percentage</label><input v-model="discountRateAcc" class="form-control" placeholder="Enter Discount Percentage" name="" type="Number" id="discountPercentageInput" maxlength="2" autocomplete="off" v-on:change="CalculateDiscountPercentage" />
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="">Discount Amount</label><input v-model="discountAmountAcc" class="form-control" placeholder="Enter Discount Amount" name="" type="Number" id="discountedAmountInput" maxlength="17" autocomplete="off" v-on:change="CalculateDiscountAmount" />
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="">Tax Amount</label><input v-model="taxAmountAcc" class="form-control" placeholder="Enter Tax Amount" name="" type="Number" id="taxAmountInput" maxlength="17" autocomplete="off" v-on:change="CalculateTaxAmount" />
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label class="form-label mb-0" for="">Net Payable</label><input v-model="netPayableAcc" class="form-control" placeholder="Net Payable" name="" type="Number" id="netPayableAmountInput" maxlength="17" autocomplete="off" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="mb-2">
                                                    <button v-on:click="saveInvoice" class="btn btn-sm btn-primary px-4 ms-2" type="button">
                                                        <span>Add Invoice</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="mb-3" id="recentPurchaseTable" data-list='{"valueNames":["name","email","product","payment","amount"],"page":8,"pagination":true}'>
                                                <div class="">
                                                    <div class="row flex-between-center"></div>
                                                </div>
                                                <div class="px-0 py-0">
                                                    <div class="table-responsive scrollbar">
                                                        <table class="
                                  table table-striped table-sm
                                  fs--1
                                  mb-0
                                  datatable
                                ">
                                                            <thead class="bg-200 text-900">
                                                                <tr>
                                                                    <th>Invoice Number</th>
                                                                    <th>Invoice Amount</th>
                                                                    <th>Currency</th>
                                                                    <th>Invoice Date</th>
                                                                    <th>Discount Rate</th>
                                                                    <th>Discount Amount</th>
                                                                    <th>Tax Amount</th>
                                                                    <th>Net Payable</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="list" id="">
                                                                <tr v-for="invoiceDetail in invoiceDet" :key="invoiceDetail.invoiceNum" class="btn-reveal-trigger">
                                                                    <th class="
                                        align-middle
                                        white-space-nowrap
                                        InvoiceNumber
                                      " id="invoiceNumberInput">
                                                                        {{ invoiceDetail.invoiceNumber }}
                                                                    </th>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        InvoiceAmount
                                      ">
                                                                        {{ invoiceDetail.invoiceAmount }}
                                                                    </td>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        Currency
                                      ">
                                                                        {{ invoiceDetail.currency }}
                                                                    </td>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        InvoiceDate
                                      ">
                                                                        {{ invoiceDetail.invoiceDate }}
                                                                    </td>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        DiscountRate
                                      ">
                                                                        {{ invoiceDetail.discountRate }}
                                                                    </td>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        DiscounAmount
                                      ">
                                                                        {{ invoiceDetail.discountAmount }}
                                                                    </td>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        prTaxAmountoduct
                                      ">
                                                                        {{ invoiceDetail.taxAmount }}
                                                                    </td>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        NetPayable
                                      ">
                                                                        {{ invoiceDetail.netPayable }}
                                                                    </td>
                                                                    <td class="
                                        align-middle
                                        white-space-nowrap
                                        action
                                      ">
                                                                        <span data-bs-toggle="modal" data-bs-target="#EditInvoiceDetails"><a class="
                                            btn btn-warning btn-sm
                                            me-1
                                            mb-1
                                          " v-on:click="
                                            editCurrentObject(invoiceDetail)
                                          " data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Edit Invoice Details"><i class="fa fa-edit"></i> </a></span>
                                                                        <a v-on:click="deleteFun(invoiceDetail)" class="btn btn-danger btn-sm me-1 mb-1">
                                                                            <i class="fa fa-trash"></i></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" name="next" class="
                          next
                          action-button
                          btn btn-primary
                          px-5 px-sm-6
                          float-end
                          mt-2
                        " value="Next Step" v-on:click="nextButtonValidateForAdditionalInfo">
                                            Next
                                        </button>
                                    </fieldset>
                                    <fieldset>
                                        <h4 class="mt-3 mb-3">Review your payment and submit</h4>
                                        <div class="col-12">
                                            <div class="bg-light p-2">
                                                <p class="mb-0">
                                                    {{ toAccNm }} {{ payToAcc }} will receive
                                                    <b>{{ parseFloat(amountAcc).toFixed(2) }} USD</b>
                                                </p>
                                            </div>
                                        </div>

                                        <hr class="mt-0" />
                                        <div class="d-flex justify-content-between fs--1 mb-1">
                                            <p class="mb-0">
                                                Pay From:
                                                <b>{{ fromAccNm }} {{ payFromAccNumber }}</b>
                                            </p>
                                            <span><b>{{ parseFloat(amountAcc).toFixed(2) }} USD</b></span>
                                        </div>
                                        <div class="d-flex justify-content-between fs--1 mb-1">
                                            <p class="mb-0">Total Charge Paid by us</p>
                                            <span>{{ parseFloat(paymthdAmt).toFixed(2) }} USD</span>
                                        </div>
                                        <div class="d-flex justify-content-between fs--1 mb-1">
                                            <p class="mb-0">
                                                Payment Method: <b>{{ paymethodAcc }}</b>
                                            </p>
                                            <span></span>
                                        </div>

                                        <hr />
                                        <h5 class="d-flex justify-content-between mb-4">
                                            <span>Total Debit</span><span>{{
                            parseFloat(Number(parseFloat(amountAcc).toFixed(2)) + Number(parseFloat(paymthdAmt).toFixed(2))).toFixed(2)
                          }}
                                                USD</span>
                                        </h5>

                                        <button v-on:click="submitMthd" class="
                          btn btn-primary
                          me-1
                          mb-1
                          review-submit
                          float-end
                          mt-2
                        " type="button" data-bs-target="#staticBackdropForSubmit">
                                            Submit
                                        </button>
                                        <button v-on:click="submitSavedDraftMthd" class="btn btn-info me-1 mb-1 float-end mt-2" type="button">
                                            Save Draft
                                        </button>
                                        <button class="
                          previous
                          btn btn-warning
                          me-1
                          mb-1
                          float-end
                          mt-2
                        " type="button">
                                            Edit Payment
                                        </button>
                                        <button class="btn btn-secondary me-1 mb-1 float-end mt-2" type="button" v-on:click="discardButton">
                                            Cancel
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 order-xl-1 ps-xl-2">
                <div class="card mb-3">
                    <div class="
                card-header
                bg-light
                btn-reveal-trigger
                d-flex
                flex-between-center
              ">
                        <h5 class="mb-0">Recent Payments</h5>
                    </div>
                    <div class="card-body pb-0">
                        <table class="table table-striped table-borderless fs--1 mb-0">
                            <colgroup>
                                <col width="70%" />
                                <col width="30%" />
                            </colgroup>
                            <tr v-for="item in recentTrans" :key="item.paymentTo" class="border-bottom">
                                <th class="ps-0 pt-0">
                                    {{ item.sendOn }}<br />From:
                                    <span class="text-primary">{{ item.paymentFromAccName }} {{ item.from }}</span>
                                    <br />To:
                                    <span class="text-primary">{{ item.paymentToAccName }} {{ item.paymentTo }}</span>

                                    <br />
                                    <span v-if="item.status  == 'Pending'" class="badge badge rounded-pill badge-soft-warning"><span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span>
                                        {{ item.status }} approval from<br> <b>JohnSmith</b>
                                    </span>

                                    <span v-if="item.status  == 'Rejected'" class="badge badge rounded-pill badge-soft-danger"><span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span>
                                        {{ item.status }} by <b>{{ item.userId }}</b>
                                    </span>
                                    <span v-if="item.status  == 'Approved'" class="badge badge rounded-pill badge-soft-success"><span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span>
                                        {{ item.status }} by <b>{{ item.userId }}</b>
                                    </span>
                                    <span v-if="item.status  == 'SaveDraft'" class="badge badge rounded-pill badge-soft-info"><span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span>
                                        Saved draft by <b>{{ item.userId }}</b>
                                    </span>
                                </th>
                                <th class="pe-0 text-end pt-3">
                                    <h5>{{ item.amount }}</h5>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <div class="col-12 text-center">
                            <a class="">Show All Payments</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 400px">
                    <div class="modal-content position-relative p-5">
                        <div class="d-flex align-items-center">
                            <div class="flex-1">
                                <button class="
                      btn btn-link
                      text-danger
                      position-absolute
                      top-0
                      end-0
                      mt-2
                      me-2
                    " data-bs-dismiss="modal">
                                    <span class="fas fa-times"></span>
                                </button>
                                <p class="mb-0">
                                    You don't have access to the link. Please try again.
                                </p>
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
                <div class="col-12 col-sm-auto text-center"></div>
            </div>
        </footer>
    </div>
</div>

<!--Add New Account Modal start here-->
<div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <h5 class="mb-1" id="staticBackdropLabel">
                        <i class="fas fa-plus me-2"></i>Add New Account
                    </h5>
                </div>
                <div class="p-4 pt-2">
                    <div class="row g-2">
                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="BeneficiaryCode">Beneficiary Code <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter Beneficiary Code" v-model="bencode" name="beneficiaryName" type="text" id="BeneficiaryCode" required="required" v-on:change="
                      hideLabel('lblBeneficiaryCode', 'BeneficiaryCode')
                    " autocomplete="off" />
                                <label id="lblBeneficiaryCode" class="text-danger" hidden>Please Enter Beneficiary Code</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="BeneficiaryName">Beneficiary Name <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter Beneficiary Name" v-model="benname" type="text" id="BeneficiaryName" required="required" v-on:change="
                      hideLabel('lblBeneficiaryName', 'BeneficiaryName')
                    " autocomplete="off" />
                                <label id="lblBeneficiaryName" class="text-danger" hidden>Please Enter Beneficiary Name</label>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="OwnBankAccount">Own Bank Account <span class="text-danger">*</span></label>
                                <div class="form-check form-switch mt-2">
                                    <input class="form-check-input" type="checkbox" id="OwnBankAccount" checked="" />
                                    <label class="form-check-label" for="OwnBankAccount">Yes</label>
                                </div>
                                <div class="invalid-feedback">Select Own Bank Account</div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="AccountType">Account Type <span class="text-danger">*</span></label><select class="form-select" name="customSelectCountry" id="AccountType" required="required" v-model="acctype" v-on:change="hideLabel('lblAccountType', 'AccountType')">
                                    <option value="" selected disabled>
                                        Select Account Type ...
                                    </option>
                                    <option v-for="item in accountType" :key="item">
                                        {{ item }}
                                    </option>
                                </select>
                                <label id="lblAccountType" class="text-danger" hidden>Please Select Account Type</label>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="AccountNumber">Account Number <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter Account Number" name="" type="text" id="AccountNumber" required="required" v-model="accnumber" v-on:change="hideLabel('lblAccountNumber', 'AccountNumber')" autocomplete="off" maxlength="35" />
                                <label id="lblAccountNumber" class="text-danger" hidden>Please Enter Account Number</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="IBAN">IBAN <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter IBAN" name="" type="text" id="IBAN" required="required" v-model="ibanmodel" v-on:change="hideLabel('lblIBAN', 'IBAN')" autocomplete="off" />
                                <label id="lblIBAN" class="text-danger" hidden>Please Enter IBAN</label>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="AccountCCY">Account CCY <span class="text-danger">*</span></label><select class="form-select" name="" id="AccountCCY" required="required" v-model="accccy" v-on:change="hideLabel('lblAccountCCY', 'AccountCCY')">
                                    <option value="" selected disabled>
                                        Select Account CCY ...
                                    </option>
                                    <option v-for="item in accountCcy" :key="item">
                                        {{ item }}
                                    </option>
                                </select>
                                <label id="lblAccountCCY" class="text-danger" hidden>Please Select Account CCY</label>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="DefaultAccount">Default Account <span class="text-danger">*</span></label>
                                <div class="form-check form-switch mt-2">
                                    <input class="form-check-input" type="checkbox" id="DefaultAccount" checked="" />
                                    <label class="form-check-label" for="DefaultAccount">Yes</label>
                                </div>
                                <div class="invalid-feedback">Select Default Account</div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="bg-light dark__bg-1000 rounded-2 py-2 pb-0">
                                <a class="dropdown-item fw-bold text-black"><i class="fa fa-university me-1" aria-hidden="true"></i>Bank Details</a>
                                <div class="dropdown-divider"></div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="Country">Country <span class="text-danger">*</span></label><select class="form-select" name="" id="Country" required="required" v-model="cntry" v-on:change="hideLabel('lblCountry', 'Country')">
                                    <option value="" selected disabled>
                                        Select Country ...
                                    </option>
                                    <option v-for="item in accCountry" :key="item">
                                        {{ item }}
                                    </option>
                                </select>
                                <label id="lblCountry" class="text-danger" hidden>Please Select Country</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="BankBranchSearchBy">Bank Branch Search By
                                    <span class="text-danger">*</span></label>
                                <div class="form-check form-check-inline mb-0">
                                    <input class="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" value="option1" checked="checked" /><label class="form-check-label mb-0" for="inlineRadio1">Bank Id</label>
                                </div>
                                <div class="form-check form-check-inline mb-0">
                                    <input class="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" value="option2" /><label class="form-check-label mb-0" for="inlineRadio2">Bank and Branch Name</label>
                                </div>
                                <div class="invalid-feedback">
                                    Select Bank Branch Search By
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="BankIDType">Bank ID Type <span class="text-danger">*</span></label><select class="form-select" name="" id="BankIDType" required="required" v-model="bankidmodel" v-on:change="hideLabel('lblBankIDType', 'BankIDType')">
                                    <option value="" selected disabled>
                                        Select Bank ID Type ...
                                    </option>
                                    <option v-for="item in bankId" :key="item">
                                        {{ item }}
                                    </option>
                                </select>
                                <label id="lblBankIDType" class="text-danger" hidden>PleaseSelect Bank ID Type</label>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="BankID">Bank ID <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter Bank ID" name="" type="text" id="BankID" required="required" v-model="bankidnamemodel" v-on:change="hideLabel('lblBankID', 'BankID')" autocomplete="off" />
                                <label id="lblBankID" class="text-danger" hidden>Please Enter Bank ID</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="BankName">Bank Name <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter Bank Name" name="" type="text" id="BankName" required="required" v-model="banknamemodel" v-on:change="hideLabel('lblBankName', 'BankName')" autocomplete="off" />
                                <label id="lblBankName" class="text-danger" hidden>Please Enter Bank Name</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="BranchName">Branch Name <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter Branch Name" name="" type="text" id="BranchName" required="required" v-model="branchmodel" v-on:change="hideLabel('lblBranchName', 'BranchName')" autocomplete="off" />
                                <label id="lblBranchName" class="text-danger" hidden>Please Enter Branch Name</label>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="bg-light dark__bg-1000 rounded-2 py-2 pb-0">
                                <a class="dropdown-item fw-bold text-black"><i class="fa fa-university me-1" aria-hidden="true"></i>Proxy Details</a>
                                <div class="dropdown-divider"></div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="ProxyID">Proxy Type <span class="text-danger">*</span></label><select class="form-select" name="" id="ProxyType" required="required" v-model="proxymodel" v-on:change="hideLabel('lblProxyType', 'ProxyType')">
                                    <option selected disabled>Select Proxy Type ...</option>
                                    <option v-for="item in proxyId" :key="item">
                                        {{ item }}
                                    </option>
                                </select>
                                <label id="lblProxyType" class="text-danger" hidden>Please Select Proxy Type</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="ProxyType">Proxy ID <span class="text-danger">*</span></label><input class="form-control" placeholder="Enter Proxy ID" name="" type="text" id="ProxyID" required="required" v-model="proxyTypemodel" v-on:change="hideLabel('lblProxyID', 'ProxyID')" autocomplete="off" />
                                <label id="lblProxyID" class="text-danger" hidden>Please Enter Proxy ID</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-bs-dismiss="modal" v-on:click="discardButton">
                    Discard
                </button>
                <button v-on:click="addBeneficiary" class="btn btn-primary" type="button">
                    Save
                </button>
            </div>
        </div>
    </div>
</div>
<!--Add New Account Modal End-->

<!--staticBackdropForSubmit -->
<!--Add New Account Modal start here-->
<div class="modal fade" id="staticBackdropForSubmit" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                <div class="p-4 pt-2">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-bs-dismiss="modal" v-on:click="discardButton">
                    Discard
                </button>
                <button v-on:click="addBeneficiary" class="btn btn-primary" type="button">
                    Save
                </button>
            </div>
        </div>
    </div>
</div>
<!--Add New Account Modal End-->

<!--Edit Invoice Details Modal start here-->
<div class="modal fade" id="EditInvoiceDetails" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <h5 class="mb-1" id="H1">
                        <i class="fas fa-edit me-2"></i>Edit Invoice Details
                    </h5>
                </div>
                <div class="p-4 pt-2">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="">Invoice Number <span class="text-danger">*</span></label>
                                <input class="form-control" v-on:change="
                      hideLabel('lblInvoiceNumber', 'editInvoiceNumber')
                    " placeholder="Enter Invoice Number" name="" type="text" id="editInvoiceNumber" disabled maxlength="15" />

                                <label class="text-danger" ID="lblInvoiceNumber" hidden>Please Enter Invoice Number</label>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="InvoiceDate">Invoice Date <span class="text-danger">*</span></label>
                                <input type="text" v-on:change="hideLabel('lblEditDate', 'editInvoiceDate')" class="form-control" id="editInvoiceDate" placeholder="DD/MM/YYYY" data-wizard-validate-password="true" required="required" />
                                <label class="text-danger" id="lblEditDate" hidden>Please select date</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="">Invoice Amount <span class="text-danger">*</span></label>
                                <input class="form-control" v-on:change="
                      hideLabel('lblEditInvoiceAmount', 'editInvoiceAmount')
                    " placeholder="Enter Invoice Amount" name="" type="text" id="editInvoiceAmount" />
                                <label class="text-danger" id="lblEditInvoiceAmount" hidden>Please Enter Invoice Amount</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="Currency">Currency <span class="text-danger">*</span></label>
                                <select class="form-select" v-on:change="hideLabel('lblEditCurrency', 'editCurrency')" name="customSelectCountry" id="editCurrency" required="required">
                                    <option value="" selected disabled>
                                        Select Currency ...
                                    </option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="DZD">INR</option>
                                    <option value="ARP">AUD</option>
                                    <option value="AUD">CAD</option>
                                    <option value="ATS">SGD</option>
                                    <option value="BSD">CHF</option>
                                    <option value="BBD">MYR</option>
                                    <option value="BEF">JPY</option>
                                    <option value="BMD">CNY</option>
                                    <option value="BRR">AED</option>
                                    <option value="BGL">THB</option>
                                </select>
                                <label class="text-danger" id="lblEditCurrency" hidden>Select Currency</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="">Discount Rate</label>
                                <input class="form-control" v-on:change="CalculateDiscountPercentageForEdit" placeholder="Enter Discount Rate" name="" type="text" id="editDiscountRate" maxlength="2" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="">Discount Amount</label>
                                <input class="form-control" v-on:change="CalculateDiscountAmountForEdit" placeholder="Enter Discount Amount" name="" type="text" id="editDiscountAmount" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="">Tax Amount</label>
                                <input class="form-control" v-on:change="CalculateTaxAmountForEdit" placeholder="Enter Tax Amount" name="" type="text" id="editTaxAmount" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-2">
                                <label class="form-label mb-0" for="">Net Payable</label><input class="form-control" placeholder="Net Payable" name="" type="text" id="editNetPayableAmount" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
                    Discard
                </button>
                <button class="btn btn-primary" type="button" v-on:click="validateAdditionalDetailsEdit" data-bs-dismiss="modal">
                    Save
                </button>
            </div>
        </div>
    </div>
</div>
<!--Edit Invoice Details Modal End-->

<!--Delete Invoice Details Modal start here-->
<div class="modal fade" id="DeleteInvoiceDetails" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xs mt-6" role="document">
        <div class="modal-content border-0">
            <div class="modal-body p-4 text-center">
                <div class="delete-ion">
                    <i class="fa fa-trash fa-3x text-danger"></i>
                </div>

                <h2>Are you sure?</h2>
                <p>You will not be able to recover this inovcie details.</p>

                <div>
                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
                        Discard
                    </button>
                    <button class="btn btn-danger" type="button" v-on:click="deleteFun(invoiceDetail)">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Delete Invoice Details Modal End-->

<!--Submit Modal start here-->
<div class="modal fade" id="SubmitDetails" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xs mt-6" role="document">
        <div class="modal-content border-0">
            <div class="modal-body p-4 text-center">
                <div class="delete-ion">
                    <i class="fa fa-check fa-3x success"></i>
                </div>

                <h2>Are you sure?</h2>
                <p>You will not be able to recover this inovcie details.</p>

                <div>
                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
                        Discard
                    </button>
                    <button class="btn btn-danger" type="button">Delete</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Submit Modal End here -->
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2/src/sweetalert2.js";

export default {
    name: "SingleTransaction",
    data() {
        return {
            recentTrans: [],
            toAccount: [],
            fromAccount: [],
            currencies: [],
            paymentReason: [],
            paymentMethods: [],
            accountType: [],
            accountCcy: [],
            accCountry: [],
            bankId: [],
            proxyId: [],
            invoiceDet: [],
            editedInvoiceData: [],
            payTo: "",
            payFrom: "",
            amount: "",
            txnAmount: "",
            currency: "",
            selectedDate: "",
            payPurpose: "",
            payMethod: "",
            invoiceNum: "",
            invoiceAmount: "",
            inCurr: "",
            inDate: "",
            discRate: "",
            discAmnt: "",
            taxAmnt: "",
            netPay: "",
            toAccNm: "",
            fromAccNm: "",
            promptPay: "",
            bathNet: "",
            smartPay: "",
            paymthdAmt: "",
            netPayableAcc: "0",
            paidByUserLogin: "",
            dialog: false,
            dropDownPaymethodMethod: false,
            radioPaymentMethod: false,
        };
    },

    methods: {
        editCurrentObject(invoiceDetail) {
            this.editedInvoiceData = invoiceDetail;

            document.getElementById("editInvoiceNumber").value =
                invoiceDetail.invoiceNumber;
            document.getElementById("editInvoiceDate").value =
                invoiceDetail.invoiceDate;
            document.getElementById("editInvoiceAmount").value =
                invoiceDetail.invoiceAmount;
            document.getElementById("editDiscountRate").value =
                invoiceDetail.discountRate;
            document.getElementById("editDiscountAmount").value =
                invoiceDetail.discountAmount;
            document.getElementById("editTaxAmount").value = invoiceDetail.taxAmount;
            document.getElementById("editNetPayableAmount").value =
                invoiceDetail.netPayable;

            for (var option of document.getElementById("editCurrency").options) {
                if (option.value === invoiceDetail.currency) {
                    option.selected = true;
                    return;
                }
            }
        },

        callSweetAlert() {
            Swal.fire({
                title: "Success!",
                icon: "info",
                type: "success",
                html: "eTransfer is sent for approval to Multiple People" +
                    '<p class="mt-2"><b>What do you want to do next?</b></p>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                allowOutsideClick: false,
                confirmButtonText: '<a class="text-white text-decoration-none" onclick="CallSingleTransaction">Create another Payment</a>',

                confirmButtonAriaLabel: "",
                cancelButtonText: '<button class="text-white text-decoration-none"    v-on:click="gobackToIndexComponent">Go back to Payments</button>',
                cancelButtonAriaLabel: "",
                reverseButtons: true,
            });
        },

        gobackToIndexComponent() {},

        disRateMeth() {
            let discountRate = parseInt(this.discountRateAcc);
            let invoiceAmnt = parseInt(this.invoiceAmountAcc);
            let taxAmnt = parseInt(this.taxAmountAcc);
            let discountAmnt = (invoiceAmnt * discountRate) / 100;
            let netPay = invoiceAmnt - discountAmnt + taxAmnt;
            this.discountAmountAcc = discountAmnt.toString();
            this.netPayableAcc = netPay.toString();
        },

        CalculateDiscountPercentage() {
            var invoiceAmount = document.getElementById("invoiceAmountInput").value;
            var percentageRate = document.getElementById(
                "discountPercentageInput"
            ).value;
            var taxAmount = document.getElementById("taxAmountInput").value;
            var discountAmount = (percentageRate / 100) * invoiceAmount;

            if (taxAmount == "") {
                taxAmount = 0;
            }

            document.getElementById("discountedAmountInput").value = parseFloat(discountAmount).toFixed(2);
            document.getElementById("netPayableAmountInput").value =
                parseFloat(invoiceAmount - discountAmount + parseFloat(taxAmount)).toFixed(2);
            this.discountAmountAcc = discountAmount;
            //document.getElementById("discountPercentageInput").value  =  (document.getElementById("discountPercentageInput").value).toFixed(2);
            var discountPercentageInputField = document.getElementById("discountPercentageInput").value;
            document.getElementById("discountPercentageInput").value = parseFloat(discountPercentageInputField).toFixed(2);
        },

        CalculateDiscountPercentageForEdit() {
            var invoiceAmount = document.getElementById("editInvoiceAmount").value;
            var percentageRate = document.getElementById("editDiscountRate").value;
            var taxAmount = document.getElementById("editTaxAmount").value;
            var discountAmount = (percentageRate / 100) * invoiceAmount;

            if (taxAmount == "") {
                taxAmount = 0;
            }

            document.getElementById("editDiscountAmount").value = parseFloat(discountAmount).toFixed(2);
            document.getElementById("editNetPayableAmount").value =
                parseFloat(invoiceAmount - discountAmount + parseFloat(taxAmount)).toFixed(2);
            // this.discountAmountAcc = discountAmount;
        },

        CalculateDiscountAmount() {
            var invoiceAmount = document.getElementById("invoiceAmountInput").value;
            var discountedAmount = document.getElementById(
                "discountedAmountInput"
            ).value;
            var taxAmount = document.getElementById("taxAmountInput").value;

            if (taxAmount == "") {
                taxAmount = 0;
            }

            document.getElementById("discountPercentageInput").value =
                parseFloat((discountedAmount * 100) / invoiceAmount).toFixed(2);
            document.getElementById("netPayableAmountInput").value =
                parseFloat(invoiceAmount - discountedAmount + parseFloat(taxAmount)).toFixed(2);
            this.discountAmountAcc = discountedAmount;
            document.getElementById("discountedAmountInput").value = parseFloat(discountedAmount).toFixed(2);
        },

        CalculateDiscountAmountForEdit() {
            var invoiceAmount = document.getElementById("editInvoiceAmount").value;
            var discountedAmount =
                document.getElementById("editDiscountAmount").value;
            var taxAmount = document.getElementById("editTaxAmount").value;

            if (taxAmount == "") {
                taxAmount = 0;
            }

            document.getElementById("editDiscountRate").value =
                parseFloat((discountedAmount * 100) / invoiceAmount).toFixed(2);
            document.getElementById("editNetPayableAmount").value =
                parseFloat(invoiceAmount - discountedAmount + parseFloat(taxAmount)).toFixed(2);
            //this.discountAmountAcc = discountedAmount;
            document.getElementById("editDiscountAmount").value = parseFloat(discountedAmount).toFixed(2);
        },

        CalculateTaxAmount() {
            var taxAmount = document.getElementById("taxAmountInput").value;
            var invoiceAmount = document.getElementById("invoiceAmountInput").value;
            var discountedAmount = document.getElementById(
                "discountedAmountInput"
            ).value;

            if (taxAmount == "") {
                taxAmount = 0;
            }

            document.getElementById("netPayableAmountInput").value =
                parseFloat(invoiceAmount - discountedAmount + parseFloat(taxAmount)).toFixed(2);
            document.getElementById("taxAmountInput").value = parseFloat(taxAmount).toFixed(2);
        },

        CalculateTaxAmountForEdit() {
            var taxAmount = document.getElementById("editTaxAmount").value;
            var invoiceAmount = document.getElementById("editInvoiceAmount").value;
            var discountedAmount =
                document.getElementById("editDiscountAmount").value;

            if (taxAmount == "") {
                taxAmount = 0;
            }

            document.getElementById("editNetPayableAmount").value =
                parseFloat(invoiceAmount - discountedAmount + parseFloat(taxAmount)).toFixed(2);
            document.getElementById("editTaxAmount").value = parseFloat(taxAmount).toFixed(2);
        },

        nextBtn() {
            this.setFieldValues();
            // let amnt = parseInt(this.amountAcc);
            let amnt = parseFloat(this.amountAcc).toFixed(2);
            this.smartPay = "100";
            this.promptPay = "100";
            this.bathNet = "250";
            var index;

            var paymentMethodInputs = document.getElementById(
                "PaymentMethodTypeInput"
            ).value;

            if (paymentMethodInputs != "") {
                if (this.dropDownPaymethodMethod) {
                    if (paymentMethodInputs == "BAHTNET") {
                        index = 1;
                    }
                    //SmartPay
                    else if (paymentMethodInputs == "SmartPay") {
                        index = 2;
                    } else if (paymentMethodInputs == "PromptPay") {
                        index = 3;
                    }
                    document.getElementById("PaymentMethodTypeInput").selectedIndex =
                        index;
                }
            } else {
                if (amnt > 1000000) {
                    document.getElementById("PaymentMethodName").innerHTML = "BahtNet";
                    document.getElementById("paymentMethodInputRadio").checked = true;
                    document.getElementById("paymentmethodInfoLink").innerHTML =
                        "What is BahtNet?";
                    document.getElementById("paymentmethodInfoLink").title =
                        "Promtpay is an all-in-one business solution that enables connectivity, digital payments and other financial services for small and individual merchants.";
                    document.getElementById("paymentMethodCreditBy").innerHTML =
                        "Same Day";
                    document.getElementById("paymentMethodCost").innerHTML = "250 USD";
                    this.paymthdAmt = "250";
                    this.paymethodAcc = "BahtNet";
                    this.radioPaymentMethod = true;
                } else if (amnt <= 1000000 && amnt > 25000) {
                    document.getElementById("PaymentMethodName").innerHTML = "SMARTPay";
                    document.getElementById("paymentMethodInputRadio").checked = true;
                    document.getElementById("paymentmethodInfoLink").innerHTML =
                        "What is SMARTPay ?";
                    document.getElementById("paymentmethodInfoLink").title =
                        "Select SmartPay as your payment method. The application process is quick and easy! Make one simple payment that includes everything — deducted directly from your debit account.";
                    document.getElementById("paymentMethodCreditBy").innerHTML =
                        "Next Business Day";
                    document.getElementById("paymentMethodCost").innerHTML = "100 USD";
                    this.paymthdAmt = "100";
                    this.paymethodAcc = "SMARTPay";
                    this.radioPaymentMethod = true;
                } else {
                    document.getElementById("PaymentMethodName").innerHTML = "PromtPay";
                    document.getElementById("paymentMethodInputRadio").checked = true;
                    document.getElementById("paymentmethodInfoLink").innerHTML =
                        "What is PromtPay ?";
                    document.getElementById("paymentmethodInfoLink").title =
                        "Promtpay is an all-in-one business solution that enables connectivity, digital payments and other financial services for small and individual merchants.";
                    document.getElementById("paymentMethodCreditBy").innerHTML =
                        "Same Day";
                    document.getElementById("paymentMethodCost").innerHTML = "50 USD";
                    this.paymthdAmt = "50";
                    this.paymethodAcc = "PromtPay";
                    this.radioPaymentMethod = true;
                }
            }
        },

        payMethSelect() {
            var paymentMethodInputs = document.getElementById(
                "PaymentMethodTypeInput"
            ).value;

            /*    if(!radioPaymentMethod )
     {

     }
else{*/
            if (paymentMethodInputs != "") {
                document.getElementById("paymentMethodInputRadio").checked = false;
                document.getElementById("paymentMethodInputRadio").disabled = true;
                if (paymentMethodInputs == "BAHTNET") {
                    this.dropDownPaymethodMethod = true;
                    this.paymthdAmt = 250;
                } else if (paymentMethodInputs == "SmartPay") {
                    this.dropDownPaymethodMethod = true;
                    this.paymthdAmt = 100;
                } else if (paymentMethodInputs == "PromptPay") {
                    this.dropDownPaymethodMethod = true;
                    this.paymthdAmt = 50;
                }
            } else {
                document.getElementById("paymentMethodInputRadio").checked = true;
                document.getElementById("paymentMethodInputRadio").disabled = false;

                if (
                    document.getElementById("PaymentMethodName").innerText == "BahtNet"
                ) {
                    this.paymethodAcc = "BahtNet";
                    this.paymthdAmt = 250;
                }

                if (
                    document.getElementById("PaymentMethodName").innerText == "PromtPay"
                ) {
                    this.paymethodAcc = "PromtPay";
                    this.paymthdAmt = 50;
                }

                if (
                    document.getElementById("PaymentMethodName").innerText == "SMARTPay"
                ) {
                    this.paymethodAcc = "SMARTPay";
                    this.paymthdAmt = 100;
                }
            }
            //}
        },

        getAccNames() {
            let apiUrl = "http://10.10.10.198:3000/transact/";
            axios
                .get(apiUrl + "getfromAccName?accNumber=" + this.payFromAccNumber)
                .then((response) => {
                    this.fromAccNm = response.data;
                })
                .catch((error) => console.log(error));

            axios
                .get(apiUrl + "gettoAccName?accNumber=" + this.payToAcc)
                .then((response) => {
                    this.toAccNm = response.data;
                })
                .catch((error) => console.log(error));

            var nextButtonFlag = this.validatePayWhat();

            if (!nextButtonFlag) {
                this.nextBtn();
            }
        },

        nextButtonValidateForAdditionalInfo: function () {
            var totalNewPayFlag = this.netPayValidate();

            if (!totalNewPayFlag) {
                document
                    .getElementsByTagName("Button")[7]
                    .setAttribute("value", "Next step");
            } else {
                document
                    .getElementsByTagName("Button")[7]
                    .setAttribute("value", "pending");
                var lblNetPayVerified = document.getElementById("lblNetPayVerify");
                lblNetPayVerified.removeAttribute("hidden");

                var lblduplicateInvoicenumber = document.getElementById("lblDuplicateInvoiceNumber");
                lblduplicateInvoicenumber.removeAttribute("hidden");
            }
            this.txnAmount = parseFloat(this.amountAcc).toFixed(2);
        },

        validateAdditionalDetails: function () {
            var additionalInfoFlag = false;
            var invoiceNumber = document.getElementById("invoiceNumberInput").value;
            var invoiceDatepicker = document.getElementById("invoiceDateInput").value;
            var invoiceAmount = document.getElementById("invoiceAmountInput").value;
            var currencyInfo = document.getElementById("currencyTypeInput").value;

            if (invoiceNumber == "") {
                var lblInvoiceNumber = document.getElementById("lblInvoiceNumber");
                lblInvoiceNumber.removeAttribute("hidden");
                additionalInfoFlag = true;
                console.log(lblInvoiceNumber);
            }

            if (invoiceDatepicker == "") {
                var lblDateInfo = document.getElementById("lblInvoiceDate");
                lblDateInfo.removeAttribute("hidden");
                additionalInfoFlag = true;
            }

            if (invoiceAmount == "") {
                var lblInvoiceAmount = document.getElementById("lblInvoiceAmount");
                lblInvoiceAmount.removeAttribute("hidden");
                additionalInfoFlag = true;
            }

            if (currencyInfo == "") {
                var lblCurrencyInfo = document.getElementById("lblCurrencyType");
                lblCurrencyInfo.removeAttribute("hidden");
                additionalInfoFlag = true;
            }

            return additionalInfoFlag;
        },

        validateAdditionalDetailsEdit: function () {
            var flag = false;
            var editInvoiceNumber =
                document.getElementById("editInvoiceNumber").value;
            var editInvoiceDate = document.getElementById("editInvoiceDate").value;
            var editInvoiceAmount =
                document.getElementById("editInvoiceAmount").value;
            var editCurrency = document.getElementById("editCurrency").value;

            if (editInvoiceNumber == "") {
                var lblInvoiceNumber = document.getElementById("lblInvoiceNumber");
                lblInvoiceNumber.removeAttribute("hidden");
                flag = true;
            }

            if (editInvoiceDate == "") {
                var lblEditDate = document.getElementById("lblEditDate");
                lblEditDate.removeAttribute("hidden");
                flag = true;
            }

            if (editInvoiceAmount == "") {
                var lblEditInvoiceAmount = document.getElementById(
                    "lblEditInvoiceAmount"
                );
                lblEditInvoiceAmount.removeAttribute("hidden");
                flag = true;
            }

            if (editCurrency == "") {
                var lblInvoiceAmount = document.getElementById("lblEditCurrency");
                lblInvoiceAmount.removeAttribute("hidden");
                flag = true;
            }

            if (!flag) {
                for (var i = 0; i < this.invoiceDet.length; i++) {
                    if (this.invoiceDet[i].invoiceNumber == editInvoiceNumber) {
                        this.invoiceDet[i].invoiceAmount = document.getElementById("editInvoiceAmount").value;
                        this.invoiceDet[i].currency = document.getElementById("editCurrency").value;
                        this.invoiceDet[i].invoiceDate = document.getElementById("editInvoiceDate").value;
                        this.invoiceDet[i].discountRate = document.getElementById("editDiscountRate").value;
                        this.invoiceDet[i].discountAmount = document.getElementById("editDiscountAmount").value;
                        this.invoiceDet[i].taxAmount = document.getElementById("editTaxAmount").value;
                        this.invoiceDet[i].netPayable = document.getElementById("editNetPayableAmount").value;
                    }
                }
            }
        },

        validatePayWhat: function () {
            var payWhatFlag = false;
            var payTo = document.getElementById("PayToInput").value;
            var from = document.getElementById("FromInput").value;
            var amt = document.getElementById("AmountInput").value;
            var currency = document.getElementById("CurrencyInput").value;
            var datepicker = document.getElementById("DateInput").value;

            if (payTo == "" || payTo == "Select Acount ...") {
                var lblPayTo = document.getElementById("lblPayTo");
                lblPayTo.removeAttribute("hidden");
                payWhatFlag = true;
            }

            if (from == "" || from == "Select Your Acount ...") {
                var lblFrom = document.getElementById("lblFrom");
                lblFrom.removeAttribute("hidden");
                payWhatFlag = true;
            }

            if (amt == "") {
                var lblAmount = document.getElementById("lblAmount");
                lblAmount.removeAttribute("hidden");
                payWhatFlag = true;
            }

            if (currency == "" || currency == "Select Currency ...") {
                var lblCurrency = document.getElementById("lblCurrency");
                lblCurrency.removeAttribute("hidden");
                payWhatFlag = true;
            }

            if (datepicker == "") {
                var lblDate = document.getElementById("lblDatepicker");
                lblDate.removeAttribute("hidden");
                payWhatFlag = true;
            }

            if (payWhatFlag) {
                document
                    .getElementsByTagName("Button")[4]
                    .setAttribute("value", "pending");
            } else {
                document
                    .getElementsByTagName("Button")[4]
                    .setAttribute("value", "done");
            }
            return payWhatFlag;
        },

        setFieldValues() {
            this.invoiceNumberAcc = "";
            this.discountRateAcc = "";
            this.discountAmountAcc = "";
            this.taxAmountAcc = "";
            this.netPayableAcc = "";
            this.invoiceAmountAcc = "";
            this.incurrrModel = "";
            document.getElementById("invoiceDateInput").value = "";
        },

        deleteFun(temp) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    for (let i = 0; i < this.invoiceDet.length; i++) {
                        if (this.invoiceDet[i].invoiceNumber == temp.invoiceNumber) {
                            this.invoiceDet.splice(i, 1);
                        }
                    }

                    Swal.fire("Deleted!", "Your invoice detail has been deleted.", "success");
                }
            });

        },

        netPayValidate() {
            let flag = false;
            let totalPay = 0;
            if (this.invoiceDet.length > 0) {
                for (let i = 0; i < this.invoiceDet.length; i++) {
                    let netpay = parseFloat(this.invoiceDet[i].netPayable);
                    totalPay += netpay;
                }
            }
            if (totalPay != parseFloat(this.amountAcc).toFixed(2)) {
                flag = true;
            }
            return flag;
        },

        saveInvoice() {
            var lblNetPayVerified = document.getElementById("lblNetPayVerify");
            lblNetPayVerified.setAttribute("hidden", "hidden");

            var netPayableAmountInput = document.getElementById(
                "netPayableAmountInput"
            ).value;
            var additionalinfoFlag = this.validateAdditionalDetails();

            if (!additionalinfoFlag) {
                this.invoiceDet.push({
                    invoiceNumber: this.invoiceNumberAcc,
                    invoiceAmount: this.invoiceAmountAcc,
                    currency: this.incurrrModel,
                    invoiceDate: document.getElementById("invoiceDateInput").value,
                    discountRate: document.getElementById("discountPercentageInput").value == "" ?
                        0 :
                        document.getElementById("discountPercentageInput").value,
                    discountAmount: parseFloat(this.discountAmountAcc).toFixed(2),
                    taxAmount: parseFloat(this.taxAmountAcc).toFixed(2),
                    netPayable: netPayableAmountInput,
                });
                this.setFieldValues();
            }
        },

        async submitMthd() {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + "/" + mm + "/" + yyyy;

            let date_ob = new Date();
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let hours = this.FormatNumberLength(date_ob.getHours(), 2);
            let minutes = this.FormatNumberLength(date_ob.getMinutes(), 2);
            let seconds = this.FormatNumberLength(date_ob.getSeconds(), 2);
            var reqAmt = parseFloat(this.amountAcc).toFixed(2);
            var reqchrgs = parseFloat(this.paymthdAmt).toFixed(2);
            var totaldebitamt = parseFloat(Number(reqAmt) + Number(reqchrgs)).toFixed(2);
            var totaldebitA = totaldebitamt + " USD";

            let result = await axios.post(
                "http://10.10.10.198:3000/transact/submitsingletrxn", {
                    paymentTo: this.payToAcc,
                    paymentToAccName: this.toAccNm,
                    from: this.payFromAccNumber,
                    paymentFromAccName: this.fromAccNm,
                    amount: parseFloat(this.amountAcc).toFixed(2) + " " + this.currencyAcc,
                    sendOn: date +
                        "/" +
                        month +
                        "/" +
                        year +
                        " " +
                        hours +
                        ":" +
                        minutes +
                        ":" +
                        seconds,
                    paymentInitBy: sessionStorage.getItem("userIDInput"),
                    paymentInitTime: today,
                    chargesPaidByUs: parseFloat(this.paymthdAmt).toFixed(2) + " USD",
                    paymentReason: this.payPurposeAcc,
                    paymentType: this.paymethodAcc,
                    totaldebit: totaldebitA,
                    userId: sessionStorage.getItem("userIDInput"),
                    invoice: this.invoiceDet,
                }
            );
            console.log(result);

            var currentTotalDebit = parseFloat(Number(parseFloat(this.amountAcc).toFixed(2)) + Number(parseFloat(this.paymthdAmt).toFixed(2))).toFixed(2);

            Swal.fire({
                title: "Success!",
                icon: "info",
                type: "success",
                html: this.paymethodAcc +
                    " of " +
                    currentTotalDebit +
                    " to " +
                    this.toAccNm +
                    " " +
                    this.payToAcc +
                    " is sent for approval to Multiple People" +
                    '<p class="mt-2"><b>What do you want to do next?</b></p>',

                showCancelButton: true,
                focusConfirm: false,
                allowOutsideClick: false,
                confirmButtonText: "Create another Payment",

                confirmButtonAriaLabel: "",
                cancelButtonText: "Go back to Payments",
                cancelButtonAriaLabel: "",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                } else {
                    this.$router.push({
                        name: "Index"
                    });
                }
            });
        },

        FormatNumberLength(num, length) {
            var r = "" + num;
            while (r.length < length) {
                r = "0" + r;
            }
            console.log(r);
            return r;
        },

        async submitSavedDraftMthd() {

            var savedDraftFlag = false;
            Swal.fire({
                icon: "info",
                type: "success",
                html: 'Payment will be saved as a draft',
                showCancelButton: true,
                focusConfirm: false,
                allowOutsideClick: false,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.savedDraftDataSuccessfully();
                    savedDraftFlag = true;

                }
            });

            if (savedDraftFlag) {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, "0");
                var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
                var yyyy = today.getFullYear();

                today = dd + "/" + mm + "/" + yyyy;

                var reqAmt = parseFloat(this.amountAcc).toFixed(2);

                var reqchrgs = parseFloat(this.paymthdAmt).toFixed(2);

                var totaldebitamt = parseFloat(Number(parseFloat(reqAmt).toFixed(2)) + Number(parseFloat(reqchrgs).toFixed(2))).toFixed(2);
                var totaldebitA = totaldebitamt + " USD";

                await axios.post(
                    "http://10.10.10.198:3000/transact/submitsingletrxn", {
                        paymentTo: this.payToAcc,
                        paymentToAccName: this.toAccNm,
                        from: this.payFromAccNumber,
                        paymentFromAccName: this.fromAccNm,
                        amount: parseFloat(this.amountAcc).toFixed(2) + " " + this.currencyAcc,
                        sendOn: today,
                        paymentInitBy: sessionStorage.getItem("userIDInput"),
                        paymentInitTime: today,
                        chargesPaidByUs: parseFloat(this.paymthdAmt).toFixed(2) + " USD",
                        paymentReason: this.payPurposeAcc,
                        paymentType: this.paymethodAcc,
                        totaldebit: totaldebitA,
                        invoice: this.invoiceDet,
                        status: "SaveDraft",
                    }
                );
                location.reload();
            }
        },

        async savedDraftDataSuccessfully() {

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + "/" + mm + "/" + yyyy;

            let date_ob = new Date();
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let hours = this.FormatNumberLength(date_ob.getHours(), 2);
            let minutes = this.FormatNumberLength(date_ob.getMinutes(), 2);
            let seconds = this.FormatNumberLength(date_ob.getSeconds(), 2);

            var reqAmt = parseFloat(this.amountAcc).toFixed(2);

            var reqchrgs = parseFloat(this.paymthdAmt).toFixed(2);

            var totaldebitamt = parseFloat(Number(parseFloat(reqAmt).toFixed(2)) + Number(parseFloat(reqchrgs).toFixed(2))).toFixed(2);
            var totaldebitA = totaldebitamt + " USD";

            await axios.post(
                "http://10.10.10.198:3000/transact/submitsingletrxn", {
                    paymentTo: this.payToAcc,
                    paymentToAccName: this.toAccNm,
                    from: this.payFromAccNumber,
                    paymentFromAccName: this.fromAccNm,
                    amount: parseFloat(this.amountAcc).toFixed(2) + " " + this.currencyAcc,
                    sendOn: date +
                        "/" +
                        month +
                        "/" +
                        year +
                        " " +
                        hours +
                        ":" +
                        minutes +
                        ":" +
                        seconds,
                    paymentInitBy: sessionStorage.getItem("userIDInput"),
                    paymentInitTime: today,
                    chargesPaidByUs: parseFloat(this.paymthdAmt).toFixed(2) + " USD",
                    paymentReason: this.payPurposeAcc,
                    paymentType: this.paymethodAcc,
                    totaldebit: totaldebitA,
                    invoice: this.invoiceDet,
                    status: "SaveDraft",
                    userId: sessionStorage.getItem("userIDInput")
                }
            );
            location.reload();
        },

        async addBeneficiary() {
            var flag = this.validateNewAccountFields();
            if (!flag) {
                let apiUrl = "http://10.10.10.198:3000/transact/";
                let result = await axios.post(apiUrl + "addaccount", {
                    beneficiarycode: this.bencode,
                    beneficiaryname: this.benname,
                    accountname: this.acctype,
                    accountnumber: this.accnumber,
                    accountccy: this.accccy,
                    iban: this.ibanmodel,
                    bankcountry: this.cntry,
                    bankid: this.bankidnamemodel,
                    bankidtype: this.bankidmodel,
                    bankname: this.banknamemodel,
                    branchname: this.branchmodel,
                    proxytype: this.proxyTypemodel,
                    proxyid: this.proxymodel,
                });
                console.log(result.response);
                await axios
                    .get(apiUrl + "gettoaccount")
                    .then((response) => {
                        this.toAccount = response.data;
                        console.log("To account data : " + response.data);
                    })
                    .catch((error) => console.log(error));

                //to redirect the SingleTransaction Page
                location.reload();
            }
        },

        discardButton() {
            location.reload();
        },

        myFunction() {
            this.paidByUserLogin = " , " + sessionStorage.getItem("userIDInput");
            document.getElementById("loggedInUserID").innerHTML =
                sessionStorage.getItem("userIDInput");
        },

        logoutUser() {
            this.$router.push({
                name: "Login"
            });
            sessionStorage.clear();
        },

        validateNewAccountFields() {
            var flag = false;
            var BeneficiaryCode = document.getElementById("BeneficiaryCode").value;
            var BeneficiaryName = document.getElementById("BeneficiaryName").value;
            var AccountType = document.getElementById("AccountType").value;
            var AccountNumber = document.getElementById("AccountNumber").value;
            var IBAN = document.getElementById("IBAN").value;

            var AccountCCY = document.getElementById("AccountCCY").value;
            var DefaultAccount = document.getElementById("DefaultAccount").value;
            var Country = document.getElementById("Country").value;
            var BankIDType = document.getElementById("BankIDType").value;
            var BankID = document.getElementById("BankID").value;

            var BankName = document.getElementById("BankName").value;
            var BranchName = document.getElementById("BranchName").value;
            var ProxyID = document.getElementById("ProxyID").value;
            var ProxyType = document.getElementById("ProxyType").value;

            if (BeneficiaryCode == "") {
                flag = true;
                var lblBeneficiaryCode = document.getElementById("lblBeneficiaryCode");
                lblBeneficiaryCode.removeAttribute("hidden");
            }

            if (BeneficiaryName == "") {
                flag = true;
                var lblBeneficiaryName = document.getElementById("lblBeneficiaryName");
                lblBeneficiaryName.removeAttribute("hidden");
            }

            if (AccountType == "") {
                flag = true;
                var lblAccountType = document.getElementById("lblAccountType");
                lblAccountType.removeAttribute("hidden");
            }

            if (AccountNumber == "") {
                flag = true;
                var lblAccountNumber = document.getElementById("lblAccountNumber");
                lblAccountNumber.removeAttribute("hidden");
            }

            if (IBAN == "") {
                flag = true;
                var lblIBAN = document.getElementById("lblIBAN");
                lblIBAN.removeAttribute("hidden");
            }

            if (AccountCCY == "") {
                flag = true;
                var lblAccountCCY = document.getElementById("lblAccountCCY");
                lblAccountCCY.removeAttribute("hidden");
            }

            if (DefaultAccount == "") {
                flag = true;
                var lblDefaultAccount = document.getElementById("lblDefaultAccount");
                lblDefaultAccount.removeAttribute("hidden");
            }

            if (Country == "") {
                flag = true;
                var lblCountry = document.getElementById("lblCountry");
                lblCountry.removeAttribute("hidden");
            }

            if (BankIDType == "") {
                flag = true;
                var lblBankIDType = document.getElementById("lblBankIDType");
                lblBankIDType.removeAttribute("hidden");
            }

            if (BankID == "") {
                flag = true;
                var lblBankID = document.getElementById("lblBankID");
                lblBankID.removeAttribute("hidden");
            }

            if (BankName == "") {
                flag = true;
                var lblBankName = document.getElementById("lblBankName");
                lblBankName.removeAttribute("hidden");
            }

            if (BranchName == "") {
                flag = true;
                var lblBranchName = document.getElementById("lblBranchName");
                lblBranchName.removeAttribute("hidden");
            }

            if (ProxyID == "") {
                flag = true;
                var lblProxyID = document.getElementById("lblProxyID");
                lblProxyID.removeAttribute("hidden");
            }

            if (ProxyType == "") {
                flag = true;
                var lblProxyType = document.getElementById("lblProxyType");
                lblProxyType.removeAttribute("hidden");
            }
            return flag;
        },

        hideLabel: function (lebelId, inputID) {
            var inputId = document.getElementById(inputID).value;
            var lblId;
            if (!inputId.includes("Select")) {
                lblId = document.getElementById(lebelId);
                lblId.setAttribute("hidden", "hidden");
            } else {
                lblId = document.getElementById(lebelId);
                lblId.removeAttribute("hidden");
            }

            if (inputID == "invoiceNumberInput") {
                var lblDuplicateInvoiceNumberCheckFlag = false;
                var lblDuplicateInvoiceNumberCheck = document.getElementById(
                    "lblDuplicateInvoiceNumber"
                );
                if (this.invoiceDet.length > 0) {
                    for (var i = 0; i < this.invoiceDet.length; i++) {
                        if (inputId == this.invoiceDet[i].invoiceNumber) {
                            lblDuplicateInvoiceNumberCheckFlag = true;

                            lblDuplicateInvoiceNumberCheck.removeAttribute("hidden");
                        }
                    }
                }
                if (!lblDuplicateInvoiceNumberCheckFlag) {
                    lblDuplicateInvoiceNumberCheck.setAttribute("hidden", "hidden");
                }
            }

            if (inputID == "invoiceAmountInput") {
                var taxAmountInput = document.getElementById("taxAmountInput").value;
                var discountedAmountInput = document.getElementById("discountedAmountInput").value;
                var discountPercentageInput = document.getElementById("discountPercentageInput").value;

                this.invoiceAmountAcc = parseFloat(inputId).toFixed(2);
                this.discountRateAcc = parseFloat(discountPercentageInput == '' ? 0 : discountPercentageInput).toFixed(2);
                this.discountAmountAcc = parseFloat(discountedAmountInput == '' ? 0 : discountedAmountInput).toFixed(2);
                this.taxAmountAcc = parseFloat(taxAmountInput == '' ? 0 : taxAmountInput).toFixed(2);
                this.netPayableAcc = parseFloat(Number(inputId) - Number(this.discountAmountAcc) + Number(this.taxAmountAcc)).toFixed(2);
            }
            if (inputID == "editInvoiceAmount") {

                var editTaxAmountInput = document.getElementById("editTaxAmount").value;
                var editDiscountedAmountInput = document.getElementById("editDiscountAmount").value;
                document.getElementById("editNetPayableAmount").value = parseFloat(inputId - editDiscountedAmountInput +
                    parseFloat(editTaxAmountInput)).toFixed(2);
                document.getElementById("editInvoiceAmount").value = parseFloat(inputId).toFixed(2);
            }

            if (inputID == "AmountInput") {
                if (parseInt(inputId) != this.txnAmount) {
                    if (inputId > 1000000) {
                        document.getElementById("PaymentMethodName").innerHTML = "BahtNet";
                        document.getElementById("paymentMethodInputRadio").checked = false;
                        document.getElementById("paymentmethodInfoLink").innerHTML =
                            "What is BahtNet?";
                        document.getElementById("paymentmethodInfoLink").title =
                            "Promtpay is an all-in-one business solution that enables connectivity, digital payments and other financial services for small and individual merchants.";
                        document.getElementById("paymentMethodCreditBy").innerHTML =
                            "Same Day";
                        document.getElementById("paymentMethodCost").innerHTML = "250 USD";
                    } else if (inputId <= 1000000 && inputId > 25000) {
                        document.getElementById("PaymentMethodName").innerHTML = "SMARTPay";
                        document.getElementById("paymentMethodInputRadio").checked = false;
                        document.getElementById("paymentmethodInfoLink").innerHTML =
                            "What is SMARTPay ?";
                        document.getElementById("paymentmethodInfoLink").title =
                            "Select SmartPay as your payment method. The application process is quick and easy! Make one simple payment that includes everything — deducted directly from your debit account.";
                        document.getElementById("paymentMethodCreditBy").innerHTML =
                            "Next Business Day";
                        document.getElementById("paymentMethodCost").innerHTML = "100 USD";
                        this.radioPaymentMethod = true;
                    } else {
                        document.getElementById("PaymentMethodName").innerHTML = "PromtPay";
                        document.getElementById("paymentMethodInputRadio").checked = false;
                        document.getElementById("paymentmethodInfoLink").innerHTML =
                            "What is PromtPay ?";
                        document.getElementById("paymentmethodInfoLink").title =
                            "Promtpay is an all-in-one business solution that enables connectivity, digital payments and other financial services for small and individual merchants.";
                        document.getElementById("paymentMethodCreditBy").innerHTML =
                            "Same Day";
                        document.getElementById("paymentMethodCost").innerHTML = "50 USD";
                    }
                }
            }

            if (
                inputID == "AmountInput" ||
                inputID == "invoiceAmountInput" ||
                inputID == "discountedAmountInput" ||
                inputID == "taxAmountInput"
            ) {
                document.getElementById(inputID).value = parseFloat(inputId).toFixed(2);
            }
        },

        deleteInvoiceSavedDetails() {
            for (let i = this.invoiceDet.length - 1; i >= 0; i--) {
                this.invoiceDet.splice(i, 1);
            }
        },
    },

    async mounted() {
        let apiUrl = "http://10.10.10.198:3000/transact/";

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + "_" + mm + "_" + yyyy;
        console.log(today);
        await axios
            //.get(apiUrl + "gettrxnlist?status=Pending&date=")
            .get(apiUrl + "gettrxnlist?status=&date=" + today)
            .then((response) => {
                console.log(response);
                this.recentTrans = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getfromaccount")
            .then((response) => {
                this.fromAccount = response.data;
                console.log("From account data : " + response.data);
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "gettoaccount")
            .then((response) => {
                this.toAccount = response.data;
                console.log("To account data : " + response.data);
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getcurrency")
            .then((response) => {
                this.currencies = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getpaymentreason")
            .then((response) => {
                this.paymentReason = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getpaymentmethod")
            .then((response) => {
                this.paymentMethods = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getaccounttype")
            .then((response) => {
                this.accountType = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getccy")
            .then((response) => {
                this.accountCcy = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getcountry")
            .then((response) => {
                this.accCountry = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getbankid")
            .then((response) => {
                this.bankId = response.data;
            })
            .catch((error) => console.log(error));

        await axios
            .get(apiUrl + "getproxytype")
            .then((response) => {
                this.proxyId = response.data;
            })
            .catch((error) => console.log(error));

        if (localStorage.getItem("userIDInput")) {
            try {
                this.userIDInput = JSON.parse(localStorage.getItem("userIDInput"));
            } catch (e) {
                localStorage.removeItem("userIDInput");
            }
        }
        //paidByUserLogin
        this.myFunction();
    },
};
</script>
