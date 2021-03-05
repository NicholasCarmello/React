create database ptodo;

create table todo{

    toDoId Serial PRIMARY KEY,
    completed Boolean,
    todo varChar(500)
};

 