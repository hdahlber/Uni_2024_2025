## Developer Information
- **Name**: Hektor Dahlberg (41685)
- **Email**: hektor.dahlberg@abo.fi


## Implemented requirements:


### Mandatory:
- [ ] Project folder

- [ ] Backend
- [ ] Frontend
- [ ] Automatic DB population
- [ ] Browse
- [ ] Login
- [ ] Add item
- [ ] Add to cart
### Optional:
- [ ] Search
- [ ] Remove from the car
- [ ] Pay
- [ ] Routing
- [ ] Edit Account
- [ ] Display inventory
- [ ] Edit item
- [ ] User friendly
## How to run the project
Create virtual env in backend
```
python -m venv webtechenv
```
Activate venv in backend folder
```
webtechenv\Scripts\activate
```
Install requirements
```
pip install -r requirements.txt
```
migrate the db
```
python backend/manage.py migrate
```
run server
```
python manage.py runserver
```