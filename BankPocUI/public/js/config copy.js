//Created By Vaijanath Pawale - Analyst

"use strict";

/* -------------------------------------------------------------------------- */

/*                           Navbar vertical config                           */

/* -------------------------------------------------------------------------- */
import $ from "jquery";
var urlParams = new URLSearchParams(window.location.search);
var CONFIG = {
  isNavbarVerticalCollapsed: urlParams.get('isNavbarVerticalCollapsed') || false,
  theme: urlParams.get('theme') || 'light',
  // window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  isRTL: urlParams.get('isRTL') || false,
  isFluid: urlParams.get('isFluid') || false,
  navbarStyle: urlParams.get('navbarStyle') || 'transparent',
  navbarPosition: urlParams.get('navbarPosition') || 'vertical'
};
Object.keys(CONFIG).forEach(function (key) {
  if (urlParams.get(key) || localStorage.getItem(key) === null) {
    localStorage.setItem(key, CONFIG[key]);
  }
});

if (JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed'))) {//
  document.documentElement.classList.add('navbar-vertical-collapsed');
}

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
//# sourceMappingURL=config.js.map


//Right Click is not allowed
$(function () {
    $(document).bind('contextmenu', function (e) {
        e.preventDefault();
        alert('Due to security reason, Right Click is not allowed.');
    });
});

//block F12 keyboard key
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

//Disable f5 refresh button
$(function () {
    $(document).keydown(function (e) {
        return (e.which || e.keyCode) != 116;
    });
});

// DataTable
$(document).ready(function () {
    $('.datatable').DataTable({
        //"scrollX": true,
        "bPaginate": true,
        "bLengthChange": true,
        "bFilter": true,
        "bInfo": true,
        "bAutoWidth": true,
        "pageLength": 5,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
    });
});

