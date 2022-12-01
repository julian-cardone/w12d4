// // frontend/src/components/LoginFormPage/index.js

// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import './LoginForm.css'

// function LoginFormPage() {
//     const dispatch = useDispatch();
//     const sessionUser = useSelector(state => state.session.user);
//     const [credential, setCredential] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState([]);

//     if (sessionUser) return <Redirect to="/" />;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setErrors([]);
//         return dispatch(sessionActions.login({ credential, password }))
//             .catch(async (res) => {
//                 let data;
//                 try {
//                     // .clone() essentially allows you to read the response body twice
//                     data = await res.clone().json();
//                 } catch {
//                     data = await res.text(); // Will hit this case if the server is down
//                 }
//                 if (data?.errors) setErrors(data.errors);
//                 else if (data) setErrors([data]);
//                 else setErrors([res.statusText]);
//             });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <ul>
//                 {errors.map(error => <li key={error}>{error}</li>)}
//             </ul>
//             <label>
//                 Username or Email
//                 <input
//                     type="text"
//                     value={credential}
//                     onChange={(e) => setCredential(e.target.value)}
//                     required
//                 />
//             </label>
//             <label>
//                 Password
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </label>
//             <button type="submit">Log In</button>
//         </form>
//     );
// }

// export default LoginFormPage;

// frontend/src/components/LoginFormModal/index.js

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    debugger
    return (
        <>
            <button onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;