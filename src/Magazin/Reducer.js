import Magazin from './Magazin'

const Reductor = ( stare = Magazin, actiune) => {
        switch(actiune.type) {
            case 'azi': {   // marge si cu acolade si fara
                    return { ... stare, 
                    Comentarii : [ { nume : 'Indian', prenume: 'Rajab', profesie: 'vanator', venit: 10, gratis: false},
                                { nume : 'Rus', prenume: 'Indian', profesie: 'vanzator', venit: 40, gratis: true}],
                    Adaugiri: "sunt baieti de treaba"} 
                    } // marge si cu acolade si fara
            case 'ieri':    // marge si cu acolade si fara
                return { ... stare, 
                    Comentarii : [ { nume : 'Remus', prenume: 'Vlad', profesie: 'politician', venit: 65, gratis: false},
                                   { nume : 'Georgia', prenume: 'Maria', profesie: 'pantofar', venit: 33, gratis: false},
                                   { nume : 'Gabriel', prenume: 'Sofran', profesie: 'cantaret', venit: 120, gratis: false}]}
            default:
                return stare
        }
}

export default Reductor