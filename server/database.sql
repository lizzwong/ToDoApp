CREATE TABLE tasks(
id serial primary key,
dateadded date,
task varchar(200),
status varchar(15)
);

INSERT INTO tasks (dateadded, task, status)
VALUES ('2/16/2018','Finish weekend 3 homework', 'Complete' ), ('5/4/2018', 'Get a job', 'Incomplete');