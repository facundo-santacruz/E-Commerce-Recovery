import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';
import { bindActionCreators } from 'redux';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'absolute',
    
  // },
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  // // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3),
  // },

}));

export  function PermanentDrawerLeft({search, filter, price, filters }) {
  const classes = useStyles();
  const [ condition ] = useState([{id: "new", name: "Nuevo"}, {id: "used", name: "Usado"}])
  console.log(filter)



  return (
    <div className={classes.root} >
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        
        <List>
          <h3>Buscar por Precio</h3>
          {filter.map((text, index) => (
            <NavLink to={`/products/${search}/order=${text.id}/${0}`}>

              <ListItem button key={text} 
              // onClick={changeProducts(text.id)}
              >
                <ListItemIcon>{index % 2 === 0 ? <ArrowUpward /> : <ArrowDownward />}</ListItemIcon>
                <ListItemText primary=
                // {<a href={`/products/${search}/${text.id}/${0}`}>
                  {text.name}
                  // </a>} 
                  />
              </ListItem>
              
            </NavLink> 
          ))}
        </List>
      
        <List>
      
          <h3>Buscar por Condición</h3>
          {condition.map((text, index) => (
            <NavLink to={`/products/${search}/condition=${text.id}/${0}`}>

              <ListItem button key={text} 
              // onClick={changeProductsCondition(text.id)}
              >
                {/* <ListItemIcon>{index % 2 === 0 ? <ArrowUpward /> : <ArrowDownward />}</ListItemIcon> */}
                <ListItemText primary=
                // {<a href={`/products/${search}/${text.id}/${0}`}>
                  {text.name}
                  // </a>} 
                  />
              </ListItem>
              
            </NavLink> 
          ))}
        </List>
        <List>
      
          <h3>Categorias</h3>
          {filters.map((text, index) => (
            <NavLink to={`/products/${search}/condition=${text.id}/${0}`}>

              <ListItem button key={text} 
              // onClick={changeProductsCondition(text.id)}
              >
                {/* <ListItemIcon>{index % 2 === 0 ? <ArrowUpward /> : <ArrowDownward />}</ListItemIcon> */}
                <ListItemText primary=
                // {<a href={`/products/${search}/${text.id}/${0}`}>
                  {text.name}
                  // </a>} 
                  />
              </ListItem>
              
            </NavLink> 
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}

