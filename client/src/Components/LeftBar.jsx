import React from 'react';
import CategoriesList from '../Containers/CategoriesList'
// import { bindActionCreators } from 'redux';
import  style  from "../Styles/Components/LeftBar.module.css";
import { Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useState } from 'react';



export  function PermanentDrawerLeft({txt, search, filter,  products }) {
  const [ condition ] = useState([{id: "new", name: "Nuevo"}, {id: "used", name: "Usado"}])
  // console.log(filter)

  var { filters, available_filters } = products

  return (
    
    <div className={style.Contenedor}>
      {!filters ? null : 
        filters.map((item, i)=> {
          return (
            <div key={`${item.id}${i}`}>
              <span style={{fontSize: "bold black 2px"}}>{item.name}: </span>
              <span>{item.values[0].name}</span>
              <button> X </button>
            </div>
  
          )
        })
      }

      
        
        {/* <h3>Buscar por Condición</h3>
            {condition.map((text, index) => {
              return (
                <Link to={`/${txt}/${search}/condition=${text.id}/0`} className={style.listarCategorias} >
                  <label className={style.list}>{text.name}</label>      
                </Link> 
              )
            })} */}


        {/* </div> */}
        
        {available_filters.map((text, index) => (
          <CategoriesList filterValues={text} type={txt} products={products}/>

          ))}
        
      {/* </div> */}
    </div>
  )


      
  //   <div className={style.ContenedorPrincipal}>
      
  //     <CssBaseline />
      
  //     <Drawer className={style.ContenedorPrincipal}
  //       variant="permanent"
  //       anchor="left"
  //     >
  //       <div />
        
  //       <List>
  //         <h3>Buscar por Precio</h3>
  //         {filter.map((text, index) => (
  //           <NavLink to={`/products/${search}/order=${text.id}/${0}`}>

  //             <ListItem button key={text} 
  //             // onClick={changeProducts(text.id)}
  //             >
  //               <ListItemIcon>{index % 2 === 0 ? <ArrowUpward /> : <ArrowDownward />}</ListItemIcon>
  //               <ListItemText primary=
  //               // {<a href={`/products/${search}/${text.id}/${0}`}>
  //                 {text.name}
  //                 // </a>} 
  //                 />
  //             </ListItem>
              
  //           </NavLink> 
  //         ))}
  //       </List>
      
  //       <List>
      
  //         <h3>Buscar por Condición</h3>
  //         {condition.map((text, index) => (
  //           <NavLink to={`/products/${search}/condition=${text.id}/${0}`}>

  //             <ListItem button key={text}  >
  //               <ListItemText primary=
  //               // {<a href={`/products/${search}/${text.id}/${0}`}>
  //                 {text.name}
  //                 // </a>} 
  //                 />
  //             </ListItem>
              
  //           </NavLink> 
  //         ))}
  //       </List>
  //       <List>
      
  //         <h3>Categorias</h3>
  //         {filters.map((text, index) => (
  //           <NavLink to={`/products/${search}/condition=${text.id}/${0}`}>

  //             <ListItem button key={text} 
  //             // onClick={changeProductsCondition(text.id)}
  //             >
  //               {/* <ListItemIcon>{index % 2 === 0 ? <ArrowUpward /> : <ArrowDownward />}</ListItemIcon> */}
  //               <ListItemText primary=
  //               // {<a href={`/products/${search}/${text.id}/${0}`}>
  //                 {text.name}
  //                 // </a>} 
  //                 />
  //             </ListItem>
              
  //           </NavLink> 
  //         ))}
  //       </List>
  //     </Drawer>
  //     <main className={classes.content}>
  //       <div className={classes.toolbar} />
        
  //     </main>
  //   </div>
  // );
}

