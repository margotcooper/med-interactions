


const addRxHandler = async () => {

    const medication_name = document.getElementById('medication_name').dataset.value
    const route_of_medication = document.getElementById('route').dataset.value
    const adverse_effects = document.getElementById('adverseFx').dataset.value

    // let adverse_effects = test.replace(`"`, `'`)
    // const rxInfo = {medication_name, route_of_medication, adverse_effects}

    // console.log(rxInfo)
    if (medication_name && route_of_medication && adverse_effects) {
        const response = await fetch('/api/medication/', {
            method: "POST",
            body: JSON.stringify({
                medication_name,
                route_of_medication,
                adverse_effects
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })

        // const userMedicineResponse = await fetch('/api/medication/userMedication', {
        //     method: "POST",
        //     body: JSON.stringify({
        //         medication_name,
        //         route_of_medication,
        //         adverse_effects
        //     }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     },)


        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('error in submission!')
        }
    }


}




document.getElementById('addRxBt').addEventListener("click", addRxHandler)