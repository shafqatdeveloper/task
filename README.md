I used the find method of mongo database to find the desired results from database.
First i made a Query Function and passed the status as an argument to this function.And received the status as req.query from the Request.
Then in the body of this Query function i initialized the variable query as an empty object.
Then i used if statement to check whether there is any status in Query of the Request.
if there is any status in req.query.status then the value of the status will be assigned to query variable anf if there is no value of status the it will be empty.
Then i returned the query variable from this function.

After this, in the "find" method of mongodb i passed the query and {} which is used for options to find method.
It will return the tasks based on the query which is basically a string.
if there is any value of query which is passed to "find" then it will filter the results based on value.
And if there is no value of query or query string is an empty string then it will show all the tasks present in the database regardless of their status.
i used the $i to ensure that if the case of value in query parameter is not lowerCase then it should convert it into lowercase
