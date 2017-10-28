export const initCSS = (wrapper) => {
  let css = `
  .fadeOut{
    opacity: 0;
    visibility: hidden;
  }
	.fluany-wrapper {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
    position: fixed !important;
    border-radius: 4px;
    width: 420px !important;
    padding: 15px 15px 22px 15px;
    font-size: 1.6rem !important;
    box-shadow: 1px 5px 13px rgba(153, 153, 153, 0.3);
    right: 20px !important;
    top: 70px !important;
    z-index: 2147483647 !important;
    background: #ffffff;
    transition: background .3s !important;
    animation: showQuestion .5s ease-in !important;
	}
  .fluany-success-image, .fluany-error-image{
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    max-width: 370px !important;
    display: none;
    transition: all .4s !important;
  }
  .fluany-wrapper .fluany-error-title{
    display: none;
    text-align: left;
    color: #8c58a7;
    font-weight: 600;
    font-size: 17px;
  }
  .fluany-wrapper.fluany-wrapper-success .fluany-nextquestion-btn,
  .fluany-wrapper.fluany-wrapper-success .fluany-success-image{
    display: block !important;
  }
  .fluany-wrapper.invalid .fluany-error-image,
  .fluany-wrapper.invalid .fluany-error-title{
    display: block;
  }
  .fluany-wrapper.invalid .fluany-content, .fluany-wrapper.fluany-wrapper-success .fluany-content{
    padding-left: 30px;
  }
  .fluany-wrapper.invalid .fluany-header .fluany-logo,
  .fluany-wrapper.fluany-wrapper-success .fluany-header .fluany-logo{
    display: none !important;
  }
  .fluany-wrapper.invalid .fluany-front-title,
  .fluany-wrapper.fluany-wrapper-success .fluany-front-title{
    color: #8c57a7 !important;
  }
  .fluany-wrapper.invalid{
    background: #fee5e4 !important;
  }
  .fluany-wrapper.fluany-wrapper-success, .fluany-wrapper.invalid{
    width: 340px !important;
    min-height: 140px;
  }
  .fluany-wrapper.fluany-wrapper-success{
    height: 160px !important;
    background: #e3f2ec !important;
  }
	.fluany-wrapper-show {
    opacity: 1 !important;
    visibility: visible !important;
    top: 0 !important;
  }
  .fluany-header {
      text-align: left;
  }
  .fluany-logo{
    width: 30px !important;
  }
  .fluany-header .fluany-close{
      width: 40px !important;
      height: 40px !important;
      float: right !important;
      position: relative !important;
      cursor: pointer !important;
      margin-top: -13px;
      margin-right: -16px;
  }
  .fluany-header .fluany-close:before, .fluany-header .fluany-close:after{
    content: "" !important;
    width: 30% !important;
    height: 3px !important;
    background: #8a8a8a !important;
    position: absolute !important;
    left: 12px !important;
    transform: rotate(45deg) !important;
    top: 19px !important;
  }
  .fluany-header .fluany-close:after{
    right: 8px !important;
    transform: rotate(-45deg) !important;
  }
	.fluany-content{
    position: relative;
    color: #FFF !important;
    width: 100% !important;
    text-align: left !important;
    display: block;
    transition: transform .3s !important;
    text-align: right !important;
    clear: both;
	}
	.fluany-front-title{
    font-size: 25px !important;
    margin: 0 !important;
    text-align: left !important;
    max-width: 100% !important;
    color: #8c57a7 !important;
    display: block;
	}
  .fluany-back-input{
    margin: 0 !important !important;
    height: 35px !important;
    width: 100% !important;
    border: none !important;
    font-size: 14px !important;
    background: #f3f3f3 !important;
    border-radius: 4px !important;
    outline: none !important;
    padding-left: 10px !important;
    color: #7c7c7c !important;
    transition: opacity .2s !important;
	}
	.fluany-back-input::-webkit-input-placeholder {
		color: rgba(0, 0, 0, 0.3) !important;
	}
	.fluany-buttons{
    margin-top: 17px !important;
    display: flex;
    justify-content: space-between;
	}
	.fluany-wrapper button{
    height: 40px !important;
    cursor: pointer !important;
    color: #FFF !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    transition: all .3s !important;
    background: #FFF;
    border-radius: 4px !important;
    border: none !important;
  }
	.fluany-buttons button{
    box-shadow: none !important;
    width: 49% !important;
    background: #76c0a3 !important;
	}
  .fluany-buttons .fluany-dontknow-btn{
    background: #ffffff !important;
    border: 1px solid #f97a66 !important;
    color: #f97a66 !important;
  }
  .fluany-buttons .fluany-dontknow-btn:hover, .fluany-dontknow-btn:focus{
    background: #f97a66 !important;
    color: #FFF !important;
  }
  .fluany-buttons .fluany-answer-btn:hover, .fluany-answer-btn:focus{
    background: #5aad8d !important;
    color: #FFF !important;
  }
  .fluany-wrapper .fluany-nextquestion-btn{
    box-shadow: none !important;
    display: none !important;
    position: absolute !important;
    left: 50px !important;
    font-size: 15px !important;
    bottom: 30px !important;
    padding: 10px 20px !important;
    color: #8c57a7 !important;
  }
  @keyframes showQuestion {
    from {
      opacity: 0;
      transform: translateX(500px)
    }

    to {
      opacity: 1;
      transform: translateX(0)
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
