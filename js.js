document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the JSON file
    fetch('timelineData.json')
      .then(response => response.json())
      .then(data => {
        // Create the timeline from the fetched data
        const timelineContainer = document.getElementById('timeline-container');
        data.forEach(item => {
          const timelineItem = createTimelineItem(item);
          timelineContainer.appendChild(timelineItem);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  
    // Function to create a timeline item
    function createTimelineItem(itemData) {
      const timelineItem = document.createElement('div');
      timelineItem.classList.add('timeline-item');
      timelineItem.textContent = itemData.title;
  
      // Show hover text on item hover
      timelineItem.addEventListener('mouseenter', () => {
        const hoverTextContent = document.getElementById('hover-text-content');
        hoverTextContent.textContent = 'Read More';
        const hoverTextContainer = document.getElementById('hover-text-container');
        hoverTextContainer.style.display = 'block';
      });
  
      // Hide hover text on item leave
      timelineItem.addEventListener('mouseleave', () => {
        const hoverTextContainer = document.getElementById('hover-text-container');
        hoverTextContainer.style.display = 'none';
      });
  
      // Show "Read More" pop-up on item click
      timelineItem.addEventListener('click', () => {
        const popupContent = document.getElementById('popup-content');
        popupContent.textContent = itemData.description;
        const readMorePopup = document.getElementById('read-more-popup');
        readMorePopup.style.display = 'block';
      });
  
      return timelineItem;
    }
  });
  