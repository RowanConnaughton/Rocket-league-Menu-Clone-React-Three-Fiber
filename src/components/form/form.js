import React from "react";

import './form.styles.scss'

const Form = () => {
  return (
    <form className="form">
        <div className="form__search">
      <label className="form-control">
        Title:
        <input type="text" name="title" />
      </label>
      <label className="form-control">
        Player:
        <input type="text" name="player" />
      </label>
      </div>

        <div className="form__checkboxes-container">
      <div className="form__checkboxes">
        <label className="form-control">Ranked:</label>
        <label className="form-control">
          Ranked Duels
          <input type="checkbox" name="ranked-duels" />
        </label>
        <label className="form-control">
          Ranked Doubles
          <input type="checkbox" name="ranked-doubles" />
        </label>
        <label className="form-control">
          Ranked Solo Standard
          <input type="checkbox" name="ranked-solo-standard" />
        </label>
        <label className="form-control">
          Ranked Standard
          <input type="checkbox" name="ranked-standard" />
        </label>
      </div>

      <div className="form__checkboxes">
        <label className="form-control">Unranked:</label>
        <label className="form-control">
        Unranked Duels
          <input type="checkbox" name="unranked-duels" />
        </label>
        <label className="form-control">
        Unranked Doubles
          <input type="checkbox" name="unranked-doubles" />
        </label>
        <label className="form-control">
        Unranked Solo Standard
          <input type="checkbox" name="unranked-solo-standard" />
        </label>
        <label className="form-control">
        Unranked Standard
          <input type="checkbox" name="Unranked-standard" />
        </label>
      </div>

      <div className="form__checkboxes">
        <label className="form-control">Extra Modes:</label>
        <label className="form-control">
        Ranked Hoops
          <input type="checkbox" name="ranked-hoops" />
        </label>
        <label className="form-control">
        Ranked Rumble
          <input type="checkbox" name="ranked-rumble" />
        </label>
        <label className="form-control">
        Ranked Dropshot
          <input type="checkbox" name="ranked-dropshot" />
        </label>
        <label className="form-control">
        Ranked SnowDay
          <input type="checkbox" name="ranked-snowday" />
        </label>
      </div>


      <div className="form__checkboxes">
        <label className="form-control">Other Modes:</label>
        <label className="form-control">
        Tournament
          <input type="checkbox" name="tournament" />
        </label>
        <label className="form-control">
        Heatseeker
          <input type="checkbox" name="heatseeker" />
        </label>
        <label className="form-control">
        Gridiron
          <input type="checkbox" name="gridiron" />
        </label>
        <label className="form-control">
        RocketLabs
          <input type="checkbox" name="rocketlabs" />
        </label>     
      </div>


      </div>

      

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
