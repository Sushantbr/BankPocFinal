// JavaScript source code
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
//single Transaction page tab jquery start
$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active").addClass("done");
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {
        return false;
    })

});
//single Transaction page tab jquery end

//Bootstrap Datepicker
$(".datepicker").datepicker({
    autoclose: true,
    todayHighlight: true,
    orientation: "auto",
    format: 'dd/mm/yyyy',
    startDate: new Date()
}).on("change", function () {

});

//Bootstrap Datepicker for Invoice Date
$(function () {
    var date = new Date();
    date.setDate(date.getDate());

    $('#InvoiceDate').datepicker({
        endDate: date,
    });
    $('#InvoiceDate').datepicker("setDate", new Date());
});

// Window load event used just in case window height is dependant upon images
$(window).bind("load", function () {

    var footerHeight = 0,
        footerTop = 0,
        $footer = $("footer");

    positionFooter();

    function positionFooter() {

        footerHeight = $footer.height();
        footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";

        if (($(document.body).height() + footerHeight) < $(window).height()) {
            $footer.css({
                position: "absolute"
            }).animate({
                top: footerTop
            })
        } else {
            $footer.css({
                position: "static"
            })
        }

    }

    $(window)
            .scroll(positionFooter)
            .resize(positionFooter)

});


//Single Transaction SweetAlert
document.querySelector(".review-submit").addEventListener('click', function () {

    Swal.fire({
        title: 'Success!',
        icon: 'info',
        type: "success",
        html:
          'eTransfer TH386334 of <b>30025 THB</b> to <b>ABC@email.com</b> is sent for approval to Multiple People' +
          '<p class="mt-2"><b>What do you want to do next?</b></p>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        allowOutsideClick: false,
        confirmButtonText: '<a class="text-white text-decoration-none" href="SingleTransaction.html">Create another Payment</a>',
        confirmButtonAriaLabel: '',
        cancelButtonText: '<a class="text-white text-decoration-none" href="#">Go back to Payments</a>',
        cancelButtonAriaLabel: '',
        reverseButtons: true,
    })
});


//Approve Transaction SweetAlert
document.querySelector(".approve-alert").addEventListener('click', function () {

    Swal.fire({
        title: 'Success',
        icon: 'info',
        type: "success",
        html:
          'Transaction Approved',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        allowOutsideClick: false,
        confirmButtonText: '<a class="text-white text-decoration-none" href="Authorize-Single.html">Submit</a>',
        confirmButtonAriaLabel: '',
        cancelButtonText: '<a class="text-white text-decoration-none" href="#">Cancel</a>',
        cancelButtonAriaLabel: '',
        reverseButtons: true,
    })
});
//Rejected Transaction SweetAlert
document.querySelector(".rejected-alert").addEventListener('click', function () {

    Swal.fire({
        title: 'Reject!',
        icon: 'error',
        type: "error",
        html:
          '<div class="mb-2 text-start"><label class="form-label mb-0" for="From">From <span class="text-danger">*</span></label><select class="form-select" name="" id="From" required="required">' +
          '<option value="">Select Reason ...</option>' +
          '<option value="">Salary</option>' +
          '<option value="">Vendor Payment</option>' +
          '<option value="">Bonus Payment</option>' +
          '<option value="">Commission Payment</option>' +
          '<option value="">Tax Payment</option>' +
          '<option value="">Pension Payment</option>' +
          '<option value="">Government Payment</option>' +
          '<option value="">Others</option>' +
          '</select>' +
          '<div class="invalid-feedback">Please select Reason</div>' +
          '</div>' +

          '<div class="mb-2 text-start"><label class="form-label mb-0" for="bootstrap-wizard-wizard-email">Add Notes <span class="text-danger">*</span></label>' +
          '<input class="form-control" type="number" name="Amount" placeholder="Add Notes" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />' +
          '<div class="invalid-feedback">Please Enter Notes</div>' +
          '</div>',
        //'<a href="#" class="btn btn-default btn-sm me-1 mb-1 text-uppercase">Cancel</a>' +
        //'<a href="#" class="btn btn-danger btn-sm me-1 mb-1 text-uppercase">Reject</a>',
        showCloseButton: true,
        showConfirmButton: true,
        showCancelButton: true,
        focusConfirm: false,
        allowOutsideClick: true,
        confirmButtonText: '<a class="text-white text-decoration-none" href="#">Reject</a>',
        confirmButtonAriaLabel: '',
        cancelButtonText: '<a class="text-white text-decoration-none" href="#">Cancel</a>',
        cancelButtonAriaLabel: '',
        reverseButtons: true,
    })
});


