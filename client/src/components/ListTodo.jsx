import React from 'react';

const ListTodo = () => {
    const [todos, setTodos] = React.useState([]);
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    React.useEffect(() => {
        getTodos();
    }, []);
    return (
        <React.Fragment>
            {/* <table className="table table-hover mt-5 text-center"> */}
            <table className='table table-striped mt-5 text-center'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><button className=''></button></td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { deleteTodo(todo.todo_id) }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default ListTodo;
