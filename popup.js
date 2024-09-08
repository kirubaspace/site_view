chrome.storage.local.get('visitCounts', function(data) {
  let visitCounts = data.visitCounts || {}; // Get visit counts from storage or initialize an empty object if not found
  let sortedCounts = Object.entries(visitCounts).sort((a, b) => b[1] - a[1]); // Sort counts in descending order

  let siteList = document.getElementById('site-list');
  sortedCounts.forEach(([site, count]) => {
    let siteDiv = document.createElement('div');
    siteDiv.classList.add('site-count');

    let siteNameDiv = document.createElement('div');
    siteNameDiv.classList.add('site-name');
    siteNameDiv.textContent = site;

    let timesLabel = document.createElement('span');
    timesLabel.classList.add('times-label');
    timesLabel.textContent = 'times';

    let visitCountDiv = document.createElement('div');
    visitCountDiv.classList.add('visit-count');
    visitCountDiv.textContent = count;

    siteDiv.appendChild(siteNameDiv);
    siteDiv.appendChild(timesLabel);
    siteDiv.appendChild(visitCountDiv);
    siteList.appendChild(siteDiv);
  });
});
