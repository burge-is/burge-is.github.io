// let pendoDebugIntervalID = setInterval(_=>pendo&&pendo.enableDebugging?clearInterval(pendoDebugIntervalID)||pendo.enableDebugging():_,100);

let $ = document.querySelector.bind(document);

let chromaticOrb = $('#chromatic-orb');

window.requestAnimationFrame(
  function update(){
    chromaticOrb.style.height = chromaticOrb.getBoundingClientRect().width+'px';
    let r = randomVal(155,255);
    let g = randomVal(50,255);
    let b = randomVal(50,255);
    let stopCondition = true; //!$('button:active')
    if(stopCondition){
      chromaticOrb.style.backgroundColor = `rgb(${r},${g},${b})`;
      chromaticOrb.innerText = (Number(chromaticOrb.innerText)+1) % 9999
    }
    window.requestAnimationFrame(update);
  }
)

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

Array.from(document.querySelectorAll('.stopper')).forEach(function(stopper){
  bindOrb(stopper,'mousedown')
  bindOrb(stopper,'click');
  bindOrb(stopper,'mouseup');
})
function bindOrb(stopper, event){
  stopper.addEventListener(event, function(){
    let orb = document.querySelector(`#${event}-orb`);
    orb.style.backgroundColor = chromaticOrb.style.backgroundColor;
    orb.innerText = chromaticOrb.innerText;
    // orb.style.transform = getComputedStyle(chromaticOrb)['transform'];
  });
};

let clickStart = 0;
let clickDifference = 0;
Array.from(document.querySelectorAll('.stopper')).forEach(function(stopper){

  stopper.addEventListener(
    'click',
    ()=>{
      if(!isFeatureClickPropertiesEnabled) clickStart = performance.now();
      document.querySelector('#click-start').innerHTML = clickStart.toFixed(5)+' ms';
    },
    true
  )
  stopper.addEventListener(
    'click',
    ()=>{
      clickEnd = performance.now();
      document.querySelector('#click-end').innerHTML = clickEnd.toFixed(5)+' ms';
      let difference = (clickEnd - clickStart).toFixed(5);
      if(difference > 1){
        difference = '<span style="color:red">' + difference +' ms' + '</span>';
      }else{
        difference += ' ms';
      }
      document.querySelector('#click-difference').innerHTML = difference;
    },
    false
  )
});

let isFeatureClickPropertiesEnabled = false;
let documentClickListener = undefined;

$('#rule-activation input').addEventListener('change',(evt)=>{
  isFeatureClickPropertiesEnabled = evt.target.checked;
  if(isFeatureClickPropertiesEnabled){
    documentClickListener = document.addEventListener('click',function(clickEvent){
      clickStart = performance.now();
      // putting in dummy matchers to test performance difference
      ['#STaaAHP', "#NOPaaE", "#NOaaPE",'#STAaaHP', "#NOPE", "#NOPE", rule].forEach(rule=>{
        if(rule && clickEvent.target.matches(rule)){
          let evalResult;
          try{
            evalResult = eval(collector);
          }catch(err){
            console.error('collector function failed')
          }

          $('#new-property').innerText = evalResult
            ? `"${propertyName} : "${evalResult}"`
            : ``;

          setTimeout(()=>{
            let lastEvent = getLastClickEvent();
            $('#existing-track-event').title = JSON.stringify(lastEvent);
            lastEvent.featureProperties = lastEvent.featureProperties || {};
            lastEvent.featureProperties[propertyName]  = evalResult;
          },0)
        }
      })
    }, true);
  }else{
    documentClickListener && documentClickListener();
  }
});

let rule = '';
$('#rule').addEventListener('change',(evt)=>{
  rule = evt.target.value;
});

let propertyName = '';
$('#property-name').addEventListener('change',(evt)=>{
  propertyName = evt.target.value;
});

let collector = '';
let collectorRunner = debounce((evt)=>{
  collector = evt.target.value;
  let result = "";
  let startTime = performance.now();
  try{
    result = eval(collector)
  }catch(err){
    result = `<span style="color:red">${err.message}</span>`;
  }
  let endTime = performance.now();
  let executionTime = (endTime - startTime).toFixed(5);
  $('#collector-time').innerHTML = executionTime+' ms';
  if(executionTime>50){
    $('#collector-time').style.color="red";
  }else{
    $('#collector-time').style.color="black";
  }
  $('#collector-result').innerHTML = '<strong>'+result+'</strong';
},500);
$('#collector').addEventListener('keydown',collectorRunner);
$('#collector').addEventListener('focus',collectorRunner);

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function getLastClickEvent(){
  if(!pendo || pendo.isDebuggingEnabled() === "No"){
    return "run pendo.enableDebugging() to view click props"
  }
  let index = 1
  let type;
  let cacheLength = pendo.eventCache.length;

  while(type !== 'click' && index < cacheLength){
    event = pendo.eventCache[cacheLength-index];
    type = event.type;
    index++;
  }

  return event;
}
