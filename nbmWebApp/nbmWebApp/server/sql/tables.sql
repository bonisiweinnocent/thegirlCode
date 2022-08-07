create table messages(
    id serial not null primary key,
    user_message text NOT NULL
);

create table motivations(
    id serial not null primary key,
    motivation_message text NOT NULL
);

create table proffesionals(
    id serial not null primary key,
    firstname text NOT NULL,
    lastname text NOT NULL,
    username text NOT NULL,
    passauth text NOT NULL,
    proffesion text NOT NULL,
    practiceNo int,
    email text NOT NULL,
    contact text
);