const name = document.querySelector("#name");
const comment = document.querySelector("#comment");
const date = document.querySelector("#date");
const submitBtn = document.querySelector(".submitBtn");
const wrap = document.querySelector(".wrapper")


const renderComments = (newCommet) => {
    const {name, comment, date} = newCommet
    
    const commentsDiv = document.createElement("div");
    commentsDiv.classList.add('commentDiv')
    const postedBy = document.createElement("h3");
    postedBy.textContent = name
    const commentText = document.createElement("p");
    commentText.textContent = comment
    const commentDate = document.createElement("p");
    commentDate.textContent = date
    const btnLike = document.createElement("button");
    btnLike.textContent = "like"
    btnLike.addEventListener('click', ()=>{
        btnLike.classList.toggle('isLiked')
    })
    wrap.appendChild(commentsDiv)
    commentsDiv.appendChild(postedBy)
    commentsDiv.appendChild(commentText)
    commentsDiv.appendChild(commentDate)
    commentsDiv.appendChild(btnLike)

}



submitBtn.addEventListener("click", () => {
    if(name.value  === '' || comment.value === ''){
        return
    }
   let dateNow = `${new Date().toDateString()} ${new Date().toLocaleTimeString()} `
   if(date.value === ''){
   date.value =  `${new Date().toDateString()} ${new Date().toLocaleTimeString()} `
   }
   if(dateNow === date.value){
    date.value =  `Сегодня в ${new Date().toLocaleTimeString()}`
   }
  const newCommet = {
    name: name.value,
    comment: comment.value,
    date: date.value,
  };

 
  renderComments(newCommet)

  name.value = "",
  comment.value ="",
  date.value = ""
});


 
