import React from 'react';
import Todo from '../models/todo';

import styles from './TodoItem.module.css'

const TodoItem: React.FC<{text: string}> = (props) => {
	return <li className={styles.item}>{props.text}</li>;
};

export default TodoItem;
