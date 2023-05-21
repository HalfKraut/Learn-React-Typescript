/**
 * This is the model for each item in the todo list.
 * Contains the properties in the interface for the todo list items.
 *
 */

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}
