import Footer from 'components/Footer'
import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Create() {


    return (
        <div className='contain-create'>
           
            <h1 className='about-title'>Créer votre quizz</h1>
            <Form>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Nom du quizz</Form.Label>
                    <Form.Control
                        autoFocus
                        type="name"
                        value=""
                        onChange={() => console.log("hello")}
                    />
                    <Form.Label>Description du quizz</Form.Label>
                    <Form.Control
                        autoFocus
                        type="description"
                        value=""
                        onChange={() => console.log("hello")}
                    />
                    <Form.Label>Choisissez un thème</Form.Label>
                    <Form.Control
                        autoFocus
                        type="theme-quiz"
                        value=""
                        onChange={() => console.log("hello")}
                    />
                    <Form.Label>Image de présentation
</Form.Label>
<Form.Control
                        autoFocus
                        type="img-quiz"
                        value=""
                        onChange={() => console.log("hello")}
                    />
                    <Form.Label> Votre nom/pseudo </Form.Label>
                    <Form.Control
                        autoFocus
                        type="pseudo"
                        value=""
                        onChange={() => console.log("hello")}
                    />
                    <Form.Label> Votre email </Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value=""
                        onChange={() => console.log("hello")}
                    />
                    <Form.Label> Langue du quiz
</Form.Label>
<Form.Control
                        autoFocus
                        type="langage"
                        value=""
                        onChange={() => console.log("hello")}
                    />
                <Button>Enregistrer</Button>
                </Form.Group>

            </Form>
           
        </div>
    )
}
