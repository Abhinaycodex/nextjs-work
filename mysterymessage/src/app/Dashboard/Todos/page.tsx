import type { NextPage } from "next";
import { json } from "stream/consumers";

async function getalltodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();

}

export const preloadtodos = ()=>{
    void getalltodos();
}

const TodosPage: NextPage = async () => {
    const todos = await getalltodos();


    return (
        <div >
            <h1 className="text-3xl font-bold">todos baanaao</h1>
            <br />
            <div className="grid grid-cols-3 gap-6 ">
                {
                    todos && Array.isArray(todos) && todos.map((todo: any) => (
                        <div className="border p-3 shadow-lg rounded-lg " key={todo.id}>
                            <h2 className="text-2xl font-bold hover:scale-105  ">{todo.title}</h2>
                        </div>))
                }
            </div>
        </div>
    )
}

export default TodosPage;