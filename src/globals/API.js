const api = ({ method = 'GET', uri, body, headers, token }) =>
  new Promise(async (resolve, reject) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      token && myHeaders.append('Authorization', 'Bearer ' + token);

      const response = await fetch(uri, {
        method,
        headers: headers || myHeaders,
        body,
      });
      if (!response.ok) {
        throw response;
      }
      let data = await response.json();
      console.log('[API Data]:', data);
      resolve(data);
    } catch (err) {
      alert('There was an error: ' + err.statusText);
      console.log('[API Error]:', err);
      reject(err);
    }
  });

export default api;
