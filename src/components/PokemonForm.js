import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setRun}) {
  
  const [sprites, setSprites] = useState({
    back: "",
    front: ""
  })
  const [form, setForm] = useState({
    hp: "",
    name: "",
    sprites: {}
    })

  function onFormUpate(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }
  function onSpriteUpdate(e) {
    setSprites({...sprites,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const updatedForm = {...form, sprites}
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedForm)
    })
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
      setRun((run) => run + 1)
    
    })
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={onFormUpate} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={onFormUpate} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={onSpriteUpdate}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
          />
          <Form.Input
            onChange={onSpriteUpdate}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
