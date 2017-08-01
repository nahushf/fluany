export const initCSS = (wrapper) => {
	let css = `
  .fadeOut{
    opacity: 0;
    visibility: hidden;
  }
	.fluany-wrapper {
    font-size: 1.6rem;
    height: 100vh;
    left: 0;
    top: 0;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 2147483647;
		background: #873e92;
    transition: background .3s;
		animation: fadeIn 1s
	}
  .fluany-wrapper.invalid{
    background: #fd8a78;
  }

  .fluany-wrapper.invalid .fluany-front-title:before{
		content: "A resposta é:";
		position: absolute;
		font-size: 24px;
		color: #FFF;
		left: 0;
		top: -35px;
	}

  .fluany-wrapper.invalid .fluany-front-title{
		font-size: 56px;
	}

  .fluany-wrapper.success{
    background: #78bfa3;
  }
	.fluany-wrapper.success .fluany-front-title{
		font-size: 72px;
	}

	.fluany-wrapper.success .emoji, .fluany-wrapper.invalid .emoji{
		top: -54px;
	}

	.fluany-wrapper-show {
    opacity: 1;
    visibility: visible;
    top: 0;
  }

  .fluany-header .logo-title{
    margin: 32px 30px;
    text-transform: uppercase;
    letter-spacing: 4px;
    float: left;
    font-size: 22px;
    }
  .fluany-header .logo-title .flu{
      color: #FFF;
      font-weight: 200;
  }
  .fluany-header .logo-title .flu:after{
      content: "";
      width: 20px;
      height: 2px;
      background: #FFF;
      position: absolute;
      margin-left: -18px;
      margin-top: 7px;
  }
  .fluany-header .logo-title .flu:before{
      content: "";
      width: 10px;
      height: 2px;
      background: #FFF;
      position: absolute;
      margin-left: 27px;
      margin-top: 13px;
  }
  .fluany-header .logo-title .any{
      color: #3ca87c;
;
  }
  .fluany-header .fluany-close{
      width: 40px;
      height: 40px;
      background: #FFF;
      border-radius: 100%;
      float: right;
      margin: 23px 20px;
      position: relative;
      cursor: pointer;
  }
  .fluany-header .fluany-close:before{
      content: "";
      width: 50%;
      height: 4px;
      background: #873e92;
      position: absolute;
      left: 10px;
      transform: rotate(45deg);
      top: 18px;
  }
  .fluany-header .fluany-close:after{
      content: "";
      width: 50%;
      height: 4px;
      background: #873e92;
      position: absolute;
      right: 10px;
      transform: rotate(-45deg);
      top: 18px;
  }
	.fluany-content{
		color: #FFF;
		width: 100%;
		max-width: 960px;
		margin: 0 auto;
		text-align: left;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
    transition: transform .3s;
		text-align: right;
	}
  .fluany-content.feedback-message{
    transform: translate(-50%, -16%);
  }
	.fluany-front-title{
		font-size: 40px;
		margin-top: 0;
		margin-bottom: 24px;
		text-align: left;
    max-width: 80%;
	}
  .fluany-back-input{
		height: 50px;
		width: 100%;
		border: none;
		font-size: 56px;
		background: transparent;
		border-bottom: 1px solid #FFF;
		outline: none;
		padding-bottom: 16px;
		padding-top: 16px;
		color: rgba(255, 255, 206, 1);
    transition: opacity .2s;
	}
	.fluany-back-input::-webkit-input-placeholder {
		color: rgba(0, 0, 0, 0.3);
	}
	.fluany-buttons{
		text-align: right;
		font-weight: bolder;
		font-size: 16px;
		margin-top: 32px;
    transition: all .3s;
	}
	.fluany-buttons a{
		cursor: pointer;
		transition all .2s;
		text-decoration: none;
		color: #FFF;
	}
	.fluany-buttons .fluany-answer-btn{
		margin-left: 20px;
		background: #3ca87c;
		padding: 12px 32px;
		border-radius: 25px;
	}
	.fluany-buttons .fluany-answer-btn:hover {
		background: #3b9772;
	}
	.fluany-buttons .fluany-dontknow-btn:hover {
		text-decoration: initial;
		padding-bottom: 2px;
		border-bottom: 1px solid #FFF;
	}
	.emoji {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background: yellow;
		position: absolute;
		right: 0;
		top: -104px;
		margin: 0;
	}
	.emoji .eyes {
		position: absolute;
		left: 50%;
		width: 60px;
		top: 80px;
	}
	.emoji .eyes::before, .emoji .eyes::after {
		content: '';
		background: black;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}
	.emoji .eyes::before {
		float: left;
	}
	.emoji .eyes::after {
		float: right;
		left: 100px;
		top: 50px;
	}
	.emoji.neutral {
		background: #ffe982;
	}
	.emoji.neutral .mouth, .emoji.neutral .eyes {
		top: 70px;
		transform: translate(-50%, -50%);
		animation: neutral 4s ease-in-out infinite;
	}
	.emoji.neutral .eyes::before, .emoji.neutral .eyes::after {
		animation: blinkeyes 3s ease-in-out infinite;
	}
	.emoji.neutral .mouth {
		position: absolute;
		left: 50%;
		top: 70%;
		background: black;
		width: 30px;
		height: 10px;
		border-radius: 50%;
	}
	@keyframes neutral {
		0% {
			height: 10px;
		}
		30% {
			height: 15px;
		}
		100% {
			height: 10px;
		}
	}
	@keyframes sad {
			0% {
					transform: translate(-60%, -50%);
			}
			60% {
					transform: translate(-40%, -50%);
			}
			100% {
					transform: translate(-60%, -50%);
			}
	}
	@keyframes  {
		0% {
			transform: translate(-50%, -50%);
		}
		60% {
			transform: translate(-50%, -100%);
		}
		100% {
			transform: translate(-50%, -50%);
		}
	}
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
	@keyframes blinkeyes {
		0% {
			transform: scaleY(1);
		}
		97% {
			transform: scaleY(1);
		}
		100% {
			transform: scaleY(0);
		}
	}
	.fluany-wrapper.invalid .emoji .eyes, .fluany-wrapper.invalid .emoji .mouth {
		animation: sad 1s ease-in-out infinite;
	}
	.fluany-wrapper.invalid .emoji .mouth {
		transform: translate(-50%, -50%);
		border-top: 6px solid black;
		border-right: 6px solid transparent;
		border-left: 6px solid transparent;
		border-bottom: 8px solid transparent;
		width: 25px;
		height: 10px;
		border-radius: initial;
		background: none;
		border-top-right-radius: 1999px;
		border-top-left-radius: 1999px;
	}
	.fluany-wrapper.invalid .emoji .eyes::before, .fluany-wrapper.invalid .emoji .eyes::after {
		animation: blinkeyes 3s ease-in-out infinite 1s;
	}

	.fluany-wrapper.success .emoji .mouth, .fluany-wrapper.success .emoji .eyes {
		animation: happy 1s ease-in-out infinite;
	}
	.fluany-wrapper.success .emoji .eyes::before, .fluany-wrapper.success .emoji .eyes::after {
		height: 15px;
		animation: blinkeyes 2s ease-in-out infinite;
	}
	.fluany-wrapper.success .emoji .mouth {
		transform: translate(-50%, -50%);
		height: 15px;
		border-radius: initial;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.fluany-wrapper.success .emoji .mouth::after {
		content: '';
		position: absolute;
		background: red;
		width: 10px;
		height: 5px;
		bottom: 2px;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
	}
 `,

	head = document.head || document.getElementsByTagName('head')[0],
	style = document.createElement('style');

	style.type = 'text/css';

	if ( style.styleSheet ){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);
	document.body.appendChild(wrapper);
};
