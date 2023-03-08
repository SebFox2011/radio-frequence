import React from "react";
import useToggle from '../Hooks/useToggle'
import { sortAndUniqueFromTab, filterDatas } from '../utils/utils.js'
import freq from '../assets/frequences.json'
import styles from './Selecteur.module.css'
import RelaisSendForm from "./RelaisSendForm";
import Modal from "./Modal";

const Selecteur = ({ setData }) => {
    const [isModalOpen, toggleIsModalOpen] = useToggle(false);
    const [departement, setDepartement] = React.useState("")
    const [mode, setMode] = React.useState("")
    const [fonction, setFonction] = React.useState("")
    const [type, setType] = React.useState("")
    const [bande, setBande] = React.useState('')
    const [station, setStation] = React.useState('')

    const handleDismiss = () => {
        console.log('Cloture modale')
        toggleIsModalOpen(false)
    }

    React.useEffect(() => {

        setData(filterDatas(freq, bande, departement, fonction, mode, type, station))
    }, [departement, mode, fonction, type, bande, station, setData])

    const resetFilterButton = () => {
        setDepartement("")
        setMode("")
        setFonction("")
        setType("")
        setBande('')
        setStation('')
    }
    return <section className={`${styles.section}`}>
        {isModalOpen && (
            <Modal
                title="Ajouter un nouveau relais"
                handleDismiss={handleDismiss}
            >
                <RelaisSendForm handleDismiss={handleDismiss} />
            </Modal>
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={toggleIsModalOpen} style={{ margin: '5px' }}>
                Ajouter un relais
            </button>
            <button onClick={resetFilterButton} style={{ margin: '5px' }} >
                Reset Filtres
            </button>
        </div>
        <form action="submit" style={{ display: 'flex', justifyContent: 'space-around' }} >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="dep">Department
                </label>
                <select  name="dep" id="dep" value={departement} onChange={(event) => setDepartement(event.target.value)}>
                    <option value="">Select dep</option>
                    {sortAndUniqueFromTab(freq, 'dep').map(v => <option key={v} >{v}</option>)}
                </select>
                <label htmlFor="fonction" >Fonction
                </label>
                <select  name="fonction" id="fonction" value={fonction} onChange={(event) => setFonction(event.target.value)}>
                    <option value="">Select fonction</option>
                    {sortAndUniqueFromTab(freq, 'fonction').map(v => <option key={v}>{v}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="bandes" >Bandes
                </label>
                <select  name="bandes" id="bandes" value={bande} onChange={(event) => setBande(event.target.value)} >
                    <option value="">Select bande</option>
                    {sortAndUniqueFromTab(freq, 'bande').map(v => <option key={v}>{v}</option>)}
                </select>

                <label htmlFor="mode" >Mode
                </label>
                <select  name="mode" id="mode" value={mode} onChange={(event) => setMode(event.target.value)}>
                    <option value="">Select mode</option>
                    {sortAndUniqueFromTab(freq, 'mode').map(v => <option key={v} >{v}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="type" >Type
                </label>
                <select  name="type" id="type" value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="">Select type</option>
                    {sortAndUniqueFromTab(freq, 'type').map(v => <option key={v} >{v}</option>)}
                </select>
                <label htmlFor="station" >Station
                </label>

                <select  name="station" id="station" value={station} onChange={(event) => setStation(event.target.value)}>
                    <option value="">Select station</option>
                    {sortAndUniqueFromTab(freq, 'station').map(v => <option key={v}>{v}</option>)}
                </select>
            </div>
        </form>
    </section >
}

export default Selecteur