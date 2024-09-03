-- Add your code below and execute file in the PostgreSQL Shell --
SELECT 
    f.book_name AS name,
    b.price
FROM 
    book_prices  AS b
        JOIN favorite_books AS f
        ON b.id = f.id;

