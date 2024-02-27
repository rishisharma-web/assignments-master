/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor()
  {
    this.array=[];
    
  }
  add(todo)
  {
   
 
    this.array.push(todo);

  }
  remove(index)
  {
if(index<this.array.length)
    this.array.splice(index, 1);
    
  }
  update(index, updatedTodo)
  {
 if(index<this.array.length)
    this.array[index]=updatedTodo;
   
  }
getAll()
{
  return this.array;
}
get(indexOfTodo)
{
 if(indexOfTodo<this.array.length)
  return this.array[indexOfTodo];
else
return null;
}
clear()
{
  this.array.splice(0, this.array.length);

}
}

module.exports = Todo;
