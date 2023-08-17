import "./todo.scss";
import { useState, ChangeEvent } from "react";
import { KeyboardEvent } from "react";

function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);

    //_____________________________behandeln_der_eingabeänderung__________________________________________________
    const handleInputChange = function (e: KeyboardEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;

        if (e.code === "Enter") {
            const value = target.value;
            setTodoList([...todoList, value]);
            // todolist ist leer
            setTodo("")
            //  ... = spread operator = 2 arrays werden zusammengefügt
        }
    };
    //________________________________changeInput_____________________________________________________________
    const changeInput = function (e: ChangeEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;

        setTodo(target.value);
    };
    //______________________________________deleteButton_________________________________________________________
    const HandleDeleteButton = function (index: number) {

        const newTodoList = [...todoList]
        //_[...TODOLIST]_= kopie erstellen des arrays
        newTodoList.splice(index, 1);

        setTodoList(newTodoList)

        //_MAP_ kann nur eine liste zurück geben die gleichlang ist. 
        //_hat seinen eigenen Scope
        //_SPLICE_ gibt ein neues array 

    }
    //_______________________________return___________________________________________________________________
    return (
        <div className="Todo ">
            <section className="todo-introduction has-background-white-ter pt-6">
                <div className="container px-4">
                    <div className="columns my-0 ">

                        <div className="control pl-6 pr-6 pb-6 pt-6 has-text-left">
                            <div className="is-size-6">My Todo:</div>

                            {/*_____________________Input Todo: das TARGET_______________________*/}
                            <input
                                className="input"
                                type="text"
                                placeholder="Write your To-do here..."
                                value={todo}
                                onKeyDown={handleInputChange}
                                onInput={changeInput}>
                            </input>

                            <ul className="has-left">
                                {/* MAP-ITERATION:Erzeugt eine nummerierte Liste <LI> der To-Dos */}
                                {todoList.map((todo, index) => (
                                    <li key={index}>{index + 1}. {todo}
                                        {/* key={index}: Property, die React erwartet, um Elemente der Liste eindeutig zu identifizieren. 
                                            Der Index wird in diesem Fall als Schlüssel verwendet.*/}

                                        <div className="buttons is-right">
                                            <button
                                                key={index}
                                                id="deleteButton"
                                                className="delete is-medium"
                                                onClick={() => HandleDeleteButton(index)}>
                                            </button>
                                        </div>

                                    </li>))}

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
