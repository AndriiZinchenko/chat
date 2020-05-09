
const url = 'http://localhost:3001/messages';

const getMessage = () => (
  fetch(url)
	.then((res) => res.json())
)

const addMessage = (message) => (
  fetch(url, {
	method: "POST",
	headers: {
	  "Content-Type": "application/json"
	},
	body: JSON.stringify(message)
  }).then((res) => res.json())
)

const deleteMessage = (id) => (
  fetch(`${url}/${id}`, {
	method: "DELETE",
  }).then((res) => res.json())
)

const editMessage = (id, message) => (
  fetch(`${url}/${id}`, {
	method: "PATCH",
	headers: {
	  "Content-Type": "application/json"
	},
	body: JSON.stringify(message)
  }).then((res) => res.json())
)

export {
  getMessage,
  addMessage,
  editMessage,
  deleteMessage,
}