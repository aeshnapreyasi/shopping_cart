# Shopping Cart #

## Trying to build a shopping cart using bootstrap and react.js ##

# 1. Introduction
### This documentation provides an overview of a shopping cart application built using Bootstrap and React. In this project, I have implemented a user-friendly interface and functional cart features.###

* Project setup *
### 1. React Installation
First we need to set up a new React Project. To create a new react application we have to use
`npx create-react-app shopping-cart`
<br>
<br>
`cd shoppingCart`
<br>
`npm start`
###

## Bootstrap ##

### To use bootstrap ###
`npm install bootstrap@5.3.3`


##Step - 1: ##
<br>
## For Navigation ##
```<nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
```


## used this code and covert it using html to jsx converter ##

## added product details in  ** ProductList.jsx **  file ##
<br>
<br>

** Purpose : **
## This component is responsible for displaying a list of Products dynamically. It takes
in a list of products and renders them using the Product component. ##

** Props : **
<br>
### 1.products: An array of product objects that contains the product data. It the products prop is not an array, it displays
an error message. ##
<br>

 2.IncrementQuantity: A fucntion passed as a prop that allows the user to increase the quantity of a product in the cart. 
<br>

 3. decrementQuantity: A function passed as a prop that allows the user to decrease the quantity of a product in the cart. ###
<br>

** Logic: **
<br>
### 1.The component first checks if the products prop is an array. If not, an error message is displayed.
<br>
2. if the products array is valid, it maps through the list of products and renders a Product component for each item.
<br>
3.Each Product component receives the product, IncrementQuantity, and decrementQuantity props. ###

** Renderig **
### 1. The component iterates through the  products array and passes each products's data (along with quantity control fucntions) 
to the Product component.
<br>
2. The key prop is provided for each product to ensure optimal rendering and avoided warnings from React. ###

## Added product details in  ** Product.jsx **  file ##

### Product Component Description: ###

### ** Purpose: ** This component is responsible for displaing individual product details, including the name, price, quantity, and a quantity control 
feature (increment and decrement). 
<br>
<br>

** Pros: **
<br> 
1. ** Product: ** Contains the product details such as id, name, price, and quantity.
<br>
2. ** IncrementQuantity: ** A fucntion passed as prop that increses the quantity of the product whent the "+" button is clicked.
<br>
3. ** decrementQuantity: ** A fucntion passed as a prop that decreses the quantity of the product wheb the "-" button is clicked.
<br>
<br>

** UI: **
1. utilizes a btn-group to manage the quantity control.
<br>
2. Displays the product quantity with the quantity value and allows updatig via buttons. ###

















