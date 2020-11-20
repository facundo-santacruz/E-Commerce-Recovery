import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {  Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import {  makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import MercadoLibre from '../Styles/Imagenes/MercadoLibre.jpg'
import  style  from "../Styles/Containers/Nav.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "80px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    '&:hover': {
    fontColor: "black",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    backgroundColor: "white",
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [ search, setSearch ] = useState("")


 
  function handleChange(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      var boton = document.getElementById("boton");
      boton.click();
  }
    setSearch(e.target.value)
    
    
  }

  return (
    <div className={classes.root} >
      <AppBar style={{backgroundColor: "#fff159"}}>
        <Toolbar className={style.ToolBar}>
            <NavLink to={"/"}>
              <img src={MercadoLibre} alt="Imagen MercadoLibre" style={{    width: "70px",   height: "60px"}}></img>

            </NavLink>
            
          <div className={classes.search, style.Buscador}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={search}
              onChange={handleChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <NavLink to={`/products/${search}/0`}>
              <Button id="boton" variant="contained" color="primary">
                Search
              </Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
