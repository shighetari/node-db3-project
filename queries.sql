-- Multi-Table Query Practice
--select * from product
--select * from Shippers
--select * from [Order]
--select * from OrderDetail
--select * from [Order].Id where [Order].Id = 10251
--select * from Employee
--select * from Customer


-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select product.ProductName, category.CategoryName
from Product
join category 
    on product.CategoryId = Category.Id


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select [Order].Id, Shipper.CompanyName
from [Order]
join Shipper
    on [Order].ShipVia = Shipper.Id
    where [Order].OrderDate<('2012-08-09')

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select product.ProductName, OrderDetail.Quantity, [Order].Id as Order_id
from OrderDetail
join Product
    on  Product.Id = OrderDetail.ProductId
join [Order]
    on [Order].Id = OrderDetail.OrderId
    where Order_Id = 10251
order by Product.ProductName 



-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select [Order].Id as 'Order ID ', Customer.CompanyName as 'Customers Company Name', Employee.LastName as 'Employees Last Name'
from [Order]
join Employee
    on Employee.Id = [Order].EmployeeId
    
Join Customer 
    on Customer.Id = [Order].CustomerId
    
