export const updateMetaTags = (title, description) => {
    document.title = title;
    updateDescription(description);
  };
  
  export const updateTitle = (title) => {
    document.title = title;
  };
  
  export const updateDescription = (description) => {
    let metaDescription = document.querySelector("meta[name='description']");
    
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute("content", description);
  };
  