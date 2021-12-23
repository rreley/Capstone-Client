import { h } from "preact";
import { useState } from "preact/hooks";
import { useAuth0 } from "@auth0/auth0-react";
import { Wrapper } from "../components/wrapper";

interface API_Response {
  message: string;
  result: JSON;
  (prevState: string): string;
}

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const [testProspect, setTestProspect] = useState("");
  const [nextProspect, setNextProspect] = useState("");
  const [prospect, setProspect] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  ////////////////////////////////////////////
  const callApi = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/test/public`
      );
      const responseData = await response.json();
      console.log(responseData);
      setMessage(responseData.message);
    } catch (e) {
      console.error(e);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/test/private`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setMessage(responseData.message);
    } catch (e) {
      console.error(e);
    }
  };

  const callTestProspect = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/test/prospects`
      );
      const responseData: API_Response = await response.json();
      console.log(responseData);
      setTestProspect(responseData);
    } catch (e) {
      console.error(e);
    }
  };

  const callProspect = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/prospects`
      );
      const responseData: API_Response = await response.json();
      console.log(responseData);
      setProspect(responseData);
    } catch (e) {
      console.error(e);
    }
  };

  const callNextProspect = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/prospects/next`
      );
      const responseData: API_Response = await response.json();
      console.log(responseData);
      setNextProspect(responseData);
    } catch (e) {
      console.error(e);
    }
  };

  ////////////////////////////////////////////

  return (
    <Wrapper>
      <div class="box">
        <div class="card">
          <p>
            Use these buttons to call an external API. The protected API call
            has an access token in its authorization header. The API server will
            validate the access token using the Auth0 Audience value.
          </p>
        </div>
      </div>
      <div className="tests box">
        <h2>GET -&gt; / tests / public </h2>
        <h2>GET -&gt; / tests / private </h2>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="Call /api/test/public and /api/test/private "
        >
          <button type="button" className="btn btn-primary" onClick={callApi}>
            Get Public Message
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={callSecureApi}
          >
            Get private Message
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setMessage("")}
          >
            Clear
          </button>
        </div>
        {message && (
          <div className="mt-5">
            <h6 className="muted">Result</h6>
            <br />
            <div className="container-fluid">
              <div className="row">
                <code className="col-12 text-light bg-dark p-4">{message}</code>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <div className="test-prospects box">
        <h2>GET -&gt; / test / prospects</h2>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="Call /api/test/prospects"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={callTestProspect}
          >
            Get Test Prospect
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTestProspect("")}
          >
            Clear
          </button>
          {testProspect && (
            <div className="mt-5">
              <h6 className="muted">Result</h6>
              <br />
              <div className="container-fluid">
                <div className="row">
                  <code className="col-12 text-light bg-dark p-4 ">
                    {/*@ts-ignore*/}
                    {testProspect.message}
                  </code>
                  <br />
                  <br />
                  <br />

                  <p className="col-12 text-light bg-dark p-4 card">
                    {/*@ts-ignore*/}
                    {JSON.stringify(testProspect.result, null, 2)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <br />
      <div className="prospects box">
        <h2>GET -&gt; / prospects</h2>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="Call /api/prospects"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={callProspect}
          >
            Get Prospect
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setProspect("")}
          >
            Clear
          </button>
          {prospect && (
            <div className="mt-5">
              <h6 className="muted">Result</h6>
              <br />
              <div className="container-fluid">
                <div className="row">
                  <code className="col-12 text-light bg-dark p-4">
                    {/*@ts-ignore*/}
                    {JSON.stringify(prospect.message, null, 2)}
                  </code>
                  <p className="col-12 text-light bg-dark p-4">
                    {/*@ts-ignore*/}
                    {JSON.stringify(prospect.result, null, 2)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <br />
      <div className="next_prospect box">
        <h2>GET -&gt; / prospects / next</h2>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="Call /api/prospect/next"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={callNextProspect}
          >
            Get Next Prospect
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setNextProspect("")}
          >
            Clear
          </button>
          {nextProspect && (
            <div className="mt-5">
              <h6 className="muted">Result</h6>
              <br />
              <div className="container-fluid">
                <div className="row">
                  <code className="col-12 text-light bg-dark p-4">
                    {/*@ts-ignore*/}
                    {JSON.stringify(nextProspect.message, null, 2)}
                  </code>
                  <p className="col-12 text-light bg-dark p-4">
                    {/*@ts-ignore*/}
                    {JSON.stringify(nextProspect.result, null, 2)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ExternalApi;
