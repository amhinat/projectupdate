 const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  const surveyform =document.getElementById("surveyform");
  const loadingMessage =document.getElementById("loadingMessage");

  surveyform.addEventListener("Submit", function(event)  { 

    event.preventDefault();
    showloading();

    setTimeout(() =>{
      hideloading()
      alert("message submitted successfully!")
      surveyform.reset()
    }, 2000);
  });
  function showloading(){
    surveyform.style.display = "none";
    loadingMessage.style.display = "block";
  }

  function hideloading(){
    loadingMessage.style.display = "none";
    surveyform.style.display = "block";
  }