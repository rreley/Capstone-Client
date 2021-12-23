import { h, Fragment } from "preact";
import axios from "axios";
import { useLocation } from "wouter-preact";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "preact/hooks";

const SurveyComponent = ({ initial = "", initBool = false }) => {
  const [_location, setLocation] = useLocation();
  const [emailText, setEmailText] = useState(initial);
  const [callNotes, setCallNotes] = useState(initial);
  const [checked, setChecked] = useState(initBool);
  const [disposition, setDisposition] = useState(initial);

  const prospect_id = localStorage.getItem("current_prospect_id");
  // localStorage.removeItem("current_prospect_id");
  const campaign_id = localStorage.getItem("current_campaign_id");
  // localStorage.removeItem("current_campaign_id");

  // console.log(prospect_id, campaign_id);

  const { user } = useAuth0<{
    given_name: string;
    name: string;
    email: string;
    picture: string;
    sub: string;
  }>();

  //console.log(user);

  const submit = async (e: Event) => {
    e.preventDefault();

    try {
      await axios
        .post(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}/calls/add`, {
          caller_id: user!.sub.split("|")[1],
          prospect_id: prospect_id,
          campaign_id: campaign_id,
          emailText,
          callNotes,
          checked,
          disposition,
        })
        .then(() => {
          console.log("Call Info Updated!");
        });
    } catch (e) {
      console.error(e);
    }

    try {
      await axios
        .put(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}/prospects/update`)
        .then(() => {
          console.log("Prospect Updated!");
        });
    } catch (e) {
      console.error(e);
    }

    setLocation("/prospect");
  };

  return (
    <Fragment>
      <p class="title is-4">Disposition</p>

      <form onSubmit={submit}>
        <div class="buttons">
          <button
            id="btndisp"
            class="button is-success"
            onClick={() => setDisposition("Interested")}
          >
            Interested
          </button>
          <button
            id="btndisp"
            class="button is-info"
            onClick={() => setDisposition("Confused")}
          >
            Confused
          </button>
          <button
            id="btndisp"
            class="button is-danger"
            onClick={() => setDisposition("Not Interested")}
          >
            Not Interested
          </button>
          <button
            class="button is-link"
            id="btndisp"
            onClick={() => setDisposition("None")}
          >
            None of the Above
          </button>
        </div>

        <div class="box">
          <div class="field">
            <label class="label">Notes</label>
            <div>
              <textarea
                class="textarea"
                type="input"
                placeholder="e.g. Any Notes"
                onChange={(e) => setCallNotes(e.currentTarget.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="field">
            <label class="checkbox">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.currentTarget.checked)}
              />
              Send an email to the prospect?
            </label>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div>
              <textarea
                class="textarea"
                type="input"
                placeholder="e.g. Send an email"
                onChange={(e) => setEmailText(e.currentTarget.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <button class="button is-primary" type="submit" id="surveybtn">
          Next Prospect
        </button>
      </form>
    </Fragment>
  );
};

export { SurveyComponent };
