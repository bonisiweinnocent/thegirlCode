
create table messages(
    id serial not null primary key,
    user_message text NOT NULL
  
);

create table proffesionals(
    id serial not null primary key,
    firstname text NOT NULL,
    lastname text NOT NULL,
    proffesion text NOT NULL,
    email text NOT NULL,
    contact text NOT NULL

);




