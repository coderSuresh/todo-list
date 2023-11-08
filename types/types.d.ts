type ChildrenProps = {
    children: React.ReactNode
}

type ListItemProps = {
    id: string,
    index: number,
    content: string,
    completed: boolean,
    todos: TodoType[],
    handleSort: () => void,
    draggedItem: MutableRefObject<number>,
    dragOverItem: MutableRefObject<number>,
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