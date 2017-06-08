const initElements = () => {
		const wrapper = document.createElement('div');
		wrapper.classList.add('fluany-wrapper');
		wrapper.innerHTML =
			` <div class="fluany-header">
          <h1 class="logo-title">
            <span class="flu">Flu</span><span class="any">any</span>
          </h1>
          <a href="" class="fluany-close" title="Fechar"></a>
        </div>
        <div class="fluany-content">
          <h2 class="fluany-front-title"></h2>
          <input autofocus placeholder="Digite aqui" id="back-input" type="text" class="fluany-back-input">
          <div class="fluany-buttons">
            <a id="idonknow" class="fluany-dontknow-btn">Eu não sei</a>
            <a id="answer-btn" class="fluany-answer-btn">Responder</a>
          </div>
				</div>`;

	const css = `
	.fluany-wrapper {
    font-size: 1.6rem;
    height: 100vh;
    left: 0;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 2147483647;
    box-sizing: border-box;
		background: #873e92;
		opacity: 0;
		visibility: hidden;
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
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.fluany-front-title{
		font-size: 40px;
		margin-top: 0;
		margin-bottom: 24px;
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
	}
	.fluany-back-input::-webkit-input-placeholder {
		color: rgba(0, 0, 0, 0.3);
	}
	.fluany-buttons{
		text-align: right;
		font-weight: bolder;
		font-size: 16px;
		margin-top: 32px;
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

const askDraw = (front) => {
	const wrapper = document.querySelector('.fluany-wrapper');
	wrapper.style.top = '0';
	wrapper.style.visibility = 'visible';
	wrapper.style.opacity = '1';
	const title = document.querySelector('.fluany-front-title');
	title.innerHTML = front;
  const close = document.querySelector('.fluany-close');
  close.addEventListener('click', function(e){
    e.preventDefault();
    wrapper.style.display = 'none';
  });
};

export default {
	initElements,
	askDraw
};
