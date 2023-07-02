const Gnbs = {
    hide_all_header_layers(){
        const layers = document.querySelectorAll(".header_layer");
        if(!layers) return;
        if(layers.length < 1) return;
        layers.forEach( layer => layer.style.display = 'none' );
    },
}

export default Gnbs;