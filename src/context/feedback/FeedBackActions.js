//Fecth feedback//

export const fetchFeedback = async () => {
        
        const response = await fetch("/feedback?_sort=id&_order=desc")
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
        const data = await response.json();
        return data;
    }

    //Edit the item that has been set
    export const updateFeedback = async (id, updatedItem) => {
        
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

