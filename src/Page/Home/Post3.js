import React from "react"
import blackwidow from "../../img/black-widow.png"
import witches from "../../img/the witches.png"
import tennet from "../../img/Tenet.png"

function Post3 () {
    return(
        <section class="upcoming-movies">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2>Upcoming Movies</h2>
            </div>
            <div class="col d-flex justify-content-end">
              <a href="#">view all</a>
            </div>
          </div>
        </div>
        <div class="container">
          <form class="month-movies">
            <label><input type="radio" name="month" value="september" />
              <div class="month">September</div>
            </label>
            <label><input type="radio" name="month" value="october" />
              <div class="month">October</div>
            </label>
            <label><input type="radio" name="month" value="november" />
              <div class="month">November</div>
            </label>
            <label><input type="radio" name="month" value="december" />
              <div class="month">December</div>
            </label>
            <label><input type="radio" name="month" value="january" />
              <div class="month">January</div>
            </label>
            <label><input type="radio" name="month" value="februari" />
              <div class="month">Februari</div>
            </label>
            <label><input type="radio" name="month" value="march" />
              <div class="month">March</div>
            </label>
            <label><input type="radio" name="month" value="april" />
              <div class="month">April</div>
            </label>
            <label><input type="radio" name="month" value="may" />
              <div class="month">May</div>
            </label>
            <label><input type="radio" name="month" value="june" />
              <div class="month">June</div>
            </label>
            <label><input type="radio" name="month" value="july" />
              <div class="month">July</div>
            </label>
          </form>
          <div class="movies-upcoming">
            <div class="card-movies-upcoming">
              <img src={blackwidow} alt="" />
              <h1>Black Widow</h1>
              <p>Acion, Adventure, Sci-FI</p>
              <a href="details.html" class="btn-details">Details</a>
            </div>
            <div class="card-movies-upcoming">
              <img src={witches} alt="" />
              <h1>The Witches</h1>
              <p>Adventure, Comedy, Family</p>
              <a href="details.html" class="btn-details">Details</a>
            </div>
            <div class="card-movies-upcoming">
              <img src={tennet} alt="" />
              <h1>Tenet</h1>
              <p>Acion, Sci-FI</p>
              <a href="details.html" class="btn-details">Details</a>
            </div>
            <div class="card-movies-upcoming">
              <img src={blackwidow} alt="" />
              <h1>Black Widow</h1>
              <p>Acion, Adventure, Sci-FI</p>
              <a href="details.html" class="btn-details">Details</a>
            </div>
            <div class="card-movies-upcoming">
              <img src={witches} alt="" />
              <h1>The Witches</h1>
              <p>Adventure, Comedy, Family</p>
              <a href="details.html" class="btn-details">Details</a>
            </div>
            <div class="card-movies-upcoming">
              <img src={tennet} alt="" />
              <h1>Tenet</h1>
              <p>Acion, Sci-FI</p>
              <a href="details.html" class="btn-details">Details</a>
            </div>
          </div>
        </div>
      </section>
        
    )
}

export default Post3