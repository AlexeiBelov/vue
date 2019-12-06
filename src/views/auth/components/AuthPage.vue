<template>
    <div>
        <div class="auth">
           <div class="cloud">
               <img src="../../../assets/images/cloud-01.png" alt="" class="cloud1">
               <img src="../../../assets/images/cloud-04.png" alt="" class="cloud4">
           </div>
            <div class="wrap"
                 @keyup.enter="submitForm('ruleForm')">
                <div class="header">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="96"
                         height="48"
                         viewBox="0 0 74 40">
                        <g fill="none">
                            <path d="M0 0h80v40H0z"/>
                            <path fill="#fff" d="M31.414 22.377h.013c.11-.179.29-.358.47-.481.247-.166.564-.235.84-.235.688 0 1.034.372 1.143.524.304.413.318.978.318 1.42v3.555c0 .331-.041.787-.4 1.158-.275.29-.62.4-1.02.4s-.662-.11-.91-.262a1.804 1.804 0 0 1-.454-.4v3.364h-1.378v-9.65h1.378v.607zm0 4.08c0 .22.013.47.22.69a.72.72 0 0 0 .523.22c.208 0 .36-.069.483-.207.165-.178.18-.386.18-.551v-2.77c0-.235 0-.428-.18-.62a.605.605 0 0 0-.483-.207.718.718 0 0 0-.523.22c-.207.22-.22.469-.22.69v2.536zM36.816 21.77l1.117 4.247h.055l.855-4.246h1.378l-1.874 7.76c-.096.4-.221 1.062-.634 1.461-.414.4-.951.428-1.38.428h-.358l-.027-1.282h.262c.193 0 .455-.027.648-.29.056-.068.138-.22.248-.662l.221-.895-1.999-6.52h1.488M41.02 23.7c0-.715.29-1.198.525-1.446.359-.373.91-.593 1.585-.593.662 0 1.13.248 1.42.51.261.248.58.69.58 1.42v.193c0 .372-.097.675-.235.895a1.297 1.297 0 0 1-.538.455c.276.11.454.29.565.455.234.331.261.717.261.98v.178c0 .51-.22 1.048-.536 1.378-.359.373-.951.593-1.586.593-.483 0-1.089-.18-1.461-.524-.317-.29-.58-.799-.58-1.364v-.261h1.324v.136c0 .166.055.317.151.428a.703.703 0 0 0 .552.234c.331 0 .51-.124.593-.234.124-.151.165-.386.165-.578v-.125c0-.29-.125-.441-.206-.51-.137-.125-.359-.18-.524-.18h-.483v-1.184h.441a.73.73 0 0 0 .552-.22.783.783 0 0 0 .165-.51v-.07c0-.18-.07-.386-.165-.51a.622.622 0 0 0-.51-.234c-.262 0-.441.096-.551.22a.704.704 0 0 0-.18.51v.096h-1.323v-.137M46.837 23.977c0-.538.042-1.296.677-1.833.371-.317.895-.483 1.406-.483.51 0 1.033.166 1.406.483.634.537.674 1.295.674 1.833v2.426c0 .537-.04 1.295-.674 1.833-.373.317-.897.482-1.406.482-.51 0-1.035-.165-1.406-.482-.635-.538-.677-1.296-.677-1.833v-2.426zm2.785-.083c0-.318-.083-.552-.206-.69a.71.71 0 0 0-.496-.192.702.702 0 0 0-.496.193c-.125.137-.208.371-.208.689v2.591c0 .317.083.551.208.69.109.11.288.192.496.192a.712.712 0 0 0 .496-.192c.123-.139.206-.373.206-.69v-2.591zM55.053 21.77c.579 0 1.061.208 1.351.497.303.317.455.814.455 1.186v.33c0 .29-.041.676-.33 1.007-.07.082-.249.248-.54.344.167.055.415.166.636.455.234.317.289.676.289.98v.316c0 .634-.303 1.062-.551 1.282-.441.4-.978.44-1.49.44H52.78v-6.836h2.274zm-.896 2.813h.607c.207 0 .386-.014.551-.22.151-.179.166-.386.166-.552v-.138c0-.303-.138-.454-.166-.482-.152-.165-.373-.18-.551-.18h-.607v1.572zm0 2.784h.635c.179 0 .427-.027.593-.234.137-.151.15-.331.15-.482v-.248c0-.152-.027-.359-.165-.51-.166-.18-.386-.207-.578-.207h-.635v1.681zM61.408 27.932h-.028a2.247 2.247 0 0 1-.47.524c-.26.207-.509.262-.799.262-.275 0-.702-.042-1.048-.358-.427-.4-.495-1.02-.495-1.571 0-.497.028-1.241.427-1.71.455-.538 1.227-.592 1.626-.592.097 0 .36 0 .787.04v-.716c0-.193-.014-.4-.179-.579a.743.743 0 0 0-.553-.22c-.192 0-.399.069-.55.247a.756.756 0 0 0-.18.442h-1.31c-.013-.62.249-1.159.566-1.475.344-.345.91-.565 1.544-.565.62 0 1.13.22 1.474.552.496.495.565 1.143.565 1.612v4.782h-1.377v-.675zm0-2.302a3.088 3.088 0 0 0-.484-.04c-.22 0-.55.027-.77.289-.18.207-.208.496-.208.716 0 .194.028.387.138.565.138.22.317.317.551.317.414 0 .773-.275.773-.882v-.965zM67.32 28.607v-2.812h-.606l-.937 2.812h-1.49l1.118-3.018a1.66 1.66 0 0 1-.538-.44c-.193-.263-.303-.704-.303-1.076v-.579c0-.633.303-1.062.551-1.281.441-.4.979-.442 1.489-.442h2.095v6.836h-1.378zm0-5.734h-.633c-.18 0-.358.028-.538.208-.179.178-.207.358-.207.592v.304c0 .15.028.358.166.51.165.178.386.207.579.207h.634v-1.82zM71.832 39.839v-2.812h-.606l-.937 2.812h-1.49l1.117-3.02c-.192-.096-.4-.26-.537-.44-.193-.262-.303-.703-.303-1.075v-.58c0-.633.303-1.06.55-1.28.442-.4.98-.441 1.49-.441h2.095v6.836h-1.379zm0-5.734h-.634a.69.69 0 0 0-.538.207c-.178.18-.206.358-.206.593v.303c0 .152.028.358.165.51.166.179.387.206.579.206h.634v-1.82zM27.223 35.76c.29 0 .441-.056.58-.331.11-.221.15-.47.178-.662l.083-.496c.041-.263.124-.62.317-.883.29-.4.745-.455 1.185-.455h.318v1.172h-.18a.503.503 0 0 0-.358.138c-.055.069-.11.193-.151.468l-.07.51c-.041.317-.055.566-.151.772a.823.823 0 0 1-.276.346l1.24 3.5h-1.391l-.993-2.923h-.772v2.923h-1.378v-6.836h1.378v2.756h.44M31.249 35.208c0-.538.041-1.295.675-1.833.372-.318.896-.484 1.405-.484.511 0 1.035.166 1.406.484.635.538.676 1.295.676 1.833v2.425c0 .539-.041 1.296-.676 1.834-.371.317-.895.482-1.406.482-.51 0-1.033-.165-1.405-.482-.634-.538-.675-1.295-.675-1.834v-2.425zm2.784-.083c0-.317-.083-.551-.208-.69a.707.707 0 0 0-.496-.192.708.708 0 0 0-.496.193c-.124.138-.206.372-.206.69v2.59c0 .318.082.552.206.69.11.11.29.194.496.194a.705.705 0 0 0 .496-.195c.125-.137.208-.371.208-.688v-2.592zM39.918 36.82h.028l1.461-3.817h1.268v6.836H41.38v-3.887l-1.158 2.908h-.579l-1.157-2.908v3.887h-1.296v-6.836h1.267l1.462 3.817M44.577 33.003h4.08v6.836H47.28v-5.596h-1.324v5.596h-1.379v-6.836M53.275 39.164h-.028a2.298 2.298 0 0 1-.468.523c-.262.207-.51.262-.8.262-.275 0-.703-.04-1.048-.359-.427-.399-.496-1.019-.496-1.57 0-.496.028-1.24.427-1.71.455-.537 1.228-.593 1.628-.593.096 0 .357 0 .785.042v-.716c0-.194-.013-.4-.18-.58a.74.74 0 0 0-.55-.22c-.193 0-.4.069-.552.248a.756.756 0 0 0-.18.44h-1.309c-.013-.62.249-1.157.565-1.474.345-.344.91-.566 1.545-.566.62 0 1.13.222 1.475.552.495.497.564 1.145.564 1.613v4.783h-1.378v-.675zm0-2.302a2.922 2.922 0 0 0-.483-.042c-.22 0-.551.028-.771.29-.18.206-.208.496-.208.716 0 .193.028.386.139.566.138.22.316.317.55.317.414 0 .773-.276.773-.883v-.964zM56.555 33.003h1.38v2.756h1.405v-2.756h1.378v6.836H59.34v-2.84h-1.405v2.84h-1.38v-6.836M63.998 33.003v3.817l1.696-2.976v-.841h1.378v6.836h-1.378V36.02l-1.696 2.977v.84H62.62v-6.835h1.378M27.419 21.77c-.485 0-1.056.057-1.486.432-.487.432-.529 1.015-.529 1.488v4.917h1.378v-4.683c.01-.206.051-.385.207-.565.208-.222.416-.236.652-.236l1.195-.002v-1.35h-1.417M3.817 21.77H.185c.913 10.13 9.427 18.072 19.797 18.072h1.807v-3.614l-1.807-.002c-8.372 0-15.266-6.324-16.165-14.457zM18.175 3.796V.164c-9.538.86-17.13 8.453-17.99 17.99h3.632C4.65 10.616 10.636 4.63 18.175 3.797zM21.789.164v3.633c7.539.833 13.524 6.819 14.358 14.357h3.633c-.86-9.537-8.454-17.13-17.991-17.99zM18.084 7.402l-2.557 2.556a9.014 9.014 0 0 1 2.648 6.39v16.265h3.614V16.347a12.641 12.641 0 0 0-3.705-8.945"/>
                        </g>
                    </svg>
                    <div class="header-text">ОСНОВА 2.0</div>
                </div>
                <div class="form-wrap">
                    <el-form :model="ruleForm"
                             status-icon
                             :rules="rules"
                             ref="ruleForm"
                             label-width="80px"
                             class="form">
                        <h3>Вход в систему</h3>
                        <el-form-item prop="login"
                                      size="mini"
                                      class="form-item-login">
                            <el-input placeholder="Логин"
                                      v-model.number="ruleForm.login"></el-input>
                        </el-form-item>
                        <el-form-item prop="pass"
                                      size="mini"
                                      class="form-item-pass">
                            <el-input placeholder="Пароль"
                                      type="password"
                                      v-model="ruleForm.pass"
                                      autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item class="form-item-button">
                            <el-button size="mini"
                                       @click="submitForm('ruleForm')"
                                       class="button">Войти</el-button>
                        </el-form-item>
                    </el-form>
                    <div class="form-links">
                        <el-link type="primary"
                                 class="link">Забыли пароль?</el-link>
                        <el-link type="primary"
                                 class="link">Заявка на подключение</el-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "auth",
        data() {
            let checkLogin = (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error('Введите логин'));
                } else {
                    if (this.ruleForm.pass !== '') {
                        this.$refs.ruleForm.validateField('checkLogin');
                        this.setAuthData();
                    }
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Введите пароль'));
                } else {
                    if (this.ruleForm.login !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                        this.setAuthData();
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    login: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    login: [
                        { validator: checkLogin, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            setAuthData() {
                sessionStorage.setItem('auth', 'true');
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('AuthPage/CHANGE_TOKEN', true);
                    } else {
                        console.log('error!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    h3 {
        padding: 56px 40px 0;
        color: #960530;
    }
    .auth {
        height: 100vh;
        background: url('../../../assets/images/auth-background.jpg') no-repeat center;
        box-shadow:0 0 0 1280px rgba(0, 0, 0, 0.33) inset;
        background-size: cover;
    }
    .button {
        width: 200px;
        color: #fff!important;
        background-color: #960530!important;
        outline: none!important;
        border-radius: 5px;
    }
    .button:hover {
        opacity: .7;
        color: #fff;
        background-color: #960530;
        outline: none;
    }
    .header {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        align-items: center;
    }
    .header-text {
        color: #fff;
        font-size: 40px;
        font-weight: 600;
        margin-top: 16px;
    }
    /deep/ .form-item-button div {
        margin-left: 0!important;
    }
    .form {
        background-color: #fff;
    }
    .form-item-button {
        padding: 24px;
        margin-bottom: 0!important;
    }
    .form-item-login {
        margin: 32px 80px 40px 0;
    }
    .form-item-pass {
        margin: 0 80px 24px 0;
    }
    .form-links {
        padding-top: 16px;
        height: 56px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
    }
    .form-wrap {
        background: #fff;
    }
    .link {
        font-size: 12px;
        padding: 2px;
    }
    .wrap {
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        transition: .2s;
        width: 360px;
    }
    /*стили для placeholder*/
    /deep/ input::-webkit-input-placeholder {
        text-align: center!important;
    }
    /deep/ input:-moz-placeholder { /* Firefox 18- */
        text-align: center!important;
    }
    /deep/ input::-moz-placeholder {  /* Firefox 19+ */
        text-align: center!important;
    }
    /deep/ input:-ms-input-placeholder {
        text-align: center!important;
    }
    .cloud {
        overflow: hidden;
        position: relative;
        width:100%;
        padding-bottom: 56.25%;
        height: 0;
        background-size: cover;
    }
    .cloud img {
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
    }
    @-webkit-keyframes animCloud {
        from {
            -webkit-transform: translateX(100%)
        }
        to {
            -webkit-transform: translateX(-100%)
        }
    }
    @-moz-keyframes animCloud {
        from {
            -moz-transform: translateX(100%)
        }
        to {
            -moz-transform: translateX(-100%)
        }
    }
    @keyframes animCloud {
        from {
            -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            transform: translateX(100%)
        }
        to {
            -webkit-transform: translateX(-100%);
            -moz-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%)
        }
    }
    .cloud1 {
        -webkit-animation: animCloud 20s infinite linear;
        -moz-animation: animCloud 20s infinite linear;
        animation: animCloud 20s infinite linear
    }
    .cloud2 {
        -webkit-animation: animCloud 40s infinite linear;
        -moz-animation: animCloud 40s infinite linear;
        animation: animCloud 40s infinite linear
    }
    .cloud3 {
        -webkit-animation: animCloud 60s infinite linear;
        -moz-animation: animCloud 60s infinite linear;
        animation: animCloud 60s infinite linear
    }
    .cloud4 {
        -webkit-animation: animCloud 80s infinite linear;
        -moz-animation: animCloud 80s infinite linear;
        animation: animCloud 80s infinite linear
    }
</style>
