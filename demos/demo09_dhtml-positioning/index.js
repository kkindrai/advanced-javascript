const init = () => {
    "use strict";

    // 2. Create the element & assign its class value
    let sub = document.createElement("div");
    sub.setAttribute("class", "subheading");
    sub.innerHTML = "<hr>";

    // 3. Using .insertBefore to position the element as desired
    //      format: .insertBefore(newElementToAdd, oldElementToReference);
    //document.body.insertBefore(sub, document.querySelector(".content"));

    // 4. Deciding to remove an existing element (footer)
    //      .removeChild() (relative to parent element)
    //document.body.removeChild(document.querySelector(".footer"));

    // 6. Getting the content & footers's parents to fix .insertBefore and Remove
    //let contentParent = document.querySelector(".content").parentNode;
    //let footerParent = document.querySelector(".footer").parentNode;

    // 7. Redoing the before commands but with these new variables en lugar de `document.body`
    //contentParent.insertBefore(sub, document.querySelector(".content"));
    //footerParent.removeChild(document.querySelector(".footer"));


    // 8. REFACTORING
    //      Whenever we reference an element more than once, we want to 
    //      create a variable for it (.content & .footer)

    let contentElement = document.querySelector(".content");
    let footerElement = document.querySelector(".footer");

    // ... redoing the code again (getting parent elements)
    let contentParent = contentElement.parentNode;
    let footerParent = footerElement.parentNode;

    // ... inserting and removing
    contentParent.insertBefore(sub, contentElement);
    footerParent.removeChild(footerElement);


    // 9. Creating a new content element
    let newContent = document.createElement("p");
    newContent.setAttribute("class", "content");

    // ... creating explanation text for this assignment in the new <p> tag
    newContent.innerHTML = "By reviewing this *messy* documentation, we cover <strong>inserting, removing, and replacing elements</strong> within the doc using dynamic html."
    
    // 9.5. Replacing the old content element with this new one
    contentParent.replaceChild(newContent, contentElement);






}