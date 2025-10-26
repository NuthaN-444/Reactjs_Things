import {useState , createContext , useContext } from 'react';



const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todoList,setTodoList] = useState([

            {
                id : 1,
                todoTitle : "Learn React",
                todoCompleted : false,
            }
        
])
    
    
    return (
         <TodoContext.Provider value={{todoList,setTodoList}} >
            {children}
        </TodoContext.Provider>
    )
}

export const UseTodoContext = () => useContext(TodoContext);
