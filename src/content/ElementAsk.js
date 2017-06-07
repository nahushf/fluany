const initElements = () => {
		const wrapper = document.createElement('div');
		wrapper.classList.add('fluany-wrapper');
		wrapper.innerHTML =
			` <div class="fluany-header">
          <h1 class="logo-title">
            <span class="flu">Flu</span><span class="any">any</span>
          </h1>
        </div>
        <div class="fluany-content">
          <h2 class="fluany-front-title"></h2>
          <input autofocus id="back-input" type="text" class="fluany-back-input">
          <div class="fluany-buttons">
            <a href="" id="idonknow" class="fluany-dontknow-btn">Eu não sei</a>
            <a href="" id="answer-btn" class="fluany-answer-btn">Responder</a>
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
      color: #3b9772;
  }
	.fluany-content{
		color: #FFF;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		text-align: left;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.fluany-front-title{
		font-size: 50px;
		margin-top: 0;
		margin-bottom: 10px;
	}
  .fluany-back-input{
		height: 50px;
		width: 100%;
		border: none;
		font-size: 40px;
		background: transparent;
		border-bottom: 1px solid #FFF;
		outline: none;
		color: rgba(255, 255, 206, 1);
	}
	.fluany-buttons{
		text-align: right;
		font-weight: bolder;
		font-size: 16px;
		margin-top: 20px;
	}
	.fluany-buttons .fluany-answer-btn{
		margin-left: 20px;
		background: #3ca87c;
		padding: 10px 20px;
		border-radius: 25px;
		color: #FFF;
		text-decoration: none;
		transition: .2s all;
	}
	.fluany-buttons .fluany-answer-btn:hover {
		background: #3b9772;
	}
	.fluany-buttons .fluany-dontknow-btn {
		color: #FFF;
		text-decoration: none;
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
	const title = document.querySelector('.fluany-front-title');
	title.innerHTML = front;
};

export default {
	initElements,
	askDraw
};
