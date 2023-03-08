import React from "react";

const Capchat = ({ setButton }) => {
    const [input, setInput] = React.useState('')

    const capchaTab = React.useMemo(() => {
        const a = Math.ceil(Math.random() * 100)
        const b = Math.ceil(Math.random() * 100)
        const result = a * b
        return { a, b, result }

    }, [])
    console.log(process.env.REACT_APP_API_URL)
    React.useEffect(() => {
        if (input === capchaTab.result.toString())
            setButton(false)
    }, [setButton, input, capchaTab])

    return <>
        <span>{`Captcha : Recopier le résultat de ${capchaTab.a} multiplié par ${capchaTab.b} `}</span>
        <input type="number" value={input} onChange={(event) => setInput(event.target.value)} />
    </>

}

export default React.memo(Capchat)