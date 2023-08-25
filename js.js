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
      
      // Create an image element
      const imageElement = document.createElement('img');
      imageElement.src = itemData.image; // Assuming your JSON data has an "image" property
      imageElement.alt = itemData.title;
      imageElement.classList.add('timeline-image'); // Add a class for styling
      timelineItem.appendChild(imageElement); // Append the image to the timeline item
      
      // Create a title element
      const titleElement = document.createElement('div');
      titleElement.classList.add('title');
      titleElement.textContent = itemData.title;
      timelineItem.appendChild(titleElement);
  
      // Show "Read More" pop-up on item click
      timelineItem.addEventListener('click', () => {
        const popupContent = document.getElementById('popup-content');
        popupContent.textContent = itemData.description;
        const popupImage = document.getElementById('popup-image');
        popupImage.src = itemData.image; // Load the image
        const readMorePopup = document.getElementById('read-more-popup');
        readMorePopup.style.display = 'block';
      });
  
      return timelineItem;
    }
  });
  