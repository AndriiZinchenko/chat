
const url = 'http://localhost:3001/users';

const getUser = () => (
  fetch(url)
	.then((res) => res.json())
)

const addUser = (message) => (
  fetch(url, {
	method: "POST",
	headers: {
	  "Content-Type": "application/json"
	},
	body: JSON.stringify(message)
  }).then((res) => res.json())
)

export {
  getUser,
  addUser,
}