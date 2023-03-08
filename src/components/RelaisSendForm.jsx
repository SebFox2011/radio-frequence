import React from 'react';
import styles from './RelaisSendForm.module.css';
import Capchat from './Capcha';

function RelaisSendForm({ handleDismiss }) {
    console.log('render RelaisSendForm')
    const [departement, setDepartement] = React.useState("")
    const [emission, setEmission] = React.useState("")
    const [commune, setCommune] = React.useState("")
    const [reception, setReception] = React.useState("")
    const [bande, setBande] = React.useState('')
    const [station, setStation] = React.useState('')
    const [activeButton, setButton] = React.useState(true)
    const [textArea] = React.useState('')


    const id = React.useId();

    const body = `
        Bonjour Sébastien,\nVoici les informations pour enregistrer un nouveau relais:
        Département : ${departement}
        Commune: ${commune}
        Station: ${station}
        Emission: ${emission}
        Reception: ${reception}


        Merci de prendre en ces informations.
        PS: ${textArea}
    `

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Login function called')
        handleDismiss()
    }

    return (<form className={styles.wrapper} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <label htmlFor={`dep-${id}`}>
                        Département
                    </label>
                    <input
                        type="number"
                        id={`dep-${id}`}
                        value={departement}
                        onChange={(event) => {
                            setDepartement(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor={`commune-${id}`}>
                        Commune
                    </label>
                    <input
                        type="text"
                        id={`commune-${id}`}
                        value={commune}
                        onChange={(event) => {
                            setCommune(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor={`station-${id}`}>
                        Station
                    </label>
                    <input
                        type="text"
                        id={`station-${id}`}
                        value={station}
                        onChange={(event) => {
                            setStation(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>
                    <label htmlFor={`emission-${id}`}>
                        émission
                    </label>
                    <input
                        type="number"
                        id={`emission-${id}`}
                        value={emission}
                        onChange={(event) => {
                            setEmission(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor={`reception-${id}`}>
                        réception
                    </label>
                    <input
                        type="number"
                        id={`reception-${id}`}
                        value={reception}
                        onChange={(event) => {
                            setReception(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor={`bande-${id}`}>
                        Bande
                    </label>
                    <input
                        type="text"
                        id={`bande-${id}`}
                        value={bande}
                        onChange={(event) => {
                            setBande(event.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
        <Capchat setButton={setButton} />


        {activeButton ? <span>Remplir le captcha pour envoyer !</span> : <button onClick={handleDismiss}> <a href={`mailto:lazuryte35@gmail.com?subject=Ajout d'un relais&body=${body}`} >Click to Send an Email</a> </button>}

    </form>
    );
}

export default React.memo(RelaisSendForm);