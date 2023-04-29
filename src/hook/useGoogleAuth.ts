// 2. Initialize the JavaScript client library.

// 1. Load the JavaScript client library.
export function useGoogleAuth() {
  const start = () => {
    gapi.client
      .init({
        apiKey: "AIzaSyCRoOI9u3wuz9FsOpv1RUTCPfc_aLfjiyM",
        // clientId and scope are optional if auth is not required.
        clientId:
          "553646874510-mkfn8gluiq1rde9968rg408deivm4ntf.apps.googleusercontent.com",
        scope: "profile",
      })
      .then(function () {
        // 3. Initialize and make the API request.
        return gapi.client.request({
          path: "https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names",
        });
      })
      .then(
        function (response) {
          console.log(response.result);
        },
        function (reason) {
          console.log(reason);
        }
      );
  };
  gapi.load("client", start);
}
