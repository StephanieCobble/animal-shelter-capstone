import axios from 'axios';
import Button from "react-bootstrap/Button";

const DeleteLost = (props) => {
    
    function handleSubmit(event) {
        event.preventDefault();
        let number = props.pet;
        deletePet(number);
      }

      async function deletePet(number) {
        await axios.delete(`http://127.0.0.1:8000/api/lost/${number.id}/`);
        window.location.reload()
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <Button variant="primary"  type="submit">Delete</Button>
        </form>
      );
    };


export default DeleteLost;