<template>
<div class="container-fluid">
    <div class="row flex-center min-vh-100 py-4">
        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <a class="d-flex flex-center mb-4" href="../../index.html"><img class="me-2" src="../assets/img/Bank-logo.png" alt="" /></a>
            <div class="card">
                <div class="card-body pl-4 pr-4 pt-3 pb-2">
                    <div class="row flex-between-center mb-2">
                        <div class="col-12">
                            <h5>
                                Log in
                                <button class="btn btn-info btn-sm dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">English</a></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Second Langauge</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Third Langauge</a>
                                    </li>
                                </ul>
                            </h5>
                            <div class="btn-group"></div>
                        </div>
                    </div>

                    <label id="incorrectcredentials" hidden>Please Enter Correct UserID & Password</label>

                    <form>
                        <div class="mb-3">
                            <input class="form-control" type="text" placeholder="User ID" v-model="userId" id='userIDInput' v-on:change="hideLabel('lblUserID')" />
                            <label id="lblUserID" hidden>Please Enter UserID</label>

                        </div>
                        <div class="mb-3">
                            <input class="form-control" type="password" placeholder="Password" v-model="password" id="passwordInput" v-on:change="hideLabel('lblPassword')" />
                            <label id="lblPassword" hidden>Please Enter Password</label>
                        </div>
                        <div class="row flex-between-center">
                            <div class="col-auto">
                                <div class="form-check mb-0">
                                    <input class="form-check-input" type="checkbox" id="basic-checkbox" /><label class="form-check-label" for="basic-checkbox">Virtual Keyboard</label>
                                </div>
                            </div>
                            <div class="col-auto">
                                <a class="fs--1" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <p>
                                <small>Unauthorized usage of Corporate Internet banking system in
                                    prohibited</small>
                            </p>
                            <p>
                                <small>By submitting the above information, you indicate that you
                                    have agreed with
                                    <a class="fs--1" href="#">Terms & Conditions</a> |
                                    <a class="fs--1" href="#">Privacy Policy</a></small>
                            </p>
                        </div>
                        <div class="mb-3">

                            <button v-on:click="login" class="btn btn-primary d-block w-100 mt-3">Log in</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        <footer>
            <div class="row g-0 justify-content-between fs--1 mt-4 mb-3">
                <div class="col-12 text-center mb-4">
                    <a class="text-black m-2" href="#">Cookie Policy</a>
                    <a class="text-black m-2" href="#">Customer Security</a>
                    <a class="text-black m-2" href="#">Privacy</a>
                    <a class="text-black m-2" href="#">Terms & Conditions</a>
                </div>
                <div class="col-12 text-center">
                    <p class="mb-0 text-600">
                        2021 © Copyright
                        <a class="text-bold-800 grey darken-2" href="http://www.concertosoft.com/" target="_blank">Concerto Software &amp; Systems Pvt. Ltd.</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {

    name: "login",

    data() {
        return {
            userId: "",
            password: "",
        };
    },

    methods: {
        async login() {

            var userIDInput = document.getElementById("userIDInput").value;
            var passwordInput = document.getElementById("passwordInput").value;

            if (userIDInput == '') {
                var lblUserID = document.getElementById("lblUserID");
                lblUserID.removeAttribute("hidden");
                lblUserID.style.color = "red";
            }

            if (passwordInput == '') {
                var lblPassword = document.getElementById("lblPassword")
                lblPassword.removeAttribute("hidden");
                lblPassword.style.color = "red";
            }

            if (userIDInput != '' && passwordInput != '') {
                await axios
                    .get("http://10.10.10.198:3000/transact/user?username=" + this.userId + "&password=" + this.password)
                    .then((response) => {
                        console.log(response.data);

                        sessionStorage.setItem('userIDInput', userIDInput);

                        if (response.data == 'User Name does not exist') {
                            //incorrectcredentials
                            var Incorrectcredentials = document.getElementById("incorrectcredentials")
                            Incorrectcredentials.removeAttribute("hidden");
                            Incorrectcredentials.style.color = "red";

                            document.getElementById("userIDInput").value = '';
                            document.getElementById("passwordInput").value = '';
                        }

                        if (response.data == "1") {
                            this.$router.push({
                                name: 'Index',
                                params: {
                                    userId: this.userId
                                }
                            })
                        } else if (response.data == "2") {
                            this.$router.push({
                                name: "AuthorizeSingle"
                            });
                        } else {
                            console.log("Invalid UserID/Password");
                            this.$router.push({
                                name: "Login"
                            });
                        }
                    })
                    .catch((error) => console.log(error));
            }
        },

        hideLabel: function (lebelId) {
            var lblId = document.getElementById(lebelId);
            lblId.setAttribute("hidden", "hidden");

            var Incorrectcredentials = document.getElementById("incorrectcredentials")
            Incorrectcredentials.setAttribute("hidden", "hidden");
        },
    },

}
</script>
