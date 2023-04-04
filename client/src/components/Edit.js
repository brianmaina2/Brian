import React, { useState, } from 'react'

function Edit({ t }) {
    const [transaction_type, setTransaction_type] = useState(t.transaction_type)
    const [amount, setAmount] = useState(t.amount)
    const [hideForm, setHideForm] = useState(false)
    const [notification, setNotification] = useState(false)

    function handleEdit(e) {
        e.preventDefault()
        fetch(`transactions/${t.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction_type, amount })

        })
            .then(resp => resp.json())
            .then(data => console.log(data))
        setNotification(true)
        setTimeout(() => window.location.reload(), 1500)
    }

    return (
        <div>
            <button onClick={() => setHideForm(!hideForm)}>Edit</button>
            {hideForm &&
                <form onSubmit={handleEdit}>

                    <input value={transaction_type} onChange={(e) => setTransaction_type(e.target.value)} />
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <button>Send</button>
                    {notification && <div>Transaction Updated Succesfully</div>}
                </form>
            }
        </div>
    )
}

export default Edit