import TodoList from "../To-doList/TodoList";

const AllTask = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 my-5">
            <div className="">
                <TodoList />
            </div>
            <div className="bg-gray-500">
                <h1 className="text-2xl font-semibold">Ongoing</h1>
            </div>
            <div className="bg-blue-500">
                <h1 className="text-2xl font-semibold">Completed</h1>
            </div>
        </div>
    );
};

export default AllTask;