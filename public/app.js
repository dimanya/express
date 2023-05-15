document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  } else if (event.target.dataset.type === 'edit') {
    const title = event.target.dataset.title
    const id = event.target.dataset.id
    const newTitle = prompt("enter new text:", title)
    let note = {"title": title, "id": id}
    if(newTitle) {
      note = {"title": newTitle, "id": id}
    }
    
    edit(note)
    
  }
})


async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(note) {
  await fetch(`/${note.id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
    'Content-Type': 'application/json'
    }
    })
}