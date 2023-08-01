
import styles from "../style.module.css";
import shortid from "shortid";

const Form = ({todo,setTodo,todoList,setTodoList})=>{
    const handleChange = (event)=>{
        setTodo(event.target.value);
       }

    
    const handleSumbit =(event)=>{
        event.preventDefault();
        setTodoList([...todoList,{name:todo,id:shortid.generate()}]);
        console.log(todoList);
        setTodo("");
    }


    return(
        <div className={styles.todoform}>
            <form onSubmit={handleSumbit}>
                <input 
                value={todo}
                onChange={handleChange}
                className={styles.todoinput}
                placeholder = "Add Todo Item">

                </input>
                <button className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
}

export default Form;