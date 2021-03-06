
//FEEDBACK//

//Fecth feedback//

export const fetchFeedback = async () => {
        
        const response = await fetch("https://node-mysql-portfolio.herokuapp.com/feedback")
        const data = await response.json();
        return data;
    }

//add feedback

  export const addFeedback = async (newFeedback) => {
        const response = await fetch("https://node-mysql-portfolio.herokuapp.com/feedback", {
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
        
        const response = await fetch(`https://node-mysql-portfolio.herokuapp.com/feedback/${id}`, {
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
            await fetch(`https://node-mysql-portfolio.herokuapp.com/${id}`, { method: "DELETE"})
        } else {
            return null
        }
    }

//LIKES//

//fetch likes//
export const fetchLikes = async () => {
        
        const response = await fetch(`https://node-mysql-portfolio.herokuapp.com/portfolio/likes`)
        const data = await response.json();
        return data;
    }

//post likes//

export const addLike = async (info) => {

        const response = await fetch("https://node-mysql-portfolio.herokuapp.com/portfolio/likes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
            
        })
        
        const data = await response.json();
        return data;
    }

//REPLIES//

//get replies//
export const getReplies = async () => {
    const response = await fetch(`https://node-mysql-portfolio.herokuapp.com/portfolio/comments`)
        const data = await response.json();
        return data;
}

//post replies//
export const addReply = async (replyData) => {
    
        const response = await fetch("https://node-mysql-portfolio.herokuapp.com/portfolio/comments", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(replyData)
            
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


//OWNER//

export const isOwner = (myself) => {
    if(myself === 'myself'){
        return true
    } else {
        return false;
    }
}

//scroll//

export const scrollToComponent = () => {
    return true;
}


