import React from 'react';

const Layout = (props) => {

    return (
        <div style={{ display:'flex',  margin: '1px' }}>
            <article>{props.children}</article>
            <button>Boton Prueba(Proximamente)</button>
        </div>
    );
};

export default Layout;
