import TodoValue from "./TodoValue";

import { useState, useEffect } from "react";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useSelector } from "react-redux";

export default function DraggableTodo() {
  const todoLists = useSelector((state) => state.todo.todoList);
  let [items, setItems] = useState([...todoLists]);

  useEffect(() => {
    setItems([...todoLists]);
  }, [todoLists]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((el) => (
          <TodoValue key={el} id={el} text={el} iconCheck={true} />
        ))}
      </SortableContext>
    </DndContext>
  );
  function handleDragEnd(event) {
    const { active, over } = event;
    if (items.length) {
      if (active.id !== over.id) {
        setItems((items) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  }
}
