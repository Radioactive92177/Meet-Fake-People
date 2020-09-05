// Sample data
const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://thispersondoesnotexist.com/image",
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.querySelector(".profileDisplay").innerHTML = `
    <div class="card-content">
              <div class="row">
                <div class="col s12">
                  <div class="card-image circle">
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
                    <li class="collection-item center-align">Interested in : ${currentProfile.lookingfor}</li>
                  </ul>
                </div>
                <div class="row">
                  <div class="col s12 center-align">
                    <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      id="next"
                    >
                      Next
                      <i class="material-icons right">send</i>
                    </button>
                  </div>
                </div>
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
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex <= profiles.length
        ? { value: profiles[nextIndex+=1], done: false }
        : { done: true };
    },
  };
}
