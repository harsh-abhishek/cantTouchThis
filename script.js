var runAways = document.getElementsByClassName('runAways')
/* I am doing this as page closes if any sprite is clicked */
/* Need to use var as getElementsByClassName return a list of elements */

const happinessSprite = document.getElementById('happiness')

/* Since var returns a list iterating over the list */
for(let i = 0; i < runAways.length; i++) {
    runAways[i].addEventListener('click',() =>{
        alert('Well well well, Nice Try') /* Pop-up on the window */
        window.close() /* Closes the window */
    })
  }

/* Since we need to know the mouse CaretPosition,we need to listen to "document.add...." */
/* If we listen to one like happinessSprite we will not be able to get mouse position. We will only get mouse position while inside the sprite */
document.addEventListener('mousemove', (e) =>{
    const mouseX = e.pageX /* Gives the X Co-ordinates of the mouse */
    const mouseY = e.pageY /* Gives the X Co-ordinates of the mouse */
    /* console.log(mouseX, mouseY) */

    const happinessSpriteLocation = happinessSprite.getBoundingClientRect()
    // happinessSpriteLocation.x
})

/* 4:33 */