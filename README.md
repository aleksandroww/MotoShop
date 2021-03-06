# MotoShop

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle"> 
        <img width="450px" src="https://res.cloudinary.com/aleksandroww97/image/upload/v1597354223/home_jvt2jv.jpg" alt="Home" />
      </td>
       <td align="center" valign="middle"> 
        <img width="450px" src="https://res.cloudinary.com/aleksandroww97/image/upload/v1597354223/login_qfu8ad.jpg" alt="Login" />
      </td>
       <td align="center" valign="middle"> 
        <img width="450px" src="https://res.cloudinary.com/aleksandroww97/image/upload/v1597354223/register_ev4ysk.jpg" alt="Register" />
      </td>
       <td align="center" valign="middle"> 
        <img width="450px" src="https://res.cloudinary.com/aleksandroww97/image/upload/v1597354040/create_fh2xtp.jpg" alt="Create" />
      </td>
         <td align="center" valign="middle"> 
        <img width="450px" src="https://res.cloudinary.com/aleksandroww97/image/upload/v1597505366/search_mjvfkn.jpg" alt="Search results" />
      </td>
         <td align="center" valign="middle"> 
        <img width="450px" src="https://res.cloudinary.com/aleksandroww97/image/upload/v1597505366/bike_pgutyz.jpg" alt="Current bike" />
      </td>
  </tbody>
</table>

## Table of Contents

1. [Application Configurations](https://github.com/aleksandroww/MotoShop#application-configurations)
2. [Technology stack](https://github.com/aleksandroww/MotoShop#technology-stack)
3. [Routing](https://github.com/aleksandroww/MotoShop#routing)
4. [Data API](https://github.com/aleksandroww/MotoShop#data-api)

## Application Configurations

1. Type in the terminal the following in Client directory:

```bash
npm install
```

2. Type in the terminal the following in Client directory:

```bash
npm start
```

3. Enjoy it!

## Technology stack

- React.js
- Firebase

## List of all functionalities

1. Register
2. Login
3. Logout
4. Add Bike
5. Delete Bike
6. Search Bike

## Routing

| Route     | Description   |
| --------- | ------------- |
| /         | Home page     |
| /login    | Login page    |
| /register | Register page |
| /search   | Search page   |
| /create   | Create page   |
| /bike     | Bike page     |
| /bikes    | Bikes page    |

## DATA API

###### User

> - **email**: Email
> - **password**: Password

###### Bike

> - **type**: Type
> - **brand**: Brand
> - **model**: Model
> - **engine**: Engine Type
> - **power**: Power (hp)
> - **capacity**: Capacity (cp)
> - **year**: Year
> - **kilometers**: Kilometers
> - **price**: Price
> - **name**: Seller Name
> - **number**: Seller Number
> - **city**: City
> - **condition**: Condition (New or Used)
> - **image**: Bike Image (Firebase Cloud Storage)
> - **description**: Bike Description
