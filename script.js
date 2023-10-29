function addVideoItem(thumbnailSrc, videoTitle, channelName, channelAvatarSrc, views, timeAgo) {
    const videoGrid = document.querySelector('.video-grid');

    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const videoThumbnail = document.createElement('div');
    videoThumbnail.classList.add('video-thumbnail');

    const thumbnailImage = document.createElement('img');
    thumbnailImage.src =thumbnailSrc;
    thumbnailImage.alt = 'Video Thumbnail';

    const videoInfo = document.createElement('div');
    videoInfo.classList.add('video-info');

    const titleAndAvatarContainer = document.createElement('div');
    titleAndAvatarContainer.classList.add('title-avatar-container');

    const title = document.createElement('div');
    title.classList.add('video-title');
    title.textContent = videoTitle;

    const avatar = document.createElement('img');
    avatar.src = channelAvatarSrc;
    avatar.alt = 'Channel Avatar';
    avatar.classList.add('avatar-channel');

    const channel = document.createElement('div');
    channel.classList.add('channel-name');
    channel.textContent = channelName;

    const viewsAndTime = document.createElement('div');
    viewsAndTime.classList.add('views-and-time');
    viewsAndTime.textContent = views + ' • ' + timeAgo;

    videoThumbnail.appendChild(thumbnailImage);
    titleAndAvatarContainer.appendChild(avatar);
    titleAndAvatarContainer.appendChild(title);
    videoInfo.appendChild(titleAndAvatarContainer);
    videoInfo.appendChild(channel);
    videoInfo.appendChild(viewsAndTime);

    videoItem.appendChild(videoThumbnail);
    videoItem.appendChild(videoInfo);

    videoGrid.appendChild(videoItem);

    titleAndAvatarContainer.style.display="flex";

}

// Example usage to add a video item
addVideoItem('images/trigg.png', "Fukra Insaan and I Became Our Papa's Assistant for 24 Hours", 'Triggered Insaan','images/trigged.jpg', '3M views', '1 days ago');
addVideoItem('images/m1.png', "Raksha Bandhan Par Kiya Bhen Sath Prank 🤣", 'Mohak Narang','images/mohak.jpg', '1M views', '21 days ago');
addVideoItem('images/r1.png', "LIVING LIKE OLD PEOPLE FOR 24 HOURS", 'RIMORAV VlOGS','images/rimorav.jpg', '1.5M views', '2 days ago');
addVideoItem('images/t2.png', "Fukra Insaan Became My Personal Assistant for 24 Hours", 'Triggered Insaan','images/trigged.jpg', '2M views', '12 days ago');
addVideoItem('images/m2.png', "Humare flat par chori ho gayi 😢", 'Mohak Narang','images/mohak.jpg', '2.5M views', '10 days ago');
addVideoItem('images/r2.png', "SELLING MAGGI IN PUBLIC WITH MY BROTHER & SISTER CHALLENGE ", 'RIMORAV VLOGS','images/rimorav.jpg', '5M views', '20 days ago');
addVideoItem('images/t3.png', "9 Second Fairness Cream - These Indian Ads are so Stupid | Funniest TV Ads", 'Triggered Insaan','images/trigged.jpg', '3.5M views', '32 days ago');
addVideoItem('images/m3.png', "My New Room Tour 🏡", 'Mohak Narang','images/mohak.jpg', '1.5M views', '52 days ago');
addVideoItem('images/r3.png', "BECOMING REAL FOOD VLOGGER FOR 24 HOURS", 'RIMORAV VLOGS','images/rimorav.jpg', '1.8M views', '42 days ago');
addVideoItem('images/t4.png', "Puneet Superstar and Fukra Insaan in Bigg Boss (Roast)", 'Triggered Insaan','images/trigged.jpg', '11M views', '72 days ago');
addVideoItem('images/m4.png', "Pause challenge Mai Surbhi Ki Mooche Kat Di 😂", 'Mohak Narang','images/mohak.jpg', '2.8M views', '52 days ago');
addVideoItem('images/r4.png', "ESCAPE THE WATER CHAMBER WIN $10,000", 'RIMORAV VlOGS','images/rimorav.jpg', '10M views', '22 days ago');
addVideoItem('images/t5.png', "I Explored The Most Haunted Abandoned House - Chaggan Vlogger Phasmophobia IRL", 'Triggered Insaan','images/trigged.jpg', '15M views', '12 days ago');
addVideoItem('images/m5.png', "Kabaddi Challenge Ne Khoon Nikal Diya 🤕", 'Mohak Narang','images/mohak.jpg', '11M views', '2 days ago');
addVideoItem('images/r5.png', "I Played Scariest Game in the World with my Brother & Sister ", 'RIMORAV VlOGS','images/rimorav.jpg', '6.5M views', '28 days ago');
addVideoItem('images/trigg.png', "Fukra Insaan and I Became Our Papa's Assistant for 24 Hours", 'Triggered Insaan','images/trigged.jpg', '3M views', '1 days ago');
addVideoItem('images/m1.png', "Raksha Bandhan Par Kiya Bhen Sath Prank 🤣", 'Mohak Narang','images/mohak.jpg', '1M views', '21 days ago');
addVideoItem('images/r1.png', "LIVING LIKE OLD PEOPLE FOR 24 HOURS", 'RIMORAV VlOGS','images/rimorav.jpg', '1.5M views', '2 days ago');
addVideoItem('images/t2.png', "Fukra Insaan Became My Personal Assistant for 24 Hours", 'Triggered Insaan','images/trigged.jpg', '2M views', '12 days ago');
addVideoItem('images/m2.png', "Humare flat par chori ho gayi 😢", 'Mohak Narang','images/mohak.jpg', '2.5M views', '10 days ago');
addVideoItem('images/r2.png', "SELLING MAGGI IN PUBLIC WITH MY BROTHER & SISTER CHALLENGE ", 'RIMORAV VLOGS','images/rimorav.jpg', '5M views', '20 days ago');
addVideoItem('images/t3.png', "9 Second Fairness Cream - These Indian Ads are so Stupid | Funniest TV Ads", 'Triggered Insaan','images/trigged.jpg', '3.5M views', '32 days ago');
addVideoItem('images/m3.png', "My New Room Tour 🏡", 'Mohak Narang','images/mohak.jpg', '1.5M views', '52 days ago');
addVideoItem('images/r3.png', "BECOMING REAL FOOD VLOGGER FOR 24 HOURS", 'RIMORAV VLOGS','images/rimorav.jpg', '1.8M views', '42 days ago');
addVideoItem('images/t4.png', "Puneet Superstar and Fukra Insaan in Bigg Boss (Roast)", 'Triggered Insaan','images/trigged.jpg', '11M views', '72 days ago');
addVideoItem('images/m4.png', "Pause challenge Mai Surbhi Ki Mooche Kat Di 😂", 'Mohak Narang','images/mohak.jpg', '2.8M views', '52 days ago');
addVideoItem('images/r4.png', "ESCAPE THE WATER CHAMBER WIN $10,000", 'RIMORAV VlOGS','images/rimorav.jpg', '10M views', '22 days ago');
addVideoItem('images/t5.png', "I Explored The Most Haunted Abandoned House - Chaggan Vlogger Phasmophobia IRL", 'Triggered Insaan','images/trigged.jpg', '15M views', '12 days ago');
addVideoItem('images/m5.png', "Kabaddi Challenge Ne Khoon Nikal Diya 🤕", 'Mohak Narang','images/mohak.jpg', '11M views', '2 days ago');
addVideoItem('images/r5.png', "I Played Scariest Game in the World with my Brother & Sister ", 'RIMORAV VlOGS','images/rimorav.jpg', '6.5M views', '28 days ago');


// Add more video items as needed
// Function to toggle the sidebar
function toggleSidebar() {
    const leftPane = document.querySelector('.left_section_container');
    const topLeftIcons = document.querySelectorAll('.top_left_section .icon');
    const middleLeftIcons = document.querySelectorAll('.middle_left_section .icon');

    if (leftPane.style.display === 'none') {
        // Show the left pane and hide the icons with their spans
        leftPane.style.display = 'block';
        topRightIcons.forEach(icon => icon.style.display = 'none');
        middleLeftIcons.forEach(icon => icon.style.display = 'none');
    } else {
        // Hide the left pane and show the icons with their spans
        leftPane.style.display = 'none';
        topRightIcons.forEach(icon => icon.style.display = 'inline');
        middleLeftIcons.forEach(icon => icon.style.display = 'inline');
    }
}

// Add an event listener to a button or element that triggers the sidebar toggle
const sidebarToggleButton = document.querySelector('#sidebar-toggle-button');
sidebarToggleButton.addEventListener('click', toggleSidebar);