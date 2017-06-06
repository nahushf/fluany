const initElements = () => {
		const wrapper = document.createElement('div');
		wrapper.classList.add('fluany-wrapper');
		wrapper.innerHTML =
			` <div class="fluany-header">
					<div class="fluany-content">
						<h2 class="fluany-front-title"></h2>
						<input id="back-input" type="text" class="fluany-back-input">
						<div>
							<a href="" id="idonknow" class="fluany-donknow-btn">Eu não sei</a>
							<a href="" id="answer-btn" class="fluany-answer-btn">Responder</a>
						</div>
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
		background: #8c57a7;
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
