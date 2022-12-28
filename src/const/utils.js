const Fn = {
    validaRut: function(rutCompleto) {
        if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
            return false;
        const tmp = rutCompleto.split('-');
        let digv = tmp[1];
        let rut = tmp[0];
        if (digv === 'K') digv = 'k';
        return (Fn.dv(rut) === digv);
    },
    dv: function(T) {
        let M = 0,
            S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? (S - 1).toString() : 'k';
    }
}

export default Fn;