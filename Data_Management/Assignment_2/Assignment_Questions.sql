######## MySQL Assignment (50 points) ########

## Please write down your name here: Hektor Dahlberg
## and your matriculation number here: 2201899

#### Question 1 (5 points) ####

## Please fetch the following columns from the "invoices" table:
##
##  - Invoice_Number        (The "invoice_number" column)
##  - Invoice_Total         (The "invoice_total" column)
##  - Payment_Credit_Total  ("payment_total" + "credit_total")
##  - Balance_Due           ("invoice_total" - "payment_total" - "credit_total")
##
## Please only return invoices that have a balance due that is greater than $50.
## Please also sort the result set by balance due in descending order and return only the rows with the 5 largest balance due.

SELECT invoice_number, invoice_total, (payment_total+ credit_total) as Payment_Credit_Total, (invoice_total-payment_total-credit_total) as Balance_Due 
FROM invoices
HAVING Balance_Due > 50
ORDER BY Balance_Due DESC
LIMIT 5;

#### Question 2 (5 points) ####

## Please identify all contact persons in the "vendors" table that satisfy the following criteria.
## Please return only the contact persons whose last name begins with the letter A, B, C or E.
## Please sort the result set by last name and then first name in ascending order.

SELECT  vendor_contact_last_name, vendor_contact_first_name
FROM vendors
WHERE vendor_contact_last_name LIKE 'A%' OR vendor_contact_last_name LIKE 'B%' OR vendor_contact_last_name LIKE 'C%' OR vendor_contact_last_name LIKE 'E%'
ORDER BY vendor_contact_last_name ASC, vendor_contact_first_name ASC;

#### Question 3 (5 points) ####

## Please identify, for each vendor, the invoices with a non-zero balance due.
##
## Please return the following columns in the result set:
##
##  - Vendor_Name     (The "vendor_name" column from the "vendors" table)
##  - Invoice_Number  (The "invoice_number" column from the "invoices" table)
##  - Invoice_Date    (The "invoice_date" column from the "invoices" table)
##  - Balance_Due     ("invoice_total" - "payment_total" - "credit_total")
##
## The result set should also be sorted by "vendor_name" in ascending order.
    
SELECT vendors.vendor_name, invoice_number, invoice_date, (invoice_total - payment_total - credit_total) as Balance_Due
FROM vendors
JOIN invoices  ON vendors.vendor_id = invoices.vendor_id
HAVING Balance_Due > 0
ORDER BY vendor_name ASC;
    
#### Question 4 (5 points) ####

## Please return one row for each vendor, which contains the following values:
##
##  - Vendor_Name  (The "vendor_name" column from the "vendors" table)
##  - The number of invoices (from the "invoices" table) for the vendor
##  - The sum of "invoice_total" (from the "invoices" table) for the vendor
##
## Please sort the result set such that the vendor with the most invoices appears first.

SELECT vendors.vendor_name, COUNT(invoice_number) as count_invoice, SUM(invoice_total) as sum_invoice
FROM vendors
JOIN invoices ON vendors.vendor_id = invoices.vendor_id
GROUP BY vendors.vendor_name
ORDER BY count_invoice DESC;

#### Question 5 (5 points) ####

## Please return one row for each general ledger account, which contains the following values:
##
##  - Account Number (The "account_number" column from the "general_ledger_accounts" table)
##  - Account Description  (The "account_description" column from the "general_ledger_accounts" table)
##  - The number of items in the "invoice_line_items" table that are related to the account
##  - The sum of "line_item_amount" of the account
##
## Please return only those accounts, whose sum of line item amount is great than $5,000.
## The result set should also be sorted by the sum of line item amount in descending order.

SELECT general_ledger_accounts.account_number, account_description,COUNT(invoice_id) as count_items, SUM(line_item_amount) as sum_items
FROM general_ledger_accounts
JOIN invoice_line_items ON general_ledger_accounts.account_number = invoice_line_items.account_number
GROUP BY general_ledger_accounts.account_number, general_ledger_accounts.account_description
HAVING sum_items > 5000
ORDER BY sum_items DESC;


#### Question 6 (5 points) ####

## Please identify all invoices, whose payment total is greater than the average payment total
## of all the invoices with a non-zero payment total.
##
## Please return the "invoice_number", "invoice_total", "payment_total" for each invoice satisfying the given criteria.
## Please also sort the result set by "invoice_total" in descending order.

SELECT invoice_number,invoice_total, payment_total 
FROM invoices
WHERE payment_total >(
SELECT AVG(payment_total)
FROM invoices
WHERE payment_total > 0
)
ORDER BY invoice_total DESC;    
    
#### Question 7 (15 points) ####

## Please identify the accounts (from the "general_ledger_accounts" table),
## which do not match any invoice line items in the "invoice_line_items" table.
##
## Please return the following two columns in the result set:
##
##  - "account_number" (from the "general_ledger_accounts" table)
##  - "account_description" (from the "general_ledger_accounts" table)
##
## Please also sort the result set by account number in ascending order.

## NOTE: You must present THREE different methods in your answer. Please write one query for each method used.

# Method 1 using NOT IN 
SELECT account_number, account_description
FROM general_ledger_accounts
WHERE account_number NOT IN (
    SELECT DISTINCT account_number
    FROM invoice_line_items
)
ORDER BY account_number ASC;

# method 2 left join
SELECT general_ledger_accounts.account_number, account_description
FROM general_ledger_accounts
LEFT JOIN invoice_line_items ON general_ledger_accounts.account_number = invoice_line_items.account_number
WHERE invoice_line_items.account_number IS NULL
ORDER BY account_number ASC;

# method 3 NOT EXISTS
SELECT account_number, account_description
FROM general_ledger_accounts
WHERE NOT EXISTS (
SELECT account_number
FROM invoice_line_items
where invoice_line_items.account_number= general_ledger_accounts.account_number
)
ORDER BY account_number ASC;


#### Question 8 (5 points) ####

## Please return one row per vendor, which represents the vendor's oldest invoice (the one with the earliest date).
## Note that each vendor's oldest invoice is unique.
##
## Each row returned should include the following values:
##
##  - "vendor_name"
##  - "invoice_number"
##  - "invoice_date"
##  - "invoice_total"
##
## Please sort the result set by "vendor_name" in ascending order.

SELECT vendors.vendor_name, invoice_number, invoice_date, invoice_total
FROM vendors 
JOIN invoices ON vendors.vendor_id = invoices.vendor_id
WHERE invoice_date = (
  SELECT MIN(invoice_date)
  FROM invoices
  WHERE vendor_id = vendors.vendor_id
)
ORDER BY vendors.vendor_name ASC;