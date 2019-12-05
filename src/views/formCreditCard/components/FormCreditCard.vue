<template>
    <div>
        <div class="wrapper">
            <div class="card-form">
                <div class="card-list">
                    <div class="card-item" :class="{ '-active' : isCardFlipped }">
                        <!-- Лицевая сторона карты -->
                        <div class="card-item-side -front">
                            <div class="card-item-focus" :class="{'-active' : focusElementStyle }" :style="focusElementStyle" ref="focusElement"></div>
                            <div class="card-item-cover">
                                <!--<img
                                        :src="''" class="card-item-bg">-->
                            </div>
                            <div class="card-item-wrapper">
                                <div class="card-item-top">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="96"
                                         height="48"
                                         viewBox="0 0 74 40">
                                        <g fill="none">
                                            <path d="M0 0h80v40H0z"/>
                                            <path fill="#fff" d="M31.414 22.377h.013c.11-.179.29-.358.47-.481.247-.166.564-.235.84-.235.688 0 1.034.372 1.143.524.304.413.318.978.318 1.42v3.555c0 .331-.041.787-.4 1.158-.275.29-.62.4-1.02.4s-.662-.11-.91-.262a1.804 1.804 0 0 1-.454-.4v3.364h-1.378v-9.65h1.378v.607zm0 4.08c0 .22.013.47.22.69a.72.72 0 0 0 .523.22c.208 0 .36-.069.483-.207.165-.178.18-.386.18-.551v-2.77c0-.235 0-.428-.18-.62a.605.605 0 0 0-.483-.207.718.718 0 0 0-.523.22c-.207.22-.22.469-.22.69v2.536zM36.816 21.77l1.117 4.247h.055l.855-4.246h1.378l-1.874 7.76c-.096.4-.221 1.062-.634 1.461-.414.4-.951.428-1.38.428h-.358l-.027-1.282h.262c.193 0 .455-.027.648-.29.056-.068.138-.22.248-.662l.221-.895-1.999-6.52h1.488M41.02 23.7c0-.715.29-1.198.525-1.446.359-.373.91-.593 1.585-.593.662 0 1.13.248 1.42.51.261.248.58.69.58 1.42v.193c0 .372-.097.675-.235.895a1.297 1.297 0 0 1-.538.455c.276.11.454.29.565.455.234.331.261.717.261.98v.178c0 .51-.22 1.048-.536 1.378-.359.373-.951.593-1.586.593-.483 0-1.089-.18-1.461-.524-.317-.29-.58-.799-.58-1.364v-.261h1.324v.136c0 .166.055.317.151.428a.703.703 0 0 0 .552.234c.331 0 .51-.124.593-.234.124-.151.165-.386.165-.578v-.125c0-.29-.125-.441-.206-.51-.137-.125-.359-.18-.524-.18h-.483v-1.184h.441a.73.73 0 0 0 .552-.22.783.783 0 0 0 .165-.51v-.07c0-.18-.07-.386-.165-.51a.622.622 0 0 0-.51-.234c-.262 0-.441.096-.551.22a.704.704 0 0 0-.18.51v.096h-1.323v-.137M46.837 23.977c0-.538.042-1.296.677-1.833.371-.317.895-.483 1.406-.483.51 0 1.033.166 1.406.483.634.537.674 1.295.674 1.833v2.426c0 .537-.04 1.295-.674 1.833-.373.317-.897.482-1.406.482-.51 0-1.035-.165-1.406-.482-.635-.538-.677-1.296-.677-1.833v-2.426zm2.785-.083c0-.318-.083-.552-.206-.69a.71.71 0 0 0-.496-.192.702.702 0 0 0-.496.193c-.125.137-.208.371-.208.689v2.591c0 .317.083.551.208.69.109.11.288.192.496.192a.712.712 0 0 0 .496-.192c.123-.139.206-.373.206-.69v-2.591zM55.053 21.77c.579 0 1.061.208 1.351.497.303.317.455.814.455 1.186v.33c0 .29-.041.676-.33 1.007-.07.082-.249.248-.54.344.167.055.415.166.636.455.234.317.289.676.289.98v.316c0 .634-.303 1.062-.551 1.282-.441.4-.978.44-1.49.44H52.78v-6.836h2.274zm-.896 2.813h.607c.207 0 .386-.014.551-.22.151-.179.166-.386.166-.552v-.138c0-.303-.138-.454-.166-.482-.152-.165-.373-.18-.551-.18h-.607v1.572zm0 2.784h.635c.179 0 .427-.027.593-.234.137-.151.15-.331.15-.482v-.248c0-.152-.027-.359-.165-.51-.166-.18-.386-.207-.578-.207h-.635v1.681zM61.408 27.932h-.028a2.247 2.247 0 0 1-.47.524c-.26.207-.509.262-.799.262-.275 0-.702-.042-1.048-.358-.427-.4-.495-1.02-.495-1.571 0-.497.028-1.241.427-1.71.455-.538 1.227-.592 1.626-.592.097 0 .36 0 .787.04v-.716c0-.193-.014-.4-.179-.579a.743.743 0 0 0-.553-.22c-.192 0-.399.069-.55.247a.756.756 0 0 0-.18.442h-1.31c-.013-.62.249-1.159.566-1.475.344-.345.91-.565 1.544-.565.62 0 1.13.22 1.474.552.496.495.565 1.143.565 1.612v4.782h-1.377v-.675zm0-2.302a3.088 3.088 0 0 0-.484-.04c-.22 0-.55.027-.77.289-.18.207-.208.496-.208.716 0 .194.028.387.138.565.138.22.317.317.551.317.414 0 .773-.275.773-.882v-.965zM67.32 28.607v-2.812h-.606l-.937 2.812h-1.49l1.118-3.018a1.66 1.66 0 0 1-.538-.44c-.193-.263-.303-.704-.303-1.076v-.579c0-.633.303-1.062.551-1.281.441-.4.979-.442 1.489-.442h2.095v6.836h-1.378zm0-5.734h-.633c-.18 0-.358.028-.538.208-.179.178-.207.358-.207.592v.304c0 .15.028.358.166.51.165.178.386.207.579.207h.634v-1.82zM71.832 39.839v-2.812h-.606l-.937 2.812h-1.49l1.117-3.02c-.192-.096-.4-.26-.537-.44-.193-.262-.303-.703-.303-1.075v-.58c0-.633.303-1.06.55-1.28.442-.4.98-.441 1.49-.441h2.095v6.836h-1.379zm0-5.734h-.634a.69.69 0 0 0-.538.207c-.178.18-.206.358-.206.593v.303c0 .152.028.358.165.51.166.179.387.206.579.206h.634v-1.82zM27.223 35.76c.29 0 .441-.056.58-.331.11-.221.15-.47.178-.662l.083-.496c.041-.263.124-.62.317-.883.29-.4.745-.455 1.185-.455h.318v1.172h-.18a.503.503 0 0 0-.358.138c-.055.069-.11.193-.151.468l-.07.51c-.041.317-.055.566-.151.772a.823.823 0 0 1-.276.346l1.24 3.5h-1.391l-.993-2.923h-.772v2.923h-1.378v-6.836h1.378v2.756h.44M31.249 35.208c0-.538.041-1.295.675-1.833.372-.318.896-.484 1.405-.484.511 0 1.035.166 1.406.484.635.538.676 1.295.676 1.833v2.425c0 .539-.041 1.296-.676 1.834-.371.317-.895.482-1.406.482-.51 0-1.033-.165-1.405-.482-.634-.538-.675-1.295-.675-1.834v-2.425zm2.784-.083c0-.317-.083-.551-.208-.69a.707.707 0 0 0-.496-.192.708.708 0 0 0-.496.193c-.124.138-.206.372-.206.69v2.59c0 .318.082.552.206.69.11.11.29.194.496.194a.705.705 0 0 0 .496-.195c.125-.137.208-.371.208-.688v-2.592zM39.918 36.82h.028l1.461-3.817h1.268v6.836H41.38v-3.887l-1.158 2.908h-.579l-1.157-2.908v3.887h-1.296v-6.836h1.267l1.462 3.817M44.577 33.003h4.08v6.836H47.28v-5.596h-1.324v5.596h-1.379v-6.836M53.275 39.164h-.028a2.298 2.298 0 0 1-.468.523c-.262.207-.51.262-.8.262-.275 0-.703-.04-1.048-.359-.427-.399-.496-1.019-.496-1.57 0-.496.028-1.24.427-1.71.455-.537 1.228-.593 1.628-.593.096 0 .357 0 .785.042v-.716c0-.194-.013-.4-.18-.58a.74.74 0 0 0-.55-.22c-.193 0-.4.069-.552.248a.756.756 0 0 0-.18.44h-1.309c-.013-.62.249-1.157.565-1.474.345-.344.91-.566 1.545-.566.62 0 1.13.222 1.475.552.495.497.564 1.145.564 1.613v4.783h-1.378v-.675zm0-2.302a2.922 2.922 0 0 0-.483-.042c-.22 0-.551.028-.771.29-.18.206-.208.496-.208.716 0 .193.028.386.139.566.138.22.316.317.55.317.414 0 .773-.276.773-.883v-.964zM56.555 33.003h1.38v2.756h1.405v-2.756h1.378v6.836H59.34v-2.84h-1.405v2.84h-1.38v-6.836M63.998 33.003v3.817l1.696-2.976v-.841h1.378v6.836h-1.378V36.02l-1.696 2.977v.84H62.62v-6.835h1.378M27.419 21.77c-.485 0-1.056.057-1.486.432-.487.432-.529 1.015-.529 1.488v4.917h1.378v-4.683c.01-.206.051-.385.207-.565.208-.222.416-.236.652-.236l1.195-.002v-1.35h-1.417M3.817 21.77H.185c.913 10.13 9.427 18.072 19.797 18.072h1.807v-3.614l-1.807-.002c-8.372 0-15.266-6.324-16.165-14.457zM18.175 3.796V.164c-9.538.86-17.13 8.453-17.99 17.99h3.632C4.65 10.616 10.636 4.63 18.175 3.797zM21.789.164v3.633c7.539.833 13.524 6.819 14.358 14.357h3.633c-.86-9.537-8.454-17.13-17.991-17.99zM18.084 7.402l-2.557 2.556a9.014 9.014 0 0 1 2.648 6.39v16.265h3.614V16.347a12.641 12.641 0 0 0-3.705-8.945"/>
                                        </g>
                                    </svg>
                                    <div class="card-item-type">
                                        <transition name="slide-fade-up">
                                            <!--<img :src="''" alt="" class="card-item-typeImg">-->
                                        </transition>
                                    </div>
                                </div>
                                <label for="cardNumber" class="card-item-number" ref="cardNumber">
                                    <template v-if="getCardType === 'amex'">
                <span v-for="(n, $index) in amexCardMask" :key="$index">
                  <transition name="slide-fade-up">
                    <div class="card-item-numberItem" :class="{ '-active' : n.trim() === '' }" v-if="cardNumber.length > $index" key="1">
                      {{cardNumber[$index]}}
                    </div>
                    <div class="card-item-numberItem" :class="{ '-active' : n.trim() === '' }" v-else key="2">
                      {{n}}
                    </div>
                  </transition>
                </span>
                                    </template>

                                    <template v-else>
                <span v-for="(n, $index) in otherCardMask" :key="$index">
                  <transition name="slide-fade-up">
                    <div class="card-item-numberItem" :class="{ '-active' : n.trim() === '' }" v-if="cardNumber.length > $index" key="1">
                      {{cardNumber[$index]}}
                    </div>
                    <div class="card-item-numberItem" :class="{ '-active' : n.trim() === '' }" v-else key="2">
                      {{n}}
                    </div>
                  </transition>
                </span>
                                    </template>
                                </label>
                                <div class="card-item-content">
                                    <label for="cardName" class="card-item-info" ref="cardName">
                                        <div class="card-item-holder">Card Holder</div>
                                        <transition name="slide-fade-up">
                                            <div class="card-item-name" v-if="cardName.length" key="1">
                                                <transition-group name="slide-fade-right">
                                                    <span class="card-item-nameItem" v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" v-if="$index === $index" :key="$index + 1">{{n}}</span>
                                                </transition-group>
                                            </div>
                                            <div class="card-item-name" v-else key="2">Full Name</div>
                                        </transition>
                                    </label>
                                    <div class="card-item-date" ref="cardDate">
                                        <label for="cardMonth" class="card-item-dateTitle">Expires</label>
                                        <label for="cardMonth" class="card-item-dateItem">
                                            <transition name="slide-fade-up">
                                                <span v-if="cardMonth" :key="cardMonth">{{cardMonth}}</span>
                                                <span v-else key="2">MM</span>
                                            </transition>
                                        </label>
                                        /
                                        <label for="cardYear" class="card-item-dateItem">
                                            <transition name="slide-fade-up">
                                                <span v-if="cardYear" :key="cardYear">{{String(cardYear).slice(2,4)}}</span>
                                                <span v-else key="2">YY</span>
                                            </transition>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Задняя сторона карты-->
                        <div class="card-item-side -back">
                            <div class="card-item-cover">
                                <!--<img
                                        :src="''" class="card-item-bg">-->
                            </div>
                            <div class="card-item-band"></div>
                            <div class="card-item-cvv">
                                <div class="card-item-cvvTitle">CVV</div>
                                <div class="card-item-cvvBand">{{cardCvv}}</div>
                                <div class="card-item-type">
                                    <!--<img :src="''" class="card-item-typeImg">-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-form-inner">
                    <div class="card-input">
                        <label for="cardNumber" class="card-input-label">Card Number</label>
                        <input type="text" id="cardNumber" class="card-input-input" v-mask="generateCardNumberMask" v-model="cardNumber" @focus="focusInput" @blur="blurInput" data-ref="cardNumber" autocomplete="off">
                    </div>
                    <div class="card-input">
                        <label for="cardName" class="card-input-label">Card Holders</label>
                        <input type="text" id="cardName" class="card-input-input" v-model="cardName" @focus="focusInput" @blur="blurInput" data-ref="cardName" autocomplete="off">
                    </div>
                    <div class="card-form-row">
                        <div class="card-form-col">
                            <div class="card-form-group">
                                <label for="cardMonth" class="card-input-label">Expiration Date</label>
                                <select class="card-input-input -select" id="cardMonth" v-model="cardMonth" @focus="focusInput" @blur="blurInput" data-ref="cardDate">
                                    <option value="" disabled selected>Month</option>
                                    <option :value="n < 10 ? '0' + n : n" v-for="n in 12" :disabled="n < minCardMonth" :key="n">
                                        {{n < 10 ? '0' + n : n}}
                                    </option>
                                </select>
                                <select class="card-input-input -select" id="cardYear" v-model="cardYear" @focus="focusInput" @blur="blurInput" data-ref="cardDate">
                                    <option value="" disabled selected>Year</option>
                                    <option :value="$index + minCardYear" v-for="(n, $index) in 12" :key="n">
                                        {{$index + minCardYear}}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="card-form-col -cvv">
                            <div class="card-input">
                                <label for="cardCvv" class="card-input-label">CVV</label>
                                <input type="text" class="card-input-input card-input-input-cvv" id="cardCvv" v-mask="'####'" maxlength="4" v-model="cardCvv" @focus="flipCard(true)" @blur="flipCard(false)" autocomplete="off">
                            </div>
                        </div>
                    </div>

                    <button class="card-form-button">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
      name: 'FormCreditCard',
      data() {
          return {
              currentCardBackground: Math.floor(Math.random()* 25 + 1),
              cardName: "",
              cardNumber: "",
              cardMonth: "",
              cardYear: "",
              cardCvv: "",
              minCardYear: new Date().getFullYear(),
              amexCardMask: "#### ###### #####",
              otherCardMask: "#### #### #### ####",
              cardNumberTemp: "",
              isCardFlipped: false,
              focusElementStyle: null,
              isInputFocused: false
          };
      },
      mounted() {
          this.cardNumberTemp = this.otherCardMask;
          document.getElementById("cardNumber").focus();
      },
      computed: {
          getCardType () {
              let number = this.cardNumber;
              let re = new RegExp("^4");
              if (number.match(re) != null) return "visa";

              re = new RegExp("^(34|37)");
              if (number.match(re) != null) return "amex";

              re = new RegExp("^5[1-5]");
              if (number.match(re) != null) return "mastercard";

              re = new RegExp("^6011");
              if (number.match(re) != null) return "discover";

              return "visa"; // default type
          },
          generateCardNumberMask () {
              return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
          },
          minCardMonth () {
              if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
              return 1;
          }
      },
      watch: {
          cardYear () {
              if (this.cardMonth < this.minCardMonth) {
                  this.cardMonth = "";
              }
          }
      },
      methods: {
          flipCard (status) {
              this.isCardFlipped = status;
          },
          focusInput (e) {
              this.isInputFocused = true;
              let targetRef = e.target.dataset.ref;
              let target = this.$refs[targetRef];
              this.focusElementStyle = {
                  width: `${target.offsetWidth}px`,
                  height: `${target.offsetHeight}px`,
                  transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
              }
          },
          blurInput() {
              let vm = this;
              setTimeout(() => {
                  if (!vm.isInputFocused) {
                      vm.focusElementStyle = null;
                  }
              }, 300);
              vm.isInputFocused = false;
          }
      }
  }
</script>

<style scoped>
    .wrapper {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        align-items: center;
        justify-content: center;
    }
    .card-form {
        max-width: 570px;
        margin: auto;
        width: 100%;
    }
    .card-form-inner {
        background: #fff;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
        border-radius: 10px;
        padding: 35px;
        padding-top: 180px;
    }
    .card-form-row {
        display: flex;
        align-items: flex-start;
    }
    .card-form-col {
        flex: auto;
        margin-right: 35px;
    }
    .card-form-col:last-child {
        margin-right: 0;
    }
    .card-form-col.-cvv {
        max-width: 150px;
    }
    .card-form-group {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .card-form-group .card-input-input {
        flex: 1;
        margin-right: 15px;
    }
    .card-form-group .card-input-input:last-child {
        margin-right: 0;
    }
    .card-form-button {
        width: 100%;
        height: 55px;
        background: #409EFF;
        border: none;
        border-radius: 5px;
        font-size: 22px;
        font-weight: 500;
        font-family: "Source Sans Pro", sans-serif;
        box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
        color: #fff;
        margin-top: 20px;
        cursor: pointer;
    }
    .card-item {
        max-width: 430px;
        height: 270px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 2;
        width: 100%;
    }
    .card-item.-active .card-item-side.-front {
        transform: perspective(1000px) rotateY(180deg) rotateX(0deg) rotateZ(0deg);
    }
    .card-item.-active .card-item-side.-back {
        transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
    }
    .card-item-focus {
        position: absolute;
        z-index: 3;
        border-radius: 5px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
        opacity: 0;
        pointer-events: none;
        overflow: hidden;
        border: 2px solid rgba(255, 255, 255, 0.65);
    }
    .card-item-focus:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #08142f;
        height: 100%;
        border-radius: 5px;
        filter: blur(25px);
        opacity: 0.5;
    }
    .card-item-focus.-active {
        opacity: 1;
    }
    .card-item-side {
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
        transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
        transform-style: preserve-3d;
        transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
        backface-visibility: hidden;
        height: 100%;
    }
    .card-item-side.-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
        z-index: 2;
        padding: 0;
        height: 100%;
    }
    .card-item-side.-back .card-item-cover {
        transform: rotateY(-180deg);
    }
    .card-item-bg {
        max-width: 100%;
        display: block;
        max-height: 100%;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .card-item-cover {
        height: 100%;
        background-color: #1c1d27;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
    }
    .card-item-cover:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(6, 2, 29, 0.45);
    }
    .card-item-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 40px;
        padding: 0 10px;
    }
    .card-item-type {
        height: 45px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        max-width: 100px;
        margin-left: auto;
        width: 100%;
    }
    .card-item-typeImg {
        max-width: 100%;
        object-fit: contain;
        max-height: 100%;
        object-position: top right;
    }
    .card-item-info {
        color: #fff;
        width: 100%;
        max-width: calc(100% - 85px);
        padding: 10px 15px;
        font-weight: 500;
        display: block;
        cursor: pointer;
    }
    .card-item-holder {
        opacity: 0.7;
        font-size: 13px;
        margin-bottom: 6px;
    }
    .card-item-wrapper {
        font-family: "Source Code Pro", monospace;
        padding: 25px 15px;
        position: relative;
        z-index: 4;
        height: 100%;
        text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
        user-select: none;
    }
    .card-item-name {
        font-size: 18px;
        line-height: 1;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
    }
    .card-item-nameItem {
        display: inline-block;
        min-width: 8px;
        position: relative;
    }
    .card-item-number {
        font-weight: 500;
        line-height: 1;
        color: #fff;
        font-size: 27px;
        margin-bottom: 35px;
        display: inline-block;
        padding: 10px 15px;
        cursor: pointer;
    }
    .card-item-numberItem {
        width: 16px;
        display: inline-block;
    }
    .card-item-numberItem.-active {
        width: 30px;
    }
    .card-item-content {
        color: #fff;
        display: flex;
        align-items: flex-start;
    }
    .card-item-date {
        flex-wrap: wrap;
        font-size: 18px;
        margin-left: auto;
        padding: 10px;
        display: inline-flex;
        width: 80px;
        white-space: nowrap;
        flex-shrink: 0;
        cursor: pointer;
    }
    .card-item-dateItem {
        position: relative;
    }
    .card-item-dateItem span {
        width: 22px;
        display: inline-block;
    }
    .card-item-dateTitle {
        opacity: 0.7;
        font-size: 13px;
        padding-bottom: 6px;
        width: 100%;
    }
    .card-item-band {
        background: rgba(0, 0, 19, 0.8);
        width: 100%;
        height: 50px;
        margin-top: 30px;
        position: relative;
        z-index: 2;
    }
    .card-item-cvv {
        text-align: right;
        position: relative;
        z-index: 2;
        padding: 15px;
    }
    .card-item-cvv .card-item-type {
        opacity: 0.7;
    }
    .card-item-cvvTitle {
        padding-right: 10px;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 5px;
    }
    .card-item-cvvBand {
        height: 48px;
        background: #fff;
        margin-bottom: 30px;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        color: #1a3b5d;
        font-size: 18px;
        border-radius: 4px;
        box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);
    }
    .card-list {
        margin-bottom: -130px;
    }
    .card-input {
        margin-bottom: 20px;
    }
    .card-input-label {
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 500;
        color: #1a3b5d;
        width: 100%;
        display: block;
        user-select: none;
    }
    .card-input-input {
        width: 95%;
        height: 48px;
        border-radius: 5px;
        box-shadow: none;
        border: 1px solid #ced6e0;
        transition: all 0.3s ease-in-out;
        font-size: 18px;
        padding: 5px 15px;
        background: none;
        color: #1a3b5d;
        font-family: "Source Sans Pro", sans-serif;
    }
    .card-input-input:hover, .card-input-input:focus {
        border-color: #3d9cff;
    }
    .card-input-input:focus {
        box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    .card-input-input.-select {
        -webkit-appearance: none;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC");
        background-size: 12px;
        background-position: 90% center;
        background-repeat: no-repeat;
        padding-right: 30px;
    }
    .card-input-input-cvv {
        width: 84%;
        height: 35px;
    }

    .slide-fade-up-enter-active {
        transition: all 0.25s ease-in-out;
        transition-delay: 0.1s;
        position: relative;
    }

    .slide-fade-up-leave-active {
        transition: all 0.25s ease-in-out;
        position: absolute;
    }

    .slide-fade-up-enter {
        opacity: 0;
        transform: translateY(15px);
        pointer-events: none;
    }

    .slide-fade-up-leave-to {
        opacity: 0;
        transform: translateY(-15px);
        pointer-events: none;
    }

    .slide-fade-right-enter-active {
        transition: all 0.25s ease-in-out;
        transition-delay: 0.1s;
        position: relative;
    }

    .slide-fade-right-leave-active {
        transition: all 0.25s ease-in-out;
        position: absolute;
    }

    .slide-fade-right-enter {
        opacity: 0;
        transform: translateX(10px) rotate(45deg);
        pointer-events: none;
    }

    .slide-fade-right-leave-to {
        opacity: 0;
        transform: translateX(-10px) rotate(45deg);
        pointer-events: none;
    }

</style>
