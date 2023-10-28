type ChildrenProps = {
    children: React.ReactNode
}

type ListItemProps = {
    id: string,
    content: string,
    completed: boolean,
    todos: TodoType[],
}

type TodoType = {
    id: number,
    content: string,
    completed: boolean
}

type ListControlProps = {
    len: number,
    todos: TodoType[],
}