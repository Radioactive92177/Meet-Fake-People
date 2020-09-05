// Sample data
const data = [
  {
    name: faker.name.findName(),
    age: Math.ceil(Math.random() * 30 + 15),
    gender: faker.name.gender(),
    lookingfor: faker.name.gender(),
    image: faker.image.people(),
    phone: faker.phone.phoneNumber(),
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.querySelector("#nextBtn").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.querySelector(".profileDisplay").innerHTML = `
    
              <div class="row">
                <div class="col s12">
                  <div class="card-image">
                    <img
                      class="responsive-img circle"
                      src="${currentProfile.image}"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col s12">
                  <ul class="collection">
                    <li class="collection-item center-align">Name : ${currentProfile.name}</li>
                    <li class="collection-item center-align">Age : ${currentProfile.age}</li>
                    <li class="collection-item center-align">Gender : ${currentProfile.gender}</li>
                    <li class="collection-item center-align">Phone : ${currentProfile.phone}</li>
                    <li class="collection-item center-align">Interested in : ${currentProfile.lookingfor}</li>
                  </ul>
                </div>
                
              </div>
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = -1;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[(nextIndex += 1)], done: false }
        : { done: true };
    },
  };
}
