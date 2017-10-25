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
    animation: fadeIn 1 !importants;
	}
  .fluany-success-image{
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 420px;
    opacity: 0;
    visibility: hidden;
  }
  .fluany-wrapper.invalid{
    background: #fd8a78;
  }
  .fluany-wrapper.success .fluany-success-image{
    opacity: 1;
    visibility: visible;
  }
  .fluany-wrapper.invalid .fluany-header,
  .fluany-wrapper.success .fluany-header{
    display: none;
  }
  .fluany-wrapper.invalid .fluany-front-title,
  .fluany-wrapper.success .fluany-front-title{
    color: #FFF !important;
  }
  .fluany-wrapper.invalid .fluany-front-title:before{
    content: "A resposta é:" !important;
    font-size: 15px !important;
    color: #ffffff !important;
    display: block;
    margin-bottom: 10px;
    font-weight: 400;
	}

  .fluany-wrapper.success{
    background: #78bfa3 !important;
  }
	.fluany-wrapper-show {
    opacity: 1 !important;
    visibility: visible !important;
    top: 0 !important;
  }
  .fluany-header {
      text-align: left;
  }
  .fluany-header .logo-title{
    text-transform: uppercase !important;
    letter-spacing: 4px !important;
    font-size: 22px !important;
    float: left !important;
    margin-bottom: 10px;
  }
  .fluany-header .logo-title .flu{
      color: #8c57a7 !important;
      font-weight: 200 !important;
  }
  .fluany-header .logo-title .flu:after{
      content: "" !important;
      width: 20px !important;
      height: 2px !important;
      background: #8c57a7 !important;
      position: absolute !important;
      margin-left: -18px !important;
      margin-top: 7px !important;
  }
  .fluany-header .logo-title .flu:before{
      content: "" !important;
      width: 10px !important;
      height: 2px !important;
      background: #8c57a7 !important;
      position: absolute !important;
      margin-left: 27px !important;
      margin-top: 13px !important;
  }
  .fluany-header .logo-title .any{
      color: #3ca87c !important;
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
    color: #FFF !important;
    width: 100% !important;
    max-width: 960px !important;
    margin: 0 auto !important;
    text-align: left !important;
    display: block;
    transition: transform .3s !important;
    text-align: right !important;
    clear: both;
	}
	.fluany-front-title{
    font-size: 25px !important;
    margin-top: 13px !important;
    margin-bottom: 0;
    text-align: left !important;
    max-width: 100% !important;
    color: #8c57a7 !important;
    display: block;
	}
  .fluany-back-input{
    height: 35px !important;
    width: 100% !important;
    border: none !important;
    font-size: 14px !important;
    background: transparent !important;
    border-bottom: 1px solid #c2c2c2 !important;
    outline: none !important;
    padding-top: 0;
    color: #7c7c7c !important;
    transition: opacity .2s !important;
	}
	.fluany-back-input::-webkit-input-placeholder {
		color: rgba(0, 0, 0, 0.3) !important;
	}
	.fluany-buttons{
    font-weight: bolder !important;
    font-size: 16px !important;
    margin-top: 17px !important;
    transition: all .3s !important;
    display: flex;
    justify-content: space-between;
	}
	.fluany-buttons button{
    width: 49% !important;
    height: 30px !important;
    color: #FFF !important;
    background: #76c0a3 !important;
    border-radius: 4px !important;
    border: none !important;
	}
  .fluany-buttons .fluany-dontknow-btn{
    background: #f97a66 !important;
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
