var users = [
    {
        fullName: "Ava Martinez",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        profession: "Software Engineer",
        description: "Ava is a full-stack developer specializing in JavaScript and scalable cloud applications.",
        tags: ["JavaScript", "Cloud", "Full Stack"]
    },
    {
        fullName: "Liam Carter",
        image: "https://i.pinimg.com/736x/4c/a3/38/4ca338a866261b5a0904b52669ae8e97.jpg",
        profession: "Product Designer",
        description: "Liam focuses on building intuitive user experiences and clean product designs.",
        tags: ["UI/UX", "Design", "Figma"]
    },
    {
        fullName: "Sofia Kim",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        profession: "Digital Marketer",
        description: "Sofia specializes in SEO, content marketing, and brand growth strategies.",
        tags: ["SEO", "Marketing", "Content"]
    },
    
    {
        fullName: "Maya Singh",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        profession: "Content Creator",
        description: "Maya produces educational tech videos and digital storytelling content.",
        tags: ["Video Editing", "Tech", "Storytelling"]
    }
]


var sum = ''

users.forEach(function name(elem) {
    sum = sum + `<div class="card">
    <img src="${elem.image}" alt="">
    <h3>${elem.fullName}</h3>
    <h4>${elem.profession}</h4>
    <p>${elem.description}</p>
</div>`
})

var main = document.querySelector('main')
main.innerHTML=sum

