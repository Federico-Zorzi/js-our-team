const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// * raccolgo gli elementi dal HTML
const gridTeamEl = document.getElementById("grid-team");

const fullnameEl = document.getElementById("card-fullname");
const roleEl = document.getElementById("card-role");
const emailEl = document.getElementById("card-email");
const imageEl = document.getElementById("card-image");
const addMemberEl = document.getElementById("add-member");

const textUpperCase = (text) => {
  let newText = text.toUpperCase();
  return newText;
};

const printCard = (name, role, email, image) => {
  return `
    <div class="col">
      <div class="card">
        <div class="row g-0 text-light bg-black h-100">
          <div class="col-md-4">
            <img src="./${image}" class="img-fluid" alt="${name} - ${role}" />
          </div>
          <div class="col-md-8">
            <div class="card-body h-100">
              <h5 class="fw-bold">${textUpperCase(name)}</h5>
              <span>${role}</span>
              <address class="mb-0">
                <a href="#" class="link-info">${email}</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};

// * funzione aggiungi card
const addCard = () => {
  let cardMemberHtml = ``;

  for (let member of teamMembers) {
    cardMemberHtml += printCard(
      member.name,
      member.role,
      member.email,
      member.img
    );
  }
  gridTeamEl.innerHTML = cardMemberHtml;
};

const addMember = () => {
  let name = fullnameEl.value;
  let role = roleEl.value;
  let email = emailEl.value;
  let img = imageEl.value;

  return teamMembers.push({ name, role, email, img });
};

addCard();

addMemberEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addMember();
  addCard();
});
