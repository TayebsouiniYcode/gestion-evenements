<template>
  <div>
    <div class="clubs">
      <div class="mt-5">
        <div class="club__title club__title--section d-flex justify-content-between">
          <h2>Clubs</h2>
          <div>
            <a @click="seeMoreClub()" class="text-black" href="#!">See more</a>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 mt-5">
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Hollywood Sign on The Hill" />
              <div class="card-body">
                <h5 class="card-title">TechCon 2023</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Explore the latest in technology and innovation at TechCon 2023. Join us for a deep dive into emerging trends and networking opportunities.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Palm Springs Road" />
              <div class="card-body">
                <h5 class="card-title">Artistry Showcase</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Recharge your mind, body, and spirit at the Wellness Retreat. Enjoy yoga, meditation, and holistic wellness practices.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Los Angeles Skyscrapers" />
              <div class="card-body">
                <h5 class="card-title">Wellness Retreat</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">Immerse yourself in a world of creativity and art at the Artistry Showcase. Experience a diverse range of artistic expressions.</p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/3023317/pexels-photo-3023317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Skyscrapers" />
              <div class="card-body">
                <h5 class="card-title">MusicFest 2023</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Get ready for a music extravaganza! MusicFest 2023 brings together top artists for an unforgettable musical experience.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="gigs">
      <div class="mt-5">
        <div class="club__title club__title--section d-flex justify-content-between">
          <h2>Gigs</h2>
          <div>
            <a class="text-black" href="#!">See more</a>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 mt-5">
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Hollywood Sign on The Hill" />
              <div class="card-body">
                <h5 class="card-title">Startup Summit</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Join the Startup Summit to learn from successful entrepreneurs, pitch your ideas, and connect with investors.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/348517/pexels-photo-348517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Palm Springs Road" />
              <div class="card-body">
                <h5 class="card-title">Foodie Fiesta</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Indulge in a culinary adventure at the Foodie Fiesta. Taste delectable dishes from around the world and savor gourmet delights.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Los Angeles Skyscrapers" />
              <div class="card-body">
                <h5 class="card-title">Fashion Forward</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Unleash your style at Fashion Forward. Witness runway shows, meet fashion designers, and get the latest fashion insights.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top"
                   alt="Skyscrapers" />
              <div class="card-body">
                <h5 class="card-title">Environmental Symposium</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Discover solutions for a sustainable future at the Environmental Symposium. Engage in discussions about conservation and eco-friendly practices.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="festivals">
      <div class="mt-5">
        <div class="club__title club__title--section d-flex justify-content-between">
          <h2>Festivals</h2>
          <div>
            <a class="text-black" href="#!">See more</a>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 mt-5">
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/2477377/pexels-photo-2477377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Hollywood Sign on The Hill" />
              <div class="card-body">
                <h5 class="card-title">Sports Extravaganza</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Cheer for your favorite teams at the Sports Extravaganza. Experience the thrill of athletic competition and sportsmanship.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/3274551/pexels-photo-3274551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Palm Springs Road" />
              <div class="card-body">
                <h5 class="card-title">Film Festival</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Celebrate the art of filmmaking at the Film Festival. Watch thought-provoking films and interact with filmmakers.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/2774572/pexels-photo-2774572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Los Angeles Skyscrapers" />
              <div class="card-body">
                <h5 class="card-title">Science and Innovation Expo</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">
                  Dive into the world of science and innovation at the Expo. Experience groundbreaking discoveries and experiments.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Skyscrapers" />
              <div class="card-body">
                <h5 class="card-title">Charity Gala</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start ">
                  Make a difference at the Charity Gala. Contribute to noble causes and support philanthropic initiatives.
                </p>
              </div>
              <div class="card-footer text-success">
                23 tickets disponibles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export  default {
  name: "MainSection",
  data() {
    return {
      seeMoreClubEvents: false
    }
  },
  mounted() {
  },
  methods: {
    seeMoreClub : function() {
      this.seeMoreClubEvents = true;
      console.log(this.seeMoreClubEvents);
    }
  }
}
</script>