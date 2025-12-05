const reels = [
  {
    ismuted: true,
    username: "john_doe",
    likeCount: 1200,
    isLike: false,
    commentCount: 34,
    comment: ["Awesome!", "Nice video 🔥"],
    caption: "Enjoying the sunset vibes 🌅",
    video: "./videos/video-1.mp4",
    userProfile: "https://example.com/profiles/john.jpg",
    shareCount: 12,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "emma_w",
    likeCount: 5400,
    isLike: true,
    commentCount: 102,
    comment: ["Beautiful!", "Amazing shot 😍"],
    caption: "Travel diaries ✈️✨",
    video: "./videos/video-2.mp4",
    userProfile: "https://example.com/profiles/emma.jpg",
    shareCount: 45,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "fitness_guru",
    likeCount: 890,
    isLike: false,
    commentCount: 18,
    comment: ["Motivational 💪", "Let's go!"],
    caption: "Morning workout grind!",
    video: "./videos/video-3.mp4",
    userProfile: "https://example.com/profiles/guru.jpg",
    shareCount: 9,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "chef_master",
    likeCount: 2300,
    isLike: true,
    commentCount: 56,
    comment: ["Recipe pls!", "Looks delicious 🤤"],
    caption: "Today's special: Pasta Alfredo 🍝",
    video: "./videos/video-4.mp4",
    userProfile: "https://example.com/profiles/chef.jpg",
    shareCount: 17,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "tech_insider",
    likeCount: 4300,
    isLike: false,
    commentCount: 120,
    comment: ["Need more info!", "Tech is evolving fast"],
    caption: "New gadget review 🔌",
    video: "./videos/video-5.mp4",
    userProfile: "https://example.com/profiles/tech.jpg",
    shareCount: 30,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "style_diva",
    likeCount: 6700,
    isLike: true,
    commentCount: 210,
    comment: ["Slayed 😍", "Fashion queen!"],
    caption: "OOTD 💖✨",
    video: "./videos/video-6.mp4",
    userProfile: "https://example.com/profiles/diva.jpg",
    shareCount: 65,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "nature_lover",
    likeCount: 1500,
    isLike: false,
    commentCount: 40,
    comment: ["So calming 😌", "Nature ❤️"],
    caption: "Nature never disappoints 🌿",
    video: "./videos/video-7.mp4",
    userProfile: "https://example.com/profiles/nature.jpg",
    shareCount: 13,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "car_fanatic",
    likeCount: 8900,
    isLike: true,
    commentCount: 300,
    comment: ["Beast mode! 😤", "Insane power!"],
    caption: "Supercar of the year 🏎️💨",
    video: "./videos/video-8.mp4",
    userProfile: "https://example.com/profiles/car.jpg",
    shareCount: 100,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "dance_vibes",
    likeCount: 3000,
    isLike: false,
    commentCount: 85,
    comment: ["Fire 🔥🔥", "Great moves!"],
    caption: "Dance like no one's watching 💃",
    video: "./videos/video-9.mp4",
    userProfile: "https://example.com/profiles/dance.jpg",
    shareCount: 22,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "art_creator",
    likeCount: 4900,
    isLike: true,
    commentCount: 150,
    comment: ["Beautiful artwork 🎨", "You're so talented!"],
    caption: "Sketching magic ✏️✨",
    video: "./videos/video-10.mp4",
    userProfile: "https://example.com/profiles/art.jpg",
    shareCount: 27,
    isFollowed: true
  }
];


var allreels = document.querySelector('.all-reels')

function addData() {

  var sum = ''
  reels.forEach(function (elem, idx) {
    sum = sum + `                <div class="reel">
    <video autoplay loop ${elem.ismuted ? 'muted' : ''}  src ="${elem.video}"></video>   
    <button class="mute" id=${idx}>
    ${elem.ismuted ? '<i class="ri-volume-mute-fill"></i>'
        : '<i class="ri-volume-up-fill"></i>'}
 </button>
 
       <div class="bottom">
           <div class="user">
               <img src="${elem.userProfile}"
                   alt="">
               <h4>${elem.username}</h4>
               <button id =${idx} class='follow'>${elem.isFollowed ? 'unfollow' : 'follow'}</button>
           </div>
           <h3>${elem.caption}</h3>
       </div>
       <div class="right">
           <div id ="${idx}" class="like">
           <h4 class="like-icon">${elem.isLike ? '<i class="love ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}</h4>
           <h6>${elem.likeCount}</h6>
           </div>
           <div class="comment">
               <h4 class="comment-icon"><i class=" ri-chat-3-line"></i></i></h4>
               <h6>${elem.commentCount}</h6>
           </div> 
           <div class="share">
               <h4 class="share-icon"><i class="ri-share-forward-line"></i></i></i></h4>
               <h6>${elem.shareCount}</h6>
           </div>    
           <div class="menu">
               <h4 class="menu-icon"><i class="ri-more-2-line"></i></i></i></i></h4>
           </div>    

       </div>
   </div>`
  })

  allreels.innerHTML = sum;

  setTimeout(() => setupReelsSwipeControl(), 10);

}

addData()
function activateCurrentReel() {
  const reelsDOM = document.querySelectorAll("video");
  const container = document.querySelector(".all-reels");

  let index = Math.round(container.scrollTop / window.innerHeight);
}


allreels.addEventListener('click', function (dets) {

  // LIKE
  let likeBox = dets.target.closest(".like");
  if (likeBox) {
    let idx = likeBox.id;
    reels[idx].isLike = !reels[idx].isLike;
    reels[idx].likeCount += reels[idx].isLike ? 1 : -1;
    addData();
  }

  // FOLLOW / UNFOLLOW
  let followBtn = dets.target.closest(".follow");
  if (followBtn) {
    let idx = followBtn.id;
    reels[idx].isFollowed = !reels[idx].isFollowed;
    addData();
  }

  //  MUTE / UNMUTE
  let muteBtn = dets.target.closest(".mute");
  if (muteBtn) {
    let idx = muteBtn.id;

    reels[idx].ismuted = !reels[idx].ismuted;

    addData();
    // =================== REELS SWIPE + AUTOPLAY SYSTEM ===================

    // run this AFTER addData()
    function setupReelsSwipeControl() {
      const container = document.querySelector(".all-reels");
      const videos = document.querySelectorAll("video");

      if (!videos.length) return;

      function activateVideo() {
        let index = Math.round(container.scrollTop / window.innerHeight);

        videos.forEach((vid, i) => {
          if (i === index) {
            vid.muted = reels[i].ismuted;
            vid.play().catch(() => { });
          } else {
            vid.pause();
          }
        });
      }

      // Run first time
      activateVideo();

      // When user scrolls up/down reels
      let timer;
      container.addEventListener("scroll", () => {
        clearTimeout(timer);
        timer = setTimeout(activateVideo, 120);
      });

      // HOLD to pause - release to play
      videos.forEach((video, i) => {
        let hold;

        video.addEventListener("pointerdown", () => {
          hold = setTimeout(() => video.pause(), 250); // long press = pause
        });

        function resume() {
          clearTimeout(hold);
          let index = Math.round(container.scrollTop / window.innerHeight);
          if (i === index && !reels[i].ismuted) video.play().catch(() => { });
        }

        video.addEventListener("pointerup", resume);
        video.addEventListener("pointerleave", resume);
      });
    }

    // IMPORTANT: Call this AFTER addData
    setTimeout(() => setupReelsSwipeControl(), 300);

    setTimeout(() => {
      let video = document.querySelectorAll("video")[idx];
      video.muted = reels[idx].ismuted;

      if (!reels[idx].ismuted) {
        video.play();
      }
    }, 0);

  }

});



