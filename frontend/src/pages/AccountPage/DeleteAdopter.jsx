import axios from 'axios';
import Button from "react-bootstrap/Button";

const DeleteAdopter = (props) => {
    
    function handleSubmit(event) {
        event.preventDefault();
        let number = props.adopter;
        deleteAdopter(number);
      }

      async function deleteAdopter(number) {
        await axios.delete(`http://127.0.0.1:8000/api/adopters/${number.id}/`);
        window.location.reload()
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <Button variant="light" style={{background:"#800080", margin: ".5%", outline: "none", color: "whitesmoke"}}  type="submit">Delete</Button>
        </form>
      );
    };


export default DeleteAdopter;