import axios from 'axios';
import Button from "react-bootstrap/Button";

const DeleteAdoptable = (props) => {
    
    function handleSubmit(event) {
        event.preventDefault();
        let number = props.pet;
        deletePet(number);
      }

      async function deletePet(number) {
        await axios.delete(`http://127.0.0.1:8000/api/animals/${number.id}/`);
        window.location.reload()
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <Button variant="light" style={{background:"#800080", margin: ".5%", outline: "none", color: "whitesmoke"}}  type="submit">Delete</Button>
        </form>
      );
    };


export default DeleteAdoptable;