const data = new Date();
const hours = data.getHours();

const Hora = () => {
    if (hours >= 6 && hours < 11) {
        return 'morning'
    } else if (hours >= 11 && hours < 13) {
        return 'lunch';
    } else if (hours >= 13 && hours <= 16) {
        return 'evening';
    } else if (hours > 16 && hours <= 18) {
        return 'sunset';
    } else if (hours > 18 || hours <= 3) {
        return 'night';
    } else if (hours > 3 && hours < 6 ) {
        return 'dawn';
    }
};

export default Hora;