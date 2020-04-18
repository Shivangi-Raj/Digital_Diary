console.log("in emogi .js");
const submitReview = (e) => {
    e.preventDefault();
    const review = document.getElementById('review').value;
    const options = {
      method: 'POST',
      body: JSON.stringify({ review }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    }
  
    const emojiSection = document.getElementById('emojiSection');
    // const title = document.getElementById('title');
    // const outline = document.querySelector(':focus');
  
    fetch('/api/nlp/s-analyzer', options)
      .then(res => res.json())
      .then (({ analysis }) => {
        if (analysis < 0) {
          emojiSection.innerHTML = '<img src="C:/Users/user/Desktop/cry_emogi.gif">';
        //   title.style.color = 'red';
        //   outline.style.borderColor = 'red';
        };
        if (analysis === 0) {
            emojiSection.innerHTML = '<img src="C:/Users/user/Desktop/cry_emogi.gif">';
        //   title.style.color = '#00367c';
        //   outline.style.borderColor = '#00367c';
        }
        if (analysis > 0) {
            emojiSection.innerHTML = '<img src="C:/Users/user/Desktop/cry_emogi.gif">';
        //   title.style.color = 'green';
        //   outline.style.borderColor = 'green'
        }
      })
      .catch(err => {
        emojiSection.innerHTML = 'There was an error processing your request!'
      })
  }
  
  document.getElementById('texta').addEventListener('blur', submitReview);
//   document.getElementById('reviewForm').addEventListener('submit', submitReview);