const Commons = {
    toggle_gnb_layer (id, callback){
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;
        const status = target.style.display=='none' ? 'block' : 'none';
        if (callback) callback();
        target.style.display = status;
    },
}

export default Commons;