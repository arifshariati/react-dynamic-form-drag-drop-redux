import validate from "validate.js";
import { propertiesCons, AddFormCons } from '../constraints';

const validator = {
    propertiesConsValidator:(fields) => {
        return validate.async({...fields}, propertiesCons, { fullMessage: false});
    },
    addFormConsValidator:(fields) => {
        return validate.async({...fields}, AddFormCons, {fullMessage: false});
    }
}

export default validator;
// const propertiesConsValidator = (fields) => {
//     return validate.async({...fields}, propertiesCons, { fullMessage: false});
// };

// const addFormConsValidator = (fields) => {
//     return validate.async({...fields}, AddFormCons, {fullMessage: false});
// };

// export default {
//     propertiesConsValidator,
//     addFormConsValidator
// };