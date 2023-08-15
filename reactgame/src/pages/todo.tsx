import "./todo.scss";
import { useState, useEffect } from "react";
import { KeyboardEvent } from "react";

function Todo() {

//[State: aktueller wert, setter: Funktion um diesen zu ändern]
    const [todoList, setTodoList] = useState([""] );
    const [todo, setTodo] = useState("");

    useEffect(() => {
        console.log(todoList);
      }, [todoList]);
    
//Eingabeänderung behandeln:
    const handleInputChange = function (e: KeyboardEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;

        setTodo(target.value);
//        console.log(e.code) 
        if (e.code === "Enter") {
            
            const value = target.value;

            setTodo("")
            setTodoList([...todoList, value])

//  ... = spread operator == 2 arrays werden zusammengefügt

        }
        
    };
    

    return (

        <div className="Todo ">
            <section className="todo-introduction has-background-white-ter pt-6">
                <div className="container px-4">
                    <div className="columns my-0 ">

{/*__________Input Todo: das TARGET_________*/}

                        <div className="control pl-6 pr-6 pb-6 pt-6 has-text-left">
                            <div className="is-size-6">My Todo:</div>

                            <input
                                className="input"
                                name="todo"
                                id="todo"
                                type="text "
                                placeholder="Write your To-do here..."
                                defaultValue={todo}
                                onKeyDown={handleInputChange}>
                            </input>

                            <ul className="has-left">
                                {todoList.map((todo, index) => <li key={index}>{index}. {todo}</li>)}
                            </ul>
{/* todo ohne klammer = ein param. todo in klammern (todo) kann nun 2 parameter geben, da ein array natürlich noch ein index besitzt */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Todo;