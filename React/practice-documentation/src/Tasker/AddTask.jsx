import { useState } from 'react';
import { getNextId } from '../utils';
import { useDispatch, useTasks } from './TaskContex';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const tasks = useTasks();
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: getNextId(tasks),
          text: text,
        });
      }}>Add</button>
    </>
  )
}