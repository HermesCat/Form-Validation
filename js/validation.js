// form valoidation js

$(function () {
    // these are the hidden error messages
    $("#firstname-error").hide();
    $("#lastname-error").hide();
    $("#age-error").hide();
    $("#locale-error").hide();
    $("#screenname-error").hide();
    $("#email-error").hide();
    $("#formPassword1-error").hide();
    $("#formPassword2-error").hide();
    $("#bio-error").hide();

    // these varibles are for the submission part
    var error_firstname = false;
    var error_lastname = false;
    var error_age = false;
    var error_screenname = false;
    var error_password1 = false;
    var error_password2 = false;
    var error_email = false;
    var error_locale = false;
    var error_bio = false;

    // these.on(mouseleave) functions shouls trigger when a user moves their
    // mouse out of the input
    $("#form-firstname").focusout(function () {
        check_firstname();
    });

    $("#form-lastname").focusout(function () {
        check_lastname();
    });

    $("#form-age").focusout(function () {
        check_age();
    });

    $("#form-locale").focusout(function () {
        check_locale();
    });

    $("#form-screenname").focusout(function () {
        check_screenname();
    });

    $("#form-email").focusout(function () {
        check_email();
    });

    $("#formPassword1").focusout(function () {
        check_password1();
    });


    $("#formPassword2").focusout(function () {
        check_password2();
    });


    $("#form-bio").focusout(function () {
        check_bio();
    });

    function check_firstname() {
        var firstname_length = $("#form-firstname").val().length;

        if (firstname_length < 1 || firstname_length > 20) {
            $("#firstname-error").html("*Must be between 1-20 characters.");
            $("#firstname-error").show();
            error_firstname = true;
        } else {
            $("#firstname-error").hide();
        }
    }
    function check_lastname() {
        var lastname_length = $("#form-lastname").val().length;

        if (lastname_length < 1 || lastname_length > 20) {
            $("#lastname-error").html("*Must be between 1-20 characters.");
            $("#lastname-error").show();
            error_lastname = true;
        } else {
            $("#lastname-error").hide();
        }
    }

    function check_age() {

        if ($("#form-age").val() < 18 || $("#form-age").val() > 120) {
            $("#age-error").html("*Must be over 18 y/o.");
            $("#age-error").show();
            error_age = true;
        } else {
            $("#age-error").hide();
        }
    }

    function check_locale() {
        var locale_length = $("#form-locale").val().length;

        if (locale_length < 1 || locale_length > 20) {
            $("#locale-error").html("*Must be between 1-20 characters.");
            $("#locale-error").show();
            error_locale = true;
        } else {
            $("#locale-error").hide();
        }
    }

    function check_screenname() {
        var screenname_length = $("#form-screenname").val().length;

        if (screenname_length < 6 || screenname_length > 20) {
            $("#screenname-error").html("*Must be between 6-20 characters.");
            $("#screenname-error").show();
            error_screenname = true;
        } else {
            $("#screenname-error").hide();
        }
    }

    function check_email() {

        var email_length = $("#form-email").val().length;

        if (email_length < 6 || email_length > 44) {
            $("#email-error").html("*Must be between 6-44 characters.");
            $("#email-error").show();
            error_email = true;
        } else {
            $("#email-error").hide();
        }

    }

    function check_password1() {
        var password1_length = $("#formPassword1").val().length;

        if (password1_length < 6 || password1_length > 22) {
            $("#formPassword1-error").html("*Must be between 6-20 characters.");
            $("#formPassword1-error").show();
            error_password1 = true;
        } else {
            $("#formPassword1-error").hide();
        }
    }

    function check_password2() {
        var password1 = $("#formPassword1").val();
        var password2 = $("#formPassword2").val();


        if (password2 != password1) {
            $("#formPassword2-error").html("*Passwords do NOT match.");
            $("#formPassword2-error").show();
            error_password2 = true;
        } else {
            $("#formPassword2-error").hide();
        }
    }



    function check_bio() {
        var bio_length = $("#form-bio").val().length;

        if (bio_length < 1 || bio_length > 250) {
            $("#bio-error").html("*Must be between 1-250 characters.");
            $("#bio-error").show();
            error_bio = true;
        } else {
            $("#bio-error").hide();
        }
    }

    $("#singUpForm").submit(function () {
        error_firstname = false;
        error_lastname = false;
        error_age = false;
        error_screenname = false;
        error_password1 = false;
        error_password2 = false;
        error_email = false;
        error_locale = false;
        error_bio = false;

        check_firstname();
        check_lastname();
        check_password1();
        check_password2();
        check_email();
        check_bio();
        check_locale();
        check_age();
        check_screenname();

        if (
            error_firstname == false &&
            error_lastname == false &&
            error_age == false &&
            error_screenname == false &&
            error_password1 == false &&
            error_password2 == false &&
            error_email == false &&
            error_locale == false &&
            error_bio == false) {
            return true;
        } else {
            return false;
        }

    });

});
