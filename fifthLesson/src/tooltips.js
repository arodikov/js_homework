export default function initTooltips() {

  let tooltipSpans = document.querySelectorAll('span[data-tooltip]');

  for (let i = 0; i < tooltipSpans.length; i++) {
    tooltipSpans[i].addEventListener('mouseover', function(event) {
      var tooltip = document.createElement('span');
      tooltip.className = 'tooltip-item';
      tooltip.innerText = tooltipSpans[i].getAttribute('data-tooltip');
      tooltipSpans[i].appendChild(tooltip);
    })

    tooltipSpans[i].addEventListener('mouseout', function(event) {
      tooltipSpans[i].removeChild(tooltipSpans[i].lastChild);
    })
  }

}
