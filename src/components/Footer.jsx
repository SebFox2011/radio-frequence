import React from "react";
import { Heart } from 'react-feather'

const Footer = () => {
    return <>
        <p>Données extraites du site du
            {' '}
            <a href="https://www.r-e-f.org/index.php?option=com_content&view=article&id=1279">REF</a>
            {'. '}
            <a href="mailto:lazuryte35@gmail.com"> Pour toutes demandes</a>
        </p>
        <p >Fait avec <Heart style={{ color: 'red' }} /> par F4JRN et ReactJS</p>
        <h6>Ce site internet demande la localisation de l'utilisateur pour connaitre sa distance par rapport aux relais mais ne conserve aucune donnée conformément aux réglementations.</h6>
    </>
}

export default Footer