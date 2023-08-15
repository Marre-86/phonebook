import axios from 'axios';

const baseUrl = 'https://phonebook-back-production.up.railway.app/api/contacts/';

export const getContacts = () => axios
  .get(baseUrl)
  .then((res) => res.data)
  .catch((error) => {
    console.log(error);
    return [];
  });

export const addContact = async (contactToAdd) => {
  try {
    const response = await axios.post(
      baseUrl,
      contactToAdd,
    );
    console.log('Contact added:', response.data);
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const updateContact = async (contactId, dataToUpdate) => {
  try {
    const response = await axios.put(
      `${baseUrl}${contactId}`,
      dataToUpdate,
    );
    console.log('Contact updated:', response.data);
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    await axios.delete(
      `${baseUrl}${contactId}`,
    );
    console.log('Contact deleted!');
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};
