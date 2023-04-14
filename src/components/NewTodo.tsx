import React, { useRef } from 'react';
import styles from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}

		props.onAddTodo(enteredText);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<label htmlFor='text'>할 일</label>
			<input type='text' id='text' ref={todoTextInputRef}></input>
			<button>할 일 추가</button>
		</form>
	);
};

export default NewTodo;
