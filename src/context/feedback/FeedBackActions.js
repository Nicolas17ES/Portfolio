
//FEEDBACK//

//Fecth feedback//

export const fetchFeedback = async () => {
        
        const response = await fetch("http://localhost:3001/feedback")
        const data = await response.json();
        return data;
    }

//add feedback

  export const addFeedback = async (newFeedback) => {
        const response = await fetch("http://localhost:3001/feedback", {
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
        console.log(id)
        
        const response = await fetch(`http://localhost:3001/feedback/${id}`, {
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
            await fetch(`http://localhost:3001/feedback/${id}`, { method: "DELETE"})
        } else {
            return null
        }
    }

//LIKES//

//fetch likes//
export const fetchLikes = async () => {
        
        const response = await fetch(`http://localhost:3001/likes`)
        const data = await response.json();
        return data;
    }

//post likes//

export const addLike = async (info) => {
    console.log(info)
        const response = await fetch("http://localhost:3001/likes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
            
        })
        
        const data = await response.json();
        return data;
    }


//QUESTIONS//

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

