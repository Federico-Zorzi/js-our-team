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

const gridTeamEl = document.getElementById("grid-team");

const printCard = () => {
  let cardMemberHtml = ``;

  for (let member of teamMembers) {
    let memberName = member.name;
    let upperCaseMemberName = memberName.toUpperCase();

    cardMemberHtml += `
    <div class="col">
      <div class="card">
        <div class="row g-0 text-light bg-black h-100">
          <div class="col-md-4">
            <img src="./${member.img}" class="img-fluid" alt="${member.name} - ${member.role}" />
          </div>
          <div class="col-md-8">
            <div class="card-body h-100">
              <h5 class="fw-bold">${upperCaseMemberName}</h5>
              <span>${member.role}</span>
              <address class="mb-0">
                <a href="#" class="link-info">${member.email}</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
  gridTeamEl.innerHTML = cardMemberHtml;
};

printCard();
