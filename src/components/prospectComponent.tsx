import { h, Fragment } from "preact";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "preact/hooks";
import { Loading } from "./loading";
import { Link, Redirect, useLocation } from "wouter-preact";
import type { Prospect } from "../interfaces/prospect.interface";

const ProspectComponent = () => {
  // const [location, setLocation] = useLocation();

  const [prospect, setProspect] = useState<Prospect>();
  const { isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const fetchProspect = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/prospects/next`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      setProspect(responseData.result);

      localStorage.setItem(
        "current_prospect_id",
        responseData.result.prospect_id.toString()
      );
      localStorage.setItem(
        "current_campaign_id",
        responseData.result.campaign_id.toString()
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProspect();
  }, []);

  return (
    <Fragment>
      {!prospect && <Loading />}

      {prospect && (
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column is-4">
                <div class="box">
                  <div class="content">
                    <label class="label">Name</label>
                    <p>
                      {prospect.first_name + " "}
                      {prospect.middle_name + " "}
                      {prospect.last_name}
                    </p>
                  </div>
                  <div class="content">
                    <label class="label">Admission Type</label>
                    <p>{prospect.admission_type}</p>
                  </div>
                  <div class="content">
                    <label class="label">Term</label>
                    <p>{prospect.term}</p>
                  </div>
                  <div class="content">
                    <label class="label">Admit Date</label>
                    <p>{prospect.admit_date.split("T")[0]}</p>
                  </div>
                  <div class="content">
                    <label class="label">Sex</label>
                    <p>{prospect.sex}</p>
                  </div>
                  <div class="content">
                    <label class="label">Ethnicity</label>
                    {prospect.ethnicity}
                  </div>
                  <div class="content">
                    <label class="label">City</label>
                    <p>{prospect.city}</p>
                  </div>
                  <div class="content">
                    <label class="label">State</label>
                    <p>{prospect.state}</p>
                  </div>
                </div>
              </div>
              <div class="column is-8">
                <div className="box">
                  <div class="content">
                    <label class="label">Phone #</label>
                    <p>{prospect.phone_number}</p>
                  </div>
                </div>

                <div class="box">
                  <div class="content">
                    <label class="label">Primary Program</label>
                    <p>{prospect.primary_program_name}</p>
                  </div>
                  <div class="content">
                    <label class="label">Primary Department</label>
                    <p>{prospect.primary_department_name}</p>
                  </div>
                </div>
                <div class="box">
                  <div class="content">
                    <label class="label">Secondary Program</label>
                    <p>{prospect.secondary_program_name}</p>
                  </div>
                  <div class="content">
                    <label class="label">Secondary Department</label>
                    <p>{prospect.secondary_department_name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Link
                      href="/survey"
                      class="button is-primary is-large"
                      id="btn"
                    >
                      Survey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export { ProspectComponent };
