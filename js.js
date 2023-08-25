const timelineData = [
  { id: 1, content: 'Event 1', date: '2023-07-25' },
  { id: 2, content: 'Event 2', date: '2023-07-26' },
  // Add more timeline data as needed
];

function createTimelineItem(itemData) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('timeline-item');
  itemDiv.dataset.id = itemData.id;
  
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('item-content');
  contentDiv.innerText = itemData.content;
  
  itemDiv.appendChild(contentDiv);
  return itemDiv;
}

function onItemClick(event) {
  const itemId = event.currentTarget.dataset.id;
  // Add your logic here to open the selected item, e.g., show more details
  console.log(`Item ${itemId} clicked!`);
}

function onItemHover(event) {
  event.currentTarget.classList.add('opened-item');
}

function onItemLeave(event) {
  event.currentTarget.classList.remove('opened-item');
}

function initializeTimeline() {
  const timelineContainer = document.getElementById('timeline-container');

  timelineData.forEach(itemData => {
    const timelineItem = createTimelineItem(itemData);
    timelineItem.addEventListener('click', onItemClick);
    timelineItem.addEventListener('mouseenter', onItemHover);
    timelineItem.addEventListener('mouseleave', onItemLeave);
    timelineContainer.appendChild(timelineItem);
  });
}

initializeTimeline();
