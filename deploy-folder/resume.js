const slideInBoxes = document.querySelectorAll('.slide-in')
console.log(slideInBoxes);



function debounce(func, wait = 15, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if(!immediate) func,apply(context, args);
        }
        let callNow = immediate && !timeout;
        clearTimeout(timeout);

        timeout = setTimeout( later, wait);
        if(callNow) func.apply(context,args);

    }
}

function scrollPosition(e) {
    slideInBoxes.forEach(slideInBox => {
        
        const slideInAt = ((window.scrollY + window.innerHeight) -
        slideInBox.clientHeight /2);
        

        console.log(slideInAt);
        //bottom of the image

        const boxBottom = slideInBox.offsetTop + slideInBox.clientHeight;
        const isHalfShown = slideInAt > (slideInBox.offsetTop);
        const isNotScrolledPast = window.scrollY < boxBottom;

        if(isHalfShown && isNotScrolledPast) {
            slideInBox.classList.add('active');
        }
    })
}


// THE ABOVE CODE WAS LEARNED FROM WES BOS'S THIRTY DAYS OF JAVASCRIPT DAY 13/30


window.addEventListener('scroll', debounce(scrollPosition))