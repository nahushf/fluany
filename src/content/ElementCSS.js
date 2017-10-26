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
  .fluany-success-image{
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    max-width: 420px !important;
    opacity: 0 !important;
    visibility: hidden !important;
    transition: all .4s !important;
  }
  .fluany-wrapper.invalid{
    background: #fd8a78 !important;
  }
  .fluany-wrapper.success .fluany-success-image{
    opacity: 1 !important;
    visibility: visible !important;
  }
  .fluany-wrapper.success .fluany-nextquestion-btn{
    display: block !important;
  }
  .fluany-wrapper.invalid .fluany-header,
  .fluany-wrapper.success .fluany-header{
    display: none !important;
  }
  .fluany-wrapper.invalid .fluany-front-title,
  .fluany-wrapper.success .fluany-front-title{
    position: absolute !important;
    left: 70px !important;
    top: 27px !important;
    color: rgba(137, 101, 155, 0.47) !important;
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
    background: rgb(226, 245, 238) !important;
    height: 160px !important;
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
    margin: 0 !important;
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
    width: 49% !important;
    background: #76c0a3 !important;
	}
  .fluany-buttons .fluany-dontknow-btn{
    background: #ffffff !important;
    border: 1px solid #f97a66 !important;
    color: #f97a66 !important;
  }
  .fluany-wrapper .fluany-nextquestion-btn{
    display: none !important;
    position: absolute !important;
    left: 80px !important;
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
