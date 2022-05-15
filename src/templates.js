function title(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
    `
}

function text(block) {
    return  `
    <div class="row">
         <div class="col-sm">
             <p>Lorem ipsum dolor sit amet consectetur, 
                 adipisicing elit. Aspernatur, consectetur.</p>
         </div>
     </div>
    `
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
    <div class="row">
       ${html.join('')}
    </div>
    `
}

function image(block) {
    return `
    <div class="row">
       <img src="${block.value}" />
    </div>
    `
}

export const templates = {
    title,
    text,
    image,
    columns
}