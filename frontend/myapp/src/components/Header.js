import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';
import './Header.css';

const Header=()=>{
    return(
        <div className="ui fixed menu header-container">
            <div className="ui container center">
                <SemanticHeader as="h1" className="header-title">
                    Credmarg Application
                </SemanticHeader>
            </div>
        </div>
    )
}

export default Header;