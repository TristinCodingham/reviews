const reviews = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "job": "WEB DEVELOPER",
      "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat non at, possimus veritatis accusantium neque a illum quis omnis.",
      "img": "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "job": "DATA ANALYST",
      "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi animi consectetur quia earum eum facere enim voluptate assumenda obcaecati.",
      "img": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "job": "DEVOPS",
      "info": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga atque sunt magni recusandae. Numquam eaque, atque iure minus repellendus voluptatum.",
      "img": "https://randomuser.me/api/portraits/women/35.jpg"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "job": "FRONTEND DEVELOPER",
      "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis suscipit? Dolorem facilis commodi asperiores, cupiditate nesciunt quia consequuntur in.",
      "img": "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      "id": 5,
      "name": "Chad Dietrich",
      "job": "UI DESIGNER",
      "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti, dolores sunt aperiam facere voluptates pariatur molestias ipsum dignissimos omnis.",
      "img": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "job": "UX/UI DESIGNER",
      "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maiores recusandae architecto libero iste nostrum molestias sequi ipsa illum. Quaerat!",
      "img": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "job": "BACKEND DEVELOPER",
      "info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis fugit consequatur ex reprehenderit soluta nihil deleniti rem nostrum aliquam?",
      "img": "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "job": "TECH LEAD",
      "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae, aut exercitationem impedit unde voluptatem atque inventore ut voluptas. Aliquid!",
      "img": "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
      "id": 9,
      "name": "Jacob Reichert",
      "job": "FULLSTACK DEVELOPER",
      "info": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolores numquam ipsum magnam delectus corrupti aliquid facilis dolor distinctio iusto?",
      "img": "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "job": "FRONTEND DEVELOPER",
      "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magni temporibus ipsa beatae impedit illo cupiditate quis quasi est esse!",
      "img": "https://randomuser.me/api/portraits/women/21.jpg"
    }
  ]

  const personImg = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let counter = 0;

  personImg.setAttribute('src', "https://randomuser.me/api/portraits/women/75.jpg");
  author.innerHTML = reviews[counter].name;
  job.innerHTML = reviews[counter].job;
  info.innerHTML = reviews[counter].info;

  const nextImage = () => {
    counter++;

    if (counter >= 10)
        counter = 0;
    let review = reviews[counter];
    personImg.setAttribute('src', review.img);
    author.innerHTML = review.name;
    job.innerHTML = review.job;
    info.innerHTML = review.info;
  }
  const prevImage = () => {
    counter--;

    if (counter <= -1)
        counter = 9;
    let review = reviews[counter];
    personImg.setAttribute('src', review.img);
    author.innerHTML = review.name;
    job.innerHTML = review.job;
    info.innerHTML = review.info;
  }

  nextBtn.onclick = nextImage;
  prevBtn.onclick = prevImage;