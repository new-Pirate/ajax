class API {
	_apiUrl = 'https://jsonplaceholder.typicode.com';

  get(url) {
    return this.sendRequest('GET', url);
  }

  post(url, body) {
    return this.sendRequest('POST', url, body);
  }

  put(url) {
    return this.sendRequest('PUT', url);
  }

  delete(url) {
    return this.sendRequest('DELETE', url);
	}
	
	getAllUsers() {
    return this.get('/users/');
  }

  getUser(id) {
    return this.get(`/users/${id}`);
  }

  sendRequest = (method, url, body) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    };

    const config = {
      method,
      headers
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    return fetch(`${this._apiUrl}${url}`, config)
      .then(response => response.json().then(json => {
        return Promise.resolve(json);
      }))
      .catch(error => {
        return Promise.reject(error);
      });
  }
}

const apiUser = new API();
apiUser.getAllUsers()
.then((users) => {
	users.forEach((user) => {
		console.log(user.name);
	})
})