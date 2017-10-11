export const initCSS = (wrapper) => {
  let css = `
  .fadeOut{
    opacity: 0;
    visibility: hidden;
  }
	.fluany-wrapper {
    font-size: 1.6rem !important;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
    height: 100vh !important;
    left: 0 !important;
    top: 0 !important;
    position: fixed !important;
    text-align: center !important;
    width: 100% !important;
    z-index: 2147483647 !important;
		background: #873e92;
    transition: background .3s !important;
		animation: fadeIn 1 !importants
	}
  .fluany-wrapper.invalid{
    background: #fd8a78;
  }

  .fluany-wrapper.invalid .fluany-front-title:before{
		content: "A resposta é:" !important;
		position: absolute !important;
		font-size: 24px !important;
		color: #FFF !important;
		left: 0 !important;
		top: -35px !important;
	}

  .fluany-wrapper.invalid .fluany-front-title{
		font-size: 56px !important;
	}

  .fluany-wrapper.success{
    background: #78bfa3 !important;
  }
	.fluany-wrapper.success .fluany-front-title{
		font-size: 72px !important;
	}

	.fluany-wrapper.success .emoji, .fluany-wrapper.invalid .emoji{
		top: -54px !important;
	}

	.fluany-wrapper-show {
    opacity: 1 !important;
    visibility: visible !important;
    top: 0 !important;
  }

  .fluany-header .logo-title{
    margin: 32px 30px !important;
    text-transform: uppercase !important;
    letter-spacing: 4px !important;
    float: left !important;
    font-size: 22px !important;
    }
  .fluany-header .logo-title .flu{
      color: #FFF !important;
      font-weight: 200 !important;
  }
  .fluany-header .logo-title .flu:after{
      content: "" !important;
      width: 20px !important;
      height: 2px !important;
      background: #FFF !important;
      position: absolute !important;
      margin-left: -18px !important;
      margin-top: 7px !important;
  }
  .fluany-header .logo-title .flu:before{
      content: "" !important;
      width: 10px !important;
      height: 2px !important;
      background: #FFF !important;
      position: absolute !important;
      margin-left: 27px !important;
      margin-top: 13px !important;
  }
  .fluany-header .logo-title .any{
      color: #3ca87c !important;
;
  }
  .fluany-header .fluany-close{
      width: 40px !important;
      height: 40px !important;
      background: #FFF !important;
      border-radius: 100% !important;
      float: right !important;
      margin: 23px 20px !important;
      position: relative !important;
      cursor: pointer !important;
  }
  .fluany-header .fluany-close:before{
      content: "" !important;
      width: 50% !important;
      height: 4px !important;
      background: #873e92 !important;
      position: absolute !important;
      left: 10px !important;
      transform: rotate(45deg) !important;
      top: 18px !important;
  }
  .fluany-header .fluany-close:after{
      content: "" !important;
      width: 50% !important;
      height: 4px !important;
      background: #873e92 !important;
      position: absolute !important;
      right: 10px !important;
      transform: rotate(-45deg) !important;
      top: 18px !important;
  }
	.fluany-content{
		color: #FFF !important;
		width: 100% !important;
		max-width: 960px !important;
		margin: 0 auto !important;
		text-align: left !important;
		position: absolute !important;
		top: 50% !important;
		left: 50% !important;
		transform: translate(-50%, -50%) !important;
    transition: transform .3s !important;
		text-align: right !important;
	}
  .fluany-content.feedback-message{
    transform: translate(-50%, -16%) !important;
  }
	.fluany-front-title{
		font-size: 40px !important;
		margin-top: 0 !important;
		margin-bottom: 24px !important;
		text-align: left !important;
    max-width: 80% !important;
    color: #FFF;
	}
  .fluany-back-input{
		height: 50px !important;
		width: 100% !important;
		border: none !important;
		font-size: 56px !important;
		background: transparent !important;
		border-bottom: 1px solid #FFF !important;
		outline: none !important;
		padding-bottom: 16px !important;
		padding-top: 16px !important;
		color: rgba(255, 255, 206, 1) !important;
    transition: opacity .2s !important;
	}
	.fluany-back-input:focus{
    border: initial: !important;
    border-bottom: 1px solid #FFF !important;
    box-shadow: none;
	}
	.fluany-back-input::-webkit-input-placeholder {
		color: rgba(0, 0, 0, 0.3) !important;
	}
	.fluany-buttons{
		text-align: right !important;
		font-weight: bolder !important;
		font-size: 16px !important;
		margin-top: 32px !important;
    transition: all .3s !important;
	}
	.fluany-buttons a{
		cursor: pointer !important;
		transition all .2s !important;
		text-decoration: none !important;
		color: #FFF !important;
	}
	.fluany-buttons .fluany-answer-btn{
		margin-left: 20px !important;
		background: #3ca87c !important;
		padding: 12px 32px !important;
		border-radius: 25px !important;
	}
	.fluany-buttons .fluany-answer-btn:hover {
		background: #3b9772 !important;
	}
	.fluany-buttons .fluany-dontknow-btn:hover {
		text-decoration: initial !important;
		padding-bottom: 2px !important;
		border-bottom: 1px solid #FFF !important;
	}
	.emoji {
		width: 150px !important;
		height: 150px !important;
		border-radius: 50% !important;
		background: yellow !important;
		position: absolute !important;
		right: 0 !important;
		top: -104px !important;
		margin: 0 !important;
	}
	.emoji .eyes {
		position: absolute !important;
		left: 50% !important;
		width: 60px !important;
		top: 80px !important;
	}
	.emoji .eyes::before, .emoji .eyes::after {
		content: '' !important;
		background: black !important;
		width: 15px !important;
		height: 15px !important;
		border-radius: 50% !important;
	}
	.emoji .eyes::before {
		float: left !important;
	}
	.emoji .eyes::after {
		float: right !important;
		left: 100px !important;
		top: 50px !important;
	}
	.emoji.neutral {
		background: #ffe982 !important;
	}
	.emoji.neutral .mouth, .emoji.neutral .eyes {
		top: 70px !important;
		transform: translate(-50%, -50%) !important;
		animation: neutral 4s ease-in-out infinite !important;
	}
	.emoji.neutral .eyes::before, .emoji.neutral .eyes::after {
		animation: blinkeyes 3s ease-in-out infinite !important;
	}
	.emoji.neutral .mouth {
		position: absolute !important;
		left: 50% !important;
		top: 70% !important;
		background: black !important;
		width: 30px !important;
		height: 10px !important;
		border-radius: 50% !important;
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
		animation: sad 1s ease-in-out infinite !important;
	}
	.fluany-wrapper.invalid .emoji .mouth {
		transform: translate(-50%, -50%) !important;
		border-top: 6px solid black !important;
		border-right: 6px solid transparent !important;
		border-left: 6px solid transparent !important;
		border-bottom: 8px solid transparent !important;
		width: 25px !important;
		height: 10px !important;
		border-radius: initial !important;
		background: none !important;
		border-top-right-radius: 1999px !important;
		border-top-left-radius: 1999px !important;
	}
	.fluany-wrapper.invalid .emoji .eyes::before, .fluany-wrapper.invalid .emoji .eyes::after {
		animation: blinkeyes 3s ease-in-out infinite 1s !important;
	}

	.fluany-wrapper.success .emoji .mouth, .fluany-wrapper.success .emoji .eyes {
		animation: happy 1s ease-in-out infinite !important;
	}
	.fluany-wrapper.success .emoji .eyes::before, .fluany-wrapper.success .emoji .eyes::after {
		height: 15px !important;
		animation: blinkeyes 2s ease-in-out infinite !important;
	}
	.fluany-wrapper.success .emoji .mouth {
		transform: translate(-50%, -50%) !important;
		height: 15px !important;
		border-radius: initial !important;
		border-bottom-left-radius: 30px !important;
		border-bottom-right-radius: 30px !important;
		border-top-left-radius: 10px !important;
		border-top-right-radius: 10px !important;
	}
	.fluany-wrapper.success .emoji .mouth::after {
		content: '' !important;
		position: absolute !important;
		background: red !important;
		width: 10px !important;
		height: 5px !important;
		bottom: 2px !important;
		left: 50% !important;
		transform: translateX(-50%) !important;
		border-radius: 50% !important;
	}
 `,

    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style')

  style.type = 'text/css'

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }

  head.appendChild(style)
  document.body.appendChild(wrapper)
}
