import { h, Fragment } from "preact";
import { useAuth0 } from "@auth0/auth0-react";
//import { Link } from "wouter-preact";
import { useEffect, useState } from "preact/hooks";
import axios from "axios";

const Profile = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const { user } = useAuth0<{
    given_name: string;
    name: string;
    email: string;
    picture: string;
    sub: string;
  }>();

  const [userMetadata, setUserMetadata] = useState(null);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const getUserMetadata = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://brogrammers.us.auth0.com/api/v2/",
        scope: "read:current_user",
      });

      const userDetailsByIdUrl = `https://brogrammers.us.auth0.com/api/v2/users/${user?.sub}`;

      const metadataResponse = await axios.get(userDetailsByIdUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { user_metadata } = await metadataResponse.data;

      console.log(user_metadata);

      setUserMetadata(user_metadata);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <Fragment>
      <div class="box">
        {isAuthenticated && user && (
          <div>
            <figure class="image is-128x128">
              <img src={user!.picture} alt={user!.name} class="is-rounded" />
            </figure>
            <div class="box">
              <div class="content ">
                <h2>{user!.name}</h2>
                <p>{user!.email}</p>
                <h3> User Metadata</h3>
                {userMetadata ? (
                  <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                  "No user metadata defined"
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export { Profile };
