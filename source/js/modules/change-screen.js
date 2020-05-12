export default () => { 
	let objFPS = window.fullPageScroll;	
	let isPrevScr = 0; 
	let scrFillClass = window.apData.SCR_FILL_NAME; 
	let scrFilling = document.querySelector(`.`+ scrFillClass); 

  document.body.addEventListener(`screenChanged`, (	) => { 
    isPrevScr = event.detail.screenElement.classList.contains(scrFillClass); 
  }); 

	objFPS.changePageDisplay = function () { 
		let delay = 0; 
		if ((window.apData.DELTAY > 0) && isPrevScr ) { 
			delay = window.apData.TRANS_DELAY; 
			scrFilling.classList.add('fill'); 
		}; 
		setTimeout(function () { 
			objFPS.changeVisibilityDisplay(); 
	    objFPS.changeActiveMenuItem(); 
	    objFPS.emitChangeDisplayEvent(); 
	    scrFilling.classList.remove('fill'); 
		}, delay); 
	}; 
}; 
