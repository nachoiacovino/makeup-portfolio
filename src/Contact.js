import React, {useState} from 'react'
import axios from 'axios'
import useInputState from './hooks/useInputState'
import './Contact.css'

export default function SimpleFormHooks() {
    const [name, setName, resetName] = useInputState("")
    const [email, setEmail, resetEmail] = useInputState("")
    const [message, setMessage, resetMessage] = useInputState("")
    const [mailSent, setMailSent] = useState(false)
    const [error, setError] = useState(null)

    const API_PATH = '../api/contact/index.php'

    const handleReset = e => {
        resetName()
        resetEmail()
        resetMessage()
    }

    const handleSubmit = async e => {
        e.preventDefault()
        let data = {name, email, message}
        console.log(data)
        // const res = await axios.post(API_PATH, data)
        // setMailSent(res.data.sent)

        // console.log(mailSent)

        axios({
            method: 'post',
            url: API_PATH,
            headers: { 'content-type': 'application/json' },
            data: data
          })
            .then(res => setMailSent(res.data.sent))
            .catch(error => setError(error))

        handleReset()
    }

    return (
        <>
            <form action="#">
                <div className="card">
                    <div className="card-body">
                        <div className="form-header accent-1">
                            <h3 className="mt-2"><i className="fas fa-envelope"></i>Contacta conmigo!</h3>
                        </div>
                        <p className="dark-grey-text">Puedes pedirme presupuesto, proponerme proyectos, colaboraciones... espero tu mensaje!</p>
                        <div className="md-form">
                            <i className="fas fa-user prefix grey-text"></i>
                            <label htmlFor="form-name">Nombre</label>
                            <input type="text" name="name" id="form-name" value={name} onChange={setName} className="form-control" />
                        </div>
                        <div className="md-form">
                            <i className="fas fa-envelope prefix grey-text"></i>
                            <label htmlFor="form-email">Email</label>
                            <input type="email" name="email" id="form-email" value={email} onChange={setEmail} className="form-control" />
                        </div>
                        <div className="md-form">
                            <i className="fas fa-pencil-alt prefix grey-text"></i>
                            <label htmlFor="form-text">Mensaje</label>
                            <textarea id="form-text" name="message" value={message} onChange={setMessage} className="form-control md-textarea" rows="4"></textarea>
                        </div>
                        <div className="text-center">
                            <button onClick={handleSubmit} className="btn btn-primary mt-3 w-100">Enviar</button>
                        </div>
                    </div>
                </div>
                <div>
                    {mailSent && "Gracias por contactarme!"}
                    {error && `${error}`}
                </div>
            </form>
            <div className="card-body contact text-center h-100 white-text">
                <h3 className="my-4 pb-2">Contact information</h3>
                <ul className="text-lg-left list-unstyled ml-4">
                    <li>
                        <p><i className="fas fa-map-marker-alt pr-2"></i>New York, 94126, USA</p>
                    </li>
                    <li>
                        <p><i className="fas fa-phone pr-2"></i>+ 01 234 567 89</p>
                    </li>
                    <li>
                        <p><i className="fas fa-envelope pr-2"></i>contact@example.com</p>
                    </li>
                </ul>
                <hr className="hr-light my-4"/>
                <ul className="list-inline text-center list-unstyled">
                    <li className="list-inline-item">
                        <a href="/" className="p-2 fa-lg tw-ic">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="p-2 fa-lg li-ic">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="p-2 fa-lg ins-ic">
                            <i className="fab fa-instagram"> </i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

