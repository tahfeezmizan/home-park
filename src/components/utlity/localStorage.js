import { toast } from 'react-toastify';

// get read books data
const getStoredProperties = () => {
    const storedCard = localStorage.getItem('properties');
    if (storedCard) {
        return JSON.parse(storedCard);
    }
    return []
}

const saveProperties = propertiesId => {
    const storedPropertie = getStoredProperties();
    const isExist = storedPropertie.find(cardId => cardId === propertiesId);
    
    if (!isExist) {
        storedPropertie.push(propertiesId);
        localStorage.setItem('properties', JSON.stringify(storedPropertie));
        toast.success('Properties add on Wishlist')
    } else {
        toast.error('This properties already exists')
    }
};

export { getStoredProperties, saveProperties }