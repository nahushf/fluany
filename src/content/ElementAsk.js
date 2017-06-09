const drawElementAsk = (front, back, alarm) => {
		const wrapper = document.createElement('div');
    addClass(wrapper, 'fluany-wrapper');

    const header = document.createElement('div');
    addClass(header, 'fluany-header');
    wrapper.appendChild(header);

    const logo = document.createElement('h1');
    addClass(logo, 'logo-title');
    logo.innerHTML =
      `<span class="flu">Flu</span><span class="any">any</span>`;
    header.appendChild(logo);

    const close = document.createElement('a');
    addClass(close, 'fluany-close');
    header.appendChild(close);

    const contentFlu = document.createElement('div');
    addClass(contentFlu, 'fluany-content');
    wrapper.appendChild(contentFlu);

    const frontTitle = document.createElement('h2');
    addClass(frontTitle, 'fluany-front-title');
    frontTitle.textContent = front;
    contentFlu.appendChild(frontTitle);

    const inputAnswer = document.createElement('input');
    addClass(inputAnswer, 'fluany-back-input');
		inputAnswer.setAttribute('placeholder', 'Digite aqui');
    contentFlu.appendChild(inputAnswer);

    const buttons = document.createElement('div');
    addClass(buttons, 'fluany-buttons');
    contentFlu.appendChild(buttons);

    const dontKnowButton = document.createElement('a');
    addClass(dontKnowButton, 'fluany-dontknow-btn');
    dontKnowButton.textContent = 'Eu não sei';
    buttons.appendChild(dontKnowButton);

    const answerButton = document.createElement('a');
    addClass(answerButton, 'fluany-answer-btn');
    answerButton.textContent = 'Responder';
    buttons.appendChild(answerButton);

	const css = `
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
	}
  .fluany-wrapper.invalid{
    background: #fd8a78;
  }

  .fluany-wrapper.success{
    background: #78bfa3;
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
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
    transition: transform .3s;
	}
  .fluany-content.feedback-message{
    transform: translate(-50%, 0%);
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


  //Events and Actions
  window.addEventListener('keydown', (event) => {
    const enterClicked = ( event.which === 13 || event.keyCode === 13 );
    const escapeClicked = ( event.which === 27 || event.keyCode === 27 );
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    addClass(wrapper, 'fadeOut');
  });

  answerButton.addEventListener('click', () => {

    console.log('back: ', back);

    if(inputAnswer.value.toLowerCase() === back.toLowerCase()){
      addClass(wrapper, 'success');
      frontTitle.textContent = 'Ta manjando heim!';
    }else{
      addClass(wrapper, 'invalid');
      frontTitle.textContent = 'Errrrrrou! Putz grila heim!';
    }

    addClass(contentFlu, 'feedback-message');
    addClass(buttons, 'fadeOut');
    addClass(inputAnswer, 'fadeOut');
    alarm.create();
  });
};

// Internal helper functions
const addClass = (element, className) => {
	if ( element.classList ) {
		element.classList.add(className);
	} else {
		element.className += ' ' + className;
	}
};

const removeClass = (element, className) => {
	if ( element.classList ) {
		element.classList.remove(className);
	} else {
		element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
};


export default {
	drawElementAsk
};
