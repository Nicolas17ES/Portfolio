//Fecth feedback//

export const fetchFeedback = async () => {
        
        const response = await fetch("/feedback")
        const data = await response.json();
        return data;
    }

//add feedback

  export const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
            
        })
        console.log(newFeedback)
        const data = await response.json();
        return data;
    }

    //Edit the item that has been set
    export const updateFeedback = async (id, updatedItem) => {
        console.log(id)
        
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)

        })
        const data = await response.json();
        return data;
    }
    

//delete feeedback

export const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`/feedback/${id}`, { method: "DELETE"})
        }
    }


// NEXT QUESTION IN FEEDBACK//

export const nextQuestion = (questionCount) => {
    let count = 1;
    return questionCount += count
}

//PREVIOUS QUESTION IN FEEDBACK

export const previousQuestion = (questionCount) => {
    let count = 1;
    return questionCount -= count
}

