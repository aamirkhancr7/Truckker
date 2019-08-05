import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

// import questions image
import question from '../img/questions.png';

// Animate Effect
import ScrollEffect from 'react-animate-on-scroll';

class Form extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        title: '',
        comments: ''
    };

    changeEvent = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    submitBtn = async (evt) => {
        evt.preventDefault()

        const { firstname, lastname, comments, email, title } = this.state;

        Swal.fire('Sumbitted successfully');

        await axios.post('/api/form', {
            firstname,
            lastname,
            email,
            title,
            comments
        });

    }

    render() {
        const { firstname, lastname, comments, email, title } = this.state;
        return (
            <div className="formContainer">
                <div className="formElement">
                    <h5>FEEL FREE TO DROP A QUESTION</h5>
                    <form onSubmit={this.submitBtn} className="formElement">
                        <input type="text" name="firstname" placeholder="Firstname" onChange={(evt) => this.changeEvent(evt)} value={firstname} required />
                        <input type="text" name="lastname" placeholder="Lastname" onChange={(evt) => this.changeEvent(evt)} value={lastname} />
                        <input type="email" name="email" placeholder="Email" onChange={(evt) => this.changeEvent(evt)} value={email} required />
                        <input type="text" name="title" placeholder="Title" onChange={(evt) => this.changeEvent(evt)} value={title} required />
                        <textarea rows="5" cols="60" name="comments" placeholder="Comments" onChange={(evt) => this.changeEvent(evt)} value={comments} required />
                        <button> Submit </button>
                    </form>
                </div>
                <ScrollEffect animateIn="zoomIn">
                    <div className="formImage">
                        <img src={question} alt="Questions..?" />
                    </div>
                </ScrollEffect>
            </div>
        );
    }
}

export default Form;
