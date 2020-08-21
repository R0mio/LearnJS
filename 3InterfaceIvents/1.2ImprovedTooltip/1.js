let house = document.getElementById('house');
let currentTooltip = null;

house.onmouseover = function(event) {
  if (currentTooltip) return;

  let dataElem = event.target.closest('[data-tooltip]');
  let tooltipText = dataElem.dataset.tooltip;
  
  currentTooltip = showTooltip(tooltipText, dataElem);
};

house.onmouseout = function(event) {
  let closestDataElem = event.relatedTarget.closest('[data-tooltip]');

  if (!closestDataElem) {
    currentTooltip.remove();
    currentTooltip = null;
    return;
  }
  
  if (closestDataElem.dataset.tooltip == currentTooltip.innerHTML) return;
  
  currentTooltip.remove();
  currentTooltip = null;
};

function showTooltip(tooltipText, basicElement) {
  let tooltip = document.createElement('div');
  tooltip.innerHTML = tooltipText;
  tooltip.classList.add('tooltip'); 
  house.append(tooltip);

  let elementCoord = basicElement.getBoundingClientRect();

  tooltip.style.left = elementCoord.left + (event.target.offsetWidth - tooltip.offsetWidth) / 2 + 'px';
  if (elementCoord.top < tooltip.offsetHeight + 5) {
    tooltip.style.top = elementCoord.bottom + 5 + 'px';
  }
  else {
    tooltip.style.top = elementCoord.top - (tooltip.offsetHeight + 5) + 'px';
  }

  return tooltip;
}