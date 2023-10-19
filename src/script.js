const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const vBtn = document.querySelector(".view-button");
const Nav = document.querySelectorAll(".nav");
const people = document.querySelector(".google");

openBtn.addEventListener('click', function () {
        Nav.forEach(nav_el => nav_el.classList.add('visible'))
});

closeBtn.addEventListener('click', function () {
        Nav.forEach(nav_el => nav_el.classList.remove('visible'))
});



// -------------------------------------------------------------------------------//


function hideButton(x) {
        x.style.display = "none";
        
};

function myfunction() {
        document.getElementsByClassName(".Map").style.image.backgroundImage = "none";
  
};

vBtn.addEventListener('click', () => {
        // Map.classList.remove("show");
       people.classList.remove("show")
});
// -------------------------------------------------------------------------------//

const corsOptions = {
        origin: 'http://your-react-app-domain.com', // Replace with your React app's domain
        optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));


