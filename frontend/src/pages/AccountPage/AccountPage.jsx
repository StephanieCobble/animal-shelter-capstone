import axios from "axios";
import reactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm"

let initialValues = {
    user: "",
    first_name: "",
    last_name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
}

const AccountPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewAdopter)

    async function postNewAdopter(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/adopters/account/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return ( 
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    User: {" "}
                    <input
                    type="text"
                    name="user"
                    value={formData.user}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    First Name: {" "}
                    <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Last Name: {" "}
                    <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Street: {" "}
                    <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    City: {" "}
                    <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    State: {" "}
                    <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Zipcode: {" "}
                    <input
                    type="text"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    />
                </label>
                <button>Submit</button>
            </form>

        </div>
     );
}
 
export default AccountPage;